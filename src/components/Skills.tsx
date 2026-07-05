import { Cpu, Code, Network, Globe, Database, Wrench, Award } from 'lucide-react';

const skillCategories = [
  {
    icon: Cpu,
    title: '嵌入式开发',
    skills: [
      'OpenHarmony LiteOS-M嵌入式操作系统',
      'Hi3861 / STM32 / STC89C5x系列平台开发',
      'GPIO、ADC、PWM、I2C、UART等外设接口驱动开发'
    ],
    color: 'blue'
  },
  {
    icon: Code,
    title: '编程语言',
    skills: [
      'C语言嵌入式编程（熟练）',
      'Python后端开发（掌握）'
    ],
    color: 'green'
  },
  {
    icon: Network,
    title: '通信协议',
    skills: [
      'TCP/IP网络通信协议',
      'Socket编程与JSON数据交互格式',
      'Modbus、OPC UA工业协议（了解）'
    ],
    color: 'purple'
  },
  {
    icon: Globe,
    title: '全栈开发',
    skills: [
      'Vue3 + Flask + SQLAlchemy + SQLite',
      '前后端分离开发，RESTful API设计',
      'Chart.js数据可视化'
    ],
    color: 'orange'
  },
  {
    icon: Database,
    title: '数据库',
    skills: [
      'MySQL数据库设计',
      '索引优化',
      '存储过程编写'
    ],
    color: 'cyan'
  },
  {
    icon: Wrench,
    title: '开发工具',
    skills: [
      'Keil4、VS Code',
      'DevEco Device Tool、HiBurn',
      'SSCOM、ISP烧录工具'
    ],
    color: 'slate'
  }
];

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: 'text-blue-600' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: 'text-green-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: 'text-purple-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', icon: 'text-orange-600' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', icon: 'text-cyan-600' },
  slate: { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', icon: 'text-slate-600' }
};

const Skills = () => {
  return (
    <section className="bg-white rounded-2xl p-6 card-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
          <Code className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">专业技能</h2>
          <p className="text-sm text-gray-500">完整技术链路实践能力</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => {
          const colors = colorMap[category.color];
          const Icon = category.icon;
          return (
            <div 
              key={index}
              className={`${colors.bg} rounded-xl p-4 border ${colors.border} transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className={`w-5 h-5 ${colors.icon}`} />
                <h3 className={`font-semibold ${colors.text}`}>{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-1.5 shrink-0`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5 text-yellow-500" />
          <h3 className="font-semibold text-gray-800">证书</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-lg text-sm font-medium">
            物联网安装调试员职业技能证书
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;