import React from "react";
import Text from "./Elements/Text";
import Table from "./Elements/Table";

const App = () => {
  return (
    <main className="h-screen w-screen flex justify-center items-center px-[164px] py-[80px] flex-col">
      <Text />
      <Table />
    </main>
  );
};

export default App;
