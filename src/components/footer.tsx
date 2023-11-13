import { Link } from '@nextui-org/link'
import React from 'react'

export default function Footer() {
	return (
		<footer className="w-full flex items-center justify-center py-3">
			<span className="text-default-600">Vigneron</span>
			<Link
				isExternal
				className="flex items-center gap-1 text-current"
				href="/admin"
				title="Admin"
			>
				&nbsp;-&nbsp;
			</Link>
			<p className="text-primary">Luc</p>
		</footer>
	)
}
