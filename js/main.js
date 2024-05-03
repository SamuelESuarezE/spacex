import { 
    getAllRockets, 
} from "./modules/rockets.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket
} from "./modulesComponents/progressBar.js";

import { render__description__main, render__description__values } from "./modulesComponents/rocketDescription.js";


let description__item = document.querySelector('.description__item')

let dataRockets = await getAllRockets();
let Totales = dataRockets.pop()


let [Rockets1, Rockets2, Rockets3, Rockets4] = await getAllRockets();


description__item.append(render__description__main(Rockets1))
description__item.append(render__description__values(Rockets1))
let information__2 = document.querySelector("#information__2");

information__2.append(...await progressRocketWeight(Rockets1))
information__2.append(...await progressPayloadWeights(Rockets1))
information__2.append(...await progressHeightRocket(Rockets1))
information__2.append(...await progressDiameterRocket(Rockets1))
information__2.append(...await progressSecondStageDiameterRocket(Rockets1))
information__2.append(...await progressSecondStageHeightRocket(Rockets1))
