import { Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer = ({ fileUrl }: PdfViewerProps) => {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  return (
    <div>
      <div className='w-full p-1 flex justify-center items-center bg-primary'>
        <ZoomOutButton />
        <ZoomPopover />
        <ZoomInButton />
      </div>
      <div className='h-[512px]'>
        <Viewer fileUrl={fileUrl} plugins={[zoomPluginInstance]} />
      </div>
    </div>
  );
};

export default PdfViewer;
