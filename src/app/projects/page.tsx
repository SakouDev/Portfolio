"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect } from "react";

import { gsap, Power3 } from "gsap";

import erp1 from "../img/erp/erp1.png";
import erp2 from "../img/erp/erp2.png";
import erp3 from "../img/erp/erp3.png";
import erp4 from "../img/erp/erp4.png";
import erp5 from "../img/erp/erp5.png";
import erp6 from "../img/erp/erp6.png";
import erp7 from "../img/erp/erp7.png";
import erp8 from "../img/erp/erp8.png";
import erp9 from "../img/erp/erp9.png";
import erp10 from "../img/erp/erp10.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";

export default function Projects() {
  let tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.from(
      ".animateMenu",
      {
        duration: 0.75,

        autoAlpha: 0,
        ease: Power3.easeOut,
        stagger: {
          each: 0.75,
          amount: 0.15,
        },
      },
      "+=0.25"
    );
  }, [tl]);

  return (
    <div>
      <h1 className="text-center my-10 text-4xl underline decoration-purple-500">
        Projects
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-10 animateMenu">
        <Card className="w-5/6">
          <CardHeader>
            <h2 className="w-full text-2xl text-center">
              ERP de Gestion des Ressources
            </h2>
          </CardHeader>
          <CardBody>
            <div className="flex md:flex-row flex-col">
              <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">🔐</span>
                    <span>
                      Authentification sécurisée avec gestion des rôles.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">📅</span>
                    <span>
                      Gestion des salles avec agenda et réservations planifiées.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">📦</span>
                    <span>
                      Gestion du matériel : emprunt immédiat, réservations,
                      retours.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">🧪</span>
                    <span>
                      Documentation (Swagger) et tests unitaires (Jest).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">⚙️</span>
                    <span>
                      Architecture modulaire (controller / service /
                      repository).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">🎨</span>
                    <span>Front-end en Electron + React avec MUI.</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center items-center">
                <Swiper
                  modules={[Pagination, Navigation]}
                  loop
                  autoplay={{ delay: 30, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation
                  grabCursor
                  centeredSlides
                  slidesPerView={"auto"}
                  speed={600}
                  slideToClickedSlide
                >
                  {[
                    erp1,
                    erp2,
                    erp3,
                    erp4,
                    erp5,
                    erp6,
                    erp7,
                    erp8,
                    erp9,
                    erp10,
                  ].map((img, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                      <Image
                        className="object-contain"
                        src={img}
                        alt={`Aperçu du site ${index + 1}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <p className="mt-4 italic text-sm text-gray-500 flex justify-center items-center">
              Démo indisponible (projet externe).
            </p>
          </CardBody>
          <CardFooter className="flex justify-around mb-2">
            <Link target="_" href="https://github.com/SakouDev/DSU-Desktop">
              <Button variant="flat" color="warning" radius="lg" size="sm">
                Code Desktop
              </Button>
            </Link>
            <Link target="_" href="https://github.com/SakouDev/DSU-Mobile">
              <Button variant="flat" color="warning" radius="lg" size="sm">
                Code Mobile
              </Button>
            </Link>
            <Link target="_" href="https://github.com/SakouDev/DSU-Back">
              <Button variant="flat" color="warning" radius="lg" size="sm">
                Code Back
              </Button>
            </Link>
          </CardFooter>
        </Card>
        {siteConfig.projects
          .slice(0)
          .reverse()
          .map((project, i) => (
            <Card
              radius="lg"
              className="basis-1/4 border-none"
              key={i}
            >
              <CardHeader>
                <h2 className="w-full text-xl text-center">{project.name}</h2>
              </CardHeader>
              <CardBody className="flex items-center">
                <Image
                  className="object-contain max-h-36"
                  height={350}
                  width={250}
                  src={project.image}
                  alt="Aperçu du site"
                />
              </CardBody>
              <CardFooter className="flex justify-around mb-2">
                {project.linkDemo == false ? (
                  <Button
                    isDisabled
                    variant="flat"
                    color="success"
                    radius="lg"
                    size="sm"
                  >
                    Lien
                  </Button>
                ) : (
                  <Link target="_" href={project.linkDemo as string}>
                    <Button
                      variant="flat"
                      color="success"
                      radius="lg"
                      size="sm"
                    >
                      Lien
                    </Button>
                  </Link>
                )}

                <p className="text-center font-extralight text-gray-500">
                  {project.date}
                </p>

                <Link target="_" href={project.linkCode}>
                  <Button variant="flat" color="warning" radius="lg" size="sm">
                    Code
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
