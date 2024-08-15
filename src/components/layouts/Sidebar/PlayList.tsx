import { AuthContext } from "@app/services/Provider/AuthProvider";
import { useContext, useEffect } from "react";

const PlayList = () => {
    const { token } = useContext(AuthContext);
    useEffect(() => {
      console.log({ token });
    })
  return (
    <div className="bg-black h-full rounded-xl">Nguyen</div>
  );
} 

export default PlayList;