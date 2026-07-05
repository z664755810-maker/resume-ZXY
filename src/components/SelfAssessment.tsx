import { User, Target, Lightbulb, Heart } from 'lucide-react';

const strengths = [
  '嵌入式底层驱动开发',
  'Web全栈应用搭建',
  '工业物联网数据采集',
  '低代码平台业务流程配置',
  '独立问题解决能力'
];

const SelfAssessment = () => {
  return (
    <section className="bg-white rounded-2xl p-6 card-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">自我评价</h2>
          <p className="text-sm text-gray-500">职业目标与核心优势</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">核心优势</h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((strength, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-white text-indigo-700 border border-indigo-200 rounded-full text-sm font-medium shadow-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            计算机科学与技术专业大三学生，具备从嵌入式底层驱动开发到Web全栈应用搭建的完整技术链路实践经验。曾在企业实习中独立完成工业物联网数据采集、低代码平台业务流程配置及车间管理系统全栈开发，获评"优秀实习生"。
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            具备突出的自主学习能力与问题解决意识，善于在资源受限或不确定性较高的项目环境中快速定位技术难点并推动解决。对智能制造、物联网、企业数字化等方向有浓厚兴趣，目前正通过多段实习主动探索自身技术定位与职业方向。
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            性格踏实务实，责任心强，乐于在实战中积累经验、迭代认知。期望在实习中承担真实业务职责，以高质量产出赢得团队信任，同时明确自身长期发展的技术赛道。
          </p>
        </div>
        
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-600">
            <Target className="w-5 h-5 text-indigo-600" />
            <span className="font-medium">职业目标：</span>
            <span className="text-sm">嵌入式软件开发 / 物联网开发 / 后端开发</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 ml-auto">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm">意向城市：北京</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessment;