import { Award, Clock, BadgeCheck } from 'lucide-react';

const awards = [
  {
    title: '校级第三届创新设计竞赛二等奖',
    issuer: '天津理工大学中环信息学院',
    year: '2023年11月',
    type: 'award'
  }
];

const certificates = [
  {
    title: '物联网安装调试员职业技能证书',
    issuer: '工业和信息化部门',
    year: '2026年'
  }
];

const Awards = () => {
  return (
    <section className="bg-white rounded-2xl p-6 card-shadow">
      <div className="section-title">
        <div className="icon-box bg-gradient-to-br from-yellow-500 to-yellow-600">
          <Award className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">荣誉奖项与证书</h2>
          <p className="text-sm text-gray-500">专业能力认证与竞赛获奖</p>
        </div>
      </div>
      
      {awards.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-yellow-600" />
            <h3 className="font-semibold text-gray-800 text-base">竞赛奖项</h3>
          </div>
          <div className="space-y-3">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-yellow-50 rounded-xl p-4 border border-yellow-100"
              >
                <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-yellow-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{award.title}</h4>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-gray-500">{award.issuer}</span>
                    <div className="flex items-center gap-1.5 text-yellow-600">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs font-medium">{award.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {certificates.length > 0 && (
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <BadgeCheck className="w-4 h-4 text-green-600" />
            <h3 className="font-semibold text-gray-800 text-base">职业证书</h3>
          </div>
          <div className="space-y-3">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-green-50 rounded-xl p-4 border border-green-100"
              >
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-4 h-4 text-green-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{cert.title}</h4>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-gray-500">{cert.issuer}</span>
                    <div className="flex items-center gap-1.5 text-green-600">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs font-medium">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Awards;
