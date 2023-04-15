import AsianIcon from './AsianIcon';
import ChineseIcon from './ChineseIcon';
import EtcIcon from './EtcIcon';
import JapaneseIcon from './JapaneseIcon';
import KoreanIcon from './KoreanIcon';
import WesternIcon from './WesternIcon';

interface Props {
  category: string;
}

const CategoryIcon = ({ category }: Props) => {
  switch (category) {
    case '한식':
      return <KoreanIcon />;
    case '중식':
      return <ChineseIcon />;
    case '일식':
      return <JapaneseIcon />;
    case '양식':
      return <WesternIcon />;
    case '아시안':
      return <AsianIcon />;
    default:
      return <EtcIcon />;
  }
};

export default CategoryIcon;
