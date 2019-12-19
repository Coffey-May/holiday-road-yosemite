import { useWeather } from "./WeatherProvider.js"

let forecastDays = {}

export const useWeatherFiltered = () => {
    const justTheDates = []
    for (const date of Object.values(forecastDays)) {
        justTheDates.push(date)
    }
 
    return justTheDates
}

export const WeatherFilter = () => {
    const appStateWeather = useWeather()

    for (let i = 0; i < 6; i++) {
        const date = appStateWeather[0].dt_txt
        let splitDate = date.split(" ")[0]
        let splitDateSplit = splitDate.split("-")
        const splitDateDay = splitDateSplit[2]
        let dayAdded = parseInt(splitDateDay, 10) + i
        splitDateSplit[2] = dayAdded.toString()
        let joinedDate = splitDateSplit.join("-")
        let dateConverted = new Date(joinedDate)
        let dayOfTheWeek = dateConverted.getDay()
        let dateConverted2 = new Date(joinedDate).toLocaleDateString('en-US', { timeZone: 'UTC' })
        let dayMonth = dateConverted2.split("/").slice(0, 2).join("/")

        let matchingForecasts = appStateWeather.filter(currentForecast =>
            currentForecast.dt_txt.split(" ")[0] === joinedDate)
        let day_temp_mins = []
        let day_temp_maxs = []
        let day_condiitons = []
        for (const forecast of matchingForecasts) {
            day_temp_mins.push(forecast.main.temp_min)
            day_temp_maxs.push(forecast.main.temp_max)
            day_condiitons.push(forecast.weather[0].main)
        }

    
    day_temp_mins.sort((a, b) => (a - b))

    day_temp_maxs.sort((a, b) => (b - a))
    forecastDays[`date${i}`] = { dayMonth }
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
    if (i === 0) {
        forecastDays[`date${i}`].day = "Today"
    }

    forecastDays[`date${i}`].low = day_temp_mins.slice(0, 1).join("")

    forecastDays[`date${i}`].high = day_temp_maxs.slice(0, 1).join("")

    

    forecastDays[`date${i}`].low = day_temp_mins.slice(0, 1).join("")
    forecastDays[`date${i}`].high = day_temp_maxs.slice(0, 1).join("")
    
}
}