import { GraduationCap, BookOpen, Clock } from 'lucide-react';

const EducationPDF = () => {
  return (
    <section className="bg-white rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
        >
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">教育背景</h2>
          <p className="text-sm text-gray-500">本科在读</p>
        </div>
      </div>

      <div className="relative pl-16">
        <div
          className="absolute top-2 bottom-2 w-0.5"
          style={{ left: '24px', background: 'linear-gradient(to bottom, #4ade80, #bbf7d0)' }}
        ></div>
        <div
          className="absolute w-5 h-5 rounded-full border-4 border-white"
          style={{ left: '16px', top: '8px', backgroundColor: '#22c55e' }}
        ></div>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
            <h3 className="font-bold text-gray-800 text-base">天津理工大学中环信息学院</h3>
            <div className="flex items-center gap-1.5 text-sm text-gray-500 shrink-0">
              <Clock className="w-4 h-4 shrink-0" />
              <span>2023.09 – 2027.06</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <span
              className="inline-flex items-center justify-center px-3 rounded-full text-sm font-medium"
              style={{ height: '26px', lineHeight: '1', backgroundColor: '#dbeafe', color: '#1d4ed8' }}
            >
              计算机科学与技术
            </span>
            <span
              className="inline-flex items-center justify-center px-3 rounded-full text-sm font-medium"
              style={{ height: '26px', lineHeight: '1', backgroundColor: '#e5e7eb', color: '#374151' }}
            >
              本科（大三在读）
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-green-600 mt-1 shrink-0" />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-700">主修课程：</span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span
                  className="inline-flex items-center justify-center px-2.5 rounded-md text-xs font-medium"
                  style={{ height: '22px', lineHeight: '1', backgroundColor: '#f3f4f6', color: '#4b5563' }}
                >
                  高级语言程序设计（C）
                </span>
                <span
                  className="inline-flex items-center justify-center px-2.5 rounded-md text-xs font-medium"
                  style={{ height: '22px', lineHeight: '1', backgroundColor: '#f3f4f6', color: '#4b5563' }}
                >
                  操作系统
                </span>
                <span
                  className="inline-flex items-center justify-center px-2.5 rounded-md text-xs font-medium"
                  style={{ height: '22px', lineHeight: '1', backgroundColor: '#f3f4f6', color: '#4b5563' }}
                >
                  数据库原理与应用
                </span>
                <span
                  className="inline-flex items-center justify-center px-2.5 rounded-md text-xs font-medium"
                  style={{ height: '22px', lineHeight: '1', backgroundColor: '#f3f4f6', color: '#4b5563' }}
                >
                  编译原理
                </span>
                <span
                  className="inline-flex items-center justify-center px-2.5 rounded-md text-xs font-medium"
                  style={{ height: '22px', lineHeight: '1', backgroundColor: '#f3f4f6', color: '#4b5563' }}
                >
                  数据结构与算法
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPDF;
