export const render__description__main = (rocket) => {
    let description__main = document.createElement("div")
    description__main.classList.add("description__main")

    let rocketName = document.createElement("h1")
    rocketName.id = "rocketName"
    rocketName.textContent = rocket.name

    let rocketId = document.createElement("p")
    rocketId.classList.add("rocketId")
    rocketId.innerHTML = `<b>ID: </b><span id="rocketId">${rocket.id}</span>`

    let rocketImage = document.createElement("div")
    rocketImage.classList.add("rocketImg")
    rocketImage.innerHTML = (`<span><a href="${rocket.wikipedia}" target="_blank">
     <i class="bx bxl-wikipedia"></i>`)

    if (rocket.id == "5e9d0d95eda69955f709d1eb") {
        rocketImage.style.backgroundImage = `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), #298cfe75), url('https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg')`
    } else {
        rocketImage.style.backgroundImage = `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), #298cfe75), url('${rocket.flickr_images[0]}')`
    
    }

    


    let rocketDescription = document.createElement("p")
    rocketDescription.classList.add("rocketDescription")
    rocketDescription.id = "rocketDescription"
    rocketDescription.textContent = rocket.description

    description__main.append(rocketName)
    description__main.append(rocketId)
    description__main.append(rocketImage)
    description__main.append(rocketDescription)

    return description__main
}

export const render__description__values = (rocket) => {
    let description__values = document.createElement("div")
    description__values.classList.add("description__item__values")
    //         <!-- STAGES -->
//         <div class="description__value">
//             <p><b>Stages: </b><span id="rocketStages">2</span></p>
//         </div>
    let description__value__stages = document.createElement("div")
    description__value__stages.classList.add("description__value")
    description__value__stages.innerHTML = `<p><b>Stages: </b><span id="rocketStages">${rocket.stages}</span></p>`
//         <!-- COST PER LAUNCH -->
//         <div class="description__value">
//             <p><b>Cost per launch: </b><span id="rocketCostPerLaunch">$90000000</span></p>
//         </div>
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
    description__values.append(description__value__stages)
    description__values.append(description__value__cost)
    description__values.append(description__value__sucess__rate)
    description__values.append(description__value__first__flight)
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

