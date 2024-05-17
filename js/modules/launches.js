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

export const informationLaunches = async (launch) => {
    if(launch.fairings) {
        let description__item = document.querySelector("#description__item");
        description__item.innerHTML = /*html*/`
        <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">FAIRINGS</h1>
        <hr style="color: var(--color--two); margin-block: 6px">
        <table style="width: 100%">
            <tr>
                <td style="color: var(--color--two)">Reused</td>
                <td style="font-weight: bold; text-align: right">${launch.fairings.reused || ""}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Recovery attempt</td>
                <td style="font-weight: bold; text-align: right">${launch.fairings.recovery_attempt || ""}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Recovered</td>
                <td style="font-weight: bold; text-align: right">${launch.fairings.recovered || ""}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Ships</td>
                <td style="font-weight: bold; text-align: right; font-size: 10px;">${launch.fairings.ships[0] || ""}</td>
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


        <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">FAIRINGS</h1>
        <hr style="color: var(--color--two); margin-block: 6px">
        <table style="width: 100%">
            <tr>
                <td style="color: var(--color--two)">Reused</td>
                <td style="font-weight: bold; text-align: right">${launch.fairings.reused || ""}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Recovery attempt</td>
                <td style="font-weight: bold; text-align: right">${launch.fairings.recovery_attempt || ""}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Recovered</td>
                <td style="font-weight: bold; text-align: right">${launch.fairings.recovered || ""}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Ships</td>
                <td style="font-weight: bold; text-align: right; font-size: 10px;">${launch.fairings.ships[0] || ""}</td>
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

        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/${launch.links.youtube_id};start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   

    `
    }



    // let information1 = document.querySelector("#rocketStage1");

    // information1.innerHTML = /*html*/`
    //     <style>${getIconTableStyle()}</style>
    //     <h1 class="iconTableTitle">Astronaut Data</h1>
    //     <div class="container">
    //         <div class="icon">
    //         <i class='bx bx-barcode'></i>
    //         </div>
    //         <div class="content">
    //             <p><strong>Agency</strong></p>
    //             <p>${crew.agency}</p>
    //         </div>
    //     </div>
    //     <div class="container">
    //         <div class="icon">
    //         <i class='bx bx-universal-access' ></i>
    //         </div>
    //         <div class="content">
    //         <p><strong>Status</strong></p>
    //         <p style="text-transform: capitalize">${crew.status}</p>
    //         </div>
    //     </div>
    //     <div class="container">
    //         <div class="icon">
    //         <i class='bx bx-rocket' ></i>
    //         </div>
    //         <div class="content">
    //         <p><strong>Launches</strong></p>
    //         <p>${crew.launches[0] || ""}</p>
    //         <p>${crew.launches[1] || ""}</p>
    //         <p>${crew.launches[2] || ""}</p>
    //         </div>
    //     </div>
    // `
    // information1.style.color = "white"
    // information1.style.paddingInline = "30px"



    // let information2 = document.querySelector("#rocketStage2");

    // information2.innerHTML = /*html*/`
    //     <style>${getIconTableStyle()}</style>
    //     <div class="container">
    //         <div class="icon">
    //         <i class='bx bx-barcode'></i>
    //         </div>
    //         <div class="content">
    //             <p><strong>ID</strong></p>
    //             <p>${crew.id}</p>
    //         </div>
    //     </div>
    //     <div class="container">
    //         <div class="icon">
    //         <i class='bx bxl-wikipedia'></i>
    //         </div>
    //         <div class="content">
    //         <p><strong>Wikipedia</strong></p>
    //         <p><a href="${crew.wikipedia}" style="color: white;">Click here for more information.</a></p>
    //         </div>
    //     </div>
    // `
    // information2.style.color = "white"
    // information2.style.paddingInline = "30px"

}