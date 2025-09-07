import React from "react";
import InfoCard from "./InfoCard.jsx";
import { cardsData } from "../../constants/feature.constant.js";

function Feature() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl">
          Everything you need to stay organized
        </h1>
        <p className="mt-4 text-gray-500 text-base sm:text-lg">
          Discover the powerful features that make tuduX the perfect companion for
          your productivity journey.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            icon={card.icon} // component reference, InfoCard renders it
            content={card.content}
            bulletPoints={card.bulletPoints}
          />
        ))}
      </div>
    </div>
  );
}

export default Feature;
