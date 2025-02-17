export interface Participante {
  id: string;
  nome: string;
  imagem: string;
}

export interface Mensagem {
  id: number;
  tipo: "entrada" | "saida";
  remetente: string;
  imagem: string;
  mensagem: string;
  data_envio: string;
}

export interface Dono {
  id: string;
  nome: string;
  imagem: string;
}

export interface Conversa {
  conversa_id: string;
  dono: Dono;
  inicio: string;
  ultimo_update: string;
  mensagens_total: number;
}
