import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [authProvider, setAuthProvider] = useState(null);
  const [data, setData] = useState([])

  const MAX_ITEM = 20;
  const MIN_ITEM = 1;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) throw new Error("A ocurrido un error durante la autenticación");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function singnInWithEmail(formData) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error

      return data

    } catch (error) {
      alert(error)
    }
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error("A ocurrido un error durante el cierre de sesión");

    if (!error) {
      setUser(null)
      setAuthProvider(null)
    }
      
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session === null) {
        // navigate("/login")
        setCart([])
      } else {
        setUser(session?.user.user_metadata)
        setAuthProvider(session?.user.app_metadata)
        // navigate("/")
        // console.log("data del usuario", session.user.user_metadata)
      }
    })
    return () => {
      authListener.subscription;
    }
  }, []);

  function addToCart(item) {
    const itemExists = cart.findIndex((product) => product.id === item.id)
    if (itemExists >= 0) {
      const updateCart = [...cart]
      setCart(updateCart)

      updateCart[itemExists].quantity++
      setCart(updateCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }
  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id))
  }

  function decreaseQuantity(id) {
    const updateCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEM) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updateCart)
  }

  function increaseQuantity(id) {
    const updateCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEM) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updateCart)
  }

  function clearCart() {
    setCart([])
  }

  const cartTotal = () => cart.reduce((total, item) => total + (item.quantity * item.price), 0);

  const amountTotal = useMemo(() => cart?.reduce((sum, product) => sum + product.quantity, 0));




  return (
    <AuthContext.Provider value={{ signInWithGoogle, signout, user, cart, setCart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, cartTotal, amountTotal, singnInWithEmail, authProvider }}>
      {children}
    </AuthContext.Provider>
  )

};

export const useAuth = () => {
  return useContext(AuthContext);
}