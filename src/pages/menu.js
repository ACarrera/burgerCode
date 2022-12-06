import axios from "axios";
import { useState, useEffect } from "react";
import ButtonAddMenu from "../Components/ButtonAddMenu/ButtonAddMenu";
import Footer from "../Components/Footer/Footer";

const Menu = () => {
    const deleteMenu = async (_id) => {
		await axios.delete(`https://burguercode-db.onrender.com/deletemenu/${_id}`)
		alert('Menú eliminado')
		window.location.href ='/menu'
	}
  
  const [menu, setMenu] = useState([]);

  const getMenus = async () => {
      try {
        const info = await axios.get("https://burguercode-db.onrender.com/getmenus");
        setMenu((info.data))
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
        getMenus()
    }, []);
 
    return (
			<>
        <div className="m-3 h-100">
			<h2 className="text-center mb-4">Menús</h2>
            <ButtonAddMenu />
    <table className="demo">
	<thead>
	<tr>
		<th>NOMBRE</th>
		<th>DESCRIPCION</th>
		<th>PRECIO</th>
		<th></th>

	</tr>
	</thead>
	<tbody>
	{menu.map(menu=>
	<tr>
		 <td><b>{menu.menu}</b></td>
		 <td>{menu.description}</td>
		 <td>{menu.price}</td>
		 {menu.specification}
     <td><button className="btn btn-danger text-center d-flex justify-content-center p-2 m-1" onClick={(_id) => deleteMenu(menu._id)} type=" button" key={menu._id}>X</button></td>
	</tr>
	)}
	
	</tbody>
</table>
  </div>
<Footer />
	</>
    );
};

export default Menu;