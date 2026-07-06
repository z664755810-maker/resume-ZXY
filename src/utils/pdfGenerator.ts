import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const waitForImages = (root: HTMLElement) => {
  const imgs = Array.from(root.querySelectorAll('img'));
  return Promise.all(
    imgs.map(img => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise<void>((resolve) => {
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
        setTimeout(resolve, 3000);
      });
    })
  );
};

const waitForFonts = async () => {
  if (document.fonts && (document.fonts as any).ready) {
    try { await (document.fonts as any).ready; } catch { /* ignore */ }
  }
};

export const generatePDF = async (
  elementId: string,
  fileName: string = 'resume'
) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  const viewport = document.getElementById('pdf-viewport');
  const originalViewportStyle = viewport ? viewport.getAttribute('style') : null;

  try {
    if (viewport) {
      viewport.setAttribute(
        'style',
        'position: fixed; left: 0; top: 0; width: 794px; background: #ffffff; z-index: 2147483646; opacity: 1; pointer-events: none;'
      );
    }

    await waitForFonts();
    await waitForImages(element);

    await new Promise(resolve => requestAnimationFrame(() => resolve(null)));
    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      allowTaint: true,
      windowWidth: 794,
      windowHeight: element.scrollHeight,
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

    const ratio = pdfWidth / imgWidth;
    const imgFinalWidth = pdfWidth;
    const imgFinalHeight = imgHeight * ratio;

    if (imgFinalHeight <= pdfHeight) {
      pdf.addImage(imgData, 'PNG', 0, 0, imgFinalWidth, imgFinalHeight);
    } else {
      const pageHeightInCanvas = pdfHeight / ratio;
      let y = 0;
      let pageIndex = 0;

      while (y < imgHeight) {
        const sliceHeight = Math.min(pageHeightInCanvas, imgHeight - y);
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = imgWidth;
        tempCanvas.height = sliceHeight;
        const ctx = tempCanvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
          ctx.drawImage(canvas, 0, y, imgWidth, sliceHeight, 0, 0, imgWidth, sliceHeight);
          const tempImgData = tempCanvas.toDataURL('image/png');
          if (pageIndex > 0) pdf.addPage();
          pdf.addImage(
            tempImgData,
            'PNG',
            0,
            0,
            imgFinalWidth,
            sliceHeight * ratio
          );
        }
        y += sliceHeight;
        pageIndex += 1;
      }
    }

    pdf.save(`${fileName}.pdf`);
  } catch (err) {
    console.error('PDF generation failed', err);
  } finally {
    if (viewport) {
      if (originalViewportStyle !== null) {
        viewport.setAttribute('style', originalViewportStyle);
      } else {
        viewport.removeAttribute('style');
      }
    }
  }
};
