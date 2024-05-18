import { getIconTableStyle } from "../modulesComponents/IconTable.js";

export const getCompany = async () => {
  let res = await fetch("https://api.spacexdata.com/v4/company");
  let data = await res.json();

  return data;
};

export const companyInformations = async (company) => {
  let information1 = document.querySelector("#rocketStage1");

  information1.innerHTML = /*html*/ `
    <h1 style="color: var(--color--two); margin-inline: auto; margin-top: 20px">COMPANY DATA</h1>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    <table style="width: 100%">
        <tr>
            <td style="color: var(--color--two)">Name</td>
            <td style="font-weight: bold; text-align: right">${company.name}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Founder & CEO</td>
            <td style="font-weight: bold; text-align: right">${company.founder}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">COO</td>
            <td style="font-weight: bold; text-align: right">${company.coo}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">Founded in</td>
            <td style="font-weight: bold; text-align: right; font-size: 14px">${company.founded}</td>
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
            <td style="color: var(--color--two)">Address</td>
            <td style="font-weight: bold; text-align: right">${company.headquarters.address}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">City</td>
            <td style="font-weight: bold; text-align: right">${company.headquarters.city}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">State</td>
            <td style="font-weight: bold; text-align: right">${company.headquarters.state}</td>
        </tr>
        <tr>
            <td style="color: var(--color--two)">ID</td>
            <td style="font-weight: bold; text-align: right;">${company.id}</td>
        </tr>
        <tr>
        <td style="color: var(--color--two)">Valuation</td>
        <td style="font-weight: bold; text-align: right;">$ ${new Intl.NumberFormat('en-US').format(company.valuation)}</td>
    </tr>
    </table>
    <hr style="color: var(--color--two); margin-block: 6px; width: 100%">
    `;
  information2.style.color = "white";
  information2.style.paddingInline = "30px";

  let information3 = document.querySelector("#information__table__1");

  information3.innerHTML = /*html*/ `
    <style>${getIconTableStyle()}</style>
    <div class="container">
        <div class="icon">
            <i class='bx bxs-user'></i>
        </div>
        <div class="content">
            <p><strong>Employees</strong></p>
            <p>${company.employees}</p>   
        </div>
    </div>
    <div class="container">
        <div class="icon">
            <i class='bx bxs-car' ></i>
        </div>
        <div class="content">
            <p><strong>Vehicles</strong></p>
            <p>${company.vehicles}</p>   
        </div>
    </div>
    <div class="container">
        <div class="icon">
            <i class='bx bx-rocket' ></i>
        </div>
        <div class="content">
            <p><strong>Launch Sites</strong></p>
            <p>${company.launch_sites}</p>   
        </div>
    </div>
    <div class="container">
        <div class="icon">
        <i class='bx bx-test-tube' ></i>
        </div>
        <div class="content">
            <p><strong>Test sites</strong></p>
            <p>${company.test_sites || ""}</p>   
        </div>
    </div>    

    
    `;
  information3.style.color = "white";
  information3.style.padding= "0px";

  let information5 = document.querySelector("#information__table__2");
  information5.style.padding = "20px";
  information5.innerHTML = /*html*/ `
    <p style="color: white">${company.summary}</p>
 `
};

export const imageCompany = async()=>{
    let section__image = document.querySelector("#section__image")

    section__image.innerHTML = /*html*/`
    <img referrerpolicy="no-referrer" style="width: 90%; height: auto; border-radius: 20px" src="https://s-aicmscdn.nss.vn/nss-media/23/12/13/gia-tri-thi-truong-spacex_6579a4d05e2a9.jpg"/>
    `


    section__image.style = `
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    `
}