// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../firebase.init';

// const RequireAuth = ({childern}) => {
//     const location = useLocation();
//     const [user] = useAuthState(auth);
//     if(!user){
//         return <Navigate to="/Login" state={{ from: location }} replace />;
//     }
//     return childern;
// };

// export default RequireAuth;



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
    return children;
};

export default RequireAuth;



