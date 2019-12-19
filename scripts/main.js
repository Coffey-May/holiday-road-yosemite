// IMPORTS FROM OUR DIFFERENT MODULES
import { getParks } from "./parks/ParkProvider.js";
import parkSelect from "./parks/ParkSelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import eaterySelect from "./eateries/EateriesSelect.js";
import { getAttractions } from "./attractions/AttractionProvider.js";
import attractionSelect from "./attractions/AttractionSelect.js";
import { getWeather } from "./weather/WeatherProvider.js";
import { WeatherFilter } from "./weather/WeatherFilter.js";
import EateryList from "./eateries/EateriesList.js"
import ParkList from "./parks/ParkList.js";
import attractionList from "./attractions/AttractionList.js";
import WeatherList from "./weather/WeatherList.js"
import initializeEateryDetailButtonEvents from "./eateries/eateriesDialogs.js";
import initializeParkDetailButtonEvents from "./parks/parkDialog.js";
import initializeAttractionDetailButtonEvents from "./attractions/AttractionDialogs.js"
import StateSelect from "./parks/parkStateSelect.js";
import saveNewItinerary from "./savedItineraries.js/itineraryBuilder.js";
import { saveItinerary } from "./savedItineraries.js/itinerariesProvider.js";
import itineraryListComponent from "./savedItineraries.js/ItineraryListComponent.js";





getAttractions ()
.then(
    () => attractionSelect()
).then(
    ()=> attractionList()
).then(
()=>initializeAttractionDetailButtonEvents()
    
)

getWeather()
.then(
    () => WeatherFilter()
)
.then(
    () => WeatherList()
)


// FUNCTION CALLS AND THEIR PRIORITIES ARE LISTED HERE


getEateries()
.then(
    () => eaterySelect()
).then(
    () => EateryList()
).then(
    () => initializeEateryDetailButtonEvents()
)

StateSelect()
ParkList()
initializeParkDetailButtonEvents()
saveNewItinerary()
saveItinerary() 
itineraryListComponent()



