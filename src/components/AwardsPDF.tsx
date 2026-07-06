import { Award, Clock, BadgeCheck } from 'lucide-react';

const awards = [
  {
    title: '校级第三届创新设计竞赛二等奖',
    issuer: '天津理工大学中环信息学院',
    year: '2023年11月'
  }
];

const certificates = [
  {
    title: '物联网安装调试员职业技能证书',
    issuer: '工业和信息化部门',
    year: '2026年'
  }
];

const AwardsPDF = () => {
  return (
    <section className="bg-white rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)' }}
        >
          <Award className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">荣誉奖项与证书</h2>
          <p className="text-sm text-gray-500">专业能力认证与竞赛获奖</p>
        </div>
      </div>

      {awards.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4" style={{ color: '#ca8a04' }} />
            <h3 className="font-semibold text-gray-800 text-base">竞赛奖项</h3>
          </div>
          <div className="space-y-3">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl p-4 border"
                style={{ backgroundColor: '#fefce8', borderColor: '#fef9c3' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#fde68a' }}
                >
                  <Award className="w-4 h-4" style={{ color: '#a16207' }} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{award.title}</h4>
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                    <span className="text-xs text-gray-500">{award.issuer}</span>
                    <div className="flex items-center gap-1.5" style={{ color: '#ca8a04' }}>
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
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BadgeCheck className="w-4 h-4 text-green-600" />
            <h3 className="font-semibold text-gray-800 text-base">职业证书</h3>
          </div>
          <div className="space-y-3">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl p-4 border"
                style={{ backgroundColor: '#f0fdf4', borderColor: '#dcfce7' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#bbf7d0' }}
                >
                  <BadgeCheck className="w-4 h-4" style={{ color: '#15803d' }} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{cert.title}</h4>
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
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

export default AwardsPDF;
