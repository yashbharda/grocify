import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {

    const leftValues = value.slice(0, 2).map(item => {
        return(
            <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
                <div>
                    <span className="flex items-center justify-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{item.icon}</span>
                </div>
                <div className="md:text-right">
                    <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 text-justify mt-2">{item.para}</p>
                </div>
            </div>
        )
    })
    const rightValues = value.slice(2).map(item => {
        return(
            <div key={item.id} className="flex items-center gap-7">
                <div>
                    <span className="flex items-center justify-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{item.icon}</span>
                </div>
                <div>
                    <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
                    <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>
            </div>
        )
    })

  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-10 md:py-20">
        <Heading highlight="Our" heading="Value" />

        <div className="flex md:flex-row flex-col md:gap-5 gap-10 mt-10 md:mt-15">
          {/* Left Values  */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>

          <div className="md:flex w-1/2 hidden">
            <img src={Basket} />
          </div>

          {/* Right values  */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "We build trust by providing fresh, high-quality products and reliable service to our customers.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "We carefully select and deliver fresh fruits and vegetables to keep every bite healthy and delicious.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "We follow high food safety standards to ensure that every product is clean, safe, and healthy for you.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Our organic products are grown naturally without harmful chemicals, giving you healthy and nutritious food.",
    icon: <FaSeedling />,
  },
];
