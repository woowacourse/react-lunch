import styled from "styled-components";
import { Restaurant } from "../types/restaurant";
import { convertImage } from "../utils/imageConverter";

interface ItemModalProps {
  restaurant: Restaurant;
}

export const ItemModalContent = ({ restaurant }: ItemModalProps) => {
  const { category, takingTime, name, link, description } = restaurant;

  return (
    <>
      <ModalIcon>
        <Image src={convertImage(category)} alt={category} />
      </ModalIcon>
      <Information>
        <Name>{name}</Name>
        <TakingTime>캠퍼스부터 {takingTime}분 내</TakingTime>
        <Description>{description}</Description>
        <Link target="_blank" href={link}>
          {link}
        </Link>
      </Information>
    </>
  );
};

const ModalIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lighten};
`;

const Image = styled.img``;

const Information = styled.div`
  height: 70%;
`;

const Name = styled.h3`
  margin: 20px 0 16px 0;
  ${({ theme }) => theme.fonts.subtitle}
`;

const TakingTime = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin: 16px 0;
  ${({ theme }) => theme.fonts.body};
`;

const Description = styled.p`
  height: 260px;
  margin-bottom: 16px;

  overflow: scroll;
  ${({ theme }) => theme.fonts.body};
`;

const Link = styled.a`
  color: inherit;

  ${({ theme }) => theme.fonts.body}
  text-decoration: underline;
`;
