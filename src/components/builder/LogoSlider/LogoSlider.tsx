import React from "react";
import LogoInnerSlider from "@/components/miscellaneous/LogoInnerSlider/LogoInnerSlider";
import "./LogoSlider.scss";
const logosDefault = [
  { logo: "search.webp", alt: "search atlas" },
  { logo: "anvil.webp", alt: "anvil shield" },
  { logo: "battalian.webp", alt: "battalians" },
  { logo: "concertlab.webp", alt: "concert lab" },
  { logo: "digifist.webp", alt: "digifist" },
  { logo: "emagine.webp", alt: "emagine" },
  { logo: "hdpacking.webp", alt: "HD packing" },
  { logo: "jessakae.webp", alt: "jessakae" },
  { logo: "lento.webp", alt: "lento" },
  { logo: "listandfound.webp", alt: "List & Found" },
  { logo: "momsforliberty.webp", alt: "moms for liberty" },
  { logo: "thecompanyfilms.webp", alt: "the company films" },
  { logo: "thepaingame.webp", alt: "the pain game" },
];

interface Logo {
  logo: string;
  alt: string;
}

interface LogoSliderProps {
  data?: {
    heading?: string;
    logos?: Logo[];
  };
}

const LogoSlider: React.FC<LogoSliderProps> = ({ data }) => {
  const { logos = logosDefault } = data || {};

  return (
    <section className="logo-slider">
      <div className="container">
        <div className="row mx-0 justify-content-center">
          <div className="col-lg-12">
            <div className="logo-slider-inner">
              <h2>
                Trusted by <b>Leading Teams</b>
              </h2>
              <LogoInnerSlider logos={logos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const meta = {
  name: "LogoSlider",
  fields: [{ key: "mainHeading", label: "Main Heading", type: "text" }],
};

export default LogoSlider;
