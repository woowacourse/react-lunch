import { Component, createRef } from 'react';
import RestaurantManager from '../domain/RestaurantManager';
import { Category } from '../types/RestaurantDetail';

interface ModalProps {
  category: Category;
  sort: string;
  restaurantID: number;
}

export default class Modal extends Component<ModalProps> {
  dialogRef = createRef<HTMLDialogElement>();

  constructor(props: ModalProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Readonly<ModalProps>): boolean {
    if (
      this.props.category !== nextProps.category ||
      this.props.sort !== nextProps.sort
    ) {
      return false;
    }
    return true;
  }

  componentDidUpdate(): void {
    this.dialogRef.current?.showModal();
  }

  closeModal = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element && event.target.nodeName === 'DIALOG') {
      this.dialogRef.current?.close();
    }
  };

  render() {
    const restaurantItem = RestaurantManager.getRestaurantByID(
      this.props.restaurantID
    );

    if (!restaurantItem) return;

    const { id, category, name, description, distance, link } = restaurantItem;

    return (
      <dialog id={String(id)} ref={this.dialogRef} onClick={this.closeModal}>
        <div className="modal-container">
          <div className="restaurant__category">
            <img src={category} alt={category} className="category-icon" />
          </div>
          <div className="modal-header">
            <h3 className="modal-title text-title">{name}</h3>
          </div>
          <div className="modal-item">
            <span className="restaurant__distance text-body">
              캠퍼스부터 {distance}분 내
            </span>
          </div>
          <div className="modal-item">
            <p>{description}</p>
          </div>
          {link && (
            <div className="modal-item">
              <a href="${link}" target="_blank">
                {link}
              </a>
            </div>
          )}
          <form method="dialog">
            <button
              id="cancel-modal-button"
              className="button button--primary text-caption"
            >
              닫기
            </button>
          </form>
        </div>
      </dialog>
    );
  }
}
