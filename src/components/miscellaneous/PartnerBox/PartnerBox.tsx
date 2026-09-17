import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the props for the PartnerBox component
interface PartnerBoxProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  boxbackgroundColor: any;
  boxShadow: any;
  headingColor: any;
  textColor: any;
  buttonColor: any;
  buttonTextColor: any;
}

const PartnerBox: React.FC<PartnerBoxProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  linkText,
  boxbackgroundColor,
  boxShadow,
  headingColor,
  textColor,
  buttonColor,
  buttonTextColor,
}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="mainEfficiency text-center"
        style={{ background: boxbackgroundColor, boxShadow: boxShadow }}
      >
        <div>
          {/* Icon/Image Section */}
          <div className="icon">
            <Image
              src={getImagePath("effi1.webp", imageSrc)}
              alt={imageAlt}
              width={600} // Adjust the dimensions as needed
              height={400}
              className="img-contain"
              loading="lazy"
              unoptimized
            />
          </div>

          {/* Title Section */}
          <div className="title">
            <h4 style={{ color: headingColor }}>{title}</h4>
          </div>

          {/* Description Section */}
          <div
            className="para"
            dangerouslySetInnerHTML={{
              __html: description?.trim() ? description : "",
            }}
            style={{ color: textColor }}
          ></div>
        </div>
        {/* Link Section */}
        <div className="readMore">
          <Link
            href={link}
            style={{ color: buttonTextColor, background: buttonColor }}
            aria-label={`Learn more about ${title}`}
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerBox;
