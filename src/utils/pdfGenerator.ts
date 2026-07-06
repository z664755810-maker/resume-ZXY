/**
 * 使用浏览器原生打印 API 生成 PDF
 * - 1:1 还原网页端视觉效果（颜色/布局/圆角/阴影）
 * - 颜色由浏览器 print-color-adjust: exact 保证不丢失
 * - 用户可在系统打印对话框中选择"另存为 PDF"
 */
export const generatePDF = async (
  _elementId: string = 'resume-content',
  _fileName: string = '郑鑫源-简历'
) => {
  // 等待字体加载完成
  if (document.fonts && (document.fonts as any).ready) {
    try { await (document.fonts as any).ready; } catch { /* ignore */ }
  }

  // 等待所有图片加载完成
  const imgs = Array.from(document.querySelectorAll('img'));
  await Promise.all(
    imgs.map(img => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise<void>((resolve) => {
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
        setTimeout(resolve, 3000);
      });
    })
  );

  // 触发浏览器原生打印（用户可选择"另存为 PDF"）
  // 这保证 PDF 100% 等于网页端视觉效果
  window.print();
};
