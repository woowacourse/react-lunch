import React from 'react';
import { Restaurant } from '../utils/interfaces';
import '../styles/ItemList.css';
import Item from './Item';
import ModalPortal from './ModalPortal';
import ItemInformation from './ItemInformation';
import useModal from '../hooks/useModal';

interface Props {
  itemList: Restaurant[];
}

function ItemList({ itemList }: Props) {
  const { modalRef, modalContent, setModalContent } = useModal<Restaurant>();

  const ulOnClickListener = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!(event.target instanceof HTMLElement)) return;

    const closestLi = event.target.closest('li');
    const elementId = Number(closestLi?.dataset.id);

    const selectedState = itemList.find(({ id }) => id === elementId) ?? null;
    setModalContent(selectedState);
  };

  const closeEvent = () => {
    setModalContent(null);
  };

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list" onClick={ulOnClickListener}>
        {itemList.map(item => {
          return <Item key={item.id} restaurant={item} />;
        })}
      </ul>

      <ModalPortal closeEvent={closeEvent} dialogRef={modalRef}>
        <ItemInformation restaurant={modalContent} closeEvent={closeEvent} />
      </ModalPortal>
    </section>
  );
}

export default ItemList;
