import { useState } from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Awards from '../components/Awards';
import SelfAssessment from '../components/SelfAssessment';
import ResumePDFView from '../components/ResumePDFView';
import { Download, Loader2 } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDFWithLoading = async () => {
    setIsGenerating(true);

    await new Promise(resolve => setTimeout(resolve, 300));

    try {
      await generatePDF('pdf-resume-content', '郑鑫源-简历');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8 no-print">
          <div>
            <h1 className="text-2xl font-bold text-gradient">个人求职简历</h1>
            <p className="text-gray-500 text-sm">郑鑫源 - 嵌入式软件开发 / 物联网开发 / 后端开发实习生</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDownloadPDFWithLoading}
              disabled={isGenerating}
              className="flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2d4a6f] transition-colors duration-200 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">下载PDF</span>
            </button>
          </div>
        </div>

        <div id="resume-content" className="space-y-6">
          <Header />
          <Skills />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Education />
            <Awards />
          </div>
          <Experience />
          <Projects isPrintMode={false} />
          <SelfAssessment />
        </div>

        <footer className="mt-12 text-center text-gray-400 text-sm no-print">
          <p>© 2026 郑鑫源 - 求职简历</p>
          <p className="mt-1">联系方式：19103865081 | 664755810@qq.com</p>
        </footer>
      </div>

      {/* PDF 专用视图：固定在屏幕外但在视口内（避免 transform 偏移导致 html2canvas 错位） */}
      <div
        id="pdf-viewport"
        className="fixed left-0 top-0 pointer-events-none"
        style={{
          width: '794px',
          background: '#ffffff',
          zIndex: -1,
          opacity: 0,
        }}
        aria-hidden="true"
      >
        <div className="max-w-4xl mx-auto p-8 space-y-6">
          <ResumePDFView />
        </div>
      </div>
    </div>
  );
}
