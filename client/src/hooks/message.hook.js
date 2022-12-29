import { useCallback } from "react"
import toast from "react-hot-toast";


export const useMessage = () => {
    return useCallback((info) => {
     if(info){
        if(info.status === "error"){
            toast.error(info.message)
        }else{
            toast.success(info.message)
        }
     }
    },[])
}