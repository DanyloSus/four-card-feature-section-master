import React from "react";

const Block = ({ h, p, img, color }) => {
  return (
    <div className="relative h-[250px] w-[350px] rounded-xl overflow-hidden shadow-xl p-[32px]">
      <div className={`w-full bg-${color} h-[4px] absolute top-0 left-0`}></div>
      <h1 className="font-bold text-xl text-very-dark-blue mb-3">{h}</h1>
      <p className="text-grayish-blue text-sm">{p}</p>
      <img
        src={`./${img}`}
        alt={img}
        className="absolute right-[32px] bottom-[32px]"
      />
    </div>
  );
};

export default Block;
