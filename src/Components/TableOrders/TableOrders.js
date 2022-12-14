import axios from "axios";
import { useState, useEffect } from "react";
import './TableOrders.css'

const TableOrders = () => {
  
	
	const [request, setRequest] = useState([]);

  const addOrder = async () => {
      try {
        const info = await axios.get("https://burguercode-db.onrender.com/getrequest");
        setRequest((info.data))
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
     addOrder()
    }, []);
 
		const deleteRequest = async (_id) => {
			await axios.delete(`https://burguercode-db.onrender.com/deleterequest/${_id}`)
			alert('Menú entregado')
			window.location.href ='/addorders'
		}

  return (
    <div className=" table h-100 col-lg-4 col-md-6 col-xs-12">
			<h2 className="text-center mb-2 title-tableadmin ">Pedidos</h2>
    <table className="demo">
	<thead>
	<tr>
		<th>NOMBRE</th>
		<th>DESCRIPCIÓN</th>
		<th className="text-center">PRECIO</th>
		<th>ESPECIFICACIONES</th>
		<th></th>

	</tr>
	</thead>
	<tbody>
	{request.map(request=>
	<tr className="viewunique">
		 <td><b>{request.menu}</b></td>
		 <td>{request.description}</td>
		 <td className="text-center">${request.price}</td>
		 <td><b>{request.specification}</b></td>
     <td>
			<button className="btn btn-success text-center d-flex justify-content-center p-2 m-1 rounded-0 border-0" onClick={(_id) => deleteRequest(request._id)} type="button" key={request._id}>
			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-send-check-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg>
			</button>
		 </td>
	</tr>
	)}
	</tbody>
</table>
  </div>
);
}

 
export default TableOrders;