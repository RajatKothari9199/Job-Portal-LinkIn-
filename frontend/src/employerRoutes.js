
import Dashboard from "./views/Dashboard.js";
import Notifications from "./views/Notifications.js";
import EmployerPage from "./views/Employer.js";

var employerRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/employerAdmin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/employerAdmin",
  },
  {
    path: "/employer-page",
    name: "Employer Profile",
    icon: "nc-icon nc-single-02",
    component: EmployerPage,
    layout: "/employerAdmin",
  },
];
export default employerRoutes;
