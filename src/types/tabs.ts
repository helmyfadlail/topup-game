export interface TabValue {
  display: string;
  value: string;
}

export interface TabsProps {
  data: TabValue[];
  selected: string;
  handleSelect: (value: string) => void;
}
