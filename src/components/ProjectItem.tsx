'use client';

import { motion } from 'framer-motion';

import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';

interface ProjectItemProps {
  logoUrl: string;
  name: string;
  subname: string;
  role: string;
  links: { caption: string; url: string }[] | null;
  description: string | null;
  techStack: {
    caption: string;
    stacks: string[];
  };
}

const projectItemVariant = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, translateY: 64 },
};

const ProjectItem = ({
  logoUrl,
  name,
  subname,
  role,
  links,
  description,
  techStack,
}: ProjectItemProps) => {
  return (
    <motion.article
      initial={false}
      variants={projectItemVariant}
      animate='hidden'
      whileInView='visible'
      transition={{
        type: 'tween',
      }}
      viewport={{
        margin: '0px 0px 0px -128px',
      }}
      className='rounded-large transition-shadow hover:shadow-medium'
    >
      <Card
        shadow='none'
        className='bg-primary border border-solid border-black/20'
      >
        <CardHeader className='w-full p-4 flex flex-col items-start gap-4 sm:flex-row xs:items-center'>
          <Image
            src={logoUrl}
            alt={`${name} Logo`}
            className='h-full max-h-[80px] w-full max-w-[240px]'
          />

          <div className='w-full flex flex-col justify-between gap-4 sm:flex-row'>
            <div>
              <h3 className='text-2xl font-bold'>
                {name}{' '}
                <span className='text-lg font-normal'>
                  {subname && (
                    <>
                      | <i>{subname}</i>
                    </>
                  )}
                </span>
              </h3>

              <p>
                Role: <span className='font-medium'>{role}</span>
              </p>
            </div>

            {links && (
              <div className='flex items-start'>
                {links.map(({ caption, url }, idx) => (
                  <Link
                    key={idx}
                    href={url}
                    color='foreground'
                    underline='always'
                    isExternal
                    showAnchorIcon
                  >
                    {caption}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </CardHeader>

        <CardBody className='py-0'>
          <p className='text-base'>{description}</p>
        </CardBody>

        <CardFooter className='flex-col items-start gap-2'>
          <p className='font-semibold'>{techStack.caption}</p>

          <div className='flex gap-2 flex-wrap'>
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
        </CardFooter>
      </Card>
    </motion.article>
  );
};

export default ProjectItem;
