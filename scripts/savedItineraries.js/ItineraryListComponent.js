

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




    const render = itineraryCollection => {
        console.log(itineraryCollection, "this is the itinerary collection")
        let htmlString = itineraryCollection.map((itineraries) => {
             
           return ` <h4>${itineraries.SavedItinerary}</h4>  
   <div>${itineraries.ParkName}</div>
   <div>${itineraries.AttractionName}</div>
   <div>${itineraries.EateryName}</div>
   `
        }).join(" ")

        console.log(htmlString)


        contentElement.innerHTML += htmlString
    }
    // render(itinerary)
}

export default itineraryListComponent
