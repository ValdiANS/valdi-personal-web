import experienceContent from '@/content/index/experience.json';
import ExperienceItem from '../ExperienceItem';
import SectionHeading from '../base/SectionHeading';

const Experience = () => {
  return (
    <section id='experience' className='pt-4'>
      <SectionHeading index='03' title={experienceContent.title} />

      <div className='flex flex-col mt-16 mb-24 py-8 gap-y-6 border-l-2 border-solid border-black/20'>
        {experienceContent.experiences.map((experience, idx) => (
          <ExperienceItem key={idx} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
