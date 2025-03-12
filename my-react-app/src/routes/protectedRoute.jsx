  import React from "react";


  const ProtectedRoute = ({ element }) => {
  

    // if (!user) {
    //   return <Navigate to="/auth/login" />;
    // }



    return <>{element}</>;
  };

  export default ProtectedRoute;
