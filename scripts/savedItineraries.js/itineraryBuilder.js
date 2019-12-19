import { saveItinerary } from "./itinerariesProvider.js"




const eventHub = document.querySelector('.container')


const saveNewItinerary = () => {
    eventHub.addEventListener('click', event => {
        if (event.target.id === "save--itinerary__Btn") {
            const eateryName = document.querySelector('.eateryFullName').textContent
            const parkName = document.querySelector('.parkFullName').textContent
            const attractionName = document.querySelector('.attractionFullName').textContent
            const savedItineraryName = document.querySelector('#txtAreaId').value

            console.log(eateryName)
            console.log(parkName)
            console.log(attractionName)
            console.log(savedItineraryName)

            const newItinerary = {
                "ParkName": parkName,
                "AttractionName": attractionName,
                "EateryName": eateryName,
                "SavedItinerary": savedItineraryName

            }
            saveItinerary(newItinerary).then(() => {
                const message =new CustomEvent("showItineraryButtonClicked")
                eventHub.dispatchEvent(message)

            })
        }

    })
// eventHub.addEventListener('click', clickEvent => {
//     if (clickEvent.target.id === "save--itinerary__Btn") {
//     }
// })

}




export default saveNewItinerary
















// eventHub.addEventListener('eaterySelect', changeEvent => {
//     const eateryName = changeEvent.target.value
//     const selectedEatery = changeEvent.target.value
//     newItinerary.eatery = selectedEatery
// }

//      eventHub.addEventListener('parkSelect', changeEvent => {
//     const parkName = changeEvent.target.value
//     const selectedPark = changeEvent.target.value
//     newItinerary.park = selectedPark
// }

//          eventHub.addEventListener('attractionSelect', changeEvent => {
//     const attractionName = changeEvent.target.value
//     const selectedAttraction = changeEvent.target.value
//     newItinerary.attraction = selectedAttraction
// }
