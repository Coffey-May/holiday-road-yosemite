// IMPORT THE PARSED API DATA FROM THE DATA PROVIDER
import { useAttractions } from './AttractionProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.attractionsFilter')


const attractionSelect = () => {
    const attractions = useAttractions()

    eventHub.addEventListener('change', changeEvent => {
        if (changeEvent.target.id === 'attractionSelect') {
            const selectedAttraction = changeEvent.target.value
            const attractionNewMessage = new CustomEvent('attractionSelected', {
                detail: {
                    attraction: selectedAttraction
                }
            })
            eventHub.dispatchEvent(attractionNewMessage)
        }
    })

const render = (attractionCollection) => {
    contentTarget.innerHTML =`
   
    <div class="selectIcon">
    <img src="film-camera.png" alt="attraction icon">
    <select name="" id="attractionSelect" class="selectAttraction">Attractions
        <option value="0">Select Attraction</option>
        ${
            attractions.map(attraction =>
            `<option> ${attraction.name}</option>`
            )
            }
            </select>
    </div>
        
    `
}

render(attractions)

}

export default attractionSelect