import ListConversa from "./components/ListConversa";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* Grid com duas colunas */}
      <div className=" bg-green-500 grid grid-cols-4 gap-4 w-full">
        {/* Coluna 1 (1/4) */}
        <div className="col-span-1 p-3 text-white">
          <ListConversa />
        </div>

        {/* Coluna 2 (3/4) */}
        <div className="col-span-3 p-4 text-white">
          <h2>Coluna 2</h2>
          <p>Conteúdo da coluna 2 (3/4 da largura)</p>
        </div>
      </div>
    </div>
  );
}
