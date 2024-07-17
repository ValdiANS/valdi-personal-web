'use client';

import { motion } from 'framer-motion';

import { Icon } from '@iconify/react';
import { Link } from '@nextui-org/react';

import socials from '@/content/index/social.json';

const contactVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen py-4 grid place-items-center'>
      <motion.div
        initial={false}
        variants={contactVariant}
        animate='hidden'
        whileInView='visible'
        transition={{
          type: 'tween',
        }}
        viewport={{
          margin: '0px 0px 0px -128px',
        }}
      >
        <h2 className='text-5xl font-extrabold'>Let&apos;s Get in Touch</h2>

        <div className='mt-16 flex flex-col gap-2'>
          {socials.map((social, idx) => (
            <Link
              key={idx}
              //
              color='foreground'
              href={social.link}
              underline='always'
              isExternal
              className='w-fit'
            >
              <Icon icon={social.iconifyIcon} className='w-12 h-12 mr-4' />
              <span className='text-base sm:text-lg'>
                {social.caption}{' '}
                <Icon
                  icon='mingcute:external-link-line'
                  className='inline align-middle min-h-6 text-foreground'
                />
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
