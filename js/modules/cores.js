import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllCores = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config)
    let data = await res.json();

    return data;
}


export const getAllCoresId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/cores/${id}`)
    let data = await res.json();
    return data;
}

export const informationCores = async (core) => {

    let information1 = document.querySelector("#rocketStage1");

    information1.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">CORE DATA</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">Block</td>
            <td style="font-weight: bold; text-align: right">${core.block || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Reuse count</td>
            <td style="font-weight: bold; text-align: right">${core.reuse_count}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Status</td>
            <td style="font-weight: bold; text-align: right">${core.status || ""}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">ID</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${core.id || ""}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">

    `
    information1.style.color = "white"
    information1.style.paddingInline = "30px"

    let information2 = document.querySelector("#rocketStage2");

    information2.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">LANDING DATA</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">RTLS Attempts</td>
            <td style="font-weight: bold; text-align: right">${core.rtls_attempts}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">RTLS Landings</td>
            <td style="font-weight: bold; text-align: right">${core.rtls_landings}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">ASDS Attempts</td>
            <td style="font-weight: bold; text-align: right">${core.asds_attempts}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">ASDS Landings</td>
            <td style="font-weight: bold; text-align: right;">${core.asds_landings}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information2.style.color = "white"
    information2.style.paddingInline = "30px"

    let information3 = document.querySelector("#information__table__1");

    information3.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px; text-align: center">LAUNCHES</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <p style="text-align:center">${core.launches[0] || ""}</p>
    <p>${core.launches[1] || ""}</p>
    <p>${core.launches[2] || ""}</p>
    <p>${core.launches[3] || ""}</p>

    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information3.style.color = "white"
    information3.style.paddingInline = "30px"


}