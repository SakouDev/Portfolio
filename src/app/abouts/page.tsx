"use client";
import { Card, CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import React, { useLayoutEffect } from "react";
import { gsap, Power3 } from "gsap";

export default function Page() {
  let tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.from(".animateMenu", {
      duration: 0.75,
      autoAlpha: 0,
      ease: Power3.easeOut,
      stagger: {
        each: 0.75,
        amount: 0.5,
      },
    }, "+=0.25");
  }, [tl]);
  return (
    <section className="h-full flex flex-col items-center lg:flex-row gap-5">
      <div className="px-12 lg:px-0 h-full w-full ">
        <h1 className="text-center my-10 text-4xl underline decoration-purple-500">
          À propos
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <Card className="p-5 lg:w-4/5 animateMenu">
            <CardBody className="gap-5">
              <div className="md:flex gap-5 items-center">
                <Avatar
                  className="w-full mb-3 md:my-0 md:basis-1/6 h-fit"
                  isBordered
                  radius="sm"
                  src="/Selfie.png"
                />
                <div className="basis-5/6 flex flex-col gap-5">
                  <p className="text-2xl font-semibold">
                    Bonjour ! Je m&apos;appelle Luc Vigneron, concepteur développeur
                    d&apos;applications.
                  </p>
                  <p className="text-xl">
                    Passionné d&apos;informatique depuis mon plus jeune âge, j&apos;ai
                    toujours su que je voulais en faire mon métier. C&apos;est en
                    découvrant le développement que je suis tombé amoureux de
                    cette discipline.
                  </p>
                </div>
              </div>

              <p className="text-xl">
                J&apos;ai suivi un parcours scolaire orienté vers l&apos;informatique,
                d&apos;abord avec un BAC adapté, puis un BTS spécialisé en
                développement. C&apos;est à ce moment que j&apos;ai découvert le web et
                décidé d&apos;en faire mon avenir professionnel.
              </p>

              <p className="text-xl">
                Durant les deux dernières années, j&apos;ai suivi une formation avec{" "}
                <b>SIMPLON.CO</b> et travaillé avec des entreprises qui m&apos;ont
                fait confiance pour devenir un développeur web efficace et
                autonome. J&apos;ai également découvert une affinité avec la stack{" "}
                <b>MERN</b>, tout en consolidant mes compétences en <b>SQL</b>{" "}
                pour la gestion de bases de données.
              </p>

              <p className="text-xl">
                Aujourd&apos;hui, je suis à la recherche de nouvelles opportunités
                pour mettre à profit ma passion du développement et contribuer à
                des projets ambitieux.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
