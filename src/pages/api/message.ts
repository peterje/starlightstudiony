import type { APIContext } from 'astro';
import { send_message_email } from "../../backend/mailer"

export type MessageRequest = {
	name: string,
	email: string,
	phone: string,
	message: string
}

export const post = async ({ request, redirect }: APIContext) => {
	const data = await request.formData();
	const message = {
		name: data.get('full-name') as string,
		email: data.get('email') as string,
		phone: data.get('phone') as string,
		message: data.get('message') as string,
	} satisfies MessageRequest
	try {
		await send_message_email(message)
		return redirect('/contact?success=true');
	} catch (error) {
		return new Response("Failed to create message", { status: 500 })
	}
}

