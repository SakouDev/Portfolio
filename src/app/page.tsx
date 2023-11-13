import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";
import { Card, CardBody } from "@nextui-org/card";

export default function Home() {
	return (
		<>
			<main className="hidden lg:block bg-red-300	 w-screen h-screen mx-auto">
				<div className="h-full flex items-center justify-center">
					<section className="basis-1/2 h-1/2 bg-blue-200">
						<h1>I am a web developper.</h1>
					</section>
					<section className="basis-1/2 h-1/2 bg-blue-800">

					</section>
				</div>
			</main>
			<main className="hidden sm:block lg:hidden bg-red-600 w-screen h-screen mx-auto">
				<div className="h-full flex items-center justify-center">
					<section className="basis-full h-1/2 flex justify-center items-center bg-blue-200">
						<Card className="basis-1/2 h-1/2">
							<CardBody>
								<h1>I am a web developper.</h1>
							</CardBody>
						</Card>
					</section>
					<section className="basis-full h-1/2 flex justify-center items-center bg-blue-800">
						<Card className="basis-1/2 h-1/2">
							<CardBody>
								<h2>I make something for the web.</h2>
							</CardBody>
						</Card>
					</section>
				</div>
			</main>
			<main className="sm:hidden bg-red-900 w-screen h-screen mx-auto">
				<div className="h-full flex flex-col items-center justify-center">
					<section className="basis-full bg-blue-200">
						<h1>I am a web developper.</h1>
					</section>
					<section className="basis-full bg-blue-800">
						<h2>I make something for the web.</h2>
					</section>
				</div>
			</main>
		</>
	);
}
