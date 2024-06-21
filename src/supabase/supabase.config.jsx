import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tnpqzufzdzjbdfopptck.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRucHF6dWZ6ZHpqYmRmb3BwdGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwNTUwNzQsImV4cCI6MjAzMzYzMTA3NH0.3Yy53ySAgCca968Eby4DNNXgvEx42wSOptZclcJBQbc'

export const supabase = createClient(supabaseUrl, supabaseKey)
