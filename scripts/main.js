// IMPORTS FROM OUR DIFFERENT MODULES
import { getParks } from "./parks/ParkProvider.js";
import parkSelect from "./parks/ParkSelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import eaterySelect from "./eateries/EateriesSelect.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import attractionSelect from "./attractions/AttractionSelect.js";
import EateryList from "./eateries/EateriesList.js";
import ParkList from "./parks/ParkList.js";
import attractionList from "./attractions/AttractionList.js";
import initializeParkDetailButtonEvents from "./parks/parkDialog.js";
import initializeAttractionDetailButtonEvents from "./attractions/AttractionDialogs.js"





          





getAttractions ()
.then(
    () => attractionSelect()
).then(
    ()=> attractionList()
).then(
()=>initializeAttractionDetailButtonEvents()
    
)




// FUNCTION CALLS AND THEIR PRIORITIES ARE LISTED HERE


getEateries()
.then(
    () => eaterySelect()
).then(
    () => EateryList()
)   



getParks().then(
    () => parkSelect()
    ).then(
     () => ParkList()
    ).then(
    () => initializeParkDetailButtonEvents()
    )
