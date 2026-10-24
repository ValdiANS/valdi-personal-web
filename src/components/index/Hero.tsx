'use client';

import { motion } from 'framer-motion';

import { Link } from '@nextui-org/link';

import { TypeAnimation } from 'react-type-animation';

import heroContent from '@/content/index/hero.json';

const Hero = () => {
  return (
    <section
      id='hero'
      className='w-full min-h-[calc(100dvh-4rem)] grid place-items-center'
    >
      <div className='w-full flex flex-col gap-y-12'>
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
          className='max-w-2xl'
        >
          <p className='text-sm font-medium uppercase tracking-widest text-black/60 mb-4'>
            {heroContent.header.subtext}
          </p>

          <h1 className='text-5xl sm:text-6xl font-extrabold leading-tight mb-6'>
            {heroContent.header.name}
          </h1>

          <p className='text-lg text-black/70'>
            A passionate software engineer in{' '}
            <TypeAnimation
              sequence={[
                'web',
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
              className='underline font-medium text-foreground'
            />
            development.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            opacity: 0,
            translateY: 24,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: 'easeOut',
          }}
          viewport={{
            once: true,
          }}
          className='mb-16 flex flex-col gap-8 border-t border-solid border-black/10 pt-8 sm:flex-row sm:gap-16'
        >
          <div className='flex-1'>
            <p className='text-sm font-medium uppercase tracking-widest text-black/60 mb-2'>
              {heroContent.position.current.caption}
            </p>

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
          </div>

          <div className='flex-1'>
            <p className='text-sm font-medium uppercase tracking-widest text-black/60 mb-2'>
              {heroContent.position.past.caption}
            </p>

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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
