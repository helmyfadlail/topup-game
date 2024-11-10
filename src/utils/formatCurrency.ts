export const formatCurrency = (value: number, style: Intl.NumberFormatOptions["style"] = "currency") => {
  if (!value) return null;

  return Intl.NumberFormat("id-ID", { currency: "IDR", style }).format(value);
};
