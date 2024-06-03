import React, { useState } from "react";
import { PiArrowRightBold } from "react-icons/pi";

export const Services = () => {
  const imageContainer = [
    {
      id: 0,
      image:
        "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_640.jpg",
      name: "PRODUCTS",
    },
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2023/01/03/16/00/dog-7694676_1280.jpg",
      name: "GUIDES",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2024/03/22/16/58/lighthouse-8650151_1280.jpg",
      name: "RAGES",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2023/11/18/19/06/futuristic-home-8397004_1280.jpg",
      name: "TREASURES",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2024/03/15/18/53/magnolia-flower-8635583_1280.jpg",
      name: "UNIVERSE",
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="bg-customGray w-full text-white flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold py-4 w-full text-center">
        What we Offer?
      </h3>
      <div className="flex flex-col lg:flex-row w-full bg-customWhite text-customGreen p-8">
        <ul className="w-full lg:w-2/5 flex flex-col justify-center items-start text-3xl md:text-5xl font-bold px-6 mb-8 lg:mb-0">
          {imageContainer.map((image) => (
            <li
              key={image.id}
              className={`group relative cursor-pointer flex flex-end justify-center py-[5px]  ${
                imageIndex === image.id ? "text-customGreen" : ""
              }`}
              onClick={() => setImageIndex(image.id)}
            >
              <span>{image.name}</span>

              <span
                className={`font-mono transform ${
                  imageIndex === image.id ? "-rotate-45" : ""
                } transition-transform duration-300 inline-block`}
              >
                <PiArrowRightBold />
              </span>
              <span
                className={`absolute w-[98%] top-[92%] h-[6px] ${
                  imageIndex === image.id ? "bg-customGreen" : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>
        <div className="w-full lg:w-3/5 flex justify-center items-center">
          <img
            className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            src={imageContainer[imageIndex].image}
            alt={imageContainer[imageIndex].name}
          />
        </div>
      </div>
    </div>
  );
};
