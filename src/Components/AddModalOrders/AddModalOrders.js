import axios from "axios";
import { useState, useEffect } from "react";
import '../AddModalOrders/AddModalOrders.css'

const AddModalOrders = () => {
  
	const deleteRequest = async (_id) => {
		await axios.delete(`https://burguercode-db.onrender.com/deleteRequest/${_id}`)
		alert('Menú entregado')
		window.location.href ='/addorders'
	}
  
  const [request, setRequest] = useState([]);

  const addOrder = async () => {
      try {
        const info = await axios.get("https://burguercode-db.onrender.com/getRequest");
        setRequest((info.data))
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
     addOrder()
    }, []);
 

  return (
    <div className="m-3 h-100">
			<h2 className="text-center mb-4">Pedidos</h2>
    <table className="demo">
	<thead>
	<tr>
		<th>NOMBRE</th>
		<th>DESCRIPCION</th>
		<th>PRECIO</th>
		<th>ESPECIFICACIONES</th>

	</tr>
	</thead>
	<tbody>
	{request.map(request=>
	<tr>
		 <td>{request.menu} </td>
		 <td>{request.description}</td>
		 <td>{request.price}</td>
		 {request.specification}
     <td><button className="btn btn-success text-center d-flex justify-content-center p-2 m-1" onClick={(_id) => deleteRequest(request._id)} type=" button" key={request._id}>✓</button></td>
	</tr>
	)}
	
	</tbody>
</table>
  </div>
);
}

 
export default AddModalOrders;