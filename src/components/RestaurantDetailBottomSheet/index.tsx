import { useEffect } from 'react';
import { Restaurant } from '../../types/restaurants';
import CategoryImg from '../CategoryImg';
import St from './styled';

interface RestaurantDetailBottomSheetProps {
  restaurant: Restaurant;
  close: VoidFunction;
}

export default function RestaurantDetailBottomSheet(
  props: RestaurantDetailBottomSheetProps
) {
  const {
    restaurant: { title, distance, detail, link, category },
    close,
  } = props;

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    window.addEventListener('keyup', escHandler);

    return () => {
      window.removeEventListener('keyup', escHandler);
    };
  }, []);
  return (
    <>
      <St.Backdrop onClick={close} />
      <St.BottomSheet>
        <CategoryImg category={category} />
        <St.Detail>
          <St.Title>{title}</St.Title>
          <St.Distance>캠퍼스부터 {distance}분 이내</St.Distance>
          <St.Description>{detail}</St.Description>
          <St.Link href={link}>{link}</St.Link>
          <St.Button onClick={close}>닫기</St.Button>
        </St.Detail>
      </St.BottomSheet>
    </>
  );
}
