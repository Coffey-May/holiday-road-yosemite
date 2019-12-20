

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

    eventHub.addEventListener('click', event => {
        if(event.target.id === 'show--Itinerary'){
            getItinerary().then(
                () => {
                    const allTheItineraries = useItineraries()
                    render(allTheItineraries)
        })
    }
}

    )




    const render = itineraryCollection => {
        console.log(itineraryCollection, "this is the itinerary collection")
        let htmlString = itineraryCollection.map((itineraries) => {
             
           return ` <div class="individual--card"><h4 class="savedName">${itineraries.SavedItinerary}</h4>
           <hr> 
   <div>Park: ${itineraries.ParkName}</div>
   <div>Attraction: ${itineraries.AttractionName}</div>
   <div>Eatery: ${itineraries.EateryName}</div>
   <div class="rating">
    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
   </div>
   `
        }).join(" ")

        console.log(htmlString)


        contentElement.innerHTML = htmlString
    }
    // render(itinerary)
}

export default itineraryListComponent
