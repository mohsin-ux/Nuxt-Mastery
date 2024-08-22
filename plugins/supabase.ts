
import {createClient} from '@supabase/supabase-js'
export default defineNuxtPlugin((nuxtapp) => {
    const { supabaseKey, supabaseUrl } = useRuntimeConfig().public;
    const supabase = createClient(supabaseUrl as string, supabaseKey as string);
    return {
        provide: {
            supabase
        }
    }
})  




