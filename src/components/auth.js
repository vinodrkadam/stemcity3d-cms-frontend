// import React from 'react';
// import { redirect } from "react-router-dom";
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

// const withAuth = (Component) => {
//   const AuthRoute = (props) => {
//     const isLoggedIn = !!cookies.get('token'); // Check if user is logged in

//     if (!isLoggedIn) {
//       // Redirect to login page if not logged in
//       return redirect("/login");
//     }

//     // Render the component if logged in
//     return <Component {...props} />;
//   };

//   return AuthRoute;
// };

// export default withAuth;
