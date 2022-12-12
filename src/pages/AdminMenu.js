import React from 'react';
import MenuTable from '../Components/MenuTable/MenuTable';
import Footer from "../Components/Footer/Footer";
import ButtonAddMenu from '../Components/ButtonAddMenu/ButtonAddMenu';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TopTableMenus from '../Components/TopTableMenus/TopTableMenus';

const AdminMenu = () => {
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
		<>
			<h2 className="text-center mt-2 mb-0 title-tableadmin">Menús</h2>
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
		</>
	);
};

export default AdminMenu;