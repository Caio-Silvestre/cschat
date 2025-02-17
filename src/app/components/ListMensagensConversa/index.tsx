import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Paper,
  Container,
  Badge,
} from "@mui/material";
import { styled } from "@mui/system";
import { IoSend } from "react-icons/io5";
import { format } from "date-fns";

const ChatContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "90vh",
  backgroundColor: "#f5f5f5",
  borderRadius: "12px",
  overflow: "hidden",
}));

const MessagesBox = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: "20px",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "3px",
  },
});

const MessageBubble = styled(Paper)(({ isOutgoing }) => ({
  maxWidth: "70%",
  padding: "10px 15px",
  marginBottom: "10px",
  borderRadius: isOutgoing ? "20px 20px 0 20px" : "20px 20px 20px 0",
  backgroundColor: isOutgoing ? "#1976d2" : "#fff",
  color: isOutgoing ? "#fff" : "#000",
  alignSelf: isOutgoing ? "flex-end" : "flex-start",
  position: "relative",
  wordBreak: "break-word",
}));

const InputContainer = styled(Box)({
  padding: "20px",
  backgroundColor: "#fff",
  borderTop: "1px solid #eee",
});

const ChatApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How are you?",
      sender: "other",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 2,
      text: "I'm doing great, thanks for asking!",
      sender: "user",
      timestamp: new Date(Date.now() - 1800000),
    },
    {
      id: 3,
      text: "That's wonderful to hear!",
      sender: "other",
      timestamp: new Date(),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim().length === 0) return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  const handleTyping = (e) => {
    setNewMessage(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <Container maxWidth="md">
      <ChatContainer>
        <MessagesBox>
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems:
                  message.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                {message.sender === "other" && (
                  <Avatar
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                )}
                <MessageBubble
                  isOutgoing={message.sender === "user"}
                  elevation={1}
                >
                  <Typography variant="body1">{message.text}</Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      textAlign: "right",
                      mt: 0.5,
                      opacity: 0.7,
                    }}
                  >
                    {format(message.timestamp, "HH:mm")}
                  </Typography>
                </MessageBubble>
              </Box>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </MessagesBox>

        <InputContainer>
          <form onSubmit={handleSend}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
                value={newMessage}
                onChange={handleTyping}
                onKeyPress={handleKeyPress}
                size="small"
                InputProps={{
                  sx: { borderRadius: "24px" },
                }}
              />
              <IconButton
                color="primary"
                type="submit"
                disabled={!newMessage.trim()}
                sx={{
                  backgroundColor: newMessage.trim() ? "#1976d2" : "#e0e0e0",
                  color: newMessage.trim() ? "white" : "#757575",
                  "&:hover": {
                    backgroundColor: newMessage.trim() ? "#1565c0" : "#e0e0e0",
                  },
                }}
              >
                <IoSend />
              </IconButton>
            </Box>
          </form>
        </InputContainer>
      </ChatContainer>
    </Container>
  );
};

export default ChatApp;
