export const formatDate = (value: string) => {
  if (!value || value === "null") {
    return null;
  }
  const date = new Date(value);
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const format = `${date.getDate()}/${month}/${date.getFullYear()}`;
  return format;
};

export const formatFullDate = (value: string) => {
  if (!value || value === "null") {
    return null;
  }
  const date = new Date(value);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  const format = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${hours}:${minutes}`;
  return format;
};
