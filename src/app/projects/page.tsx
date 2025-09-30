"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect } from "react";

import { gsap, Power3 } from "gsap";

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
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-10">
        <Card>
          <CardHeader>
            <h2 className="w-full text-2xl text-center">ERP de Gestion des Ressources</h2>
          </CardHeader>
          <CardBody>
            <p className="text-center text-lg">
              Développement d’un ERP desktop (Electron + React) connecté à une API Node.js/Express (TypeScript, PostgreSQL).
            </p>
            <ul className="list-disc list-inside">
              <li>Authentification avec gestion des rôles.</li>
              <li>Gestion des associations étudiantes.</li>
              <li>Gestion des salles avec réservations planifiées et affichage d’agenda.</li>
              <li>Gestion du matériel : emprunt immédiat, réservations à l’avance, vérification de disponibilité, historique et retours.</li>
              <li>Documentation et tests API (Swagger, Jest)</li>
              <li>Architecture modulaire (controller / service / repository), tests unitaires (Jest).</li>
            </ul>
          </CardBody>
        </Card>
        {siteConfig.projects
          .slice(0)
          .reverse()
          .map((project, i) => (
            <Card
              radius="lg"
              className="basis-1/4 border-none " //animateMenu
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
