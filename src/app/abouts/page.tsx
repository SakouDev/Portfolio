import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar'
import React from 'react'

export default function page() {
  return (
    <section className='h-full flex flex-col items-center lg:flex-row gap-5'>
      <div className='px-12 lg:px-0 h-full w-full '>
        <h1 className="text-center my-10 text-4xl underline decoration-purple-500">A propos</h1>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
          <Card className='p-5 lg:w-4/5 '>
            <CardBody className='gap-5'>
              <div className='md:flex gap-5 items-center'>
                <Avatar className='w-full mb-3 md:my-0 md:basis-2/6 lg:basis-1/6 h-fit' isBordered radius="sm" src="https://media.licdn.com/dms/image/D4E03AQH9vO1_KbpiNA/profile-displayphoto-shrink_800_800/0/1673440011073?e=1707350400&v=beta&t=yifX_3qTUg66NERLY6_ghbLvy7_myu3clte1pbOYmpY" />
                <div className='basis-5/6 flex flex-col gap-5'>
                  <p className='text-2xl'>
                    Bonjour ! Je m&apos;appelle Luc Vigneron, concepteur développeur d&apos;application junior.
                  </p>
                  <p className='text-xl'>
                    Comme vous avez pu le lire je suis passionné par l&apos;informatique dans son ensemble
                    depuis mon plus jeune âge et c&apos;est justement à cet âge que je suis tombé amoureux du metier de developpeur.
                  </p>
                </div>
              </div>
              <p className='text-xl'>
                Je n&apos;ai jamais eu d&apos;autres options dans ma vie pour ce qui est de mon plan professionnel. Je suis parti dans le seul
                BAC qui était à ma disposition pour être au plus proche de l&apos;informatique, puis dans un BTS qui pour le coup était réellement
                dans le developpement informatique. J&apos;y ai alors découvert le web et su directement que je souhaitais
                en faire mon avenir !
              </p>
              <p className='text-xl'>
                J&apos;ai passé ces 2 dernières années à me former avec SIMPLON.CO ainsi les entreprises qui ont accepté de me
                donner leurs confiance pour devenir un développeur web éfficace et autonome. Pendant mon apprentissage je me suis aussi découvert une affinité avec la Stack &quot;MERN&quot; bien que
                ma formation reposait en SQL niveau base de données.
              </p>
              <p className='text-xl'>
                Aujourd&apos;hui je suis à la recherche de nouvelle aventure équipé de mon sac à dos pleins d&apos;idées pour m&apos;épanouir dans ce métier
                qui me plait tant.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}
