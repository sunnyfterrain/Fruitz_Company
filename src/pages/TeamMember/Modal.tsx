import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import './Modal.scss';

const Modal = ({ src, writer, content, setModalList }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modalCloseButtonBox">
        <AiOutlineCloseCircle
          onClick={() => {
            setModalList(false);
          }}
          className="modalCloseButton"
        />
      </div>
      <ul className="modalBox">
        <li>
          <img className="modalListImg" src={src} alt="" />
        </li>
        <li className="modalBoxText">
          <p className="modalEmail">
            {writer}
            <BsInstagram className="modalicon" />{' '}
          </p>
          <p className="modalContent">{content}</p>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
