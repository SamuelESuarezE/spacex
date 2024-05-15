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
    let information__table__1 = document.querySelector("#rocketStage1");

    information__table__1.innerHTML = /*html*/`
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
    information__table__1.style.color = "white"
    information__table__1.style.paddingInline = "30px"



    let information__table__2 = document.querySelector("#rocketStage2");

    information__table__2.innerHTML = /*html*/`
        <style>${getIconTableStyle()}</style>
        <h1 class="iconTableTitle">More information</h1>
        <div class="container">
            <div class="icon">
                <i class='bx bx-universal-access' ></i>
            </div>
            <div class="content">
                <p><strong>Property</strong></p>
                <p>Value</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bx-universal-access' ></i>
            </div>
            <div class="content">
            <p><strong>Property</strong></p>
            <p>Value</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bx-universal-access' ></i>
            </div>
            <div class="content">
            <p><strong>Property</strong></p>
            <p>Value</p>
            </div>
        </div>
    `
    information__table__2.style.color = "white"
    information__table__2.style.paddingInline = "30px"
    
}