import ChineseIcon from './ChineseIcon';
import KoreanIcon from './KoreanIcon';
import EtcIcon from './EtcIcon';
import AsianIcon from './AsianIcon';
import WesternIcon from './WesternIcon';
import JapaneseIcon from './JapaneseIcon';

interface Props {
  category: string;
}

export default function CategoryIcon(props: Props) {
  switch (props.category) {
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
}
