"use client";
import imdos from "@/lib/imdos";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(null);
  const getData = async () => {
    const data = await imdos.request(`SELECT 
    categories.title AS category_title,
    products.title AS product_title,
    products.sub_title,
    products.description,
    products.price,
    products.image
FROM 
    categories
INNER JOIN 
    products ON categories.id = products.category_id;
`);
    const groupedData = data.reduce((acc, product) => {
      const category = acc.find(
        (item) => item.title === product.category_title
      );

      if (category) {
        category.items.push({
          title: product.product_title,
          sub_title: product.sub_title,
          price: product.price,
          image: product.image,
        });
      } else {
        acc.push({
          title: product.category_title,
          items: [
            {
              title: product.product_title,
              sub_title: product.sub_title,
              price: product.price,
              image: product.image,
            },
          ],
        });
      }

      return acc;
    }, []);
    setProducts(groupedData);
    console.log(groupedData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-[60px]">
      {products?.map((item, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <div className="flex justify-start">
              <h3 className="text-[#A4243D] font-semibold mb-2">
                {item?.title}
              </h3>
            </div>
            <div className="w-full mx-auto">
              <div className="flex overflow-x-scroll scroll-hidden items-start w-full h-full space-x-5 py-5 lg:pb-20">
                {item.items?.map((subItem, index) => (
                  <div
                    className="min-w-[70%] md:min-w-[270px] md:max-w-[250px] shadow-xl border border-[#00000029] rounded-md overflow-hidden flex flex-col"
                    key={index}
                  >
                    <div className="h-1/2 bg-[#f9f5f1] flex items-center justify-center">
                      <img
                        src={process.env.NEXT_PUBLIC_FILE_PATH + subItem?.image}
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
                          <a
                            href={`https://wa.me/918720966242?text=Hi%2C%20I%27m%20interested%20in%20${subItem?.title}`}
                            className="bg-[#A4243D] text-white px-4 py-2 rounded-full text-[12px] hover:bg-[#6d2e2e] transition-colors"
                          >
                            Shop Now
                          </a>
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
