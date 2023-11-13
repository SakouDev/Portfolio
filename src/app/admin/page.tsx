import React from 'react'
import { Card, CardBody } from "@nextui-org/card";
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

export default function Admin() {
	return (
		<main className="container h-screen mx-auto max-w-7xl flex-grow">
			<section className="h-full flex flex-col items-center justify-center">
				<Card className='h-2/3 w-2/4 border-2 border-blue-500 flex flex-col items-center justify-center'>
					<CardBody className='flex flex-col justify-center item-center'>
						<h1 className='w-full text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Admin Dashboard</h1>
					</CardBody>
					<CardBody className='w-full lg:px-12 flex flex-col justify-around'>
						<Input type="email" label="Email" />
						<Input type="password" label="Password" />
					</CardBody>
					<CardBody className='flex flex-col lg:flex-row justify-around'>
						<Button className='lg:basis-full lg:mx-10' color='danger'>Retour</Button>
						<Button className='lg:basis-full lg:mx-10' color='success'>Connexion</Button>
					</CardBody>
				</Card>
			</section>
		</main>
	);
}