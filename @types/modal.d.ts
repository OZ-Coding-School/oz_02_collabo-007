import { Dispatch, SetStateAction } from 'react';
import { ClubSearchData } from './club';

export interface ModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLDivElement>;
  type: string;
  label: string;
  searchData: ClubSearchData[];
  setSelectedId: Dispatch<SetStateAction<ClubSearchData | null>>;
}

export interface ModalContainerProps {
  handleCloseModal: () => void;
  type: string;
  label: string;
  searchData: ClubSearchData[];
  setSelectedId: Dispatch<SetStateAction<ClubSearchData | null>>;
}
