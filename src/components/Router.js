// // AppRouter.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignupForm from './SignupForm';
// import LoginForm from './LoginForm';
// import MiniDrawer from './drawer';
// import AdminSignupForm from './AdminSignup';
// import { BASE_URL } from './constants'; // Import BASE_URL from constants

// const AppRouter = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path={`${BASE_URL}/signup`} element={<SignupForm />} />
//         <Route path={`${BASE_URL}/login`} element={<LoginForm />} />
//         <Route path={`${BASE_URL}/dashboard`} element={<MiniDrawer />} />
//         <Route path={`${BASE_URL}/adminsignup`} element={<AdminSignupForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import MiniDrawer from './drawer';
import AdminSignupForm from './AdminSignup';
import withAuth from './auth';
import ProfilePage from './ProfilePage';
import ReviewUsers from './ReviewUsers';
 
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard/*" element={<MiniDrawer />}/>
        <Route path="myprofile" element={<ProfilePage />} />
        <Route path ="/adminsignup" element ={<AdminSignupForm />} />
        <Route path="/dashboard" element={<MiniDrawer />} />
        <Route path="/dashboard" element={<MiniDrawer />} />
        <Route path="/dashboard" element={<MiniDrawer />} />
        <Route path="/dashboard/myprofile" element={<ProfilePage />} />
        {/* <Route path="/dashboard/review-users" element={<ReviewUsers />} /> */}
      </Routes>
    </Router>
  ); 
};

export default AppRouter;
