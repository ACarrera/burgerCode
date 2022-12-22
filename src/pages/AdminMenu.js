import React from "react";
import MenuTable from "../Components/MenuTable/MenuTable";
import Footer from "../Components/Footer/Footer";
import ButtonAddMenu from "../Components/ButtonAddMenu/ButtonAddMenu";
import { useState, useEffect } from "react";
import axios from "axios";
import TopTableMenus from "../Components/TopTableMenus/TopTableMenus";
import "./AdminMenu.css";
import ButtonBackAdmin from "../Components/ButtonBackAdmin/ButtonBackAdmin";

const AdminMenu = () => {
  const localStorageRole = localStorage.getItem("role");
  if (localStorageRole === "USER" || !localStorage.getItem("role")) {
    alert("No tenés autorización para ingresar a esta página");
    window.location.href = "/login";
  }

  const [menus, setMenus] = useState([]);

  const getMenus = async () => {
    try {
      const info = await axios.get(
        "https://burguercode-db.onrender.com/getmenus"
      );
      setMenus(info.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMenus();
  }, []);

  const aux = menus.sort((a, b) => {
    if (a.menu > b.menu) {
      return 1;
    }
    if (a.menu < b.menu) {
      return -1;
    }
    return 0;
  });

  const [menusOrganized, setMenusOrganized] = useState([]);

  useEffect(() => {
    setMenusOrganized(aux);
  }, [aux]);

  return (
    <div className="table-menu-height">
      <ButtonBackAdmin />
      <h2 className="text-center mt-2 mb-0 title-tableadmin">Menús</h2>
      <ButtonAddMenu />
      <div>
        <table className="demo">
          <TopTableMenus />
          {menusOrganized.map((menu, index) => (
            <MenuTable menu={menu} index={index} />
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default AdminMenu;
