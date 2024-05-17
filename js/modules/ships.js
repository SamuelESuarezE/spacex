import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllShips = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config)
    let data = await res.json();

    return data;
}


export const getAllShipsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/ships/${id}`)
    let data = await res.json();
    return data;
}

export const informationShips = async (ship) => {

    let information1 = document.querySelector("#rocketStage1");

    information1.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">SHIP DATA</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">Type</td>
            <td style="font-weight: bold; text-align: right">${ship.type || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Home port</td>
            <td style="font-weight: bold; text-align: right">${ship.home_port || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Active</td>
            <td style="font-weight: bold; text-align: right">${ship.active}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">ID</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${ship.id || ""}</td>
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
            <td style="color: var(--color--two)">Mass KG</td>
            <td style="font-weight: bold; text-align: right">${ship.mass_kg || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Mass LB</td>
            <td style="font-weight: bold; text-align: right">${ship.mass_lb  || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Year built</td>
            <td style="font-weight: bold; text-align: right">${ship.year_built  || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Roles</td>
            <td style="font-weight: bold; text-align: right;">${ship.roles[0]}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)"></td>

            <td style="font-weight: bold; text-align: right;">${ship.roles[1] || ""}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)"></td>

            <td style="font-weight: bold; text-align: right;">${ship.roles[2] || ""}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information2.style.color = "white"
    information2.style.paddingInline = "30px"

    let information3 = document.querySelector("#information__table__1");

    information3.innerHTML = /*html*/`
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">IMO</td>
            <td style="font-weight: bold; text-align: right">${ship.imo}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">MMSI</td>
            <td style="font-weight: bold; text-align: right">${ship.mmsi}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">ABS</td>
            <td style="font-weight: bold; text-align: right">${ship.abs}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">CLASS</td>
            <td style="font-weight: bold; text-align: right;">${ship.class}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information3.style.color = "white"
    information3.style.paddingInline = "30px"


    let information5 = document.querySelector("#information__2")
    information5.style.padding = "20px"
    information5.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-top: 20px; text-align: left">LAUNCHES</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">`

    for (let launch of ship.launches) {
        information5.innerHTML += /*html*/`
        <p style="font-size:13px; color: white; text-align: left">${launch}</p>`
    }

}

export const imageShips = async(image)=>{
    let section__image = document.querySelector("#section__image")

    image ? section__image.innerHTML = /*html*/`
    <img referrerpolicy="no-referrer" style="width: 90%; height: auto; border-radius: 20px" src="${image}" alt="NO PATCH AVAILABLE" />
    ` : section__image.innerHTML = /*html*/`<p>NO IMAGE AVAILABLE</p>`


    section__image.style = `
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    `
}