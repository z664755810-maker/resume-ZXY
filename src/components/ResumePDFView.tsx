import HeaderPDF from './HeaderPDF';
import SkillsPDF from './SkillsPDF';
import EducationPDF from './EducationPDF';
import ExperiencePDF from './ExperiencePDF';
import ProjectsPDF from './ProjectsPDF';
import AwardsPDF from './AwardsPDF';
import SelfAssessmentPDF from './SelfAssessmentPDF';

const ResumePDFView = () => {
  return (
    <div id="pdf-resume-content" className="bg-white">
      <HeaderPDF />
      <SkillsPDF />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EducationPDF />
        <AwardsPDF />
      </div>
      <ExperiencePDF />
      <ProjectsPDF />
      <SelfAssessmentPDF />
    </div>
  );
};

export default ResumePDFView;
