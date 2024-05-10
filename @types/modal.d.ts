export interface ModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLDivElement>;
  type: string;
  label: string;
  searchData: ClubProps[];
  setSelectedId: Dispatch<SetStateAction<ClubProps | null>>;
}

export interface ModalContainerProps {
  handleCloseModal: () => void;
  type: string;
  label: string;
  searchData: ClubProps[];
  setSelectedId: Dispatch<SetStateAction<ClubProps | null>>;
}
