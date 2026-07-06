import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementId: string, fileName: string = 'resume') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: null,
    logging: false,
    allowTaint: true,
    onclone: (clonedDoc) => {
      const clonedElement = clonedDoc.getElementById(elementId);
      if (clonedElement) {
        clonedElement.style.background = 'transparent';
      }
      
      const maxHeightElements = clonedDoc.querySelectorAll('[style*="max-h-0"]');
      maxHeightElements.forEach(el => {
        const style = el.getAttribute('style') || '';
        const newStyle = style.replace(/max-h-0/g, 'max-h-[9999px]').replace(/opacity:\s*0/g, 'opacity: 1');
        el.setAttribute('style', newStyle);
        el.style.display = 'block';
        el.style.overflow = 'visible';
        el.style.height = 'auto';
      });
      
      const overflowHiddenElements = clonedDoc.querySelectorAll('.overflow-hidden');
      overflowHiddenElements.forEach(el => {
        el.classList.remove('overflow-hidden');
        el.style.overflow = 'visible';
      });
      
      const cursorPointerElements = clonedDoc.querySelectorAll('.cursor-pointer');
      cursorPointerElements.forEach(el => {
        el.classList.remove('cursor-pointer');
        el.style.cursor = 'default';
      });
      
      const noPrintElements = clonedDoc.querySelectorAll('.no-print');
      noPrintElements.forEach(el => {
        el.style.display = 'none';
      });
    },
  });

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
