import axios from "axios";
import EditMenuModal from "../EditMenuModal/EditMenuModal";
import './MenuTable.css';

const MenuTable = ({menu, index}) => {
    const deleteMenu = async (_id) => {
		await axios.delete(`https://burguercode-db.onrender.com/deletemenu/${_id}`)
		alert('Menú eliminado')
		window.location.href ='/adminmenus'
	}
 
    return (
			<div>
	<tbody>
	<tr className="viewunique">
		 <td><b>{menu.menu}</b></td>
		 <td className="movile-css-menus">{menu.description}</td>
		 <td className="movile-css-menus text-center">${menu.price}</td>
		 {menu.specification}
     <td>
			<div className="d-flex justify-content-evenly">
			<button className="btn btn-danger text-center rounded-0 border-0" onClick={(_id) => deleteMenu(menu._id)} type=" button" key={menu._id}>
		 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
		 </button>
		 <EditMenuModal menu={menu} id={index} />
		 </div>
		 </td>
	</tr>
	</tbody>
  </div>
    );
};

export default MenuTable;