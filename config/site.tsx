import { CssIcon, ExpressJsIcon, GitIcon, GithubIcon, HtmlIcon, JavascriptIcon, MongoDbIcon, NextJsIcon, NodeJsIcon, PostgresIcon, PostmanIcon, TypescriptIcon } from "@/src/components/icons";


import MapValoImg from '../src/app/img/MapValoRandomizerImage.png'
import TeamValoImg from '../src/app/img/TeamValoRandom.png'
import MemeLoverImg from '../src/app/img/MemeLoverImg.png'
import MeteoAppImg from '../src/app/img/MeteoCDAImg.png'
import BattleShip from '../src/app/img/BattleShip.png'
import CoiffeurOnePage from '../src/app/img/CoiffeurOnePage.png'


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
			name : "BattleShip",
			image : BattleShip,
			date : "2021",
			linkDemo : "http://battleship.vigneronluc.com/",
			linkCode : "https://github.com/SakouDev/BattleShip",
		},
		{
			name : "Meteo App",
			image : MeteoAppImg,
			date : "2022",
			linkDemo : false,
			linkCode : "https://github.com/SakouDev/MeteoCDA",
		},
		{
			name : "Meme Lover",
			image : MemeLoverImg,
			date : "2023",
			linkDemo : false,
			linkCode : "https://github.com/SakouDev/MemeLover",
		},
		{
			name : "Valorant Team Randomizer",
			image : TeamValoImg,
			date : "2024",
			linkDemo : "https://valorant-team-randomizer.vercel.app",
			linkCode : "https://github.com/SakouDev/ValorantTeamRandomizer",
		},
		{
			name : "Valorant Map Randomizer",
			image : MapValoImg,
			date : "2024",
			linkDemo : "https://valorant-map-randomizer.netlify.app",
			linkCode : "https://github.com/SakouDev/MapValorantRandomizer",
		},
		{
			name : "Coiffeur One Page",
			image : CoiffeurOnePage,
			date : "2025",
			linkDemo : "https://coiffeur.vigneronluc.com/",
			linkCode : "https://github.com/SakouDev/Coiffeur-One-Page",
		},
	]
};
