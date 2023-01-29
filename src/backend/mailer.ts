import Mailjet, { SendEmailV3_1 } from "node-mailjet"
import type { MessageRequest } from "../pages/api/message"
import type { BookingRequest } from "../pages/api/book"

export const send_message_email = async (message_request: MessageRequest) => {
	const public_key = import.meta.env.MAILJET_PUBLIC_KEY as string
	const private_key = import.meta.env.MAILJET_PRIVATE_KEY as string
	const mailjet = new Mailjet({apiKey: public_key, apiSecret: private_key})
	
	const email_data: SendEmailV3_1.Body = {
	    Messages: [
	      {
		From: {
		  Email: 'starlightstudio@starlightstudiony.com',
		},
		To: [
		  {
		    Email: 'petejedmonds@gmail.com',
		  },
		  {
		    Email: 'starlightstudiony@gmail.com',
		  },
		],
		TemplateLanguage: true,
		TemplateErrorReporting: {
		  Email: 'petejedmonds@gmail.com',
		  Name: 'Reporter',
		},
		Subject: 'You have a new customer message.',
		HTMLPart: `
		<body>
			<h1>You have a new message:</h1>
			<ul>

			<li>Customer Name: ${message_request.name}</li>
			<li>Customer Email: ${message_request.email}</li>
			<li>Customer Phone: ${message_request.phone}</li>

			</ul>
			<p>
			${message_request.message}
						</p>

		</body>
		`,
		TextPart: 'Dear passenger, welcome to Mailjet! May the delivery force be with you!',
	      },
	    ],
	}
	await mailjet
          .post('send', { version: 'v3.1' })
	  .request(email_data)
}

export const send_booking_email = async (booking_request: BookingRequest) => {
	const public_key = import.meta.env.MAILJET_PUBLIC_KEY as string
	const private_key = import.meta.env.MAILJET_PRIVATE_KEY as string
	const mailjet = new Mailjet({apiKey: public_key, apiSecret: private_key})
	
	const email_data: SendEmailV3_1.Body = {
	    Messages: [
	      {
		From: {
		  Email: 'starlightstudio@starlightstudiony.com',
		},
		To: [
		  {
		    Email: 'petejedmonds@gmail.com',
		  },
		],
		TemplateLanguage: true,
		TemplateErrorReporting: {
		  Email: 'petejedmonds@gmail.com',
		  Name: 'Reporter',
		},
		Subject: 'You have a new booking request.',
		HTMLPart: `
		<body>
			<h1>You have a new booking request:</h1>
			<ul>

			<li>Customer Name: ${booking_request.name}</li>
			<li>Customer Email: ${booking_request.email}</li>

			<li>Address: ${booking_request.address}</li>
			<li>City: ${booking_request.city}</li>
			<li>State: ${booking_request.state}</li>

			<li>Event Type: ${booking_request.type}</li>
			<li>Event Date: ${booking_request.date}</li>
			<li>Event Time: ${booking_request.time}</li>

			<li>Requested Package: ${booking_request.package}</li>
			<li>Requested Characters: ${booking_request.characters}</li>

			</ul>

		</body>
		`,
		TextPart: 'Dear passenger, welcome to Mailjet! May the delivery force be with you!',
	      },
	    ],
	}
	await mailjet
          .post('send', { version: 'v3.1' })
	  .request(email_data)
}
