
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user] = useAuthState(auth);
    if(!user){
        return <Navigate to="/Login" state={{ from: location }} replace />;
    }
    console.log(user)
    return children;
};

export default RequireAuth;



// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../firebase.init';

// const RequireAuth = ({children}) => {
//     const location = useLocation();
//     const [user] = useAuthState(auth);
//     console.log(user);
//     if(!user){
//         return <Navigate to="/Login" state={{ from: location }} replace />;
//     }
//     return children;
// };

// export default RequireAuth;


