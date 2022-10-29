import axios from "axios";
import { useState, useEffect } from "react";
import '../AddModalOrders/AddModalOrders.css'

const AddModalOrders = () => {
  
  
  const [productos, setProductos] = useState([]);

  const addOrder = async () => {
      try {
        const info = await axios.get("https://rickandmortyapi.com/api/character");
        setProductos((info.data.results))
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
     addOrder()
    }, []);
 

  return (
    <>
    <table class="demo">
	<caption>ORDENES</caption>
	<thead>
	<tr>
		<th><div >ID:</div></th>
		<th>NOMBRE:</th>
		<th>DESCRIPCION:</th>
		<th>PRECIO:</th>
		<th>BOTON</th>
    	<th>BOTON</th>
	</tr>
	</thead>
	<tbody>
	{productos.map( productos=>
	<tr>
		 <td> {productos.id} </td>
		 <td> {productos.name} </td>
		 <td> {productos.specie} </td>
		 <td> hola </td>
		 <td><input class="btn btn-success"type=" button" value="Aceptar"/></td>
     	<td><input class="btn btn-danger btn-xs"type=" button" key={productos.id} value="Borrar"/></td>
	</tr>
	)}
	
	</tbody>
</table>
  </>
);
}

 
export default AddModalOrders;