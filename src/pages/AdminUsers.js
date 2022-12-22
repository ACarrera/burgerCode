import React from 'react';
import ButtonBackAdmin from '../Components/ButtonBackAdmin/ButtonBackAdmin';
import Footer from "../Components/Footer/Footer";
import TableUsers from '../Components/TableUsers/TableUsers';

const AdminUsers = () => {
  const localStorageRole = localStorage.getItem('role')
  if (localStorageRole === 'USER' || !localStorage.getItem('role')) {
    alert('No tenés autorización para ingresar a esta página')
    window.location.href  = "/login"
  }
  return (
    <>
    <ButtonBackAdmin />
    <TableUsers />
     <Footer /> 
    </>
  );
};

export default AdminUsers;