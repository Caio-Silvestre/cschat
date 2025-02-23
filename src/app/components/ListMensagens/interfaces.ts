export interface Mensagem {
  id: number;
  tipo: "entrada" | "saida";
  remetente: string;
  imagem: string;
  mensagem: string;
  data_envio: string; // Ou Date se quiser trabalhar com objetos Date
}
