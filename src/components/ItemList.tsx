import React from 'react';
import { restaurant } from '../utils/interfaces';
import '../styles/ItemList.css';
import Item from './Item';

type itemListProps = {
  itemList: restaurant[];
};

class ItemList extends React.Component<itemListProps> {
  render(): React.ReactNode {
    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {this.props.itemList.map(item => {
            return <Item key={item.id} props={item} />;
          })}
        </ul>
      </section>
    );
  }
}

export default ItemList;
