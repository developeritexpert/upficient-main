import CaseStudySliderMain from "@/components/miscellaneous/CaseStudySliderMain/CaseStudySliderMain";
import React from "react";
import "./CaseStudySlider.scss";

const CaseStudySlider: React.FC<{ data: any }> = ({ data }) => {
  const { heading, images = [] } = data || {};
  const styles = data?.styles || {};

  return (
    <section
      className="cs-slider-section"
      style={{
        padding: styles.padding
          ? `${styles.padding.top || 0}px ${styles.padding.right || 0}px ${styles.padding.bottom || 0}px ${styles.padding.left || 0}px`
          : undefined,
        margin: styles.margin
          ? `${styles.margin.top || 0}px ${styles.margin.right || 0}px ${styles.margin.bottom || 0}px ${styles.margin.left || 0}px`
          : undefined,
        backgroundColor: styles.backgroundColor || undefined,
      }}
    >
      <div className="container">
        <div className="row mx-0">
          <div className="col-lg-12">
            <CaseStudySliderMain images={images} heading={heading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySlider;
