import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vmmhvciyxfbwytuvztug.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbWh2Y2l5eGZid3l0dXV6dHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzg2NzAsImV4cCI6MjA2NjkxNDY3MH0._pu1smjtNkE7i_-mSX6NCkwSa_dwAWsNsqkoBsI6R74";

// Server-side Supabase client without browser-specific features
export const supabaseServer = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  }
});