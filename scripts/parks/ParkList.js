import { useParks } from "./ParkProvider.js"
import ParkComponent from "./ParkComponent.js"

const eventHub = document.querySelector(".container")

const ParkList = () => {
    const contentTarget = document.querySelector(".selectedItinerary")

    const appStateParks = useParks()

    eventHub.addEventListener('parkSelected', event => {
        const parkName = event.detail.park

        const filteredParks = appStateParks.filter(
            (individualPark) => {
                if(individualPark.name === parkName)
                {
                    return individualPark
                }
            }
        )
        render(filteredParks)
    })

    const render = (parkCollection) => {
        contentTarget.innerHTML =  `
        ${
            parkCollection.map(
                (currentPark) => {
                    return ParkComponent(currentPark)
                }
            )
        }
        
        `
    }

}

export default ParkList