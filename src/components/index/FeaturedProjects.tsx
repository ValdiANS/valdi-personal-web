import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';

import projectsContent from '@/content/index/projects.json';
import ProjectItem, { ProjectItemProps } from '../ProjectItem';
import SectionHeading from '../base/SectionHeading';

const FeaturedProjects = () => {
  return (
    <section id='projects' className='min-h-screen pt-4 scroll-mt-16'>
      <SectionHeading index='01' title={projectsContent.title} />

      <div className='flex flex-col items-center gap-8 mt-16 mb-24'>
        <div className='flex flex-col gap-8 w-full'>
          {projectsContent.projects.map((project, idx) => (
            <ProjectItem key={idx} {...(project as ProjectItemProps)} />
          ))}
        </div>

        <Button
          href='https://github.com/ValdiANS'
          as={Link}
          showAnchorIcon
          isExternal
        >
          Browse the rest on GitHub
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
