import { useAttractions } from "./AttractionProvider.js"
import attractionComponent from "./AttractionComponent.js"

const eventHub = document.querySelector(".container")

const attractionList = () => {
    const contentTarget = document.querySelector(".selectedAttraction")

    const appAttraction = useAttractions()

    eventHub.addEventListener('attractionSelected', event => {
        const attractionName = event.detail.attraction  

        const filteredAttraction = appAttraction.filter(
            (individualAttraction) => {
                if(individualAttraction.name === attractionName){
                    return individualAttraction
                }
            }
        )
        render (filteredAttraction)
    })
    const render = (attractionCollection) => {
        contentTarget.innerHTML =`
        ${
            attractionCollection.map(
                (currentAttraction) => {
                    return attractionComponent(currentAttraction)
                }
            )
        }`
    }
    // render(appAttraction)
}
 
export default attractionList