import React from 'react';
import Footer from "../Components/Footer/Footer";
import TableUsers from '../Components/TableUsers/TableUsers';

const AdminUsers = () => {
  const localStorageRole = localStorage.getItem('role')
  if (localStorageRole === 'USER' || !localStorage.getItem('role')) {
    alert('No tenés autorización para ingresar a esta página')
   window.location.href  = "/"
  }
  return (
    <>
    <TableUsers />
     <Footer /> 
    </>
  );
};

export default AdminUsers;