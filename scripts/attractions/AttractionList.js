import attractionComponent from "./AttractionComponent.js"
import  {useAttractions} from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")

const attractionlistComponent = () => {
    console.log("attractioncomponent")
    const contentElement = document.querySelector(".attractionContainer")
    const attractions = useAttraction()


    eventHub.addEventListener("attractionSelected", event => {
        const attractionName = event.detail.attraction
        // detaile.Attraction is basically  a string here
        const attractionsFilter = attractions.filter(
            (indivisualattraction) => {
                if (indivisualattraction.conviction === attractionName) {
                    return indivisualattraction
                }

            }
        )
      


    })



    // function that handle render of the html represtations
    let render = attractions => {
        contentElement.innerHTML = `
      ${
            attractions.map(
                (attraction) => {
                    return attractionComponent(attraction)

                }
            ).join("")
            }
  
    `


    }
    render(attraction)
}
export default attractionlistComponent
