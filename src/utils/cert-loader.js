import { createPdfThumbnailCache } from './pdf-thumbnail';

// Create a global thumbnail cache
const thumbnailCache = createPdfThumbnailCache();

// Utility to automatically load all certificates from the certs folder
export const loadCertificates = () => {
  try {
    // Use webpack's require.context to dynamically import all certificate files
    const context = require.context('../images/certs', false, /\.(pdf|png|jpg|jpeg|webp)$/i);
    
    return context.keys().map((item) => {
      const src = context(item);
      const fileName = item.replace('./', '');
      const fileExtension = fileName.split('.').pop().toLowerCase();
      const baseName = fileName.replace(/\.[^/.]+$/, "");
      const isPdf = fileExtension === 'pdf';
      const isImage = ['png', 'jpg', 'jpeg', 'webp'].includes(fileExtension);
      
      return {
        src: typeof src === 'string' ? src : src.default || src,
        name: fileName,
        baseName: baseName,
        displayName: baseName.replace(/[-_]/g, ' '),
        type: fileExtension,
        isPdf: isPdf,
        isImage: isImage
      };
    });
  } catch (error) {
    console.error('Error loading certificates:', error);
    return [];
  }
};

// Function to get PDF thumbnail
export const getPdfThumbnail = async (pdfUrl) => {
  try {
    return await thumbnailCache.getThumbnail(pdfUrl);
  } catch (error) {
    console.error('Error getting PDF thumbnail:', error);
    return null;
  }
};

// Function to handle certificate clicks
export const handleCertificateClick = (cert) => {
  if (cert.isPdf) {
    // Open PDF in new tab
    window.open(cert.src, '_blank');
  } else if (cert.isImage) {
    // For images, you could implement a lightbox or modal
    // For now, we'll open in new tab as well
    window.open(cert.src, '_blank');
  }
};

// Function to get certificate icon based on type
export const getCertificateIcon = (cert) => {
  if (cert.isPdf) {
    return (
      <svg className='cert-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor"/>
        <path d="M14 2V8H20" stroke="white" strokeWidth="2" fill="none"/>
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">PDF</text>
      </svg>
    );
  }
  return null;
};
