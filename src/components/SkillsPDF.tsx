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

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string; iconBg: string; bullet: string }> = {
  blue: { bg: '#eff6ff', text: '#1d4ed8', border: '#dbeafe', icon: '#2563eb', iconBg: '#dbeafe', bullet: '#2563eb' },
  green: { bg: '#f0fdf4', text: '#15803d', border: '#dcfce7', icon: '#16a34a', iconBg: '#dcfce7', bullet: '#16a34a' },
  purple: { bg: '#faf5ff', text: '#7e22ce', border: '#f3e8ff', icon: '#9333ea', iconBg: '#f3e8ff', bullet: '#9333ea' },
  orange: { bg: '#fff7ed', text: '#c2410c', border: '#ffedd5', icon: '#ea580c', iconBg: '#ffedd5', bullet: '#ea580c' }
};

const SkillsPDF = () => {
  return (
    <section className="bg-white rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
        >
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
              className="rounded-xl p-5 border"
              style={{ backgroundColor: colors.bg, borderColor: colors.border }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: colors.iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: colors.icon }} />
                </div>
                <h3 className="font-semibold text-base" style={{ color: colors.text }}>{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-gray-600 flex items-start gap-2" style={{ lineHeight: '1.7' }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 inline-block"
                      style={{ backgroundColor: colors.bullet }}
                    ></span>
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

export default SkillsPDF;
