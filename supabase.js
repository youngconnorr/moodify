import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vdiydhyqlfxnjkpgldpl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkaXlkaHlxbGZ4bmprcGdsZHBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNDIzOTYsImV4cCI6MjA1MjgxODM5Nn0.cGAQLfFgrxQqeHUn986YFOQuocSWNymq8UY6dHiF92s";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
