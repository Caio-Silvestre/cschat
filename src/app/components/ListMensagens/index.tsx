"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

import { Mensagem } from "./interfaces";
import { Box } from "@mui/material";
import ChatBaloon from "./chat_baloon";
import ChatBaloonOut from "./chat_baloon_out";
import { dataFormatada } from "@/app/utils";

const ListMensagem: React.FC = () => {
  const [dadosMensagem, setDadosMensagem] = useState<Mensagem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getMensagens = () => {
    axios
      .get<Mensagem[]>("/mensagens.json")
      .then((response) => {
        const data = response.data;
        setDadosMensagem(data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar o JSON:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMensagens();
    console.log({ dadosMensagem });
  }, []);

  return loading ? (
    <>Carregando</>
  ) : (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        overflow: "auto",
        borderRadius: "5px",
        padding: "1%",
      }}
      className="flex flex-col-reverse overflow-y-hidden"
    >
      {dadosMensagem.map((mensagem) =>
        mensagem.tipo === "saida" ? (
          <div key={mensagem.id} className="flex flex-row-reverse">
            <div className="flex flex-col items-end">
              <ChatBaloonOut key={mensagem.id}>
                <div id="side" className={`flex flex-row-reverse`}>
                  <ListItemAvatar className="ml-2">
                    <Avatar alt={mensagem.remetente} src={mensagem.imagem} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={mensagem.remetente}
                    secondary={mensagem.mensagem}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: (theme) => theme.palette.text.secondary,
                      },
                      "& .MuiListItemText-secondary": {
                        color: (theme) => theme.palette.text.primary,
                      },
                    }}
                  />
                </div>
              </ChatBaloonOut>{" "}
              <small className="my-2 mr-5">
                {mensagem.remetente} - {dataFormatada(mensagem.data_envio)}
              </small>
            </div>
          </div>
        ) : (
          <div key={mensagem.id} className="flex flex-row">
            <div className="flex flex-col">
              <ChatBaloon>
                <div id="side" className={`flex `}>
                  <ListItemAvatar>
                    <Avatar alt={mensagem.remetente} src={mensagem.imagem} />
                  </ListItemAvatar>
                  <ListItemText
                    className="text-start ml-2"
                    primary={mensagem.remetente}
                    secondary={mensagem.mensagem}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: (theme) => theme.palette.text.secondary,
                      },
                      "& .MuiListItemText-secondary": {
                        color: (theme) => theme.palette.text.primary,
                      },
                    }}
                  />
                </div>
              </ChatBaloon>
              <small className=" text-start my-2 ml-5">
                {mensagem.remetente} - {dataFormatada(mensagem.data_envio)}
              </small>
            </div>
          </div>
        )
      )}
    </Box>
  );
};

export default ListMensagem;
