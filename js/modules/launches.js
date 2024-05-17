import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllLaunches = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/launches/query", config)
    let data = await res.json();

    return data;
}


export const getAllLaunchesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
    let data = await res.json();
    return data;
}

export const informationLaunches = async (launch) => {
    if(launch.fairings) {
        let description__item = document.querySelector("#description__item");
        description__item.innerHTML = /*html*/`
        <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">FAIRINGS</h1>
        <hr style="color: var(--color--two); margin-block: 6px">
        <table style="width: 100%">
            <tr>
                <td style="color: var(--color--two)">Reused</td>
                <td style="font-weight: bold; text-align: right">${launch.fairings.reused || "No"}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Recovery attempt</td>
                <td style="font-weight: bold; text-align: right">${launch.fairings.recovery_attempt || "None"}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Recovered</td>
                <td style="font-weight: bold; text-align: right">${launch.fairings.recovered || "No"}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Ships</td>
                <td style="font-weight: bold; text-align: right; font-size: 10px;">${launch.fairings.ships[0] || "None"}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)"></td>
                <td style="font-weight: bold; text-align: right; font-size: 10px;">${launch.fairings.ships[1] || ""}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)"></td>
                <td style="font-weight: bold; text-align: right; font-size: 10px;">${launch.fairings.ships[2] || ""}</td>
            </tr>
        </table>

    `
    }



    let information1 = document.querySelector("#rocketStage1");

    information1.innerHTML = /*html*/`
        <style>${getIconTableStyle()}</style>
        <h1 class="iconTableTitle">Launch Data</h1>
        <div class="container">
        <div class="icon">
        <i class='bx bx-rocket' ></i>
        </div>
        <div class="content">
        <p><strong>ID</strong></p>
        <p style="font-size: 12px">${launch.id || ""}</p>
        </div>
    </div>
        <div class="container">
            <div class="icon">
            <i class='bx bxs-calendar'></i>
            </div>
            <div class="content">
                <p><strong>Date</strong></p>
                <p>${launch.date_utc.slice(0,10)}</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class='bx bxs-rocket' ></i>
            </div>
            <div class="content">
            <p><strong>Rocket</strong></p>
            <p style="font-size: 12px">${launch.rocket}</p>
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
            <i class='bx bxs-user' ></i>
            </div>
            <div class="content">
            <p><strong>Crew</strong></p>
            <p style="font-size: 12px">${launch.crew[0] || "No crew on this launch"}</p>
            <p style="font-size: 12px">${launch.crew[1] || ""}</p>
            <p style="font-size: 12px">${launch.crew[2] || ""}</p>
            <p style="font-size: 12px">${launch.crew[3] || ""}</p>

            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class="bi bi-eject"></i>
            </div>
            <div class="content">
            <p><strong>Launchpad</strong></p>
            <p style="color: white; font-size: 12px">${launch.launchpad}</p>
            </div>
        </div>
        <div class="container">
            <div class="icon">
            <i class="bi bi-box"></i>
            </div>
            <div class="content">
            <p><strong>Payloads</strong></p>
            <p style="font-size: 12px">${launch.payloads[0] || ""}</p>
            <p style="font-size: 12px">${launch.payloads[1] || ""}</p>
            <p style="font-size: 12px">${launch.payloads[2] || ""}</p>
            </div>
        </div>
    `
    information2.style.color = "white"
    information2.style.paddingInline = "30px"


}

export const informationLaunches2 = async (launch) => {
    let information3 = document.querySelector("#information__table__1");

    information3.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">More information</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">Sucess</td>
            <td style="font-weight: bold; text-align: right">${launch.sucess || "Failure"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Net</td>
            <td style="font-weight: bold; text-align: right">${launch.net || "False"}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Flight number</td>
            <td style="font-weight: bold; text-align: right">${launch.flight_number || ""}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Upcoming</td>
            <td style="font-weight: bold; text-align: right">${launch.upcoming || "False"}</td>
        </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">

    `
    information3.style.color = "white"
    information3.style.paddingInline = "30px"

    let information4 = document.querySelector("#information__table__2");

    information4.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">Capsules</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <p style="font-size:15px">${launch.capsules[0] || "None"}</p>
    <p style="font-size:15px">${launch.capsules[1] || ""}</p>
    <p style="font-size:15px">${launch.capsules[2] || ""}</p>
    <p style="font-size:15px">${launch.capsules[3] || ""}</p>
    <p style="font-size:15px">${launch.capsules[4] || ""}</p>

    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information4.style.color = "white"
    information4.style.paddingInline = "30px"

    let information5 = document.querySelector("#information__2");

    information5.innerHTML = /*html*/`
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">DETAILS</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <p style="font-size:15px">${launch.details || "No details about this launch."}</p>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `
    information5.style.color = "white"
    information5.style.paddingInline = "30px"

}

export const imageLaunch = async(image)=>{
    let section__image = document.querySelector("#section__image")

    image ? section__image.innerHTML = /*html*/`
    <img referrerpolicy="no-referrer" style="width: 70%; height: auto;" src="${image}" alt="NO PATCH AVAILABLE" />
    ` : section__image.innerHTML = /*html*/`<p>NO PATCH AVAILABLE</p>`


    section__image.style = `
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    `
}