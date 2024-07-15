import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://imxkxwqdtnvmbyevaxaz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteGt4d3FkdG52bWJ5ZXZheGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3MTE1ODMsImV4cCI6MjAzNTI4NzU4M30.p2nuAUq-17cP3QUmvmeqdFU24B4YjClXuigNIu8wa0Q");


export default supabase