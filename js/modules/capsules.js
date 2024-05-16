import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllCapsules = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();

    return data;
}


export const getAllCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
    let data = await res.json();
    return data;
}

export const tablesCapsule = async (Capsule)=>{
    let information1 = document.querySelector("#rocketStage1");

    information1.innerHTML = /*html*/`
        <style>${getIconTableStyle()}</style>
        <h1 class="iconTableTitle">Capsule Data</h1>
        <div class="container">
            <div class="icon">
            <i class='bx bx-barcode'></i>
            </div>
            <div class="content">
                <p><strong>Serial</strong></p>
                <p>${Capsule.serial}</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bxs-color' ></i>
            </div>
            <div class="content">
            <p><strong>Type</strong></p>
            <p>${Capsule.type}</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bx-universal-access' ></i>
            </div>
            <div class="content">
            <p><strong>ID</strong></p>
            <p>${Capsule.id}</p>
            </div>
        </div>
    `
    information1.style.color = "white"
    information1.style.paddingInline = "30px"



    let information2 = document.querySelector("#rocketStage2");

    information2.innerHTML = /*html*/`
        <style>${getIconTableStyle()}</style>
        <h1 class="iconTableTitle">Landing Information</h1>
        <div class="container">
            <div class="icon">
            <i class='bx bx-water'></i>
            </div>
            <div class="content">
                <p><strong>Water Landings</strong></p>
                <p>${Capsule.water_landings}</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bxs-landscape' ></i>
            </div>
            <div class="content">
            <p><strong>Land Landings</strong></p>
            <p>${Capsule.land_landings}</p>
            </div>
        </div>
    `
    information2.style.color = "white"
    information2.style.paddingInline = "30px"
}

export const tablesCapsule2 = async (Capsule)=>{
    let information3 = document.querySelector("#information__table__1");

    information3.innerHTML = /*html*/`
        <style>${getIconTableStyle()}</style>
        <h1 class="iconTableTitle">Reuse Information</h1>
        <div class="container">
            <div class="icon">
            <i class='bx bx-recycle' ></i>
            </div>
            <div class="content">
                <p><strong>Reuse Count</strong></p>
                <p>${Capsule.reuse_count}</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bx-rocket' ></i>
            </div>
            <div class="content">
            <p><strong>Launches</strong></p>
            <p>${Capsule.launches[0] || ""}</p>
            <p>${Capsule.launches[1] || ""}</p>
            <p>${Capsule.launches[2] || ""}</p>
            </div>
        </div>

    `
    information3.style.color = "white"
    information3.style.paddingInline = "30px"



    let information4 = document.querySelector("#information__table__2");

    information4.innerHTML = /*html*/`
        <style>${getIconTableStyle()}</style>
        <div class="container">
            <div class="icon">
            <i class='bx bxs-analyse' ></i>
            </div>
            <div class="content">
                <p><strong>Status</strong></p>
                <p>${Capsule.status}</p>
            </div>
        </div>
    `
    information4.style.color = "white"
    information4.style.paddingInline = "30px"
}

export const imageCapsule = async (Capsule)=>{
    let information5 = document.querySelector("#section__image");

    information5.innerHTML = /*html*/`
        <style>
            #section__image {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            hr {
                width: 100%;
            }
        </style>
        <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">LAST UPDATE</h1>
        <hr style="color: var(--color--five); margin-block: 6px">
        <table>
            <td style="font-weight: bold">${Capsule.last_update || "No information"}</td>
        </table>
    `
    information5.style.color = "white"
    information5.style.paddingInline = "30px"

}