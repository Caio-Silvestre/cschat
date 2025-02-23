import ListConversa from "./components/ListConversa";
import React from "react";
import ListMensagem from "./components/ListMensagens";
import ChatTextArea from "./components/ChatTextArea";

export default function Home() {
  return (
    <div className="h-[90svh]">
      {/* Grid com duas colunas */}
      <div className="flex flex-row w-full">
        {/* Coluna 1 (1/4) */}
        <div className="w-[20%] p-3">
          <ListConversa />
        </div>

        {/* Coluna 2 (3/4) */}
        <div className="w-[80%] p-3">
          <div className="h-[70svh] ">
            <ListMensagem />
          </div>
          <div className="mt-[1svh] h-[19svh]">
            <ChatTextArea />
          </div>
        </div>
      </div>
    </div>
  );
}
