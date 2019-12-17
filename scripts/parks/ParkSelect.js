// IMPORT THE PARSED API DATA FROM THE DATA PROVIDER
import { useParks } from './ParkProvider.js'

// DEFINE THE EVENT HUB LOCATED IN THE HTML BODY TAG
// THEN DEFINE TARGET ELEMENT IN WHICH OUR PARK API INFO IS TO BE ACCESSED VIA DROPDOWN SELECT
const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.parkFilter')

// 
const parkSelect = () => {
    const parks = useParks()

    eventHub.addEventListener('change', changeEvent => {
        if (changeEvent.target.id === 'parkSelect') {
            const selectedPark = changeEvent.target.value
            const parkNewMessage = new CustomEvent('parkSelected', {
                detail: {
                    park: selectedPark
                }
            })
            eventHub.dispatchEvent(parkNewMessage)
        }
    })

const render = (parkCollection) => {
    contentTarget.innerHTML =`
   
        <h4>PARKS</h4>
        <select name="select" id="parkSelect" class="selectPark">Parks
        <option value="0">Select Park</option>
        ${
            parks.map(park =>
            `<option>${park.name}</option>`
            )
            }
            </select>
        
    `
}

render(parks)

}

export default parkSelect
