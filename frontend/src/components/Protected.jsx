// import React from "react";
// import { Navigate } from "react-router-dom";

// const Protected = ({ children }) => {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");
  


//   if (!token) {
//     return <Navigate to="/login" />;
//   }
//   if(role === "donor" && window.location.pathname === "/dashboard") {
//     return <Navigate to = "/donor-dashboard" />;
//   }
//   if(role === "receiver" && window.location.pathname === "/dashboard") {
//     return <Navigate to = "/receiver-dashboard" />
//   }

//   return children;
// };

// export default Protected;
import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login"  />;
  }

  return children;
};

export default Protected;
