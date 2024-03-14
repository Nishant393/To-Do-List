
import axios from "axios";
export const  user = async () => {
    const res =await axios.get("http://localhost:5000/user").catch((err)=>console.log(err));
    let data = await res;
    if(res.status!==200){
        return console.log("no Data");
    }
    return data;
}
