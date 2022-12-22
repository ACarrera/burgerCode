import Error404 from "../Components/404/error404";
import Footer from "../Components/Footer/Footer";

const Error = () => {
  localStorage.clear();
  return (
    <>
      <Error404 />
      <Footer />
    </>
  );
};
export default Error;
