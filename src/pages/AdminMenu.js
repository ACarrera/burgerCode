import React from 'react';
import MenuTable from '../Components/MenuTable/MenuTable';
import Footer from "../Components/Footer/Footer";
import ButtonAddMenu from '../Components/ButtonAddMenu/ButtonAddMenu';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TopTableMenus from '../Components/TopTableMenus/TopTableMenus';
import './AdminMenu.css';

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

    const aux = menus.sort((a,b) =>{
    
			if (a.menu > b.menu) {
			return 1;
		}
		if (a.menu < b.menu) {
			return -1;
		}
		return 0 })
	
		const [menusOrganized, setMenusOrganized] = useState([])

	
		useEffect(() => {
			setMenusOrganized(aux)
		}, [aux])

	return (
		<>
			<h2 className="text-center mt-2 mb-0 title-tableadmin">Menús</h2>
			<ButtonAddMenu />
      <div className="h-100">
      <table className="demo">
	<TopTableMenus />
			{
      menusOrganized.map((menu, index) => (
			<MenuTable menu={menu} index={index} />
			))}
      </ table>
      </div>
			<Footer />
		</>
	);
};

export default AdminMenu;