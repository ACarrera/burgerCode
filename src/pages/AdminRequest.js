import TableOrders from "../Components/TableOrders/TableOrders";
import Footer from "../Components/Footer/Footer";
import ButtonBackAdmin from "../Components/ButtonBackAdmin/ButtonBackAdmin";

const AdminRequest = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/login";
  }
  return (
    <>
      <ButtonBackAdmin />
      <TableOrders />
      <Footer />
    </>
  );
};

export default AdminRequest;
