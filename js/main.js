
import { 
    load,
    paginationCapsules,
    paginationCrew,
    paginationRockets
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

let [rocket, capsules, crew] = ul.children

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




rocket.click()