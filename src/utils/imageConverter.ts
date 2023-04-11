import japanese from "../assets/japan.png";
import chinese from "../assets/china.png";
import korean from "../assets/korea.png";
import asian from "../assets/asian.png";
import western from "../assets/japan.png";
import etc from "../assets/etc.png";
import { Category } from "../types/restaurant";

export const convertImage = (category: Category) => {
  switch (category) {
    case "일식":
      return japanese;
    case "양식":
      return western;
    case "한식":
      return korean;
    case "아시안":
      return asian;
    case "중식":
      return chinese;
    default:
      return etc;
  }
};
