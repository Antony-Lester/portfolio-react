import * as pdfjsLib from 'pdfjs-dist';

// Set worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const generatePdfThumbnail = async (pdfUrl) => {
  try {
    // Load the PDF document
    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
    
    // Get the first page
    const page = await pdf.getPage(1);
    
    // Set up canvas
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    // Render the page
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    
    await page.render(renderContext).promise;
    
    // Convert canvas to data URL
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.error('Error generating PDF thumbnail:', error);
    return null;
  }
};

export const createPdfThumbnailCache = () => {
  const cache = new Map();
  
  return {
    async getThumbnail(pdfUrl) {
      if (cache.has(pdfUrl)) {
        return cache.get(pdfUrl);
      }
      
      const thumbnail = await generatePdfThumbnail(pdfUrl);
      if (thumbnail) {
        cache.set(pdfUrl, thumbnail);
      }
      
      return thumbnail;
    },
    
    clearCache() {
      cache.clear();
    }
  };
};
