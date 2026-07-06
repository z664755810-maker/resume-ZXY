import { FolderOpen, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    icon: Cpu,
    title: '基于Hi3861的独居老人居家安全监护系统',
    role: '项目负责人',
    period: '2026.06',
    techStack: ['Hi3861', 'OpenHarmony LiteOS-M', 'C', 'TCP/IP', 'JSON', 'WiFi'],
    highlights: [
      '独立完成MQ-2烟雾传感器、PIR人体红外传感器、蜂鸣器PWM驱动、按键检测等模块的驱动开发与调试',
      '设计并实现TCP Server通信模块，定义基于Socket的JSON数据交互协议，支持设备端状态推送与远程控制指令接收',
      '设计居家/离家双模式智能报警逻辑：居家模式30秒无活动触发跌倒预警，离家模式检测活动触发入侵报警',
      '解决GPIO09引脚资源冲突、TCP长连接频繁断连（SO_KEEPALIVE机制）、按键信号抖动（下降沿检测替代电平检测）等技术难题',
      '项目成果：烟雾超标时推送报警数据；双模式报警逻辑验证通过；编写完整项目开发文档'
    ]
  },
  {
    icon: Cpu,
    title: '基于STC89C52的智能温控安防系统开发',
    role: '项目负责人',
    period: '2024.03 – 2024.05',
    techStack: ['C', 'Keil4', 'STC89C52'],
    highlights: [
      '独立完成系统全流程开发，外接HC-SR501红外传感器与DS18B20温度传感器，利用ULN2003芯片驱动直流电机，构建声、光、物理动作三重报警机制',
      '在8位单片机上优化任务调度，确保长期运行内存占用率<80%，CPU利用率<70%',
      '自主设计"温度超标+人体入侵"双条件触发逻辑，提升系统安防层级'
    ]
  },
  {
    icon: Globe,
    title: '京东电子商品物流系统 · 进销存管理平台',
    role: '全栈开发工程师',
    period: '2026.03 – 2026.07',
    techStack: ['Vue3', 'Flask', 'SQLAlchemy', 'SQLite', 'Chart.js', 'Pinia'],
    highlights: [
      '负责前后端分离架构设计，完成8个核心业务模块（用户、商品、分类、库存、销售订单、采购订单、发票管理、数据看板）的开发与集成',
      '使用Vue3递归组件实现多层级商品分类可视化，结合虚拟滚动优化大数据渲染',
      '实现全局用户状态管理（单例模式+localStorage），6个页面用户信息一致展示，页面加载时间减少20%',
      '集成Chart.js实现5种数据可视化图表联动更新，筛选响应<1秒',
      '实现4种智能体角色（通用助手、库存专家、销售顾问、报表分析师），维护独立对话历史，支持无缝切换',
      '为所有数据库操作添加事务管理与异常捕获，数据操作成功率99.9%'
    ]
  }
];

const ProjectsPDF = () => {
  return (
    <section className="bg-white rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600">
          <FolderOpen className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">项目经历</h2>
          <p className="text-sm text-gray-500">代表性项目，覆盖嵌入式与全栈开发</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div 
              key={project.title}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="p-5 bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-base mb-1.5">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="inline-block px-2.5 py-1 bg-purple-100 text-purple-700 rounded-md text-sm font-medium h-6 leading-[1.5rem] text-center">{project.role}</span>
                      <span>{project.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600 h-5 leading-[1.25rem] text-center">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 pt-0">
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 text-sm" style={{ lineHeight: '1.7' }}>
                      <span className="w-[1.4em] h-[1.4em] bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-[0.7em] font-bold shrink-0 leading-none">
                        {index + 1}
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPDF;
