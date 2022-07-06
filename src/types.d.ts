interface Product {
  id: number;
  name: string;
  weight_volume: string;
  description: string;
  price: number;
  images: any[];
  quantity: number;
  product: [];
}

interface ProductItemProps {
  name: string;
  price: number;
  images: any[];
  id: number;
}

interface Profile {
  user: string;
  address: string;
  phone_number: string;
  amount: string;
}

interface ModalProps {
  src: string;
  writer: string;
  content: string;
  modalList: boolean;
  setModalList: (value: boolean) => void;
}

type TeamMemberListProps = Omit<ModalProps, 'setModalList' | 'modalList'>;

type ChildrenProp = {
  children: JSX.Element;
};
