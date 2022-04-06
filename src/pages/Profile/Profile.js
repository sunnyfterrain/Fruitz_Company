import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.scss';

const Profile = () => {
  const [profileInputs, setProfileInputs] = useState({
    user: '',
    address: '',
    phone_number: '',
    amount: '',
  });

  const navigate = useNavigate();

  const handleInputs = e => {
    const { name, value } = e.target;
    setProfileInputs({
      ...profileInputs,
      [name]: value,
    });
  };

  const goToMain = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch('http://10.58.1.198:8000/users/user ', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NDk0NjgwNjJ9.FpFsvt0y6ByZMq049weSA2pocxqLTyzxAGyKSq6nQHM',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        setProfileInputs(data.message);
      });
  }, []);

  console.log('aaa', profileInputs);

  // server data fetching (O)
  // state save => UI update

  return (
    <main className="Join">
      <form>
        <div className="joinInputBox">
          <div className="idInputBox">
            <ul className="inputCategory">
              <li className="categoryText">아이디</li>
              <li className="idCheckBox">
                <input
                  type="text"
                  className="inputBox"
                  onChange={handleInputs}
                  name="user"
                  value={profileInputs.user}
                />
              </li>
            </ul>
          </div>
          <div className="addressInputBox">
            <ul className="inputCategory">
              <li className="categoryText">주소</li>
              <li className="address">
                <input
                  type="text"
                  className="inputBox"
                  onChange={handleInputs}
                  name="address"
                  value={profileInputs.address}
                />
              </li>
            </ul>
          </div>

          <div className="telInputBox">
            <ul className="inputCategory">
              <li className="categoryText">휴대전화</li>
              <li>
                <input
                  type="text"
                  className="inputBox"
                  onChange={handleInputs}
                  name="phone_number"
                  value={profileInputs.phone_number}
                />
              </li>
            </ul>
          </div>

          <div className="savedMoney">
            <ul className="inputCategory">
              <li className="categoryText">프룯츠 페이</li>
              <li>
                <input
                  type="text"
                  className="inputBox"
                  onChange={handleInputs}
                  name="amount"
                  value={profileInputs.amount}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="agreeButtonBox">
          <button className="joinButton" type="button" onClick={goToMain}>
            CONFIRM
          </button>
          <button className="cancelButton">CANCEL</button>
        </div>
      </form>
    </main>
  );
};

export default Profile;