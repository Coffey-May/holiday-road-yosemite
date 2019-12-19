// IMPORT THE PARSED API DATA FROM THE DATA PROVIDER
import { useEateries } from './EateryProvider.js'

// DEFINE THE EVENT HUB LOCATED IN THE HTML BODY TAG
// THEN DEFINE TARGET ELEMENT IN WHICH OUR PARK API INFO IS TO BE ACCESSED VIA DROPDOWN SELECT
const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.eateriesFilter')



// 
const eaterySelect = () => {
    const eateries = useEateries()

    eventHub.addEventListener('change', changeEvent => {
        if (changeEvent.target.id === 'eaterySelect') {
            const selectedEatery = changeEvent.target.value
            const eateryNewMessage = new CustomEvent('eaterySelect', {
                detail: {
                    eatery: selectedEatery
                }
            })
            eventHub.dispatchEvent(eateryNewMessage)
        }
    })

const render = (eateryCollection) => {
    contentTarget.innerHTML =`
   
    <h4>EATERIES</h4>
    <select name="" id="eaterySelect" class="selectEatery">EATERIES
        <option value="0">Select Eatery</option>
        ${
            eateries.map(eatery =>
            `<option> ${eatery.businessName}</option>`
            )
            }
            </select>
        
    `
}

render(eateries)

}

export default eaterySelect
