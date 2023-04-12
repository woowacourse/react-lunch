import React from 'react';
import { restaurant } from '../utils/interfaces';
import '../styles/ItemList.css';
import Item from './Item';
import ModalPortal from './ModalPortal';
import ItemInformation from './ItemInformation';

type itemListProps = {
  itemList: restaurant[];
};

type itemListState = {
  item: restaurant | null;
};

class ItemList extends React.Component<itemListProps, itemListState> {
  modalRef: React.RefObject<HTMLDialogElement>;
  constructor(props: itemListProps | Readonly<itemListProps>) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      item: null,
    };

    this.ulOnClickListener = this.ulOnClickListener.bind(this);
    this.closeEvent = this.closeEvent.bind(this);
  }

  ulOnClickListener(event: React.MouseEvent<HTMLUListElement>) {
    if (!(event.target instanceof HTMLElement)) return;

    const closestLi = event.target.closest('li');
    const elementId = Number(closestLi?.dataset.id);

    const selectedState = this.props.itemList.find(({ id }) => id === elementId) ?? null;
    if (selectedState) {
      this.modalRef.current?.showModal();
      this.setState({ item: selectedState });
    }
  }

  closeEvent() {
    this.modalRef.current?.close();
    this.setState({
      item: null,
    });
  }

  render(): React.ReactNode {
    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list" onClick={this.ulOnClickListener}>
          {this.props.itemList.map(item => {
            return <Item key={item.id} props={item} />;
          })}
        </ul>

        {this.state.item && (
          <ModalPortal closeEvent={this.closeEvent} dialogRef={this.modalRef}>
            <ItemInformation restaurant={this.state.item} closeEvent={this.closeEvent} />
          </ModalPortal>
        )}
      </section>
    );
  }
}

export default ItemList;
