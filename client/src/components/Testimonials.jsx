import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonials = () => {
  return (
    <div className="flex flex-col items center px-6 md:px-16 lg:px-24 pt-20 pb-30 bg-slate-50">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travellers consistently choose QuickStay for their exclusive and luxurious accomodations around the world"
      />

      <div className="flex flex-wrap items-center gap-6 mt-20">
        {testimonials.map((Testimonials) => (
          <div key={Testimonials.id} className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={Testimonials.image}
                alt={Testimonials.name}
              />
              <div>
                <p className="font-playfair text-xl">{Testimonials.name}</p>
                <p className="text-gray-500">{Testimonials.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <StarRating />
            </div>
            <p className="text-gray-500 max-w-90 mt-4">
              "{Testimonials.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
