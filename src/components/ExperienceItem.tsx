'use client';

import { motion } from 'framer-motion';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Divider } from '@nextui-org/divider';
import { useDisclosure } from '@nextui-org/modal';

import Button from './base/Button';
import Modal from './Modal';

interface ExperienceProps {
  logoUrl: string;
  certificateUrl?: string;
  companyName: string;
  subcompanyName: string | null;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string | null;
  tasks: string[];
  techStack: { caption: string; stacks: string[] } | null;
}

const experienceItemVariant = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, translateY: 64 },
};

const ExperienceItem = ({
  logoUrl,
  certificateUrl,
  companyName,
  subcompanyName,
  role,
  type,
  period,
  location,
  description,
  tasks,
  techStack,
}: ExperienceProps) => {
  const control = useDisclosure();
  const { onOpen } = control;

  return (
    <motion.article
      initial={false}
      variants={experienceItemVariant}
      animate='hidden'
      whileInView='visible'
      transition={{
        type: 'tween',
      }}
      viewport={{
        margin: '0px 0px 0px -128px',
        once: true,
      }}
    >
      <Card as='article' shadow='none' className='bg-primary '>
        <CardHeader className='flex flex-col justify-between items-start gap-2 sm:flex-row'>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center'>
            <Image
              src={logoUrl}
              alt={`${companyName} Logo`}
              className='h-full max-h-[80px] w-full max-w-[240px]'
            />

            <div>
              <h3 className='text-2xl font-semibold'>
                {companyName}{' '}
                {subcompanyName && (
                  <span className='text-lg font-normal'>
                    | {subcompanyName}
                  </span>
                )}
              </h3>
              <p className='font-medium'>
                {role} • <u>{type}</u>
              </p>

              {certificateUrl && (
                <>
                  <Button
                    color='default'
                    variant='bordered'
                    onPress={onOpen}
                    className='mt-2'
                  >
                    Certificate
                  </Button>

                  <Modal
                    control={control}
                    title={companyName}
                    pdfUrl={certificateUrl}
                  />
                </>
              )}
            </div>
          </div>

          <div className='sm:text-right'>
            <span className='text-sm uppercase tracking-widest'>{period}</span>
            <br />
            <span className='text-sm opacity-70'>{location}</span>
          </div>
        </CardHeader>

        <Divider />

        <CardBody>
          {description && (
            <>
              <p>{description}</p>
              <br />
            </>
          )}

          <ul className='px-8 list-disc'>
            {tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>

          {techStack && (
            <>
              <br />
              <div className='flex items-center gap-2 flex-wrap'>
                <span>{techStack.caption}</span>

                {techStack.stacks.map((tech, idx) => (
                  <Card
                    key={idx}
                    shadow='none'
                    isPressable={true}
                    className='h-8 px-4 flex justify-center bg-transparent rounded-full border border-solid border-black/20'
                  >
                    <span className='text-base'>{tech}</span>
                  </Card>
                ))}
              </div>
            </>
          )}
        </CardBody>

        <Divider />
      </Card>
    </motion.article>
  );
};

export default ExperienceItem;
