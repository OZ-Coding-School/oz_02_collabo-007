export interface ClubProps {
  id: number;
  name: string;
  address: string;
  image_url: string | null;
}

export interface ClubItemProps {
  name: string;
  address: string;
  image: string | null;
  displayMode?: boolean;
  handleDelete?: Dispatch<SetStateAction<ClubProps | null>>;
}
