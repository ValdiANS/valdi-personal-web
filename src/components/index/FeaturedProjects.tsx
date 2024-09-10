import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';

import projectsContent from '@/content/index/projects.json';
import ProjectItem from '../ProjectItem';

const FeaturedProjects = () => {
  return (
    <section id='projects' className='min-h-screen pt-4 scroll-mt-16'>
      <h2 className='text-5xl font-extrabold'>{projectsContent.title}</h2>

      <div className='flex flex-col items-center gap-8 my-24'>
        <div className='flex flex-col gap-8'>
          {projectsContent.projects.map((project, idx) => (
            <ProjectItem key={idx} {...project} />
          ))}
        </div>

        <Button
          href='https://github.com/ValdiANS'
          as={Link}
          showAnchorIcon
          isExternal
        >
          See more
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
