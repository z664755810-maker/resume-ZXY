import { Building2, Clock, Award, TrendingUp, Database, Network, Box } from 'lucide-react';

const achievements = [
  {
    icon: Box,
    title: '独立负责低代码平台业务模块搭建',
    description: '基于用友低代码平台完成企业级业务模块搭建，独立设计表单、配置流程审批逻辑及数据可视化看板',
    metrics: [
      { label: '业务流程数字化覆盖率', value: '提升30%' },
      { label: '审批周期', value: '缩短40%' }
    ]
  },
  {
    icon: Database,
    title: '自主设计后端逻辑与数据库架构',
    description: '使用PyCharm开发后端逻辑，基于Navicat设计车间业务数据库架构，完成表关联、存储过程编写及索引优化',
    metrics: [
      { label: '查询效率', value: '提升25%' },
      { label: '响应时间', value: '<2秒' }
    ]
  },
  {
    icon: Network,
    title: '主动搭建工业通信与数据采集系统',
    description: '借助KEPServerEX 6配置工业通讯通道，对接10+台现场设备，实现温度、压力、运行状态等参数实时采集与批量入库',
    metrics: [
      { label: '采集频率', value: '1秒/次' },
      { label: '数据准确率', value: '99.8%' }
    ]
  },
  {
    icon: Box,
    title: '独立开发物流管理系统',
    description: '基于TraeCN框架搭建厂区物流管理系统，实现物料出入库、运输台账、库存盘点等核心功能',
    metrics: [
      { label: '库存盘点效率', value: '提升50%' }
    ]
  }
];

const Experience = () => {
  return (
    <section className="bg-white rounded-2xl p-6 card-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">实习经历</h2>
          <p className="text-sm text-gray-500">天津市赛鸣科技有限公司</p>
        </div>
        <div className="ml-auto flex items-center gap-1 achievement-badge">
          <Award className="w-3 h-3" />
          <span>优秀实习生</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2 text-gray-600">
          <Building2 className="w-5 h-5 shrink-0" />
          <span className="font-semibold">软件开发实习生</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="w-4 h-4 shrink-0" />
          <span className="text-sm">2026.06 起</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-5 hover:bg-orange-50/50 transition-all duration-300 border border-transparent hover:border-orange-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {item.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-500">{metric.label}</span>
                        <span className="text-sm font-bold text-green-600">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
