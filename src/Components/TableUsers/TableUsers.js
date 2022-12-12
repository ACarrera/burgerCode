import {useState, useEffect} from 'react';
import axios from 'axios';

const TableUsers = () => {
   
	const deleteUser = async (_id) => {
		await axios.delete(`https://burguercode-db.onrender.com/deleteuser/${_id}`)
		alert('Usuario eliminado correctamente')
		window.location.href = "/users"
	}
  
  const [user, setUser] = useState([]);

  const addUser = async () => {
      try {
        const info = await axios.get("https://burguercode-db.onrender.com/allusers");
        setUser((info.data))
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
     addUser()
    }, []);
  return (
    <div className="m-3 h-100">
			<h2 className="text-center mb-2 title-tableadmin">Usuarios</h2>
    <table className="demo">
	<thead>
	<tr>
		<th>NOMBRE</th>
		<th>EMAIL</th>
		<th>ROL</th>
		<th>DIRECCIÓN</th>
		<th>TELÉFONO</th>
		<th></th>

	</tr>
	</thead>
	<tbody>
	{user.map(user=>
	<tr className="viewunique">
		 <td><b>{user.lastName} {user.name}</b></td>
		 <td>{user.email}</td>
		 <td>{user.role}</td>
		 <td>{user.address}</td>
		 <td>{user.phone}</td>
     <td>
			<button className="btn btn-danger text-center d-flex justify-content-center p-2 m-1 rounded-0 border-0" onClick={(_id) => deleteUser(user._id)} type="button" key={user._id}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
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

export default TableUsers;