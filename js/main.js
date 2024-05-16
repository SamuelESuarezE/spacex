
import { 
    companyInformation,
    load,
    paginationCapsules,
    paginationCores,
    paginationCrew,
    paginationDragons,
    paginationHistory,
    paginationLandpads,
    paginationLaunches,
    paginationRockets,
    paginationShips
} from "./modulesComponents/pagination.js";

let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let ul = document.querySelector("#navegator")

let [rocket, capsules, crew, launches, cores, landpads, ships, company, dragons, history, launchpads, payloads, roadster, starlink] = ul.children

rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())

} )


capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})


crew.addEventListener("click", async(e)=>{
    await footerSelect(e, crew)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrew())
})

launches.addEventListener("click", async(e)=>{
    await footerSelect(e, launches)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunches())
})

cores.addEventListener("click", async(e)=>{
    await footerSelect(e, cores)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCores())
})

landpads.addEventListener("click", async(e)=>{
    await footerSelect(e, landspads)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLandpads())
})

ships.addEventListener("click", async(e)=>{
    await footerSelect(e, ships)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationShips())
})

company.addEventListener("click", async(e)=>{
    await footerSelect(e, company)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    await companyInformation()

})

dragons.addEventListener("click", async(e)=>{
    await footerSelect(e, dragons)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationDragons())
})

history.addEventListener("click", async(e)=>{
    await footerSelect(e, history)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationHistory())
})

launchpads.addEventListener("click", async(e)=>{
    await footerSelect(e, launchpads)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunchpads())
})

payloads.addEventListener("click", async(e)=>{
    await footerSelect(e, payloads)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationPayloads())
})

roadster.addEventListener("click", async(e)=>{
    await footerSelect(e, roadster)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRoadster())
})

starlink.addEventListener("click", async(e)=>{
    await footerSelect(e, starlink)

    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationStarlink())
})

rocket.click()