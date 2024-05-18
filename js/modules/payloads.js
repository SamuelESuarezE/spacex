import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllPayloads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/payloads/query", config)
    let data = await res.json();

    return data;
}


export const getAllPayloadsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/payloads/${id}`)
    let data = await res.json();
    return data;
}

export const informationPayloads = async (payload) => {

    let information1 = document.querySelector("#rocketStage1");

    information1.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">PAYLOAD DATA</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">Type</td>
            <td style="font-weight: bold; text-align: right">${payload.type || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Reused</td>
            <td style="font-weight: bold; text-align: right">${payload.reused}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Orbit</td>
            <td style="font-weight: bold; text-align: right">${payload.orbit}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">ID</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${payload.id}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">

    `
    information1.style.color = "white"
    information1.style.paddingInline = "30px"

    let information2 = document.querySelector("#rocketStage2");

    information2.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">MORE INFORMATION</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">Mass kg</td>
            <td style="font-weight: bold; text-align: right">${payload.mass_kg}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Mass lbs</td>
            <td style="font-weight: bold; text-align: right">${payload.mass_lbs}</td>
        </tr>

        <tr>
            <td style="color: var(--color--two)">Reference system</td>
            <td style="font-weight: bold; text-align: right;">${payload.reference_system}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Regime</td>
            <td style="font-weight: bold; text-align: right">${payload.regime}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information2.style.color = "white"
    information2.style.paddingInline = "30px"

    let information3 = document.querySelector("#information__table__1");

    information3.innerHTML = /*html*/`
    
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">Customer</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <p style="font-size:13px">${payload.customers[0] || "None"}</p>
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">Nationality</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <p style="font-size:13px">${payload.nationalities[0] || "None"}</p>
    `
    information3.style.color = "white"
    information3.style.padding= "30px"
    

    let information5 = document.querySelector("#information__table__2")
    information5.style.padding = "20px"
    information5.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-top: 20px; text-align: left">LAUNCH</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <p style="font-size:13px; color: white; text-align: left">${payload.launch}</p>`


}
