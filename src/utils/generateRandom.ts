export const generateRandomString = () => {
  const timestamp = Date.now().toString();

  const randomAlphanumeric = (length: number) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const randomPart = randomAlphanumeric(14);

  return `${timestamp}-${randomPart}`;
};
