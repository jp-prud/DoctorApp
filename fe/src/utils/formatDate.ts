const FORMAT_DATE_OPTIONS = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

export function formatDate(date: string) {
  const currentDate = new Date(date);
  return `${currentDate.toLocaleDateString("pt-BR", FORMAT_DATE_OPTIONS)}`;
}
