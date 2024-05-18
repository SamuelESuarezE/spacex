import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllStarlink = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config)
    let data = await res.json();

    return data;
}


export const getAllStarlinkId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/starlink/${id}`)
    let data = await res.json();
    return data;
}

export const informationStarlink = async (starlink) => {

    let information1 = document.querySelector("#rocketStage1");

    information1.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">STARLINK DATA</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">ID</td>
            <td style="font-weight: bold; text-align: right">${starlink.id}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Launch</td>
            <td style="font-weight: bold; text-align: right">${starlink.launch}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Center Name</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.CENTER_NAME}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Epoch</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${starlink.spaceTrack.EPOCH.slice(0,10)}</td>
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
            <td style="color: var(--color--two)">Classification Type</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.CLASSIFICATION_TYPE}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Object Type</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.OBJECT_TYPE}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">RCS Size</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.RCS_SIZE}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Country</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${starlink.spaceTrack.COUNTRY_CODE}</td>
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
            <td style="color: var(--color--two)">Launch Date</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.LAUNCH_DATE}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Site</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.SITE}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Decay Date</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.DECAY_DATE || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">File</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${starlink.spaceTrack.FILE}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information3.style.color = "white"
    information3.style.paddingInline = "30px"

    let information4 = document.querySelector("#information__table__2");

    information4.innerHTML = /*html*/`
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">CCSDS OMM VERS</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.CCSDS_OMM_VERS}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Originator</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.ORIGINATOR}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">REF Frame</td>
            <td style="font-weight: bold; text-align: right">${starlink.spaceTrack.REF_FRAME || "N/A"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Mean Element Theory</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${starlink.spaceTrack.MEAN_ELEMENT_THEORY}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information4.style.color = "white"
    information4.style.paddingInline = "30px"




}

