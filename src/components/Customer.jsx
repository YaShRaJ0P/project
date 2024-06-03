import React, { useState } from "react";
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

export const Customer = () => {
  const reviews = [
    {
      id: 0,
      name: "DEF",
      image:
        "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_640.jpg",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eudignissim aliquam, nunc nunc luctus nunc, eu ultricies",
    },
    {
      id: 1,
      name: "Abc",
      image:
        "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_640.jpg",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eudignissim aliquam, nunc nunc luctus nunc, eu ultricies",
    },
    {
      id: 2,
      name: "XYZ",
      image:
        "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_640.jpg",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eudignissim aliquam, nunc nunc luctus nunc, eu ultricies",
    },
  ];

  const [currentCustomerReviewIndex, setCurrentCustomerReviewIndex] =
    useState(0);

  return (
    <div className="text-customWhite flex flex-col justify-center items-center w-full bg-customGray">
      <h3 className="text-3xl font-bold py-2 w-full grid place-items-center">
        What our Customers Think?
      </h3>
      <div className="bg-customWhite text-customBlack w-full p-8">
        <div className="max-w-2xl relative mx-auto bg-customWhite rounded-lg shadow-lg border-2 border-customGreen">
          <div className="flex items-center p-4">
            <img
              src={`${reviews[currentCustomerReviewIndex].image}`}
              alt={`${reviews[currentCustomerReviewIndex].name}`}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">
                {reviews[currentCustomerReviewIndex].name}
              </h2>
            </div>
          </div>
          <div className="px-4 py-2 bg-gray-100 rounded-b-md">
            <p className="text-gray-700">
              {reviews[currentCustomerReviewIndex].review}
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentCustomerReviewIndex(currentCustomerReviewIndex - 1);
            }}
            className="absolute top-1/2 -left-[3%] rounded-full p-2 size-8 text-xl bg-customGreen flex items-center justify-center text-customWhite disabled:opacity-0"
            disabled={currentCustomerReviewIndex === 0}
          >
            <PiCaretLeftBold />
          </button>
          <button
            onClick={() => {
              setCurrentCustomerReviewIndex(currentCustomerReviewIndex + 1);
            }}
            className="absolute top-1/2 -right-[3%] rounded-full p-2 size-8 text-xl bg-customGreen flex items-center justify-center text-customWhite disabled:opacity-0"
            disabled={currentCustomerReviewIndex === reviews.length - 1}
          >
            <PiCaretRightBold />
          </button>
        </div>
      </div>
    </div>
  );
};
