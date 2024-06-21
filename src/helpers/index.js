export function formatCurrency(amount) {
  return new Intl.NumberFormat('es-CO',{
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace(/\s+/g, '');
};