"use client";
import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatTextArea = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleSend = () => {
    if (value.trim()) {
      console.log("Mensagem enviada:", value);
      setValue(""); // Limpa o campo após enviar
    }
  };

  // Função para lidar com o envio ao pressionar Enter (sem shift)
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        overflow: "auto",
        borderRadius: "5px",
        padding: "1%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "flex-end",
        }}
      >
        <TextField
          fullWidth
          multiline
          minRows={6}
          maxRows={6}
          variant="outlined"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={value}
          placeholder="Digite sua mensagem..."
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        />

        <IconButton
          onClick={handleSend}
          //loading={sending}
          sx={{
            cursor: "pointer",
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            width: 56,
            height: 56,
            borderRadius: "10px",
          }}
          disabled={!value.trim()}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatTextArea;
{
  /* <Box
sx={{
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  overflow: "auto",
  borderRadius: "5px",
  padding: "1%",
}}
>
<TextField
  fullWidth
  multiline
  minRows={6}
  maxRows={6}
  variant="outlined"
  onChange={handleChange}
  value={value}
  placeholder="Digite sua mensagem..."
/>
</Box> */
}
