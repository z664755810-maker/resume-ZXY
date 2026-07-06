import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementId: string, fileName: string = 'resume') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  const originalDisplay = element.style.display;
  element.style.display = 'block';

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      scrollX: 0,
      scrollY: 0,
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

    let currentY = 0;
    const pageHeight = pdfHeight;

    if (imgFinalHeight <= pageHeight) {
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgFinalWidth, imgFinalHeight);
    } else {
      const numPages = Math.ceil(imgFinalHeight / pageHeight);
      for (let i = 0; i < numPages; i++) {
        if (i > 0) {
          pdf.addPage();
        }
        const yOffset = -pageHeight * i;
        pdf.addImage(imgData, 'PNG', imgX, yOffset, imgFinalWidth, imgFinalHeight);
        currentY = pageHeight * (i + 1);
      }
    }

    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('生成PDF失败，请重试');
  } finally {
    element.style.display = originalDisplay;
  }
};

export default generatePDF;