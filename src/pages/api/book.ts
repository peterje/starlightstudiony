import type { APIContext } from "astro";
import { characters } from "../../backend/data";
import { send_booking_email } from "../../backend/mailer";
import { supabaseAdmin } from "@backend/supabase";
import { z } from "zod";

export type BookingRequest = {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  type: string;
  date: string;
  time: string;
  package: string;
  characters: string[];
};

export const post = async ({ request, redirect }: APIContext) => {
  const request_data = await request.formData();
  const booking_schema = z.object({
    name: z.string(),
    email: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    type: z.string(),
    date: z.string(),
    time: z.string(),
    package: z.string(),
    characters: z.array(z.string()),
  });
  const booking_request = booking_schema.parse({
    name: request_data.get("name"),
    email: request_data.get("email"),
    address: request_data.get("address"),
    city: request_data.get("city"),
    state: request_data.get("state"),
    type: request_data.get("event-type"),
    date: request_data.get("date"),
    time: request_data.get("time"),
    package: request_data.get("package"),
    characters: characters
      .map((c) => c.name.toLowerCase())
      .filter((name) => request_data.get(name) === "on"),
  });
  // Fix for postgres date format

  try {
    const { data, error } = await supabaseAdmin
      .from("bookings")
      .insert([booking_request]);
    console.error(data);
    console.error(error);
    await send_booking_email(booking_request);
    return redirect("/book?success=true");
  } catch (error) {
    console.log(error);
    return new Response("Failed to create booking", { status: 500 });
  }
};
