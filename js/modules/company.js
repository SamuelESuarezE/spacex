import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getCompany = async ()=>{

    let res = await fetch("https://api.spacexdata.com/v4/company")
    let data = await res.json();

    return data;
}

