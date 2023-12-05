import { Button } from '@nextui-org/button'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Input, Textarea } from '@nextui-org/input'
import { MailIcon, UserIcon } from '@/src/components/icons'
import { Resend } from 'resend';
import * as dotenv from 'dotenv'
import { redirect, useRouter } from 'next/navigation'
import { NextResponse } from 'next/server';
import { headers } from "next/dist/client/components/headers";

dotenv.config()

const handleSubmit = async (formData: any) => {
    "use server"

    let result = false

    const resend = new Resend(process.env.MAIL_API_KEY);
    await resend.emails.send({
        from: `contact@vigneronluc.com`,
        to: 'vigneronlucweb@gmail.com',
        subject: `Contact par ${formData.get('name')}`,
        html: `<div>
            <h3>Email de recontact: ${formData.get("email")}</h3>
            <br />
            <h1>${formData.get("name")}</h1>
            <br />
            <p>${formData.get("message")}</p>
            <br />
            <br />
            <p>Message envoyé par le formulaire de contact sur le site vigneronluc.com</p>
        </div > `
    })
        .catch(() => result = false)
        .finally(() => result = true)


    redirect(`/?toast=${result}`)
}

export default function Contact() {

    return (
        <section className='h-full flex flex-col flex-wrap items-center lg:flex-row gap-5'>
            <div className='px-12 lg:px-0 h-full w-full'>
                <h2 className='w-full text-center my-10 text-4xl underline decoration-purple-500'>Contact</h2>
                <div className='h-5/6 flex justify-center items-center'>

                    <div className='h-4/5 w-full flex flex-row flex-wrap justify-around gap-5'>
                        <Card className='basis-6/7 md:basis-2/3 animateMenu' radius="lg">
                            <CardHeader>
                            </CardHeader>
                            <CardBody className='flex items-center'>
                                <form action={handleSubmit} className='w-full h-full flex flex-row flex-wrap gap-5 items-center justify-center my-5'>
                                    <Input
                                        className='basis-6/7 md:basis-2/3'
                                        isRequired
                                        name='name'
                                        type="name"
                                        label="Nom"
                                        size='lg'
                                        placeholder="Nom"
                                        labelPlacement="outside"
                                        startContent={
                                            <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                    <Input
                                        className='basis-6/7 md:basis-2/3'
                                        isRequired
                                        name='email'
                                        type="email"
                                        label="Email"
                                        size='lg'
                                        placeholder="email@example.com"
                                        labelPlacement="outside"
                                        startContent={
                                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                    <Textarea
                                        isRequired
                                        minRows={5}
                                        name='message'
                                        label="Message"
                                        labelPlacement="outside"
                                        placeholder="Votre message"
                                        className="basis-6/7 md:basis-2/3"
                                    />
                                    <div className='w-full flex justify-center'>
                                        <Button
                                            type='submit'
                                            className="basis-1/3"
                                        >
                                            Envoyer
                                        </Button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
