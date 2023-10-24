import { Navigate } from 'react-router-dom'

const AuthRoute = () => {

  const AuthProtectedRoute = ({ children }) => {
    const idtoken = window.localStorage.token
    if (!idtoken) {
      return <Navigate to= '/login' replace/>;
    } else {
      return children;
    }
  };

  const AuthProtectedLoginRoute = ({ children }) => {
    const idtoken = window.localStorage.token
    if (idtoken) {
      return <Navigate to= '/' replace/>;
    } else {
      return children;
    }
  };

  return { AuthProtectedRoute, AuthProtectedLoginRoute }
};

export default AuthRoute;
