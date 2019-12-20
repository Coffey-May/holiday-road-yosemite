import { useWeather } from "./WeatherProvider.js"

let forecastDays = {}

export const useWeatherFiltered = () => {
    const justTheDates = []
    for (const date of Object.values(forecastDays)) {
        justTheDates.push(date)
    }
 
    return justTheDates
}


// I want to figure out what the highest temperature
// and the lowest temperature recorded each day are,
// as well as the conditions throughout the day.
// Unfortunately, the API doesn't give us one overall daily forecast
// It gives us one for every three hours of a day,
// with the low and high of every three-hour period.
// So, if I want to know what the highest and lowest temperature overall
// in a day were, I have to get all the forecasts for that day,
// and determine what the lowest low and highest high recorded were.


// In order to do that, I have to filter the forecasts by day
export const WeatherFilter = () => {


    //this holds the array of all the forecasts over a 5 day period
    let appStateWeather = useWeather()

    // In each forecast object, the date is stored in two ways:
    // The first is in a property called "dt".
    // The time there is in a crazy format which is the number of milliseconds
    // since January 1, 1970 at midnight.
    // The second is in a property called "dt_txt".
    // The time there is in the format: "YYYY-MM-DD Time(in UTC time)"

    // When I show the user the 5 day forecast, I want it to be
    // for the calendar days that the forecast date would be in
    // if it were in Central Time, which is 6 hours different from UTC time.

    // The crazy thing is, it's easier for me to reliably convert the "dt"
    // milliseconds date to a Central Time date than it is for me to convert
    // the "dt_txt" date! I tried a lot and am not smart enought to get this
    // to work with the "dt_txt" date.

    // I also realized it was easier for me to convert the date
    // into the formats that I want/need and store that
    // as a new property on the forecast object
    // before I touched the rest of the weather data
    // than it was to try to do both at the same time

    // So I decided to convert the date of EVERY FORECAST OBJECT
    // before I even looked at its weather data


    for (let i = 0; i < appStateWeather.length; i++) {

            
        let dateInSeconds = (appStateWeather[i].dt) * 1000
        // I read on Stack Exchange that if I want to convert a milliseconds date
        // to a normal date, I have to multiply it by 1000 first to convert it to seconds
        
        
        let date = new Date(dateInSeconds)
        // I've now successfully converted the date in seconds
        // to the date in Central Time
        // So if it was "2019-12-20 06:00:00" before,
        // it's now: "Thu Dec 19 2019 21:00:00 GMT-0600 (Central Standard Time)"

        // I don't entirely know how Date does this.
        // I think it detects some settings from your browser and computer
        // to determine what timezone to convert it to.


        let dateString = date.toString()

        
        let dateArray = dateString.split(" ")
        // I want to capture only the "Dec 19 2019"(example) of that date
        // But before I can do that, I have to make the entire date into an array
        // ["Thu", "Dec," "19", "2019", "21:00:00", "GMT-0600", "(Central", "Standard", "Time)"]
        // I don't actually know if the GMT and central standard time stuff
        // is in that array
        // but when I console.log(date), that's what comes out


        let dateArrayPartial = dateArray.slice(1, 4)
        // That will give me a new array
        // ["Dec", "19", "2019"]


        let filterDate = dateArrayPartial.join(" ")
        // This will convert the array
        // ["Dec", "19", "2019"]
        // into a text string
        // "Dec 19 2019"

        let dayOfTheWeek = date.getDay()
        // When I show the user a forecast, I don't just want to show them
        // the calendar date, I also want to show them the day of the week
        // getDay reads a Date, and returns the day of the week.
        // But instead of returning a string like "Sunday", "Monday", or "Tuesday",
        // it actually returns a number that corresponds to a day of the week.
        // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
        // I'll work with that number later.


        let monthDayYear = new Date(date).toLocaleDateString()
        // I want to convert the date string I have that's in the format:
        // YYYY-MM-DD
        // into the format Americans are used to seeing which is:
        // MM/DD/YYYY
        // Luckily, there's the very helpful function toLocaleDateString(),
        // which uses magic that I don't fully understand to do that.
        // in the format MM/DD/YYYY


        let monthDayYearArray = monthDayYear.split("/")
        // I want to isolate just the "MM/DD" from the "MM/DD/YYYY"
        // To do that, I have to break the "MM/DD/YYYY" into an array
        // ["MM", "DD", "YYYY"]


        let monthDayArray = monthDayYearArray.slice(0,2)
        // This gives me a new array
        // ["MM", "DD"]


        let monthDay = monthDayArray.join("/")
        // This creates a string "MM/DD"
        // This is the calendar date I'll show the user
        // for each day of my 5 day forecast


        appStateWeather[i].date = filterDate
        // I'm passing the date in fitlerDate
        // "Dec 19 2019" (example)
        // This is the date I'm going to use for filtering later

        
        if (dayOfTheWeek === 0) {
            appStateWeather[i].weekday = "Sunday"
        }
        if (dayOfTheWeek === 1) {
            appStateWeather[i].weekday = "Monday"
        }
        if (dayOfTheWeek === 2) {
            appStateWeather[i].weekday = "Tuesday"
        }
        if (dayOfTheWeek === 3) {
            appStateWeather[i].weekday = "Wednesday"
        }
        if (dayOfTheWeek === 4) {
            appStateWeather[i].weekday = "Thursday"
        }
        if (dayOfTheWeek === 5) {
            appStateWeather[i].weekday = "Friday"
        }
        if (dayOfTheWeek === 6) {
            appStateWeather[i].weekday = "Saturday"
        }
        if (i === 0) {
            appStateWeather[i].weekday = "Today"
        }
        // Remember when I used getDay() to get a number for the day of the week
        // of the day of the forecast we were looking at?
        // Here, I do a zillion if statements to figure out what day of the week
        // that number corresponds to,
        // and pass that day of the week to the forecast as a string
        // that I'll show the user in the 5 day forecast.
        // I store that string in a property called "weekday".


        appStateWeather[i].monthAndDay = monthDay
        // I'm storing here the month and day of each forecast
        // Because I'm going to want the show the user that in the 5 day forecast
        // "12/19" (example)
    }

    


    //I need to iterate over the days measured in the forecasts
    //When i = 0, I'll be looking at the data for the first day
    //When i = 1, I'll be looking at the data for the second day
    //etc.
    for (let i = 0; i < 6; i++) {

        let firstDate = appStateWeather[0].date
        // I'm going to iterate over the days of the forecast
        // by adding i to the date of the first forecast.
        // So i need to first grab the date of the first forecast
        // "Dec 19 2019" (example)


        let splitDate = firstDate.split(" ")  
        // I need to isolate the month, day, and year
        // so I can change the value of the day with i
        // so I make an array
        // ["Dec", "19", "2019"]
        
        
        let dayDate = splitDate[1]
        // This grabs the string of the day from the array


        let dayIterated = parseInt(dayDate, 10) + i
        // // Because the for loop always starts with
        // // the date of the 1st day of the forecast,
        // // If I want to change the day I'm looking at
        // // to the 2nd, 3rd, 4th, 5th, or 6th day of the forecast
        // // I have to add a number to the day of the 1st forecast.

        // // Let's say the day of the 1st forecast was the 18th,
        // // and I wanted to look at the forecasts from the 19th,
        // // I'd have to add one to 18 to make it 19.

        // // That's where the iterator i from the for loop comes in.
        // // It changes the day for me instead of me having to do
        // // 6 different manual filter functions
        // // where I'd have to manually put in 6 different dates.

        // // When i=1, it adds 1 to the date so I'm now looking at
        // // the forecasts from the 2nd date - the 1st date plus one day.
        // // When i=2, it adds 2 to the date so I'm now looking at
        // // the forecasts from the 3rd date - the 1st date plus two days.

        // // i is the number of days from the 1st day I want to look at.

        // // When i is 0, it means I'll see forecasts from the 1st day
        // // because it didn't change the date I grabbed from the 1st day.


        splitDate[1] = dayIterated.toString()
        // // Remember the array ["Dec", "19", "2019"] (example)?
        // // This replaces "19" in it
        // // with the day that may or may not have been modified
        // // when we added i to it.
        // // So I turn dayIterated back into a string from a number
        // // and overwrite the "Day" that was there before with it


        let joinedDate = splitDate.join(" ")
        // I turn the array
        // ["Dec", "19", "2019"]
        // back into a string
        // "Dec 19 2019"
        // or however the day changed

        // // So, I've changed the date I initially grabbed from the forecast
        // // into the date I'm going to I'm going to be filtering for
        

        let matchingForecasts = appStateWeather.filter(currentForecast => 
            currentForecast.date === joinedDate)
            // This is where I actually do the filtering.
            // I want to filter the array of all the forecasts,
            // and look at only the forecasts for the date that I'm telling it.
            // So I have to go into all 40 forecasts in the array,
            // and find all of the ones that have the date of the day I want to look at.
    

        
        let day_temp_mins = []
        // This is the array I'm going to store all the lows recorded on each day


        let day_temp_maxs = []
        // This is the array I'm going to store all the highs recorded on each day


        let day_conditions = []
        // This is the array where I'm going to store all the conditions recorded
        // on each day


        let day_conditions_icons = []
        // This is the array where I'm going to store all the IDs for the icons
        // associated with the weather conditions recorded for each day


        for (let i = 0; i < matchingForecasts.length; i++) {
        // I'm looping over all the filtered forecasts
        // and grabbing the low, the high, the conditions,
        // and the id for the picture icon associated with the conditions


            day_temp_mins.push(matchingForecasts[i].main.temp_min)
            // This pushes the low from each forecast into an array


            day_temp_maxs.push(matchingForecasts[i].main.temp_max)
            // This pushes the high from each forecast into an array


            day_conditions.push(matchingForecasts[i].weather[0].main)
            // This pushes the conditions from each forecast into an array


            day_conditions_icons.push(matchingForecasts[i].weather[0].icon)
            // This pushes the id of the picture icon for each weather condition.
            // "Clear" has its own icon, and that icon has an id
            // that I can use to to get a url for image that I can show in my forecast.
            // Same with "Clouds", "Rain", etc.
        }



        day_temp_mins.sort((a, b) => (a - b))
        // This sorts the array of lows for each day from smallest to biggest
        // so I can know what the lowest overall low was


        day_temp_maxs.sort((a, b) => (b - a))
        // This sorts the arrays of highs for reach day from biggest to smallest
        // so I can know what the highest overall high was


       
        if (matchingForecasts.length != 0) {
        // My for loop runs 6 times because sometimes the 5-day forecast
        // actually stretches over 6 calendar days, depending on what time of day
        // the first forecast in the array is from.
        // Here, I test whether or not matchingForecasts has any data in it
        // If it doesn't, it filtered for a date beyond the range
        // of this batch of forecasts

            
            let monthAndDay = matchingForecasts[0].monthAndDay


            forecastDays[`date${i}`] = {monthAndDay}
            // Here I'm creating an object that's going to store all the data I want
            // to show the user for each day in the 5-day forecast.
            // That object is going to be nested in the object forecastDays.
            // When WeatherFilter() is done, forecastDays should have objects for each day
            // of the 5-day forecast.
    
            // If each day of the 5-day forecast is going to have a different object
            // that it's drawing its data from,
            // then I have to give all those objects different names.
            // So, I just give each day's object the name of date concatenated
            // with the value of i.
            // So the object holding the first day's value is called date0,
            // because i will be 0 when I'm looking at the first day's forecasts.
    
            // If I didn't change the name of the object for each day,
            // and just called the object "date" here,
            // all the data in it would be overwritten each time the for loop ran.
            // So I'd just end up with one object at the end holding the data of the last day.
    
            // Here I'm giving the day's object a property called monthDay,
            // That has the value of the month and day of the calendar date of the day
            // Because every forecast in matchingForecasts is from the same day
            // I only need to grab the monthDay of the first forecast from the day


            forecastDays[`date${i}`].dayweek = matchingForecasts[0].weekday
            // Here I'm giving the day data object the day of the week property


            day_temp_mins = day_temp_mins.slice(0, 1)

            day_temp_mins = day_temp_mins.join("")
    
    
            forecastDays[`date${i}`].low = day_temp_mins
            // I want to pass the smallest low from the array of lows for each day
            // to my day data object in a property called "low".
            // To do that, I use slice() to make an array containing only 
            // the first item from the array of all lows for each day 
            // that I previously sorted smallest to biggest.
            // The first item in that array will be the lowest low.
            // Then I use join() to convert that array of only one item into a string
            // and store it in the day data object.
    
    
            forecastDays[`date${i}`].high = day_temp_maxs.slice(0,1).join("")
            // I want to pass the largest high from the array of highs for each day
            // to my day data object in a property called "high".
            // To do that, I use slice() to make an array containing only 
            // the first item from the array of all highs for each day 
            // that I previously sorted buggest to snallest.
            // The first item in that array will be the highest high.
            // Then I use join() to convert that array of only one item into a string
            // and store it in the day data object.
    
    
            if (day_conditions.length === 8) {
                forecastDays[`date${i}`].conditions = day_conditions[4]
            } else {
                forecastDays[`date${i}`].conditions = day_conditions[(day_conditions.length) - 1]
            }
            // I want to show the user the conditions of each day at noon.
            // If the API recorded 8 forecasts for the day I'm looking at,
            // then I know there's a forecast covering all 24 hours of the day -
            // - midnight to midnight.
            // If I know that it covers all 24 hours, I can just use math to figure out
            // which item in the conditions array represents the forecast at noon.
            // [0] = 12 am, [1] = 3 am, [2] = 6 am, [3] = 9 am
            // and [4] = 12 pm / noon.
    
            // If it doesn't have 8 forecasts, then I know that it doesn't cover all 24 hours.
            // And in that case, I'm just going to be lazy and grab
            // the conditions from the last forecast from that day.
            // The user can go suck an egg.
    
            // So I'm saving the conditions in the day data object
            // in a property called "conditions"
    
    
            if (day_conditions.length === 8) {
                forecastDays[`date${i}`].icon = day_conditions_icons[4]
            } else {
                forecastDays[`date${i}`].icon = day_conditions_icons[(day_conditions_icons.length) - 1]
            }
            // I want to show the user a picture for the conditions of each day at noon.
            // The part of the data that has the weather conditions like "Clouds"
            // also has an ID for an icon that I can use to get a picture
            // that corresponds with the conditions.
            // I can use the same clock math from the previous if statement
            // to get the icon for each day at noon
            // or the last forecast from each day if there aren't 8 forecasts for that day
    
            // So I'm saving the icon in the day data object
            // in a property called icon
        }
    }
}