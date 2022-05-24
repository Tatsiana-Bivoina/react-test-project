export interface PhotoSrcData {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface ResponsePhotoData {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSrcData;
  liked: boolean;
  alt: string;
  dateAdded?: string;
  category?: string;
  accessForAll?: string;
  gender?: string;
}

export interface ResponseSearchPhotoData {
  total_results: number;
  page: number;
  per_page: number;
  photos: ResponsePhotoData[];
  next_page: string;
}
