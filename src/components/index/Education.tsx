'use client';

import { motion } from 'framer-motion';

import educationContent from '@/content/index/education.json';
import EducationItem from '../EducationItem';
import SectionHeading from '../base/SectionHeading';

const Education = () => {
  return (
    <section id='education' className='pt-4'>
      <SectionHeading index='02' title={educationContent.title} />

      <div className='flex flex-col mt-16 mb-24 py-8 overflow-x-hidden border-l-2 border-solid border-black/20'>
        <motion.div
          initial={false}
          animate={{
            translateX: '-100%',
          }}
          whileInView={{
            translateX: '0%',
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          viewport={{
            once: true,
          }}
        >
          {educationContent.schools.map((school, idx) => (
            <EducationItem key={idx} {...school} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
