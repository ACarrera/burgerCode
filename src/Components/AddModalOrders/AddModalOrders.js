import axios from "axios";
import { useState, useEffect } from "react";
import '../AddModalOrders/AddModalOrders.css'

const AddModalOrders = () => {
  
	const deleteRequest = async (_id) => {
		await axios.delete(`http://localhost:4000/users/deleteRequest/${_id}`)
		alert('Menú entregado')
		window.location.href ='/addorders'
	}
  
  const [request, setRequest] = useState([]);

  const addOrder = async () => {
      try {
        const info = await axios.get("http://localhost:4000/users/getRequest");
        setRequest((info.data))
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
     addOrder()
    }, []);
 

  return (
    <div className="m-2">
    <table class="demo">
	<caption>ORDENES</caption>
	<thead>
	<tr>
		<th>NOMBRE</th>
		<th>DESCRIPCION</th>
		<th>PRECIO</th>
    	<th></th>
	</tr>
	</thead>
	<tbody>
	{request.map(request=>
	<tr>
		 <td> {request.menu} </td>
		 <td> {request.description}</td>
		 <td>{request.price}</td>
     <td><input class="btn btn-danger btn-xs w-50 text-center" onClick={deleteRequest} type=" button" key={request._id} value="Entregado"/></td>
	</tr>
	)}
	
	</tbody>
</table>
  </div>
);
}

 
export default AddModalOrders;