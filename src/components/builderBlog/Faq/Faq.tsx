import FaqChild from "@/components/miscellaneous/FaqChild/FaqChild";
import "./Faq.scss"; // Import the global SCSS file

interface FAQ {
  question: string;
  ans: string;
}

const FAQCollapse: React.FC<{ data: any }> = ({ data }) => {
  const { title = "Frequently Asked Questions", phases = [] } = data;
  const styles = data.styles || {};

  return (
    <>
      <section
        id="faqcontainermain"
        style={{
          padding: styles.padding
            ? `${styles.padding.top || 0}px ${styles.padding.right || 0}px ${
                styles.padding.bottom || 0
              }px ${styles.padding.left || 0}px`
            : undefined,
          margin: styles.margin
            ? `${styles.margin.top || 0}px ${styles.margin.right || 0}px ${
                styles.margin.bottom || 0
              }px ${styles.margin.left || 0}px`
            : undefined,
        }}
      >
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-12">
              <h2>{title}</h2> {/* Title dynamically pulled */}
              <div className="accordion">
                {phases && phases.length > 0 ? (
                  phases.map((faqItem: FAQ, index: number) => (
                    <FaqChild
                      key={index}
                      index={index}
                      question={faqItem.question}
                      ans={faqItem.ans}
                    />
                  ))
                ) : (
                  <p>No FAQs available.</p> // If `phases` is empty or undefined
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const meta = {
  name: "JourneySection",
  fields: [
    { key: "title", label: "Title", type: "text" },
    {
      key: "phases",
      type: "repeater",
      fields: [
        { key: "question", label: "Question", type: "text" },
        { key: "ans", label: "Answer", type: "textarea" },
      ],
    },
  ],
  style: [
    {
      key: "padding",
      label: "Padding",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    {
      key: "margin",
      label: "Margin",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    {
      key: "backgroundColor",
      label: "Background Color",
      type: "color",
    },
  ],
};
export default FAQCollapse;
