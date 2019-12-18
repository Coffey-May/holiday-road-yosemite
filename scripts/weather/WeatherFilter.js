import {useWeather} from "./WeatherProvider.js"

let forecastDays = {}

export const useWeatherFiltered = () => {
    const justTheDates = []
    for (const date of Object.values(forecastDays)) {
        justTheDates.push(date)
    }
    console.log(justTheDates)
    return justTheDates
}

export const WeatherFilter = () => {
    const appStateWeather = useWeather()
    
    for (let i = 0; i < 6; i++) {
        const date = appStateWeather[0].dt_txt
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
        let joinedDate = splitDateSplit.join("-")
        debugger
        let dateConverted = new Date(joinedDate)
        debugger
        let dayOfTheWeek = dateConverted.getDay()
        debugger
        let dateConverted2 = new Date(joinedDate).toLocaleDateString('en-US',{timeZone: 'UTC'})
        let dayMonth = dateConverted2.split("/").slice(0, 2).join("/")
        debugger
        let matchingForecasts = appStateWeather.filter(currentForecast => 
        currentForecast.dt_txt.split(" ")[0] === joinedDate)
        let day_temp_mins = []
        let day_temp_maxs = []
        let day_condiitons = []
        for (const forecast of matchingForecasts) {
            day_temp_mins.push(forecast.main.temp_min)
            // console.log("day_temp_mins")
            // console.log(day_temp_mins)
            // debugger
            day_temp_maxs.push(forecast.main.temp_max)
            // console.log("day_temp_maxs")
            // console.log(day_temp_maxs)
            // debugger
            day_condiitons.push(forecast.weather[0].main)
            debugger
        }
        
        console.log(day_condiitons)
        debugger
        day_temp_mins.sort((a, b) => (a - b))
        // debugger
        day_temp_maxs.sort((a, b) => (b - a))
        // debugger
        forecastDays[`date${i}`] = {dayMonth}
        // debugger
        if (dayOfTheWeek === 0) {
            forecastDays[`date${i}`].day = "Sunday"
        }
        if (dayOfTheWeek === 1) {
            forecastDays[`date${i}`].day = "Monday"
        }
        if (dayOfTheWeek === 2) {
            forecastDays[`date${i}`].day = "Tuesday"
        }
        if (dayOfTheWeek === 3) {
            forecastDays[`date${i}`].day = "Wednesday"
        }
        if (dayOfTheWeek === 4) {
            forecastDays[`date${i}`].day = "Thursday"
        }
        if (dayOfTheWeek === 5) {
            forecastDays[`date${i}`].day = "Friday"
        }
        if (dayOfTheWeek === 6) {
            forecastDays[`date${i}`].day = "Saturday"
        }
        debugger
        forecastDays[`date${i}`].low = day_temp_mins.slice(0, 1).join("")
        // debugger
        forecastDays[`date${i}`].high = day_temp_maxs.slice(0,1).join("")
        // debugger
        console.log(forecastDays)
        // debugger
    }
}