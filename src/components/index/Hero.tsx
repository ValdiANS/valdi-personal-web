'use client';

import { motion } from 'framer-motion';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Link } from '@nextui-org/link';

import { TypeAnimation } from 'react-type-animation';

import heroContent from '@/content/index/hero.json';

const Hero = () => {
  return (
    <section
      id='hero'
      className='w-full min-h-[calc(100dvh-4rem)] grid place-items-center'
    >
      <div className='w-full flex flex-col gap-y-16 sm:gap-y-32'>
        <motion.div
          initial={false}
          animate={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className='text-center mt-8 sm:m-0'
        >
          <h1 className='text-5xl font-extrabold mb-4'>
            {heroContent.header.name}
          </h1>
          <p className='text-4xl font-bold'>{heroContent.header.subtext}</p>

          {/* <p className='mt-4 text-lg'>{heroContent.header.description}</p> */}
          <p className='mt-4 text-lg'>
            A passionate sofware engineering student in{' '}
            <TypeAnimation
              sequence={[
                'web',
                2500,
                'mobile',
                2500,
                'front-end',
                2500,
                'back-end',
                2500,
                'full-stack',
                2500,
              ]}
              speed={50}
              repeat={Infinity}
              className='underline font-medium'
            />
            development.
          </p>
        </motion.div>

        <div className='w-full mb-16 flex flex-col justify-between sm:flex-row-reverse'>
          <motion.div
            initial={false}
            animate={{
              opacity: 0,
              transform: 'translateX(100%)',
              transitionDuration: '2s',
            }}
            whileInView={{
              opacity: 1,
              transform: 'translateX(0)',
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
            viewport={{
              once: true,
            }}
            className='rounded-large transition-all hover:shadow-medium'
          >
            <Card
              shadow='none'
              className='w-full bg-transparent sm:max-w-sm p-2'
            >
              <CardHeader className='pb-0'>
                <p className='font-semibold text-xl'>
                  {heroContent.position.current.caption}
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  {heroContent.position.current.description.pre}
                  <Link
                    href={heroContent.position.current.description.linkText.url}
                    color='foreground'
                    underline='always'
                    isExternal
                    showAnchorIcon
                  >
                    {heroContent.position.current.description.linkText.title}
                  </Link>
                  {heroContent.position.current.description.post}
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={false}
            animate={{
              opacity: 0,
              transform: 'translateX(-100%)',
              transitionDuration: '2s',
            }}
            whileInView={{
              opacity: 1,
              transform: 'translateX(0)',
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
            viewport={{
              once: true,
            }}
            className='rounded-large transition-shadow hover:shadow-medium'
          >
            <Card
              shadow='none'
              className='w-full bg-transparent sm:max-w-sm p-2'
            >
              <CardHeader className='pb-0'>
                <p className='font-semibold text-xl'>
                  {heroContent.position.past.caption}
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  {heroContent.position.past.description.pre}
                  <Link
                    href={heroContent.position.past.description.linkText.url}
                    color='foreground'
                    underline='always'
                    isExternal
                    showAnchorIcon
                  >
                    {heroContent.position.past.description.linkText.title}
                  </Link>
                  {heroContent.position.past.description.post}
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
