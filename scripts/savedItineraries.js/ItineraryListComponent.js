

import { useItineraries, getItinerary } from "./itinerariesProvider.js"

const eventHub = document.querySelector('.container')
const contentElement = document.querySelector('.itinerary--card')
const itineraries = useItineraries()

const itineraryListComponent = () => {
    eventHub.addEventListener('showItineraryButtonClicked', event => {
        getItinerary().then(
            () => {
                const allTheItineraries = useItineraries()
                render(allTheItineraries)
            }
        )
    })


    // (getItinerary(useItineraries))

const render = itineraryCollection => {
    contentElement.innerHTML += `
${
        itineraryCollection.map(itinerary =>
            ` <h4>${itineraries.SavedItinerary}</h4>  
       <div>${itineraries.ParkName}</div>
       <div>${itineraries.AttractionName}</div>
       <div>${itineraries.EateryName}</div>`)
        }

`
}
// render(itineraries)
}

export default itineraryListComponent
