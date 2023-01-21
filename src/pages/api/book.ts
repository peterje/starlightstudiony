import type { APIContext } from 'astro';
import {characters} from "../book.astro"

type BookingRequest = {
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
export const post = async ({ request }: APIContext) => {
	const data = await request.formData(); // Here's the data sent by the form
	const booking: BookingRequest = {
		name: data.get('name') as string,
		email: data.get('email') as string,
		address: data.get('address') as string,
		city: data.get('state') as string,
		type: data.get('event-type') as string,
		date: data.get('date') as string,
		time: data.get('time') as string,
		package: data.get('package') as string,
		characters: characters.map(c => c.name.toLowerCase()).filter(name => data.get(name) === 'on') as string[]
	}
	return new Response(JSON.stringify(request), {
		status: 200,
	});
}

