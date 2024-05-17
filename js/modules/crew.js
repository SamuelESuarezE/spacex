import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllCrew = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config)
    let data = await res.json();

    return data;
}


export const getAllCrewId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`)
    let data = await res.json();
    return data;
}

export const informationCrew = async (crew) => {
    let information1 = document.querySelector("#rocketStage1");

    information1.innerHTML = /*html*/`
        <style>${getIconTableStyle()}</style>
        <h1 class="iconTableTitle">Astronaut Data</h1>
        <div class="container">
            <div class="icon">
            <i class='bx bx-barcode'></i>
            </div>
            <div class="content">
                <p><strong>Agency</strong></p>
                <p>${crew.agency}</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bx-universal-access' ></i>
            </div>
            <div class="content">
            <p><strong>Status</strong></p>
            <p style="text-transform: capitalize">${crew.status}</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bx-rocket' ></i>
            </div>
            <div class="content">
            <p><strong>Launches</strong></p>
            <p>${crew.launches[0] || ""}</p>
            <p>${crew.launches[1] || ""}</p>
            <p>${crew.launches[2] || ""}</p>
            </div>
        </div>
    `
    information1.style.color = "white"
    information1.style.paddingInline = "30px"



    let information2 = document.querySelector("#rocketStage2");

    information2.innerHTML = /*html*/`
        <style>${getIconTableStyle()}</style>
        <div class="container">
            <div class="icon">
            <i class='bx bx-barcode'></i>
            </div>
            <div class="content">
                <p><strong>ID</strong></p>
                <p>${crew.id}</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bxl-wikipedia'></i>
            </div>
            <div class="content">
            <p><strong>Wikipedia</strong></p>
            <p><a href="${crew.wikipedia}" style="color: white;">Click here for more information.</a></p>
            </div>
        </div>
    `
    information2.style.color = "white"
    information2.style.paddingInline = "30px"

}

export const imageCrew = async(image)=>{
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = /*html*/`
    <img referrerpolicy="no-referrer" style="width: 70%; height: auto; border-radius: 20px;" src="${image}" />
    `
    section__image.style = `
        display: flex;
        justify-content: center;
        align-items: center;
    `
}