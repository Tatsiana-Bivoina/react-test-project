import { ResponsePhotoData } from '../../../types/apiData';

export interface CardProps {
  cardData: ResponsePhotoData;
  key?: number;
}

export type Props = Readonly<CardProps>;

export const MaxInfoCard = ({ cardData }: Props) => {
  return (
    <div className="card" data-testid="card-max-item">
      <div data-testid="img-container" className="img-container">
        <img src={cardData.src.medium} alt={cardData.alt} />
      </div>
      <p>
        Photographer:
        <span>{` ${cardData.photographer}`}</span>
      </p>
      <p>
        Photographer page:
        <a href={cardData.photographer_url}> Follow</a>
      </p>
      <p>
        Photographer id:
        <span>{` ${cardData.photographer_id}`}</span>
      </p>
      {cardData.gender && (
        <p>
          Photographer gender:
          <span>{` ${cardData.gender}`}</span>
        </p>
      )}
      {cardData.dateAdded && (
        <p>
          Date of creation:
          <span>{` ${cardData.dateAdded}`}</span>
        </p>
      )}
      {cardData.category && (
        <p>
          Category:
          <span>{` ${cardData.category}`}</span>
        </p>
      )}
      {cardData.width !== 0 && (
        <p>
          Width:
          <span>{` ${cardData.width}px`}</span>
        </p>
      )}
      {cardData.height !== 0 && (
        <p>
          Height:
          <span>{` ${cardData.height}px`}</span>
        </p>
      )}
      {typeof cardData.accessForAll !== 'undefined' && (
        <p>
          Access for all:
          <span>{` ${cardData.accessForAll}`}</span>
        </p>
      )}
      <p>
        Liked:
        <span>{` ${cardData.liked}`}</span>
      </p>
    </div>
  );
};
