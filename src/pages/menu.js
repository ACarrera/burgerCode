import React from 'react';
import MenuTable from '../Components/MenuTable/MenuTable';
import Footer from "../Components/Footer/Footer";
import ButtonAddMenu from '../Components/ButtonAddMenu/ButtonAddMenu';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TopTableMenus from '../Components/TopTableMenus/TopTableMenus';

const Menu = () => {
	const [menus, setMenus] = useState([]);

  const getMenus = async () => {
      try {
        const info = await axios.get("https://burguercode-db.onrender.com/getmenus");
        setMenus((info.data))
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
        getMenus()
    }, []);
	return (
		<div>
			<h4 className="text-center my-2">Menús</h4>
			<ButtonAddMenu />
      <div className="m-3 h-100">
      <table className="demo">
	<TopTableMenus />
			{
      menus.map((menu, index) => (
			<MenuTable menu={menu} index={index} />
			))}
      </ table>
      </div>
			<Footer />
		</div>
	);
};

export default Menu;