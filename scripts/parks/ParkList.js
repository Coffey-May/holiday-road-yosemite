import { useParks, getParks } from "./ParkProvider.js"
import ParkComponent from "./ParkComponent.js"
import parkSelect from "./ParkSelect.js"

const eventHub = document.querySelector(".container")


eventHub.addEventListener("stateSelected", event => {
    console.log(event.detail.state)
    getParks(event.detail.state).then(parkSelect)
})


const ParkList = () => {
    const contentTarget = document.querySelector(".selectedItinerary")

    // const appStateParks = useParks()


    

    eventHub.addEventListener('parkSelected', event => {
        const parkName = event.detail.park
        const appStateParks = useParks()
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