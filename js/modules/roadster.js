import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getRoadster = async ()=>{

    let res = await fetch("https://api.spacexdata.com/v4/roadster")
    let data = await res.json();

    return data;
}

