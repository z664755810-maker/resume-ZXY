import { GraduationCap, BookOpen, Clock } from 'lucide-react';

const Education = () => {
  return (
    <section className="bg-white rounded-2xl p-6 card-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">教育背景</h2>
          <p className="text-sm text-gray-500">本科在读</p>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-green-200"></div>
        
        <div className="relative pl-16">
          <div className="absolute left-4 w-5 h-5 bg-green-500 rounded-full border-4 border-white shadow-md"></div>
          
          <div className="bg-gray-50 rounded-xl p-5 hover:bg-green-50 transition-colors duration-300">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800">天津理工大学中环信息学院</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>2023.09 – 2027.06</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                计算机科学与技术
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                本科（大三在读）
              </span>
            </div>
            
            <div className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-medium text-gray-700">主修课程：</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">高级语言程序设计（C）</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">操作系统</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">数据库原理与应用</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">编译原理</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">数据结构与算法</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;