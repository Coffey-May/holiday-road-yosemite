import { useEateries } from "./EateryProvider.js"
import EateryComponent from "./EateriesComponent.js"

const eventHub = document.querySelector(".container")

const EateryList = () => {
    const contentTarget = document.querySelector(".eateryContainer")

    const appEateries = useEateries()

    eventHub.addEventListener('eaterySelected', event => {
        const eateryName = event.detail.parkName  

        const filteredEateries =appEateries.filter(
            (individualEatery) => {
                if(individualEatery.name === eateryName){
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
    }
    render(appEateries)
}
 
export default EateryList