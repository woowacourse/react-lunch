import React, { useRef, useState } from 'react';
import { restaurant } from '../utils/interfaces';
import '../styles/ItemList.css';
import Item from './Item';
import ModalPortal from './ModalPortal';
import ItemInformation from './ItemInformation';

interface Props {
  itemList: restaurant[];
}

function ItemList({ itemList }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [specificItem, setSpecificItem] = useState<restaurant | null>(null);

  const ulOnClickListener = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!(event.target instanceof HTMLElement)) return;

    const closestLi = event.target.closest('li');
    const elementId = Number(closestLi?.dataset.id);

    const selectedState = itemList.find(({ id }) => id === elementId) ?? null;
    setSpecificItem(selectedState);
  };

  const closeEvent = () => {
    const current = modalRef.current;
    if (current) {
      setSpecificItem(null);
    }
  };

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list" onClick={ulOnClickListener}>
        {itemList.map(item => {
          return <Item key={item.id} restaurant={item} />;
        })}
      </ul>

      {specificItem && (
        <ModalPortal closeEvent={closeEvent} dialogRef={modalRef}>
          <ItemInformation restaurant={specificItem} closeEvent={closeEvent} />
        </ModalPortal>
      )}
    </section>
  );
}

export default ItemList;
