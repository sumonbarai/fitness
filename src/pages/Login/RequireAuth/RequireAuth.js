import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

function RequireAuth({ children }) {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div
        style={{ width: "100%", height: "100vh" }}
        className="text-center fs-5 d-flex justify-content-center align-items-center"
      >
        <div className="all">
          <p>please verify your account </p>
          <button
            onClick={async () => {
              await sendEmailVerification();
              alert("Sent email");
            }}
          >
            Verify email
          </button>
        </div>
      </div>
    );
  }

  return children;
}

export default RequireAuth;
