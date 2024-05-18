import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getRoadster = async ()=>{

    let res = await fetch("https://api.spacexdata.com/v4/roadster")
    let data = await res.json();

    return data;
}

export const informationRoadster = async (roadster) => {

    let information1 = document.querySelector("#rocketStage1");

    information1.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">ROADSTER DATA</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">Date of launch</td>
            <td style="font-weight: bold; text-align: right">${roadster.launch_date_utc.slice(0,10)}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Mass kg</td>
            <td style="font-weight: bold; text-align: right">${roadster.launch_mass_kg}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Mass lbs</td>
            <td style="font-weight: bold; text-align: right">${roadster.launch_mass_lbs}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">ID</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${roadster.id}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">

    `
    information1.style.color = "white"
    information1.style.paddingInline = "30px"

    let information2 = document.querySelector("#information__table__1");

    information2.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px: "><a style="color: white;" href="${roadster.wikipedia}">MORE INFORMATION</a></h1>
    `
    information2.style.color = "white"
    information2.style.paddingInline = "30px"
    

    let information5 = document.querySelector("#section__image")
    information5.style.padding = "20px"
    information5.innerHTML = /*html*/`
    <p style="font-size:13px; color: white; text-align: left">${roadster.details}</p>`


}

export const imageRoadster = async(image, image2)=>{

    let section__image = document.querySelector("#rocketStage2")

    section__image.innerHTML = /*html*/`
    <img referrerpolicy="no-referrer" style="width: 90%; height: auto; border-radius: 20px" src="${image}"/>
    `

    section__image.style = `
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    `
}