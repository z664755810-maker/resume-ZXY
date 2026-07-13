import { User, Target, Lightbulb, Heart } from 'lucide-react';

const strengths = [
  'AI Native思维模式',
  'Prompt Engineering实战',
  'LLM智能体架构设计',
  '复杂问题拆解与SOP构建'
];

const SelfAssessmentPDF = () => {
  return (
    <section className="bg-white rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' }}
        >
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">自我评价</h2>
          <p className="text-sm text-gray-500">职业目标与核心优势</p>
        </div>
      </div>

      <div className="space-y-5">
        <div
          className="rounded-xl p-5 border"
          style={{ background: 'linear-gradient(to right, #eef2ff, #eff6ff)', borderColor: '#e0e7ff' }}
        >
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 mt-1 shrink-0" style={{ color: '#4f46e5' }} />
            <div>
              <h3 className="font-semibold text-gray-800 text-base mb-2">核心优势</h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((strength, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center px-3 rounded-full text-sm font-medium border"
                    style={{ height: '26px', lineHeight: '1', backgroundColor: '#ffffff', color: '#4338ca', borderColor: '#c7d2fe' }}
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 text-sm" style={{ lineHeight: '1.7' }}>
            计算机科学与技术专业大三学生，是ChatGPT/Claude/Kimi的重度依赖者，具备"AI Native"思维模式——遇到问题的本能反应是"这能不能用AI解决？"。在京东进销存系统项目中，独立设计并实现了4种AI智能体角色，深入实践Prompt Engineering，通过自然语言查询实现自动化数据分析，将业务人员效率提升3倍。
          </p>

          <p className="text-gray-600 text-sm" style={{ lineHeight: '1.7' }}>
            精通Prompt Engineering：熟练运用角色扮演法、思维链（Chain of Thought）、Few-shot示例、温度调节等技巧，能够将复杂任务拆解为清晰的SOP。在项目开发中全程使用AI工具，从需求分析、技术方案设计到代码生成与调试，将开发周期缩短约40%，但核心价值在于对业务场景的准确解析与系统性拆解，而非单纯依赖代码生成。
          </p>

          <p className="text-gray-600 text-sm" style={{ lineHeight: '1.7' }}>
            对大模型基础概念有深入理解：熟悉Transformer架构、Token机制、上下文窗口限制、微调与提示工程的区别等核心知识。具备Python与JavaScript编程能力，能够编写"胶水代码"连接各种API。对AI领域怀有极高热情，坚信AI正在重构所有行业，渴望成为"会用AI的那一批人"，而非只会"熟练使用Office"的传统开发者。
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3">
          <div className="flex items-center gap-2 text-gray-600">
            <Target className="w-5 h-5 shrink-0" style={{ color: '#4f46e5' }} />
            <span className="font-medium">职业目标：</span>
            <span className="text-sm">AI相关岗位（AI实习生 / AI学徒 / AI产品/工程方向）</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 ml-auto">
            <Heart className="w-5 h-5 shrink-0" style={{ color: '#ef4444' }} />
            <span className="text-sm">意向城市：北京</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessmentPDF;
