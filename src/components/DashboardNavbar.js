import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; 
import axios from "axios"; 

const DashboardNavbar = () => {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  
  const { user } = useSelector((state) => state.user);
  console.log("hello this is dashboard navbar")
 

  const ownerMenu = [
    { name: "Dashboard", path: "/dashboard", icon: FaHome },
    { name: "Owner Task 1", path: "/owner/task1", icon: FaHome },
    { name: "Owner Task 2", path: "/owner/task2", icon: FaHome },
    { name: "My Profile", path: `/profile/${user?._id}`, icon: FaHome },
  ];

  const managerMenu = [
    { name: "Dashboard", path: "/dashboard", icon: FaHome },
    { name: "Manager Task 1", path: "/manager/task1", icon: FaHome },
    { name: "Manager Task 2", path: "/manager/task2", icon: FaHome },
    { name: "Manager Task 3", path: "/manager/task3", icon: FaHome },
    { name: "My Profile", path: `/profile/${user?._id}`, icon: FaHome },
  ];

  const salesmanMenu = [
    { name: "Dashboard", path: "/dashboard", icon: FaHome },
    { name: "Sales Task 1", path: "/salesman/task1", icon: FaHome },
    { name: "Sales Task 2", path: "/salesman/task2", icon: FaHome },
    { name: "My Profile", path: `/profile/${user?._id}`, icon: FaHome },
  ];

  const inventoryClerkMenu = [
    { name: "Dashboard", path: "/dashboard", icon: FaHome },
    { name: "Inventory Task 1", path: "/inventory/task1", icon: FaHome },
    { name: "Inventory Task 2", path: "/inventory/task2", icon: FaHome },
    { name: "My Profile", path: `/profile/${user?._id}`, icon: FaHome },
  ];

  const NavbarMenu =
    user?.role === "Owner"
      ? ownerMenu
      : user?.role === "Manager"
      ? managerMenu
      : user?.role === "Salesman"
      ? salesmanMenu
      : user?.role === "Inventory Clerks"
      ? inventoryClerkMenu
      : []; 

  return (
    <nav>
      <h1>North Avenue</h1>

      {/* Render the menu only when user data is available */}
      <ul>
        {NavbarMenu.map((menuItem, index) => (
          <li key={index} onClick={() => navigate(menuItem.path)}>
            <menuItem.icon />
            {menuItem.name}
          </li>
        ))}
      </ul>

      <h1 onClick={() => {
        navigate("/login"); // Redirect to login page
      }}>
        Logout
      </h1>
    </nav>
  );
};

export default DashboardNavbar;
