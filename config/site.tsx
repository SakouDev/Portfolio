import { CssIcon, ExpressJsIcon, GitIcon, GithubIcon, HtmlIcon, JavascriptIcon, MongoDbIcon, NextJsIcon, NodeJsIcon, PostgresIcon, PostmanIcon, TypescriptIcon } from "@/src/components/icons";


import MapValoImg from '../src/app/img/MapValoRandomizerImage.png'
import TeamValoImg from '../src/app/img/TeamValoRandom.png'
import MemeLoverImg from '../src/app/img/MemeLoverImg.png'
import MeteoAppImg from '../src/app/img/MeteoCDAImg.png'
import CreditCardFlipImg from '../src/app/img/CreditCardFlipImg.png'
import FirstCVImg from '../src/app/img/FirstCVImg.png'


export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Vigneron Luc",
	description: "Developper Web, Portfolio.",
	navItems: [
		{
			label: "À propos",
			href: "/abouts",
		},
		{
			label: "Compétences",
			href: "/skills",
		},
		{
			label: "Portfolio",
			href: "/projects",
		},
		{
			label: "Contact",
			href: "/contact",
		},
	],
	links: {
		github: "https://github.com/SakouDev",
		linkedIn: "https://www.linkedin.com/in/vigneronluc/",
	},
	externalSite: {
		github: "https://github.com",
		nextjs: "https://nextjs.org",
		expressjs: "https://expressjs.com",
		typescript: "https://www.typescriptlang.org"
	},
	skillsConfig: [
		{
			name: "HTML",
			icon: <HtmlIcon size={75} />
		},
		{
			name: "CSS",
			icon: <CssIcon size={75} />
		},
		{
			name: "JavaScript",
			icon: <JavascriptIcon size={75} />
		},
		{
			name: "TypeScript",
			icon: <TypescriptIcon size={75} />
		},
		{
			name: "Next.JS",
			icon: <NextJsIcon size={75} />
		},
		{
			name: "ExpressJS",
			icon: <ExpressJsIcon size={75} />
		},
		{
			name: "NodeJs",
			icon: <NodeJsIcon size={75} />
		},
		{
			name: "Github",
			icon: <GithubIcon size={75} />
		},
		{
			name: "Git",
			icon: <GitIcon size={75} />
		},
		{
			name: "Postman",
			icon: <PostmanIcon size={75} />
		},
		{
			name: "MongoDB",
			icon: <MongoDbIcon size={75} />
		},
		{
			name: "Postgres",
			icon: <PostgresIcon size={75} />
		},
	],
	projects : [
		{
			name : "Premier CV",
			image : FirstCVImg,
			linkDemo : "https://vigneronluc.netlify.app",
			linkCode : "https://github.com/SakouDev/CV-Simplon",
		},
		{
			name : "Credit Card Flip",
			image : CreditCardFlipImg,
			linkDemo : "https://lv-creditcard.netlify.app",
			linkCode : "https://github.com/SakouDev/CreditCard-JS",
		},
		{
			name : "Meteo App",
			image : MeteoAppImg,
			linkDemo : false,
			linkCode : "https://github.com/SakouDev/MeteoCDA",
		},
		{
			name : "Meme Lover",
			image : MemeLoverImg,
			linkDemo : false,
			linkCode : "https://github.com/SakouDev/MemeLover",
		},
		{
			name : "Valorant Team Randomizer",
			image : TeamValoImg,
			linkDemo : "https://valorant-team-randomizer.vercel.app",
			linkCode : "https://github.com/SakouDev/ValorantTeamRandomizer",
		},
		{
			name : "Valorant Map Randomizer",
			image : MapValoImg,
			linkDemo : "https://valorant-map-randomizer.netlify.app",
			linkCode : "https://github.com/SakouDev/MapValorantRandomizer",
		},
	]
};
