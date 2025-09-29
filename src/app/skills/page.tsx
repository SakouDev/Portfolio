"use client"

import { siteConfig } from '@/config/site'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import React, { useLayoutEffect } from 'react'
import { gsap, Power3 } from "gsap";

export default function Skills() {
    let tl = gsap.timeline();
    useLayoutEffect(() => {
        tl.from(".animateMenu", {
            duration: 0.75,

            autoAlpha: 0,
            ease: Power3.easeOut,
            stagger: {
                each: 0.75,
                amount: 0.5
            }   
        }, "+=0.25");
    }, [tl])
    return (
        <section className='h-full flex flex-col items-center lg:flex-row gap-5'>
            <div className='px-12 lg:px-0 h-full w-full'>
                <h2 className="text-center my-10 text-4xl underline decoration-purple-500">Compétences</h2>
                <div className='flex flex-row flex-wrap justify-around gap-5'>
                    {siteConfig.skillsConfig.map((skill, i) => (
                        <Card className='basis-3/4 md:basis-2/5 lg:basis-1/4 animateMenu' radius="lg" key={i}>
                            <CardHeader>
                                <h2 className='w-full text-center text-xl'>{skill.name}</h2>
                            </CardHeader>
                            <CardBody className='flex items-center'>
                                {skill.icon}
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
