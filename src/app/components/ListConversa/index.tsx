"use client";
import React, { Fragment, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { dataFormatada } from "@/app/utils";
import { Conversa } from "./interfaces";
import { ListItemButton } from "@mui/material";

const ListConversa: React.FC = () => {
  const [dadosConversa, setDadosConversa] = useState<Conversa[]>([]);

  const getConversa = () => {
    axios
      .get<Conversa[]>("/conversa.json")
      .then((response) => {
        setDadosConversa(response.data);
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
    <List
      sx={{
        width: "100%",
        maxHeight: "90vh",
        maxWidth: 360,
        bgcolor: "background.paper",
        overflow: "auto",
      }}
    >
      {dadosConversa?.map((conversa: Conversa) => (
        <Fragment key={conversa.dono.id}>
          <ListItemButton
            alignItems="flex-start"
            selected={false}
            onClick={(event) => {
              event.preventDefault();
              console.log("Click conversa");
            }}
          >
            <ListItemAvatar>
              <Avatar alt={conversa.dono.nome} src={conversa.dono.imagem} />
            </ListItemAvatar>
            <ListItemText
              primary={conversa.dono.nome}
              sx={{ color: "text.primary" }}
              secondary={
                <Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    {dataFormatada(conversa.ultimo_update)}{" "}
                    {/* Nome do participante */}
                  </Typography>
                  {" — Última mensagem"}
                </Fragment>
              }
            />
          </ListItemButton>

          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
};
export default ListConversa;
