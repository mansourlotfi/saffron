import Arguments from "./Arguments";
import CyrcularCaroucel from "./CyrcularCaroucel";
import Exceptional from "./Exceptional";
import Testimonials from "./Testimonials";
import TopContent from "./TopContent";

export default function HomePage() {
  return (
    <div className="js-transition-wrapper">
      <div js-page>
        <div className="page p-home">
          <TopContent />
          <CyrcularCaroucel />
          <Testimonials />
          <Arguments />
          <Exceptional />
        </div>
      </div>
    </div>
  );
}
