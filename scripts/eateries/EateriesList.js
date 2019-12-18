import { useEateries } from "./EateryProvider.js"
import EateryComponent from "./EateriesComponent.js"
import initializeEateryDetailButtonEvents from "./eateriesDialogs.js"

const eventHub = document.querySelector(".container")

const EateryList = () => {
    const contentTarget = document.querySelector(".selectedEatery")

    const appEateries = useEateries()

    eventHub.addEventListener('eaterySelect', event => {
        const eateryName = event.detail.eatery  

        const filteredEateries =appEateries.filter(
            (individualEatery) => {
                if(individualEatery.businessName === eateryName){
                    return individualEatery
                }
            }
        )
        render (filteredEateries)
    })
    const render = (eateryCollection) => {
        contentTarget.innerHTML =`
        ${
            eateryCollection.map(
                (currentEatery) => {
                    return EateryComponent(currentEatery)
                }
            )
        }`

        initializeEateryDetailButtonEvents()



    }
    // render(appEateries)
}
 
export default EateryList