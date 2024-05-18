import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getAllHistory = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/history/query", config)
    let data = await res.json();

    return data;
}


export const getAllHistoryId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/history/${id}`)
    let data = await res.json();
    return data;
}

export const informationHistory = async (event) => {
    let information1 = document.querySelector("#rocketStage1");
  
    information1.innerHTML = /*html*/ `
    <style>${getIconTableStyle()}</style>
    <div class="container">
        <div class="icon">
            <i class='bx bxs-calendar' ></i>
        </div>
        <div class="content">
            <p><strong>Date</strong></p>
            <p>${event.event_date_utc.slice(0, 10)}</p>   
        </div>
    </div>
    <div class="container">
        <div class="icon">
            <i class='bx bx-barcode' ></i>
        </div>
        <div class="content">
            <p><strong>ID</strong></p>
            <p>${event.id}</p>   
        </div>
    </div>
  
      `;
    information1.style.color = "white";
    information1.style.paddingInline = "30px";
  
    let information2 = document.querySelector("#rocketStage2");
  
    information2.innerHTML = /*html*/ `
      <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">DETAILS</h1>
      <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
        <p style="color:white">${event.details}</p>
      <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
      `;

    information2.style.paddingInline = "30px";

  
    let information5 = document.querySelector("#information__table__2");
    information5.style.padding = "20px";
    information5.innerHTML = /*html*/ `
      <p ><b><a style="color: white" href="${event.article}">More information here!</a></b></p>

   `
  };
  