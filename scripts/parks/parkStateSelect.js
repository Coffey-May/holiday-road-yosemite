import states from "/api/states.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".stateFilter")

const useStates = () => {
    return states
}

const StateSelect = () => {
    const states = useStates()


eventHub.addEventListener("change", changeEvent => {

    if (changeEvent.target.id === "stateSelect") {
        const selectedState = changeEvent.target.value

        const message = new CustomEvent ("stateSelected", {
            detail: {
                state: selectedState
            }
        })

        eventHub.dispatchEvent(message)
    }
})

const render = statesCollection => {
    contentElement.innerHTML += `
    <h4>State</h4>
        <select id="stateSelect" class="selectState">State
        <option value="0">Select State</option>
        ${
            statesCollection.map(state =>
            `<option id="stateSelect" value="${state.abbreviation}"> ${state.abbreviation}-${state.name} </option>`
            )
            }
            </select>
    `
}
render(states)

}


export default StateSelect

