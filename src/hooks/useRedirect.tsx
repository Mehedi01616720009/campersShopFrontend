import { Navigate } from "react-router";

const useRedirect = (to: string) => {
    return <Navigate to={to} />;
};

export default useRedirect;
