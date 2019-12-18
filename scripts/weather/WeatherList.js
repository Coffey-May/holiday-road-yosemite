import {useWeatherFiltered} from "./WeatherFilter.js"
import WeatherComponent from "./WeatherComponent.js"


const eventHub = document.querySelector(".container")

const WeatherList = () => {
    // Load the application state to be used by this component
    const filteredForcasts = useWeatherFiltered()

    const render = forecastCollection => {
        const contentTarget = document.querySelector(".selectedItineraryWeather")
        contentTarget.innerHTML = ""
        let forecastHTML = forecastCollection.map(forecast => WeatherComponent(forecast)).join("")
        contentTarget.innerHTML = `
            ${forecastHTML}
        `
    } 

    render(filteredForcasts)
}

export default WeatherList