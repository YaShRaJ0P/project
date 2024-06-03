import React, { useState } from "react";

export const Services = () => {
  const imageContainer = [
    {
      id: 0,
      image:
        "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_640.jpg",
      name: "abc",
    },
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2023/01/03/16/00/dog-7694676_1280.jpg",
      name: "def",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2024/03/22/16/58/lighthouse-8650151_1280.jpg",
      name: "ghi",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2023/11/18/19/06/futuristic-home-8397004_1280.jpg",
      name: "jkl",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2024/03/15/18/53/magnolia-flower-8635583_1280.jpg",
      name: "mno",
    },
  ];
  const [imageIndex, setimageIndex] = useState(0);
  return (
    <div className="bg-customGray w-full text-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold py-2 w-full grid place-items-center">
        What we Offer?
      </h3>
      <div className="flex flex-row w-full bg-customWhite text-customGreen p-8">
        <ul className="w-2/5 h-96 flex flex-col justify-center items-start px-6 text-5xl">
          {imageContainer.map((image) => {
            return (
              <li
                key={image.id}
                className={`group ${
                  imageIndex === image.id && "underline"
                } cursor-pointer`}
                onClick={() => {
                  setimageIndex(image.id);
                }}
              >
                {image.name}
                <div className="font-mono group-hover:rotate-90 inline">→</div>
              </li>
            );
          })}
        </ul>
        <div className="w-3/5">
          <img
            className="w-full aspect-square h-96"
            src={`${imageContainer[imageIndex].image}`}
            alt="Abc"
          />
        </div>
      </div>
    </div>
  );
};
