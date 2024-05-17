import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllLandpads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config)
    let data = await res.json();

    return data;
}


export const getAllLandpadsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/landpads/${id}`)
    let data = await res.json();
    return data;
}

export const informationLandpads = async (landpad) => {

    let information1 = document.querySelector("#rocketStage1");

    information1.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">LANDPAD DATA</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">Short Name</td>
            <td style="font-weight: bold; text-align: right">${landpad.name || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Status</td>
            <td style="font-weight: bold; text-align: right">${landpad.status}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Locality</td>
            <td style="font-weight: bold; text-align: right">${landpad.locality || ""}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Region</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${landpad.region || ""}</td>
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
            <td style="color: var(--color--two)">Latitude</td>
            <td style="font-weight: bold; text-align: right">${landpad.latitude}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Longitude</td>
            <td style="font-weight: bold; text-align: right">${landpad.longitude}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Landing attempts</td>
            <td style="font-weight: bold; text-align: right">${landpad.landing_attempts}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Landing sucesses</td>
            <td style="font-weight: bold; text-align: right;">${landpad.landing_successes}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information2.style.color = "white"
    information2.style.paddingInline = "30px"

    let information3 = document.querySelector("#information__table__1");

    information3.innerHTML = /*html*/`
    
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <p style="text-align:center"><a href="${landpad.wikipedia}" style="color: white;">Wikipedia</a></p>

    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information3.style.color = "white"
    information3.style.paddingInline = "30px"


    let information4 = document.querySelector("#description__item");
    information4.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">DETAILS</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <p style="font-size:12px">${landpad.details || "No details about this landpad."}</p>`

    let information5 = document.querySelector("#information__2")
    information5.style.padding = "20px"
    information5.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-top: 20px; text-align: left">LAUNCHES</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">`

    for (let launch of landpad.launches) {
        information5.innerHTML += /*html*/`
        <p style="font-size:13px; color: white; text-align: left">${launch}</p>`
    }

}

export const imageLandpad = async(image)=>{
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