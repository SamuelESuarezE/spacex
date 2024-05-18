import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllDragons = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config)
    let data = await res.json();

    return data;
}


export const getAllDragonsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
    let data = await res.json();
    return data;
}

export const informationDragons = async (dragon) => {
    let information1 = document.querySelector("#rocketStage1");
  
    information1.innerHTML = /*html*/ `
      <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">DRAGON DATA</h1>
      <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
      <table style="width: 100%">
          <tr>
              <td style="color: var(--color--two)">Name</td>
              <td style="font-weight: bold; text-align: right">${dragon.name}</td>
          </tr>
          <tr>
              <td style="color: var(--color--two)">Type</td>
              <td style="font-weight: bold; text-align: right">${dragon.type}</td>
          </tr>
          <tr>
              <td style="color: var(--color--two)">Active</td>
              <td style="font-weight: bold; text-align: right">${dragon.active}</td>
          </tr>
          <tr>
              <td style="color: var(--color--two)">Crew Capacity</td>
              <td style="font-weight: bold; text-align: right; font-size: 14px">${dragon.crew_capacity}</td>
          </tr>
      </table>
      <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
  
      `;
    information1.style.color = "white";
    information1.style.paddingInline = "30px";
  
    let information2 = document.querySelector("#rocketStage2");
  
    information2.innerHTML = /*html*/ `
      <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">MORE INFORMATION</h1>
      <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
      <table style="width: 100%">
          <tr>
              <td style="color: var(--color--two)">First flight</td>
              <td style="font-weight: bold; text-align: right">${dragon.first_flight}</td>
          </tr>
          <tr>
              <td style="color: var(--color--two)">Sidewall angle deg</td>
              <td style="font-weight: bold; text-align: right">${dragon.sidewall_angle_deg}</td>
          </tr>
          <tr>
              <td style="color: var(--color--two)">Orbit duration year</td>
              <td style="font-weight: bold; text-align: right">${dragon.orbit_duration_yr}</td>
          </tr>
          <tr>
              <td style="color: var(--color--two)">Dry mass kg</td>
              <td style="font-weight: bold; text-align: right;">${dragon.dry_mass_kg}</td>
          </tr>
          <tr>
          <td style="color: var(--color--two)">Dry mass lb</td>
          <td style="font-weight: bold; text-align: right;">${dragon.dry_mass_lb}</td>
      </tr>
      </table>
      <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
      `;
    information2.style.color = "white";
    information2.style.paddingInline = "30px";
  
    let information3 = document.querySelector("#description__item");
  
    information3.innerHTML = /*html*/ `
        <p style="color: white; font-size: 14px">${dragon.description}</p>
  
      
      `;
    information3.style.color = "white";
    information1.style.margin = "0px"
  
    let information5 = document.querySelector("#information__table__2");
    information5.style.padding = "20px";
    information5.innerHTML = /*html*/ `
      <p style="color: white"><b>ID: </b>${dragon.id}</p>
      <p ><b><a style="color: white" href="${dragon.wikipedia}">More information here!</a></b></p>

   `
  };
  
export const imageDragon = async(image)=>{
      let section__image = document.querySelector("#section__image")
  
      section__image.innerHTML = /*html*/`
      <img referrerpolicy="no-referrer" style="width: 90%; height: auto; border-radius: 20px" src="${image}"/>
      `
  
      section__image.style = `
          color: white;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
      `
  }