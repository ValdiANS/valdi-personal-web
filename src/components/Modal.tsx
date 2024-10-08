import {
  Modal as NextUiModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';

import Button from './base/Button';
import PdfViewer from './PdfViewer';

interface ModalProps {
  title?: string;
  content?: string;
  pdfUrl?: string;

  control: ReturnType<typeof useDisclosure>;
}

const Modal = (props: ModalProps) => {
  const { title, content, pdfUrl, control } = props;
  const { isOpen, onOpenChange } = control;

  return (
    <NextUiModal size='5xl' isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            {title && <ModalHeader>{title}</ModalHeader>}

            {content && (
              <ModalBody>
                <p>{content}</p>
              </ModalBody>
            )}

            {pdfUrl && <PdfViewer fileUrl={pdfUrl} />}

            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </NextUiModal>
  );
};

export default Modal;
