import { SimpleClubData } from './club';

export interface ModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLDivElement>;
  type: string;
  label: string;
  searchData: SimpleClubData[];
  setSelectedId: Dispatch<SetStateAction<SimpleClubData | null>>;
}

export interface ModalContainerProps {
  handleCloseModal: () => void;
  type: string;
  label: string;
  searchData: SimpleClubData[];
  setSelectedId: Dispatch<SetStateAction<SimpleClubData | null>>;
}
