import styled from 'styled-components';
import { SelectKind } from '../types';
import { $ } from '../utils/domSelector';

const Header = () => {
  const initSelectOption = () => {
    const categorySelectBox = $<HTMLSelectElement>(`select[name="${SelectKind.category}"]`);
    categorySelectBox.selectedIndex = 0;
    categorySelectBox.dispatchEvent(new Event('change', { bubbles: true }));

    const orderSelectBox = $<HTMLSelectElement>(`select[name="${SelectKind.order}"]`);
    orderSelectBox.selectedIndex = 0;
    orderSelectBox.dispatchEvent(new Event('change', { bubbles: true }));
  };

  return (
    <HeaderWrapper>
      <h3 onClick={() => initSelectOption()} id="header_title">
        점심 뭐먹지
      </h3>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;

  position: fixed;
  top: 0;

  padding: 0 16px;
  background: var(--primary-color);

  & > h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: var(--grey-100);

    cursor: pointer;
    :active {
      transform: scale(1.02);
    }
  }
`;

export default Header;
