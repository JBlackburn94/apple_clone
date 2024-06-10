import { useGSAP } from "@gsap/react";
import { animateWithGSAP } from "../utils/Animations";

const Features = () => {
  useGSAP(() => {
    animateWithGSAP("#features_title", {
      y: 0,
      opacity: 1,
    });
  });

  return (
    <section className="relative h-full overflow-hidden common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="w-full mb-12">
          <h1 id="features_title" className="section-heading">
            Explore The Full Story
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="pl-24 mt-32 mb-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">iPhone</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">
              Forged in Titanium
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
