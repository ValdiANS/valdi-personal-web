import projectsContent from '@/content/index/projects.json';
import ProjectItem from '../ProjectItem';

const FeaturedProjects = () => {
  return (
    <section id='projects' className='min-h-screen pt-4 scroll-mt-16'>
      <h2 className='text-5xl font-extrabold'>{projectsContent.title}</h2>

      <div className='flex flex-col gap-8 my-24'>
        {projectsContent.projects.map((project, idx) => (
          <ProjectItem key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
