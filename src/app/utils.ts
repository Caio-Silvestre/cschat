export const dataFormatada = (dataIso: string) =>
  new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Para usar o formato de 24h
  }).format(new Date(dataIso));
