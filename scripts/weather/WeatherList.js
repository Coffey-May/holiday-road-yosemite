import {useWeather} from "./WeatherProvider.js"

let temp_mins = []
let temp_maxs = []

export const WeatherFilter = () => {
    const appStateWeather = useWeather()
    console.log(appStateWeather)
    for (let i = 0; i < 6; i++) {
        const date = appStateWeather[0].dt_txt
        console.log(date)
        debugger
        let splitDate = date.split(" ")[0]
        debugger
        let splitDateSplit = splitDate.split("-")
        debugger
        const splitDateDay = splitDateSplit[2]
        debugger
        let dayAdded = parseInt(splitDateDay, 10) + i
        debugger
        splitDateSplit[2] = dayAdded.toString()
        debugger
        const matchingForecasts = appStateWeather.filter(currentForecast => 
        currentForecast.dt_txt.split(" ")[0] === splitDate)
        let loop_temp_mins = []
        for (const forecast of matchingForecasts) {
            
        }
        debugger
    }
}