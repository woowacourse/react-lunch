import React from 'react';
import { restaurant } from '../utils/interfaces';
import '../styles/ItemList.css';
import Item from './Item';
import ModalPortal from './ModalPortal';
import ItemInformation from './ItemInformation';

interface Props {
  itemList: restaurant[];
}

interface State {
  item: restaurant | null;
}

class ItemList extends React.Component<Props, State> {
  modalRef: React.RefObject<HTMLDialogElement>;
  constructor(props: Props | Readonly<Props>) {
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
    this.setState({ item: selectedState });
  }

  closeEvent() {
    const current = this.modalRef.current;
    if (current) {
      this.setState({
        item: null,
      });
    }
  }

  render(): React.ReactNode {
    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list" onClick={this.ulOnClickListener}>
          {this.props.itemList.map(item => {
            return <Item key={item.id} restaurantItem={item} />;
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
