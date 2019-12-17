// IMPORTS FROM OUR DIFFERENT MODULES
import { getParks } from "./parks/ParkProvider.js";
import parkSelect from "./parks/ParkSelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import eaterySelect from "./eateries/EateriesSelect.js";
import ParkList from "./parks/ParkList.js";



// FUNCTION CALLS AND THEIR PRIORITIES ARE LISTED HERE

getEateries()
.then(
    () => eaterySelect()
)    



getParks().then(
    () => parkSelect()
    ).then(
     () => ParkList()
    )
