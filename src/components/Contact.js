// src/components/Contact.js

import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import ReCAPTCHA from "react-google-recaptcha"

require("dotenv").config()

export default function Contact() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [subject, setSubject] = useState("")
	const [message, setMessage] = useState("")
	const [captchaValue, setCaptchaValue] = useState("")

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === 'name') {
			setName(value)
		} else if (name === 'email') {
			setEmail(value)
		} else if (name === 'subject') {
			setSubject(value)
		} else if (name === 'message') {
			setMessage(value)
		}
	}

	const handleCaptchaChange = (value) => {
		setCaptchaValue(value);
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!captchaValue) {
			alert('Please complete the CAPTCHA.');
			return
		}

		try {
			// Send email using EmailJS
			await emailjs.send(
				process.env.REACT_APP_EMAIL_SERVICE_ID,
				process.env.REACT_APP_EMAIL_TEMPLATE_ID,
				{
					name,
					email,
					subject,
					message
				},
				process.env.REACT_APP_EMAIL_KEY
			)
			alert('Email sent successfully!!')
			window.location.reload()
		} catch (error) {
			console.error('Email sending failed:', error);
			alert('Email sending failed. Please try again later.');
		}
	}

	return (
		<section id="contact" className="relative">
			<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
					<iframe
						width="100%"
						height="100%"
						title="map"
						className="absolute inset-0"
						style={{ filter: "opacity(0.7)" }}
						src="https://www.google.com/maps/embed/v1/place?q=Bengaluru,+Karnataka,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
					/>
					<div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
						<div className="lg:w-1/2 px-6">
							<h2 className="title-font font-semibold text-white tracking-widest text-xs">
								CITY
							</h2>
							<p className="mt-1">
								Bangalore, Karnataka
							</p>
						</div>
						<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-white tracking-widest text-xs">
								EMAIL
							</h2>
							<button className="text-indigo-400 leading-relaxed">
								adithya608@gmail.com
							</button>
						</div>
					</div>
				</div>
				<form
					name="contact-form"
					onSubmit={handleSubmit}
					className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
					<h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
						Contact me
					</h2>
					<p className="leading-relaxed mb-5">
						Hit me up if you want to discuss any collaborative work opportunities or even for just a normal conversation.
					</p>
					<div className="relative mb-4">
						<label htmlFor="name" className="leading-7 text-sm text-gray-400">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							onChange={handleChange}
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-400">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							onChange={handleChange}
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="subject" className="leading-7 text-sm text-gray-400">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={subject}
							onChange={handleChange}
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-gray-400">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={message}
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							onChange={handleChange}
						/>
					</div>
					<ReCAPTCHA
						sitekey={process.env.REACT_APP_SITE_KEY}
						onChange={handleCaptchaChange}
					/>
					<button
						type="submit"
						className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
						Submit
					</button>
				</form>
			</div>
		</section>
	)
}