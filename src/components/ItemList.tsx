import React, { useState, useRef } from 'react';
import { restaurant } from '../utils/interfaces';
import '../styles/ItemList.css';
import Item from './Item';
import ModalPortal from './ModalPortal';
import ItemInformation from './ItemInformation';

interface Props {
  itemList: restaurant[];
}

interface State {
  modalItem: restaurant | null;
}

const ItemList: React.FC<Props> = props => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalInformation, setmodalInformation] = useState<State>({ modalItem: null });

  const ulOnClickListener = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!(event.target instanceof HTMLElement)) return;

    const closestLi = event.target.closest('li');
    const elementId = Number(closestLi?.dataset.id);

    const selectedState = props.itemList.find(({ id }) => id === elementId) ?? null;
    setmodalInformation({ modalItem: selectedState });
  };

  const closeEvent = () => {
    const current = modalRef.current;
    if (current) {
      initializeItemValue();
    }
  };

  const initializeItemValue = () => {
    setmodalInformation({
      modalItem: null,
    });
  };

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list" onClick={ulOnClickListener}>
        {props.itemList.map(item => {
          return <Item key={item.id} restaurantItem={item} />;
        })}
      </ul>

      {modalInformation.modalItem && (
        <ModalPortal closeEvent={closeEvent} dialogRef={modalRef}>
          <ItemInformation restaurant={modalInformation.modalItem} closeEvent={closeEvent} />
        </ModalPortal>
      )}
    </section>
  );
};

export default ItemList;
