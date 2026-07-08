import { Phone, Mail, MapPin, Calendar, User } from 'lucide-react';

const HeaderPDF = () => {
  return (
    <div
      className="text-white p-6 rounded-2xl"
      style={{ backgroundColor: '#1e3a5f' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
            <img
              src={`${import.meta.env.BASE_URL}zxy.jpg`}
              alt="郑鑫源"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-3" style={{ lineHeight: '1.3' }}>郑鑫源</h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            <span
              className="inline-flex items-center justify-center px-3 rounded-full text-sm font-medium"
              style={{ height: '26px', lineHeight: '1', backgroundColor: '#3a5a80' }}
            >
              嵌入式软件开发
            </span>
            <span
              className="inline-flex items-center justify-center px-3 rounded-full text-sm font-medium"
              style={{ height: '26px', lineHeight: '1', backgroundColor: '#3a5a80' }}
            >
              物联网开发
            </span>
            <span
              className="inline-flex items-center justify-center px-3 rounded-full text-sm font-medium"
              style={{ height: '26px', lineHeight: '1', backgroundColor: '#3a5a80' }}
            >
              后端 / 全栈开发
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="w-4 h-4 shrink-0" />
              <span>19103865081</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Mail className="w-4 h-4 shrink-0" />
              <span>664755810@qq.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>北京市大兴区</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-4 h-4 shrink-0" />
              <span>2027年6月毕业</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center gap-2 rounded-xl px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
          <User className="w-8 h-8 text-white/80" />
          <span className="text-xs text-white/70">共青团员</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderPDF;
