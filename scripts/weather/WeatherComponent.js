const WeatherComponent = (forecast) => {
    
    return `
        <section class="weather_component">
            <h3 class="weather__date">
                ${forecast.dayMonth}
            </h3>
            <div class="weather__data">
                <span class="weather__data_low">
                    ${forecast.low}
                </span>
                <span class="weather__data_high">
                    ${forecast.high}
                </span>
        </section>
    `
}

export default WeatherComponent