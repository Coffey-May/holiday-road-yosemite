import { useAttractions } from "./AttractionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".filters__attraction")


const attractionSelect = () => {
    // Get all convictions from application state


    const convictions = useAttractions()

//what should this component say to event hub and when
    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "attractionSelect") {
            //make a custom event to talk to other componenet
            const selectedattraction = changeEvent.target.value

            const attractionNameMessage = new CustomEvent("attractionSelected", {
                detail: {
                    attraction: selectedattraction
                }
            })
            //dispatch it
            eventHub.dispatchEvent(attractionNameMessage)
        }
    })



    const render = attractionCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML += `
            <select class="dropdown" id="attractionSelect">
                <option value="0">Select Attraction...</option>
                ${
            attractionCollection.sort().map(conviction =>
                `<option class = "crime">${conviction}</option>`
            )
            }
                    </select>   
        `
    

    }
    render(convictions)
}
export default ConvictionSelect

