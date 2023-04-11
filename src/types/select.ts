export interface SelectPropsType {
  name: SelectNameType;
  options: string[];
  handleSelect: HandleSelect;
}

export type HandleSelect = (
  type: SelectNameType,
  selectedOption: string
) => void;

type SelectNameType = "category" | "sorting";
