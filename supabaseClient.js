import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'ТВОЙ_URL';
const supabaseAnonKey = 'ТВОЙ_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
