import { useState } from "react";
import RestaurantFilter from "../RestaurantFilter/RestaurantFilter";
import {
  RestaurantFilterProps,
  RestaurantListProps,
  ModalProps,
} from "../types/types";
import RestaurantsList from "../RestaurantsList/RestaurantsList";
import Modal from "../Modal/Modal";

const Domain = () => {
  const [category, setCategory] = useState("전체");
  const [sorting, setSorting] = useState("이름순");
  const [restaurantId, setRestaurantId] = useState<number | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  const handleSortingChange = (sorting: string) => {
    setSorting(sorting);
  };

  const handleRestaurantIdChange = (restaurantId: number) => {
    setRestaurantId(restaurantId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const restaurantFilterProps: RestaurantFilterProps = {
    onCategoryChange: handleCategoryChange,
    onSortingChange: handleSortingChange,
  };

  const restaurantListProps: RestaurantListProps = {
    category,
    sorting,
    restaurantId,
    changeRestaurantId: handleRestaurantIdChange,
  };

  const modalProps: ModalProps = {
    restaurantId,
    handleClose: handleCloseModal,
    isOpen: isModalOpen,
  };

  return (
    <>
      <RestaurantFilter {...restaurantFilterProps} />
      <RestaurantsList {...restaurantListProps} />
      {isModalOpen && <Modal {...modalProps} />}
    </>
  );
};

export default Domain;
