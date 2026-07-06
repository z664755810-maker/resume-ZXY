import Header from '../components/Header';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Awards from '../components/Awards';
import SelfAssessment from '../components/SelfAssessment';
import { Download, Printer } from 'lucide-react';

const handlePrint = () => {
  window.print();
};

export default function Home() {
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
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span className="text-sm font-medium">打印简历</span>
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          <Header />
          <Skills />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Education />
            <Awards />
          </div>
          <Experience />
          <Projects />
          <SelfAssessment />
        </div>
        
        <footer className="mt-12 text-center text-gray-400 text-sm no-print">
          <p>© 2026 郑鑫源 - 求职简历</p>
          <p className="mt-1">联系方式：19103865081 | 664755810@qq.com</p>
        </footer>
      </div>
    </div>
  );
}