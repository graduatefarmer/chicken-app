import React from "react";

const WhyUs = () => {
  return (
    <div className="bg-[#A4243D] text-white font-sans py-[100px] px-4 md:px-8 lg:px-[60px]">
      <div className="flex flex-col lg:flex-row gap-5">
        <InfoBox
          icon="https://countrychickenco.in/static/media/antibiotic-and-steriod-free-hens.84e3dadb7dd3baae71c4.png"
          description="With an average bunch of 200+ country chickens and an ample amount of farm time to roam free and munch on hydroponics, our chickens are anything but cooped up."
        />

        <InfoBox
          icon="https://countrychickenco.in/static/media/free-range-hens.d9424c72dce0adf05ed2.png"
          description="Just like we don't force-feed our children, we don't force-feed our chickens with any syringes since it might lead to physical asphyxiation."
        />

        <InfoBox
          icon="https://countrychickenco.in/static/media/no-force-feeding-hens.7aaa9821b98563e8fc3a.png"
          description="We believe country chickens are healthiest and happiest when they're allowed to live without being pumped full of antibiotics, hormones & steroids."
        />
      </div>
    </div>
  );
};

const InfoBox = ({ icon, description }) => {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <img src={icon} alt="logo" className="w-36 object-contain mb-4" />
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default WhyUs;
