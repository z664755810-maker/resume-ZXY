import { User, Target, Lightbulb, Heart } from 'lucide-react';

const strengths = [
  '嵌入式与全栈复合实践',
  '工业物联网落地经验',
  '复杂问题拆解',
  'LLM协同开发'
];

const SelfAssessmentPDF = () => {
  return (
    <section className="bg-white rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">自我评价</h2>
          <p className="text-sm text-gray-500">职业目标与核心优势</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-5 border border-indigo-100">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 text-base mb-2">核心优势</h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((strength, index) => (
                  <span 
                    key={index}
                    className="inline-block px-3 py-1.5 bg-white text-indigo-700 border border-indigo-200 rounded-full text-sm font-medium h-6 leading-[1.5rem] text-center">
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 text-sm" style={{ lineHeight: '1.7' }}>
            计算机科学与技术专业大三学生，具备从嵌入式底层驱动到Web全栈应用的真实项目交付经验。实习期间独立完成工业物联网数据采集、低代码平台配置及车间管理系统开发，获评"优秀实习生"。
          </p>
          
          <p className="text-gray-600 text-sm" style={{ lineHeight: '1.7' }}>
            具备卓越的快速学习与实战落地能力：擅长利用LLM等先进工具提升开发效率，但不止于代码生成——核心价值在于对复杂业务场景的准确解析与系统性拆解，能够将模糊需求转化为可执行的技术方案，并以高质量产出推动项目闭环。
          </p>
          
          <p className="text-gray-600 text-sm" style={{ lineHeight: '1.7' }}>
            对智能制造、物联网、企业数字化等方向有强烈兴趣与探索热情。性格务实自驱，乐于在真实业务压力中快速迭代认知、积累行业经验。现阶段目标明确：锚定一个技术方向，以最快速度深入扎根，在实践中构建长期竞争力，实现从"项目实现者"到"问题解决专家"的跃迁。
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-600">
            <Target className="w-5 h-5 text-indigo-600 shrink-0" />
            <span className="font-medium">职业目标：</span>
            <span className="text-sm">嵌入式软件开发 / 物联网开发 / 后端开发</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 ml-auto">
            <Heart className="w-5 h-5 text-red-500 shrink-0" />
            <span className="text-sm">意向城市：北京</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessmentPDF;
