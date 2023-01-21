import type { APIContext } from 'astro';
import { characters } from "../../backend/data"
import { send_booking_email } from "../../backend/mailer"

export type BookingRequest = {
	name: string,
	email: string,
	address: string,
	city: string,
	state: string,
	type: string,
	date: string,
	time: string,
	package: string,
	characters: string[]
}
export const post = async ({ request, redirect }: APIContext) => {
	const data = await request.formData();
	const booking: BookingRequest = {
		name: data.get('name') as string,
		email: data.get('email') as string,
		address: data.get('address') as string,
		city: data.get('city') as string,
		state: data.get('state') as string,
		type: data.get('event-type') as string,
		date: data.get('date') as string,
		time: data.get('time') as string,
		package: data.get('package') as string,
		characters: characters.map(c => c.name.toLowerCase()).filter(name => data.get(name) === 'on') as string[]
	}
	try {
		await send_booking_email(booking)
		return redirect('/book?success=true');
	} catch (error) {
		return new Response("Failed to create booking", { status: 500 })
	}
}

