import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementId: string, fileName: string = 'resume') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  const originalStyle = element.style.cssText;
  element.style.position = 'relative';
  element.style.zIndex = '1000';
  element.style.background = '#ffffff';

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
    allowTaint: true,
  });

  element.style.cssText = originalStyle;

  const imgData = canvas.toDataURL('image/png');
  
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  
  const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  const imgX = (pdfWidth - imgWidth * ratio) / 2;
  const imgY = 0;
  const imgFinalWidth = imgWidth * ratio;
  const imgFinalHeight = imgHeight * ratio;

  if (imgFinalHeight <= pdfHeight) {
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgFinalWidth, imgFinalHeight);
  } else {
    const pages = Math.ceil(imgFinalHeight / pdfHeight);
    
    for (let i = 0; i < pages; i++) {
      if (i > 0) {
        pdf.addPage();
      }
      
      const yOffset = i * pdfHeight;
      const sourceY = (i / pages) * imgHeight;
      const sourceHeight = imgHeight / pages;
      
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = imgWidth;
      tempCanvas.height = sourceHeight;
      const ctx = tempCanvas.getContext('2d');
      
      if (ctx) {
        ctx.drawImage(canvas, 0, sourceY, imgWidth, sourceHeight, 0, 0, imgWidth, sourceHeight);
        const tempImgData = tempCanvas.toDataURL('image/png');
        pdf.addImage(tempImgData, 'PNG', imgX, imgY, imgFinalWidth, pdfHeight);
      }
    }
  }

  pdf.save(`${fileName}.pdf`);
};
