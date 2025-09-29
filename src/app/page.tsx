"use client"

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { gsap, Power3 } from "gsap";
import { useLayoutEffect } from "react";
import { CVIcon, ExpressJsIcon, GithubIcon, LinkedInIcon, MailIcon, NextJsIcon, TypescriptIcon } from "../components/icons";
import { siteConfig } from "@/config/site";
import MapValoImg from './img/MapValoRandomizerImage.png'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

	const searchParams = useSearchParams()
	const toastParams = searchParams.get('toast')
	let tl = gsap.timeline();

	useLayoutEffect(() => {
		tl.from(".animateTitle", {
			duration: 0.75,
			y: 100,
			autoAlpha: 0,
			ease: Power3.easeOut,
			stagger: 0.5
		}).from(".animateMenu", {
			duration: 0.75,
			x: 200,
			autoAlpha: 0,
			ease: "elastic.out(1, 1)",
			stagger: {
				each: 0.75,
				amount: 0.5
			}
		}, "+=0.25");

		if (toastParams == "true") {
			toast.success('Mail envoyé, Je reviendrai vers vous dans les plus bref délai. Merci!')
		}
		if (toastParams == "false") {
			toast.error('Une erreur est survenue, veuillez réessayer ultérieurement.')
		}
	}, [toastParams, tl])


	return (

		<section className="flex flex-col h-full">
			<div className="h-2/5 p-5 flex gap-3 flex-col justify-center items-center">
				<h1 className="animateTitle text-center text-5xl lg:text-9xl">Vigneron Luc</h1>
				<br />
				<h1 className="animateTitle text-center text-3xl">
					Je suis un <span className="text-red-400">développeur fullstack</span>,
					spécialisé en <span className="text-yellow-400">javascript</span>.
				</h1>
			</div>
			<ul className="flex flex-col lg:flex-row h-max">
				<li className="animateMenu h-full w-full flex justify-center my-3">
					<Card className="w-5/6">
						<CardHeader className="justify-center">
							<h2 className="text-center text-3xl">À propos</h2>
						</CardHeader>
						<CardBody>
							<p>
								Développeur passionné par l&apos;informatique que ça soit Hardware ou Software
								ainsi que réveur du monde de demain !
								<br /><br />
								Je suis dans ce monde informatique depuis l&apos;âge de 8ans où j&apos;ai également découvert
								mes 2 autres passions qui sont les jeux vidéo ainsi que la culture asiatique.
							</p>
						</CardBody>
						<CardFooter>
							<Link className="w-full" href={'/abouts'}>
								<Button fullWidth color="secondary">Plus d&apos;information</Button>
							</Link>
						</CardFooter>
					</Card>
				</li>
				<li className="animateMenu h-full w-full flex justify-center my-3">
					<Card className="w-5/6">
						<CardHeader className="justify-center">
							<h2 className="text-center text-3xl">Compétences</h2>
						</CardHeader>
						<CardBody className="flex flex-row flex-wrap justify-around gap-4 items-center">
							<a target="_blank" className="transition ease-in-out delay-100 flex justify-center basis-1/3 hover:scale-125" href={siteConfig.externalSite.nextjs}><NextJsIcon size={70} /></a>
							<a target="_blank" className="transition ease-in-out delay-100 flex justify-center basis-1/3 hover:scale-125" href={siteConfig.externalSite.expressjs}><ExpressJsIcon size={70} /></a>
							<a target="_blank" className="transition ease-in-out delay-100 flex justify-center basis-1/3 hover:scale-125" href={siteConfig.externalSite.github}><GithubIcon size={70} /></a>
							<a target="_blank" className="transition ease-in-out delay-100 flex justify-center basis-1/3 hover:scale-125" href={siteConfig.externalSite.typescript}><TypescriptIcon size={70} /></a>
						</CardBody>
						<CardFooter>
							<Link className="w-full" href={'/skills'}>
								<Button fullWidth color="secondary">Voir plus..</Button>
							</Link>
						</CardFooter>
					</Card>
				</li>
				<li className="animateMenu h-full w-full flex justify-center my-3">
					<Card className="w-5/6">
						<CardHeader className="justify-center">
							<h2 className="text-center text-3xl">Dernier projet</h2>
						</CardHeader>
						<CardBody className="flex items-center justify-center">
							<Card
								radius="lg"
								className="border-none py-2"
							>
								<CardHeader>
									<h2 className="w-full text-center">{siteConfig.projects[siteConfig.projects.length-1].name}</h2>
								</CardHeader>
								<CardBody className="flex items-center">
									<Image
										className="object-cover"
										height={350}
										width={250}
										src={siteConfig.projects[siteConfig.projects.length-1].image}
										alt="Aperçu du site"
									/>
								</CardBody>
								<CardFooter className="flex justify-around">
									<Link target="_" href={siteConfig.projects[siteConfig.projects.length-1].linkDemo as string}>
										<Button variant="flat" color="success" radius="lg" size="sm">
											Lien
										</Button>
									</Link>
									<Link target="_" href={siteConfig.projects[siteConfig.projects.length-1].linkCode}>
										<Button variant="flat" color="warning" radius="lg" size="sm">
											Code
										</Button>
									</Link>
								</CardFooter>
							</Card>

						</CardBody>
						<CardFooter>
							<Link className="w-full" href={'/projects'}>
								<Button fullWidth color="secondary">Mes projets</Button>
							</Link>
						</CardFooter>
					</Card>
				</li>
				<li className="animateMenu h-full w-full flex justify-center my-3">
					<Card className="w-5/6">
						<CardHeader className="justify-center">
							<h2 className="text-center text-3xl">Contact</h2>
						</CardHeader>
						<CardBody className="flex items-center justify-around gap-5">
							<a target='_' className="w-4/5 h-2/6" href={'https://www.linkedin.com/in/vigneronluc/'}>
								<Button className="h-full" fullWidth color="primary"><LinkedInIcon size={50} /></Button>
							</a>
							<a className="w-4/5 h-2/6" href="mailto:vigneronlucweb@gmail.com">
								<Button className="h-full bg-emerald-600" fullWidth><MailIcon size={50} /></Button>
							</a>
							<a className="w-4/5 h-2/6" href={'/VigneronLuc.pdf'} download="CV Vigneron Luc.pdf">
								<Button fullWidth className="h-full bg-teal-500"><CVIcon size={50} /></Button>
							</a>
						</CardBody>
						<CardFooter>
							<Link className="w-full" href={'/contact'}>
								<Button fullWidth color="secondary">Formulaire</Button>
							</Link>
						</CardFooter>
					</Card>
				</li>
			</ul >
		</section >
	);
}
