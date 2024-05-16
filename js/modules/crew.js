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