import AttractionComponent from "./AttractionComponent.js"
import { useattraction } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")

const AttractionlistComponent = () => {
    console.log("Attractioncomponent")
    const contentElement = document.querySelector(".attractionContainer")
    const criminals = useAttraction()


    eventHub.addEventListener("attractionSelected", event => {
        const crimeName = event.detail.crime
        // detaile.crime is basically  a string here
        const attractionsFilter = attractions.filter(
            (indivisualattraction) => {
                if (indivisualattraction.conviction === attractionName) {
                    return indivisualattraction
                }

            }
        )
        render(attractionsFilter)


    })

    /*eventHub.addEventListener("click", event => {
        if (event.target.id.startsWith("button--")) {
            const dialogSiblingSelector = `#${event.target.id}+dialog`
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
        }
        if (event.target.classList.contains("button--close")) {
            const dialogElement = event.target.parentNode
            dialogElement.close()
        }
    })*/

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
