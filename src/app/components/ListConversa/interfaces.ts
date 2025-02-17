// src/types/index.ts

// Interface para o participante da conversa
export interface Participante {
  id: string;
  nome: string;
  imagem: string;
}

// Interface para as mensagens
export interface Mensagem {
  id: number;
  tipo: "entrada" | "saida";
  remetente: string;
  imagem: string;
  mensagem: string;
  data_envio: string;
}

// Interface para as informações gerais da conversa
export interface Conversa {
  conversa_id: string;
  participantes: Participante[];
  inicio: string;
  ultimo_update: string;
  mensagens_total: number;
}
