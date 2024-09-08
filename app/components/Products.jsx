import Link from "next/link";
import React from "react";

const Products = () => {
  const products = [
    {
      title: "Chicken",
      items: [
        {
          title: "Better than Broiler Chicken",
          sub_title: "(Soft, Tender and Extra Juicy)",
          starting_date: "",
          price: "349",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fbtb1.png?alt=media&token=705c8039-fb6c-486e-a44a-88ba02fafb4c",
        },
        {
          title: "Tender Country Chicken",
          sub_title: "(Tender and Juicy)",
          starting_date: "",
          price: "699",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Ftcc1.png?alt=media&token=ba53d858-8c82-4abc-9638-3ac26457612b",
        },
        {
          title: "Classic Country Chicken",
          sub_title: "(Tough and Juicy)",
          starting_date: "",
          price: "649",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fccc1.png?alt=media&token=b7a5c0a7-4398-4b93-a54d-d60f5e6a9170",
        },
        {
          title: "Village Country Chicken",
          sub_title: "(Tough and Very Juicy)",
          starting_date: "",
          price: "1099",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fvcc1.png?alt=media&token=c64f4a20-5c93-4ff0-8dad-dfe86cc28de0",
        },
        {
          title: "Kadaknath Country Chicken",
          sub_title: "(Black and Vitamin Rich)",
          starting_date: "",
          price: "1499",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fkcc.png?alt=media&token=92174405-c821-458b-b0db-6b67c923c9c7",
        },
      ],
    },
    {
      title: "Eggs",
      items: [
        {
          title: "Brown Eggs (6 Pack)",
          sub_title: "",
          starting_date: "",
          price: "89",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fbrown-6pack.png?alt=media&token=998adb22-4b13-47e8-b2a9-669e690ef46d",
        },
        {
          title: "Brown Eggs (30 Pack)",
          sub_title: "",
          starting_date: "",
          price: "309",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fbrown-30pack.png?alt=media&token=18d50161-be0c-461b-ad1e-60d42fe8e934",
        },
        {
          title: "Original Country Eggs (6 Pack)",
          sub_title: "",
          starting_date: "",
          price: "129",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fcountry-6pack.png?alt=media&token=18582cf9-997f-4a2b-b373-215278ce19c1",
        },
        {
          title: "Original Country Eggs (30 Pack)",
          sub_title: "",
          starting_date: "",
          price: "549",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fcountry-30pack.png?alt=media&token=4ad316df-76c5-49f2-ba01-64d8382f221d",
        },
        {
          title: "Original Country Eggs (12 Pack)",
          sub_title: "",
          starting_date: "",
          price: "249",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fcountry-6pack.png?alt=media&token=18582cf9-997f-4a2b-b373-215278ce19c1",
        },
      ],
    },
    {
      title: "Pickles",
      items: [
        {
          title: "Country Chicken Pickle (Boneless 250GM)",
          sub_title: "",
          starting_date: "",
          price: "599",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fcpbl.png?alt=media&token=4beba20c-feb1-4284-8924-fc615a896a50",
        },
        {
          title: "Country Chicken Pickle (With Bone 250GM)",
          sub_title: "",
          starting_date: "",
          price: "499",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fcpb.png?alt=media&token=3cdb2024-141e-430d-97cd-4bc5b0ad261e",
        },
        {
          title: "Country Mutton Pickle (Boneless 250GM)",
          sub_title: "",
          starting_date: "",
          price: "699",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/Mutton%20Pickle%20Boneless%20-%20Product%20Page.jpg?alt=media&token=1723624548012",
        },
      ],
    },
    {
      title: "Mutton",
      items: [
        {
          title: "Country Mutton (With Bone)",
          sub_title: "",
          starting_date: "",
          price: "999",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fmutton-bone.png?alt=media&token=a7a831c2-0ada-4721-9f3b-41b9faddb890",
        },
        {
          title: "Country Mutton (Boneless)",
          sub_title: "",
          starting_date: "",
          price: "1249",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fmutton-boneless.png?alt=media&token=06213911-e595-4b41-be09-0fbcff2fe5e6",
        },
        {
          title: "Country Mutton Keema",
          sub_title: "",
          starting_date: "",
          price: "1249",
          img_url:
            "https://firebasestorage.googleapis.com/v0/b/countrychickenco.appspot.com/o/product_images%2Fmutton-keema.png?alt=media&token=346bf946-a82a-4252-9b7d-3db09a06ebc9",
        },
      ],
    },
  ];
  return (
    <div className="px-4 md:px-8 lg:px-[120px]">
      {products?.map((item, index) => {
        return (
          <div className="flex flex-col">
            <div className="flex  justify-between">
              <h3 className="text-[#A4243D] font-semibold mb-2">
                {item?.title}
              </h3>
              <Link className="text-sm" href={"#"}>
                View All
              </Link>
            </div>
            <div className="w-full max-w-6xl mx-auto">
              <div className="flex overflow-x-scroll scroll-hidden md:hidden items-start w-full h-full space-x-5 py-5">
                {item.items?.map((subItem, index) => (
                  <div
                    className="min-w-[70%] shadow-xl border border-[#00000029] rounded-md overflow-hidden flex flex-col"
                    key={index}
                  >
                    <div className="h-1/2 bg-[#f9f5f1] flex items-center justify-center">
                      <img
                        src={subItem?.img_url}
                        alt="product image"
                        className="h-full object-contain"
                      />
                    </div>
                    <div className="h-1/2 p-4 flex flex-col justify-between bg-white">
                      <div>
                        <h2 className="text-sm font-semibold mb-1">
                          {subItem.title}
                        </h2>
                        <p className="text-[12px] text-gray-600 mb-2">
                          {subItem?.sub_title}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] mb-1">Starting From</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold">
                            ₹ {subItem?.price}
                          </span>
                          <button className="bg-[#A4243D] text-white px-4 py-2 rounded-full text-[12px] hover:bg-[#6d2e2e] transition-colors">
                            Shop Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
