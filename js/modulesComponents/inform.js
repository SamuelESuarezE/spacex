import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal
} from "../modules/rockets.js";


export const informRocketEngineThrustSeaLevel = async(thrust_sea_level)=>{
    let {kN:totalKN} = await getAllRocketEngineTotal();
    let pocentaje = (thrust_sea_level.kN * 100) / totalKN

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Atmospheric acceleration"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`
    
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div)

    // <div class="carousel__item">
    //     <div class="item__progress__bar">
    //         <div class="progress__value">
    //             <strong>Title</strong>
    //             <small>3</small>
    //         </div>
    //     </div>
    // </div>
}


export const informRocketEngineThrustVacuum = async(thrust_vacuum)=>{
    let {kN:totalKN} = await getAllRocketEngineThrustVacuumTotal();
    let pocentaje = (thrust_vacuum.kN * 100) / totalKN;

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Speed in space"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`
    
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.append(div)

    // <div class="carousel__item">
    //     <div class="item__progress__bar">
    //         <div class="progress__value">
    //             <strong>Title</strong>
    //             <small>3</small>
    //         </div>
    //     </div>
    // </div>
}

export const informRocketStages = async(rocket) => {
    let rocketStage1 = document.querySelector("#rocketStage1");

    rocketStage1.innerHTML = /*html*/`
        <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">STAGE 1</h1>
        <hr style="color: var(--color--two); margin-block: 6px">
        <table>
            <tr>
                <td style="color: var(--color--two)">Reusable</td>
                <td style="font-weight: bold">${rocket.first_stage.reusable}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Engines</td>
                <td style="font-weight: bold">${rocket.first_stage.engines}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Fuel amount</td>
                <td style="font-weight: bold">${rocket.first_stage.fuel_amount_tons} tons.</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Burn time</td>
                <td style="font-weight: bold">${rocket.first_stage.burn_time_sec || "N/A"} secs.</td>
            </tr>
        </table>
    `
    rocketStage1.style.color = "white"
    rocketStage1.style.paddingInline = "30px"


 



    let rocketStage2 = document.querySelector("#rocketStage2");
    rocketStage2.innerHTML = /*html*/`
        <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">STAGE 2</h1>
        <hr style="color: var(--color--two); margin-block: 6px">
        <table>
            <tr>
                <td style="color: var(--color--two)">Reusable</td>
                <td style="font-weight: bold">${rocket.second_stage.reusable}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Engines</td>
                <td style="font-weight: bold">${rocket.second_stage.engines}</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Fuel amount</td>
                <td style="font-weight: bold">${rocket.second_stage.fuel_amount_tons} tons.</td>
            </tr>
            <tr>
                <td style="color: var(--color--two)">Burn time</td>
                <td style="font-weight: bold">${rocket.second_stage.burn_time_sec || "N/A"} secs.</td>
            </tr>
        </table>
    `
    rocketStage2.style.color = "white"
    rocketStage2.style.paddingInline = "30px"

}