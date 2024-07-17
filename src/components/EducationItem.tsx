import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

interface EducationProps {
  logoUrl: string;
  name: string;
  major: string;
  period: string;
  grade: string | null;
  description: string | null;
}

const EducationItem = ({
  logoUrl,
  name,
  major,
  period,
  grade,
  description,
}: EducationProps) => {
  return (
    <Card shadow='none' radius='none' className='pl-4 bg-primary' as='article'>
      <CardBody className='w-full flex flex-col items-start gap-4 sm:flex-row'>
        <Image
          src={logoUrl}
          alt={`${name} Logo`}
          className='sticky top-0 h-full max-h-[64px] w-full min-w-[64px] max-w-[240px]'
        />

        <div>
          <h3 className='text-xl font-semibold'>{name}</h3>
          <p className='text-sm uppercase tracking-widest'>
            {major} | {period}
          </p>

          {grade && <p className='text-sm'>{grade}</p>}

          {description && (
            <p className='text-base mt-2 font-light'>{description}</p>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationItem;
