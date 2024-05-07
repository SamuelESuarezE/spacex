export const render__description__main = (rocket) => {
    let description__main = document.createElement("div")
    description__main.classList.add("description__main");

    let spaceXimg = document.createElement("img")
    spaceXimg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/2560px-SpaceX-Logo.svg.png"
    spaceXimg.style.width = '100%';

    let rocketId = document.createElement("p")
    rocketId.classList.add("rocketId")
    rocketId.innerHTML = `<b>ID: </b><span id="rocketId">${rocket.id}</span>`


    let rocketDescriptionH1 = document.createElement("h1")
    rocketDescriptionH1.classList.add("rocketDescriptionH1")
    rocketDescriptionH1.textContent = 'Description'

    let rocketDescription = document.createElement("p")
    rocketDescription.classList.add("rocketDescription")
    rocketDescription.id = "rocketDescription"
    rocketDescription.textContent = rocket.description

    description__main.append(spaceXimg)
    description__main.append(rocketId)
    description__main.append(rocketDescriptionH1)
    description__main.append(rocketDescription)

    return description__main
}

export const render__description__values = (rocket) => {
    let description__values = document.createElement("div")
    description__values.classList.add("description__item__values")
//         <!-- COST PER LAUNCH -->
//         <div class="description__value">
//             <p><b>Cost per launch: </b><span id="rocketCostPerLaunch">$90000000</span></p>
//         </div>
    let description__value__country = document.createElement("div")
    description__value__country.classList.add("description__value")
    description__value__country.innerHTML = `<p><b>Country: </b><span id="rocketStages">${rocket.country}</span></p>`

    let description__value__cost = document.createElement("div")
    description__value__cost.classList.add("description__value")
    description__value__cost.innerHTML = `<p><b>Cost per launch: </b><span id="rocketStages">${rocket.cost_per_launch.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }).replace(",00", "")}</span></p>`
//         <!-- SUCESS RATE-->
//         <div class="description__value">
//             <p><b>Success Rate: </b><span id="rocketSucessRatePct">%100</span></p>
//         </div>
    let description__value__sucess__rate = document.createElement("div")
    description__value__sucess__rate.classList.add("description__value")
    description__value__sucess__rate.innerHTML = `<p><b>Success Rate: </b><span id="rocketSucessRatePct">${rocket.success_rate_pct}%</span></p>`
//         <!-- FIRST LIGHT -->
//         <div class="description__value">
//             <p><b>First flight: </b><span id="rocketFirstFlight">2018-02-06</span></p>

//         </div>

    let description__value__first__flight = document.createElement("div")
    description__value__first__flight.classList.add("description__value")
    description__value__first__flight.innerHTML =  `<p><b>First flight: </b><span id="rocketFirstFlight">${rocket.first_flight}</span></p>`


    let description__value__more__info = document.createElement("div")
    description__value__more__info.innerHTML = /*html*/`
        <a target="_blank" href="${rocket.wikipedia}" style="display: flex; text-decoration: none; color: white; font-size: 15px; gap: 10px; align-items: center">
            <i class='bx bxl-wikipedia' style="font-size: 30px;"></i>
            <p>More information here</p>
        </a>
    `
    description__value__more__info.style.marginTop = "20px"

    description__values.append(description__value__country)
    description__values.append(description__value__cost)
    description__values.append(description__value__sucess__rate)
    description__values.append(description__value__first__flight)
    description__values.append(description__value__more__info)
    return description__values
}








/* <div class="description__main">
<!-- NOMBRE -->
                    <h1 id="rocketName" class="rocketName">Falcon Heavy</h1>
                <!-- ROCKET ID -->
                    <p class="rocketId"><b>ID: </b><span id="rocketId" >5e9d0d95eda69974db09d1ed</span></p>0
                <!-- ROCKET IMAGE -->
                    <div class="rocketImg">
                        <span><a href="https://en.wikipedia.org/wiki/Falcon_Heavy" target="_blank">
                            <i class="bx bxl-wikipedia"></i>
                        </a></span>
                    </div>
<!-- ROCKET DESCRIPTION -->
<p class="rocketDescription" id="rocketDescription">With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.</p>
</div> */

                // <!-- ROCKET VALUES     -->
                //     <div class="description__item__values">

                //     </div> */

