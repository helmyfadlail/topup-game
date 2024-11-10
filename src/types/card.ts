import { Item } from "./response";

export interface FormUserTypes {
  error: boolean;
  loading: boolean;
  values: { userId: string; zoneId: string; whatsappNumber: string };
}

export interface CardPaymentProps {
  selected: string;
  name: string;
  pathImg: string;
  tax: number;
  collapsed: boolean;
  handleSelected: (select: string) => void;
}

export interface CardDiamondProps extends Partial<Item> {
  handleSelectDiamond: (select: number) => void;
  selectItem: number;
  discount: number;
}

export interface CardUserIDProps {
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formState: FormUserTypes;
}
