import React, { useState } from 'react';
import './TeamMemberList.scss';
import Modal from './Modal';

const TeamMemberList = ({ src, writer, content }: TeamMemberListProps) => {
  const [modalList, setModalList] = useState<boolean>(false);

  return (
    <div>
      <ul className="teamMemberList">
        <li className="teamMemberListImg">
          <img
            onClick={() => {
              setModalList(true);
            }}
            className="teamMemberImg"
            src={src}
            alt="member"
          />
        </li>
      </ul>

      <ul>
        {modalList && (
          <Modal
            src={src}
            writer={writer}
            content={content}
            modalList={modalList}
            setModalList={setModalList}
          />
        )}
      </ul>
    </div>
  );
};

export default TeamMemberList;
