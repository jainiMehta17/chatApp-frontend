import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuthUser } from "../api";

export function useAuth(){
    // const [user, setUser] = useState<User | undefined>();
    const {user,updateAuthUser} = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const controller = new AbortController();
    useEffect(()=>{
        getAuthUser().then(({data})=>{
            // setUser(data);
            updateAuthUser(data)
            setTimeout(()=>setLoading(false), 1000);
        }).catch((err)=>setTimeout(()=>setLoading(false), 1000));
        return () =>{
            controller.abort();
        }
    },[])
    return {user, loading}
}