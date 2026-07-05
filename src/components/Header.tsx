import { Phone, Mail, MapPin, Briefcase, Calendar, User } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-gradient-to-br from-[#1e3a5f] to-[#007bff] text-white p-6 rounded-2xl shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
            <img 
              src="/zxy.jpg" 
              alt="郑鑫源" 
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            大三在读
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">郑鑫源</h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">嵌入式软件开发</span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">物联网开发</span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">后端开发实习生</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="w-4 h-4" />
              <span>19103865081</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Mail className="w-4 h-4" />
              <span>664755810@qq.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span>北京市大兴区</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-4 h-4" />
              <span>2027年6月毕业</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
          <User className="w-8 h-8 text-white/80" />
          <span className="text-xs text-white/70">共青团员</span>
        </div>
      </div>
    </div>
  );
};

export default Header;