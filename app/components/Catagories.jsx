"use client";
import imdos from "@/lib/imdos";
import React, { useEffect, useState } from "react";
const Catagories = () => {
  const [categories, setCategories] = useState(null);
  const getData = async () => {
    const data = await imdos.request("SELECT * FROM categories");
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="px-4 md:px-8 lg:px-[60px]">
      <h3 className="text-[#A4243D] font-semibold mb-2">Catagories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-3">
        {categories ? (
          categories.map((item, index) => (
            <div className="border rounded-lg border-[#4544444f]">
              <img
                key={index}
                src={process.env.NEXT_PUBLIC_FILE_PATH + item?.image}
                alt={item?.title ?? "Image"}
                className="rounded-lg aspect-square max-w-full max-h-full"
              />
            </div>
          ))
        ) : (
          // Skeleton loader when categories are loading
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-48 bg-gray-300 rounded-lg animate-pulse"
              ></div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Catagories;
