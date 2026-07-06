import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Awards from './Awards';
import SelfAssessment from './SelfAssessment';

const ResumePDFView = () => {
  return (
    <div id="pdf-resume-content" className="bg-white">
      <Header />
      <Skills />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Education />
        <Awards />
      </div>
      <Experience />
      <Projects isPrintMode={true} />
      <SelfAssessment />
    </div>
  );
};

export default ResumePDFView;
