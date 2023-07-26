import React from "react";
import Block from "./Block";

const Table = () => {
  return (
    <section className="flex justify-center items-center min-w-full min-h-max gap-6 some:flex-col some:mb-[80px] ">
      <Block
        h="Supervisor"
        p="Monitors activity to identify project roodblocks"
        color="cyan"
        img="icon-supervisor.svg"
      />
      <div className="flex flex-col  gap-6 relative">
        <Block
          h="Team Builder"
          p="Scans our talent network to create the optimal toom for your project"
          color="red"
          img="icon-team-builder.svg"
        />
        <Block
          h="Karma"
          p="Regularly evaluates our talent to ensure
          quality"
          color="orange"
          img="icon-karma.svg"
        />
      </div>
      <Block
        h="Calculator"
        p="Uses data from past projects to provide better delivery estimates"
        color="blue"
        img="icon-calculator.svg"
      />
    </section>
  );
};

export default Table;
