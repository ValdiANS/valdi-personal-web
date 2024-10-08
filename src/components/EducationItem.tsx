import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { useDisclosure } from '@nextui-org/modal';

import Button from './base/Button';
import Modal from './Modal';

interface EducationProps {
  logoUrl: string;
  certificateUrl?: string;
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
  certificateUrl,
  period,
  grade,
  description,
}: EducationProps) => {
  const control = useDisclosure();
  const { onOpen } = control;

  return (
    <Card shadow='none' radius='none' className='pl-4 bg-primary' as='article'>
      <CardBody className='w-full flex flex-col items-start gap-4 sm:flex-row'>
        <Image
          src={logoUrl}
          alt={`${name} Logo`}
          className='sticky top-0 h-full max-h-[64px] w-full min-w-[64px] max-w-[240px]'
        />

        <div>
          <div className='w-full flex flex-col justify-between gap-4 sm:flex-row'>
            <div>
              <h3 className='text-xl font-semibold'>{name}</h3>
              <p className='text-sm uppercase tracking-widest'>
                {major} | {period}
              </p>

              {grade && <p className='text-sm'>{grade}</p>}
            </div>

            {certificateUrl && (
              <div className='w-fit'>
                <Button color='default' variant='ghost' onPress={onOpen}>
                  Certificate
                </Button>

                <Modal control={control} title={name} pdfUrl={certificateUrl} />
              </div>
            )}
          </div>

          {description && (
            <p className='text-base mt-2 font-light'>{description}</p>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationItem;
