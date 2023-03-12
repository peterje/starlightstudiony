import type { APIContext } from "astro";
import { characters } from "../../backend/data";
import { supabaseAdmin } from "@backend/supabase";


export const post = async () => {
    await supabaseAdmin.auth.admin.createUser({
      email: "starlightstudiony@gmail.com",
      password: "starlight",
    })
};
