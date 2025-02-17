"use client";
import React, { Fragment, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Conversa } from "./interfaces";
import axios from "axios";

interface Dono {
  id: string;
  nome: string;
  imagem: string;
}

interface Conversa {
  conversa_id: string;
  dono: Dono;
  inicio: string;
  ultimo_update: string;
  mensagens_total: number;
}

const ListConversa: React.FC = () => {
  const [dadosConversa, setDadosCovnersa] = useState<Conversa | null>(null);
  const getConversa = () => {
    axios
      .get<Conversa>("/conversa.json")
      .then((response) => {
        setDadosCovnersa(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar o JSON:", error);
      });
  };
  useEffect(() => getConversa(), []);
  {
    console.log({ dadosConversa });
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {dadosConversa?.map((conversa: Conversa) => (
        <Fragment key={conversa.dono.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={conversa.dono.nome} src={conversa.dono.imagem} />
            </ListItemAvatar>
            <ListItemText
              primary={conversa.dono.nome}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    {conversa.dono.nome} {/* Nome do participante */}
                  </Typography>
                  {" — Participante na conversa"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
};
export default ListConversa;
