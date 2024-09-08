import React from "react";

const Catagories = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[120px]">
      <h3 className="text-[#A4243D] font-semibold mb-2">Catagories</h3>
      <div className="grid grid-cols-2 gap-3">
        {[
          "https://countrychickenco.in/static/media/better-than-broiler.99a5b6ed5bed03431a11.png",
          "https://countrychickenco.in/static/media/land-cat-freerange.f4ad1aa54f50cfe61e0f.png",
          "https://countrychickenco.in/static/media/land-cat-village.831207c5a97bf372faaa.png",
          "https://countrychickenco.in/static/media/land-cat-eggs.a8a473833f1be0fb20d3.png",
          "https://countrychickenco.in/static/media/land-cat-pickle.57c826bd0d7b35cecb6c.png",
          "https://countrychickenco.in/static/media/cat-mutton.ba0943710d224f35c37a.png",
        ]?.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="catagory image"
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Catagories;
