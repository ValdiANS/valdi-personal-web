import experienceContent from '@/content/index/experience.json';
import ExperienceItem from '../ExperienceItem';

const Experience = () => {
  return (
    <section id='experience' className='pt-4'>
      <h2 className='text-5xl font-extrabold'>{experienceContent.title}</h2>

      <div className='flex flex-col my-24'>
        {experienceContent.experiences.map((experience, idx) => (
          <ExperienceItem key={idx} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
