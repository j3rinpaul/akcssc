// PricingCards.js file
import { title } from "@/components/primitives";
import React from "react";

const PricingCards = () => {

	const textGradientStyle = {
		background: "-webkit-linear-gradient(50deg, #FFFFFF, #17c964, #17c964,#FFFFFF)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	  };
  const cardData = [
	// {
	// 	image: "https://i.imgur.com/Hg0sUJP.png",
	// 	title: "Early Bird",
	// 	price: "$149",
	// 	features: [""],
	//   },
    
    {
      image: "https://i.imgur.com/pJNFEHR.png",
      title: "IEEE Member",
      price: " ",
      features: [""],
    },
	{
		image: "https://i.imgur.com/Ql4jRdB.png",
		title: "IEEE CS Member",
		price: " ",
		features: [""],
	  },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Non-IEEE Member",
      price: " ",
      features: [""],
    },
  ];
  return (
    <div className="w-full py-[10rem] lg:max-h-[25rem] px-4 " >
		<div className="flex justify-center pt-5 pb-5"> 
			<h1 className={title()} >Ticket - Early Bird</h1>
		</div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-slate-800`}
          >
            {/* <img
              className="w-20 mx-auto mt-[-3rem] "
              src={card.image}
              alt="/"
            /> */}
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`bg-[#00df9a] hover:text-[#00df9a] text-black hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
              Coming Soon
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
