import React from 'react';
import MenuTable from '../Components/MenuTable/MenuTable';
import Footer from "../Components/Footer/Footer";
import ButtonAddMenu from '../Components/ButtonAddMenu/ButtonAddMenu';

const Menu = () => {
	return (
		<div>
			<h4 className="text-center my-2">Menús</h4>
			<ButtonAddMenu />
			<MenuTable />
			<Footer />
		</div>
	);
};

export default Menu;