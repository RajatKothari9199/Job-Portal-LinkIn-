import Dashboard from "./views/Dashboard.js";
import Notifications from "./views/Notifications.js";
import EmployeePageEdit from "./views/EmployeeEdit.js";
import EmployeePageDisplay from "./views/EmployeeDisplay.js";

var employeeRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/employeeAdmin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/employeeAdmin",
  },
  {
    path: "/user-edit-page",
    name: "Edit Profile",
    icon: "nc-icon nc-single-02",
    component: EmployeePageEdit,
    layout: "/employeeAdmin",
  },
  
  {
    path: "/user-profile-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: EmployeePageDisplay,
    layout: "/employeeAdmin",
  },
];
export default employeeRoutes;
