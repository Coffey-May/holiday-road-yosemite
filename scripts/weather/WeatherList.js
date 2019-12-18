// import {useWeatherFiltered} from "./WeatherFilter.js"
// import WeatherComponent from "./WeatherComponent.js"
// import {useParks} from "../parks/ParkProvider.js"
// import { getWeather } from "./WeatherProvider.js"

// const eventHub = document.querySelector(".container")

// const WeatherList = () => {
//     // Load the application state to be used by this component
//     const appStateParks = useParks()

//     eventHub.addEventListener('parkSelected', event => {
//         const parkName = event.detail.park
        
//         const filteredPark = appStateParks.find(
//             (matchingPark) => {
//                 return matchingPark.name === parkName

//             }
//         )
//         const filteredAddress = filteredPark.addresses.find(
//             (singleAddress) => {
//                 return singleAddress.type === "Physical"
//             }
//         )

//         const zipCode = filteredAddress.postalCode

//     }
// }
       
//     // const filteredForcasts = useWeatherFiltered()



//     // const render = forecastCollection => {
//     //     const contentTarget = document.querySelector(".selectedItineraryWeather")
//     //     contentTarget.innerHTML = ""
//     //     let forecastHTML = forecastCollection.map(forecast => WeatherComponent(forecast)).join("")
//     //     contentTarget.innerHTML = `
//     //         ${forecastHTML}
//     //     `
//     // } 

//     // render(filteredForcasts)


// export default WeatherList()