import { useState } from 'react';

import ListItem from './ListItem';
import './MenuList';
import './MenuList.scss';

const AsideMenu = ({ setIsOpenSubMenu, isOpenSubMenu }) => {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <ul className="menuList">
      {MENU_LIST.map((menuList, idx) => {
        return (
          <ListItem
            key={menuList.id}
            idx={idx}
            {...menuList}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsOpenSubMenu={setIsOpenSubMenu}
            isOpenSubMenu={isOpenSubMenu}
          />
        );
      })}
    </ul>
  );
};

export default AsideMenu;

const MENU_LIST = [
  {
    id: 1,
    title: 'ABOUT',
    list: [
      { id: 5, name: 'DIRECT TRADE' },
      { id: 6, name: 'TEAM MEMBER' },
    ],
  },
  {
    id: 2,
    title: 'SHOP',
    list: [
      { id: 1, name: 'FRUIT' },
      { id: 2, name: 'BEVERAGE' },
      { id: 3, name: 'GOODS' },
      { id: 4, name: 'GIFTS' },
    ],
  },
  { id: 3, title: 'FRUITZ CLUB' },
  {
    id: 4,
    title: 'WHOLESALE',
    list: [
      { id: 7, name: 'ABOUT FRUITZ' },
      { id: 8, name: 'NOTICE / Q&A' },
    ],
  },
  { id: 5, title: 'CONTACT' },
];
