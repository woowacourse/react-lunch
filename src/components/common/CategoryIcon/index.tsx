import { Component } from 'react';

import ChineseIcon from './ChineseIcon';
import KoreanIcon from './KoreanIcon';
import EtcIcon from './EtcIcon';
import AsianIcon from './AsianIcon';
import WesternIcon from './WesternIcon';
import JapaneseIcon from './JapaneseIcon';

interface Props {
  category: string;
}

class CategoryIcon extends Component<Props> {
  render() {
    switch (this.props.category) {
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
      case '기타':
        return <EtcIcon />;
    }
  }
}

export default CategoryIcon;
