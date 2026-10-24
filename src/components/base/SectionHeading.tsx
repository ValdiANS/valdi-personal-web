interface SectionHeadingProps {
  index: string;
  title: string;
}

const SectionHeading = ({ index, title }: SectionHeadingProps) => {
  return (
    <div className='flex items-baseline gap-4'>
      <span className='text-sm font-medium uppercase tracking-widest text-black/60'>
        {index}
      </span>
      <h2 className='text-4xl sm:text-5xl font-extrabold'>{title}</h2>
    </div>
  );
};

export default SectionHeading;
