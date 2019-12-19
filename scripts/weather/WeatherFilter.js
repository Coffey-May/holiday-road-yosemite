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
    const appStateWeather = useWeather()


    //I need to iterate over the days measured in the forecasts
    //When i = 0, I'll be looking at the data for the first day
    //When i = 1, I'll be looking at the data for the second day
    //etc.
    for (let i = 0; i < 6; i++) {

        // In order to accomplish my ultimate goal of 
        // filtering the forecasts by date,
        // I first need to go into the data and grab the date of the first day.


        const date = appStateWeather[0].dt_txt
         // This is the date from the first 3-hour forecast as a string:
        // forecast[0]{

        //              ---> dt.txt: "YYYY-MM-DD Time(in 24 hour form)"
        //         }


        let dateWithoutTimestamp = date.split(" ")[0]
        // I only want the YYYY-MM-DD from that string, and not the time
        // so I split the date that I just grabbed:
        // "YYYY-MM-DD Time(in 24 hour form)"
        // example:
        // "2019-12-19 06:00:00"
        // by the space, so I get an array that looks like this:
        // ["YYYY-MM-DD", "Time(in 24 hour form)"].
        // So now, if I want to save only the YYYY-MM-DD string to a variable
        // I just grab only the 1st item in the array
        // Which has the index of 0
        // date.split(" ")[0] = "YYYY-MM-DD"
        // I've dropped the time because I don't need it.


        let dateArray = dateWithoutTimestamp.split("-")
        // So now that I have just the YYYY-MM-DD string
        // I want to isolate the different parts of it
        // so I can do things like change the day of forecasts I'm looking at
        // or save the month and the day together as a variable without the year.
        // So I split the YYYY-MM-DD string into an array that looks like:
        // ["YYYY", "MM", "DD"]


        const justTheDay = dateArray[2]
        // I want only the "DD" from that array that we just made
        // which has an index of 2
        // ["YYYY", "MM", "DD"]
        // [0]      [1]   [2]


        let dayOfForecast = parseInt(justTheDay, 10) + i
        //This is where I nail down which day of the forecasts I want to look at

        // Because the for loop always starts with
        // the date of the 1st day of the forecast,
        // If I want to change the day I'm looking at
        // to the 2nd, 3rd, 4th, 5th, or 6th day of the forecast
        // I have to add a number to the day of the 1st forecast.

        // Let's say the day of the 1st forecast was the 18th,
        // and I wanted to look at the forecasts from the 19th,
        // I'd have to add one to 18 to make it 19.

        // That's where the iterator i from the for loop comes in.
        // It changes the day for me instead of me having to do
        // 6 different manual filter functions
        // where I'd have to manually put in 6 different dates.

        // When i=1, it adds 1 to the date so I'm now looking at
        // the forecasts from the 2nd date - the 1st date plus one day.
        // When i=2, it adds 2 to the date so I'm now looking at
        // the forecasts from the 3rd date - the 1st date plus two days.

        // i is the number of days from the 1st day I want to look at.

        // When i is 0, it means I'll see forecasts from the 1st day
        // because it didn't change the date I grabbed from the 1st day.
        
        // So I'm turning the day string that we just saved in justTheDay
        // that was index 2 in the array ["YYYY", "MM", "DD"]
        // into a number using parseInt() and adding i to it.


        dateArray[2] = dayOfForecast.toString()
        // Remember the array ["YYYY", "MM", "DD"]?
        // This replaces "DD" in it
        // with the day that may or may not have been modified
        // when we added i to it.
        // So I turn dayOfForecast back into a string from a number
        // and overwrite the "DD" that was there before with it


        let joinedDate = dateArray.join("-")
        // Remember way back when the date I grabbed from the array
        // was in this format:
        // "YYYY-MM-DD"?
        // Well I want to turn the array
        // ["YYYY", "MM", "DD"]
        // back into that - a single string with the parts separated by dashes
        // so it's YYYY-MM-DD.
        // So I join ["YYYY", "MM", "DD"] into a string with the items
        // seperated by dashes.

        // So, I've changed the date I initially grabbed from the forecast
        // into the date I'm going to I'm going to be filtering for,
        // and it's back in the same format that dates in the data are in
        // which is "YYYY-MM-DD"


        let dateConverted = new Date(joinedDate)
        // Not only do I want the daily high and low and the conditions,
        // I also want to know what the day of the week for the day I'm looking at is,
        // so that when I show the user a 5 day forecast, I can show them
        // the day of the week and tbe calendar date.
        // There's a function that can do that called getDay(),
        // But it will only accept dates in a certain format.
        // So before I can use getDay(), I have to convert the string
        // I saved in joinedDate into javascript's special Date format


        let dayOfTheWeek = dateConverted.getDay()
        // Now that I converted the joinedDate string into a Date,
        // I can use getDay().
        // getDay reads a Date, and returns the day of the week.
        // But instead of returning a string like "Sunday", "Monday", or "Tuesday",
        // it actually returns a number that corresponds to a day of the week.
        // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
        // I'll work with that number later.


        let dateConverted2 = new Date(joinedDate).toLocaleDateString('en-US',{timeZone: 'UTC'})
        // I want to convert the date string I have that's in the format:
        // YYYY-MM-DD
        // into the format Americans are used to seeing which is:
        // MM/DD/YYYY
        // Luckily, there's the very helpful function toLocaleDateString(),
        // which uses magic that I don't fully understand to do that.
        // dateConverted2 is the date of the day of forecasts I'm looking at
        // in the format MM/DD/YYYY


        let dayMonth = dateConverted2.split("/").slice(0, 2).join("/")
        // When I show users the 5 day forecast, I want to show them the day of the week
        // and the calendar date (without the year) of each day we looked at.
        // So, I want to take the "MM/DD" out of the "MM/DD/YYYY" we just created.
        // So I make an array out of the MM/DD/YYYY string:
        // ["MM","DD", "YYYY"]
        // using split() on the slashes "/".
        // I only want the MM and DD from that array,
        // so I use slice() to make a new array copying from the ["MM","DD", "YYYY"] array
        // but I tell slice I only want to copy the section of the array
        // starting at index [0], and stopping at index [2].
        // .slice() is kind of confusing because when you tell it stop at an index,
        // it doesn't include the item at that index.
        // When it reaches that index, in our case index [2], it stops copying.


        let matchingForecasts = appStateWeather.filter(currentForecast => 
        currentForecast.dt_txt.split(" ")[0] === joinedDate)
        // This is where I actually do the filtering.
        // I want to filter the array of all the forecasts,
        // and look at only the forecasts for the date that I'm telling it.
        // So I have to go into all 40 forecasts in the array,
        // and find all of the ones that have the date of the day I want to look at.

        // Remember, the date in the API is in the format
        // YYYY-MM-DD
        // not the pretty MM/DD/YYYY format of our nice converted string.
        // So I have to compare joinedDate,
        // which is the date of the day we're looking at
        // in YYYY-MM-DD form,
        // and compare it to the date of each forecast,
        // which is "YYYY-MM-DD Time(in 24 hour form)".

        // But I can only compare them if I drop the timestamp from the date
        // in each forecast object.
        // So I split the date in the forecast object that filter() is looking at
        // by space (" "), which turns it into an array:
        // ["YYYY-MM-DD", "Time(in 24 hour form)"]
        // And I only want the "YYYY-MM-DD" from that array for the comparison
        // for filter(), so I grab it by asking for the item at index [0]

        // So this function will return to me all the forecasts whose date
        // "YYYY-MM-DD" matches the date "YYYY-MM-DD" of the day I want to look at


        let day_temp_mins = []
        // This is the array I'm going to store all the lows recorded on each day


        let day_temp_maxs = []
        // This is the array I'm going to store all the highs recorded on each day


        let day_conditions = []
        // This is the array where I'm going to store all the conditions recorded
        // on each day


        let day_conditions_icons = []


        for (const forecast of matchingForecasts) {
        // This for loop iterates over all the forecasts for a given day that I pulled
        // together with my filter() function


            day_temp_mins.push(forecast.main.temp_min)
            // This pushes the low from each forecast into an array


            day_temp_maxs.push(forecast.main.temp_max)
            // This pushes the high from each forecast into an array


            day_conditions.push(forecast.weather[0].main)
            // This pushes the conditions from each forecast into an array


            day_conditions_icons.push(forecast.weather[0].icon)
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


        forecastDays[`date${i}`] = {dayMonth}
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

        // Here I'm giving the day's object a property called dayMonth,
        // the value of which will be the "MM/DD" from the nice "MM/DD/YYYY"
        // string of the date of the forecast we created earlier.


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
        // Remember when I used getDay() to get a number for the day of the week
        // of the day of the forecast we were looking at?
        // Here, I do a zillion if statements to figure out what day of the week
        // that number corresponds to,
        // and pass that day of the week to the day data object as a string
        // that I'll show the user in the 5 day forecast.
        // I store that string in a property of the day data object called "day".


        forecastDays[`date${i}`].low = day_temp_mins.slice(0, 1).join("")
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