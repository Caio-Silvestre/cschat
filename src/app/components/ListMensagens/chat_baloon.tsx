import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const ChatBaloon = styled(Box)<{ tipo?: "entrada" | "saida" }>(
  ({ theme, tipo }) => ({
    width: "fit-content",
    padding: theme.spacing(1.5),
    borderRadius: "16px",
    fontSize: "14px",
    lineHeight: "1.4",
    wordBreak: "break-word",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    alignSelf: tipo === "saida" ? "flex-end" : "flex-start",
    position: "relative",

    "&::after": {
      content: '""',
      position: "absolute",
      width: "10px",
      height: "10px",
      backgroundColor: theme.palette.primary.main,
      clipPath: "polygon(100% 0, 0 0, 50% 100%)",
      left: tipo === "saida" ? "unset" : "15px",
      right: tipo === "saida" ? "15px" : "unset",
    },
  })
);

export default ChatBaloon;
