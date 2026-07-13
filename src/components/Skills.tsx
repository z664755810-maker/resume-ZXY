import { Code, Microchip, Server, Terminal, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    icon: Microchip,
    title: '嵌入式与物联网',
    skills: [
      'OpenHarmony LiteOS-M嵌入式操作系统',
      'Hi3861 / STM32 / STC89C5x系列平台开发',
      'GPIO、ADC、PWM、I2C、UART等外设接口驱动开发',
      'C语言嵌入式编程（熟练）',
      'MQ-2烟雾传感器、PIR人体红外传感器等外设集成'
    ],
    color: 'blue'
  },
  {
    icon: Server,
    title: '后端与全栈',
    skills: [
      'Vue3 + Flask + SQLAlchemy + SQLite',
      '前后端分离开发，RESTful API设计',
      'Python后端开发（掌握）',
      'MySQL数据库设计、索引优化、存储过程编写',
      'Chart.js数据可视化、Pinia状态管理'
    ],
    color: 'green'
  },
  {
    icon: Terminal,
    title: '开发工具与协议',
    skills: [
      'TCP/IP网络通信协议、Socket编程与JSON数据交互',
      'Modbus、OPC UA工业协议（了解）',
      'KEPServerEX工业通讯配置',
      'Keil4、VS Code、PyCharm开发环境',
      'DevEco Device Tool、HiBurn、SSCOM、ISP烧录工具',
      'Navicat数据库管理'
    ],
    color: 'purple'
  },
  {
    icon: Sparkles,
    title: 'AI与自动化',
    skills: [
      'Prompt Engineering（提示词工程）',
      'LLM API集成（OpenAI、Claude、Kimi等）',
      'AI智能体（Agent）架构设计',
      '大模型基础：Transformer、Token机制、上下文窗口',
      '自动化工作流构建（连接API、数据处理脚本）',
      'AI辅助开发：代码生成、调试、技术文档编写'
    ],
    color: 'orange'
  }
];

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string; iconBg: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100', icon: 'text-blue-600', iconBg: 'bg-blue-100' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-100', icon: 'text-green-600', iconBg: 'bg-green-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100', icon: 'text-purple-600', iconBg: 'bg-purple-100' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100', icon: 'text-orange-600', iconBg: 'bg-orange-100' }
};

const Skills = () => {
  return (
    <section className="bg-white rounded-2xl p-6 card-shadow">
      <div className="section-title">
        <div className="icon-box bg-gradient-to-br from-blue-500 to-blue-600">
          <Code className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">专业技能</h2>
          <p className="text-sm text-gray-500">完整技术链路实践能力</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category, index) => {
          const colors = colorMap[category.color];
          const Icon = category.icon;
          return (
            <div 
              key={index}
              className={`${colors.bg} rounded-xl p-5 border ${colors.border} transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <h3 className={`font-semibold text-base ${colors.text}`}>{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-gray-600 flex items-start gap-2 line-height-optimal">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-2 shrink-0`}></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
