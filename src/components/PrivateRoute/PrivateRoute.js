import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children, isAuthenticated }) {
    let location = useLocation();
    console.log('authe', isAuthenticated);
    if (isAuthenticated.userEmail === undefined) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;

}

export default PrivateRoute;