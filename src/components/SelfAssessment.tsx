import { User, Target, Lightbulb, Heart } from 'lucide-react';

const strengths = [
  'AI Native思维模式',
  'Prompt Engineering实战',
  'LLM智能体架构设计',
  '复杂问题拆解与SOP构建'
];

const SelfAssessment = () => {
  return (
    <section className="bg-white rounded-2xl p-6 card-shadow">
      <div className="section-title">
        <div className="icon-box bg-gradient-to-br from-indigo-500 to-indigo-600">
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
                    className="inline-flex items-center px-3 py-1.5 bg-white text-indigo-700 border border-indigo-200 rounded-full text-sm font-medium shadow-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 text-sm line-height-optimal">
            计算机科学与技术专业大三学生，是ChatGPT/Claude/Kimi的重度依赖者，具备"AI Native"思维模式——遇到问题的本能反应是"这能不能用AI解决？"。在京东进销存系统项目中，独立设计并实现了4种AI智能体角色，深入实践Prompt Engineering，通过自然语言查询实现自动化数据分析，将业务人员效率提升3倍。
          </p>
          
          <p className="text-gray-600 text-sm line-height-optimal">
            精通Prompt Engineering：熟练运用角色扮演法、思维链（Chain of Thought）、Few-shot示例、温度调节等技巧，能够将复杂任务拆解为清晰的SOP。在项目开发中全程使用AI工具，从需求分析、技术方案设计到代码生成与调试，将开发周期缩短约40%，但核心价值在于对业务场景的准确解析与系统性拆解，而非单纯依赖代码生成。
          </p>
          
          <p className="text-gray-600 text-sm line-height-optimal">
            对大模型基础概念有深入理解：熟悉Transformer架构、Token机制、上下文窗口限制、微调与提示工程的区别等核心知识。具备Python与JavaScript编程能力，能够编写"胶水代码"连接各种API。对AI领域怀有极高热情，坚信AI正在重构所有行业，渴望成为"会用AI的那一批人"，而非只会"熟练使用Office"的传统开发者。
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-600">
            <Target className="w-5 h-5 text-indigo-600 shrink-0" />
            <span className="font-medium">职业目标：</span>
            <span className="text-sm">AI相关岗位（AI实习生 / AI学徒 / AI产品/工程方向）</span>
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

export default SelfAssessment;
