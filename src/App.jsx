import React from "react";
import Text from "./Elements/Text";
import Table from "./Elements/Table";

const App = () => {
  return (
    <main className="h-screen w-screen flex justify-center some:justify-between items-center px-[164px] py-[80px] some:pt-[80px] some:pb-0 flex-col overflow-y-auto overflow-x-hidden">
      <Text />
      <Table />
    </main>
  );
};

export default App;
