import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://dsyroiryipsuyjeruqvw.supabase.co'
const supabaseKey = 'sb_publishable_o3r5S_8eRD9-jBEEhx1gwQ_jJf3j29P'

export const supabase = createClient(supabaseUrl, supabaseKey)
