import { Award, Clock } from 'lucide-react';

const awards = [
  {
    title: '物联网安装调试员职业技能证书',
    issuer: '工业和信息化部门',
    year: '2026年'
  }
];

const Awards = () => {
  return (
    <section className="bg-white rounded-2xl p-6 card-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">获奖情况</h2>
          <p className="text-sm text-gray-500">专业技能认证</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {awards.map((award, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 bg-yellow-50 rounded-xl p-4 hover:bg-yellow-100 transition-colors duration-300"
          >
            <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-yellow-700" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{award.title}</h3>
              <p className="text-sm text-gray-500">{award.issuer}</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{award.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;