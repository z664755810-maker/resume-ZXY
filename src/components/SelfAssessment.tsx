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
            计算机科学与技术专业大三学生，在京东进销存系统项目中独立完成了4种AI智能体角色（通用助手、库存专家、销售顾问、报表分析师）的设计与实现，通过为不同角色配置针对性的系统提示词与专业知识库，实现了基于自然语言的业务数据查询与分析功能。
          </p>
          
          <p className="text-gray-600 text-sm line-height-optimal">
            在日常开发中熟练使用TRAE IDE等AI编程工具辅助需求分析、技术方案设计与代码实现，善于将复杂开发任务拆解为清晰的执行步骤。注重对业务场景的理解，能够将模糊需求转化为可落地的技术方案，并在AI辅助下高质量完成开发。
          </p>
          
          <p className="text-gray-600 text-sm line-height-optimal">
            了解大模型基础概念，包括Transformer架构的基本原理、Token机制、上下文窗口限制等。具备Python与JavaScript编程能力，能够编写脚本连接各类API实现自动化工作流。对AI领域有浓厚兴趣与探索热情，持续关注AI工具在实际业务中的落地应用，希望能够在实习中深入学习AI产品化与工程化的完整流程。
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
