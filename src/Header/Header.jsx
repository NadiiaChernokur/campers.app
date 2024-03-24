import { NavLink, Outlet } from 'react-router-dom';
import {
  HeaderCintainer,
  LogoDiv,
  LogoImg,
  LogoImg2,
  Nav,
} from './Header.styles';
import sprite from '../img/svg.svg';
import { useState } from 'react';
const Header = () => {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);

  setTimeout(() => {
    setVisible(!visible);
  }, 1000);

  setTimeout(() => {
    setVisible2(!visible2);
  }, 2000);

  return (
    <>
      <HeaderCintainer>
        <LogoDiv>
          <NavLink to="/">Booking campers</NavLink>
          <LogoImg
            width={25}
            height={25}
            style={{ display: visible ? 'block' : 'none' }}
          >
            <use href={`${sprite}#car`}></use>
          </LogoImg>
          <LogoImg2
            width={30}
            height={30}
            style={{ display: visible2 ? 'block' : 'none' }}
          >
            <use href={`${sprite}#car`}></use>
          </LogoImg2>
        </LogoDiv>
        <Nav>
          <NavLink to="/campers">Autos</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </Nav>
      </HeaderCintainer>
      <Outlet />
    </>
  );
};
export default Header;
