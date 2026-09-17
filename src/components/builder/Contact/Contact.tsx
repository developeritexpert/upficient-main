import ContactForm from "@/components/miscellaneous/ContactForm/ContactForm";
import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import "./Contact.scss";
import Link from "next/link";

const Contact: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <section
        className="contactBanner d-flex align-items-center"
        style={{
          backgroundImage: `url(${getImagePath(
            "hero_bg.webp",
            data?.backgroundImage,
          )})`,
        }}
      >
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-12">
              <div className="contactImg">
                <Link href={getImagePath("hero_front.webp", data?.image)}>
                  <Image
                    src={getImagePath("hero_front.webp", data?.image)}
                    alt="banner image"
                    width={800}
                    height={600}
                    className="img-contain"
                    loading="lazy"
                    unoptimized
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactForm">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-12">
              <div className="contactUsForm">
                <div className="title">
                  <h3>Contact us</h3>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const meta = {
  name: "contact",
  fields: [
    { key: "backgroundImage", label: "Background Image URL", type: "file" },
    { key: "image", label: "Image URL", type: "file" },
  ],
};

export default Contact;
