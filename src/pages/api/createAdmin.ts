import { supabaseAdmin } from "@backend/supabase";

export const post = async () => {
    await supabaseAdmin.auth.admin.createUser({
      email: "starlightstudiony@gmail.com",
      password: "starlight",
      email_confirm: true,
    })
};
