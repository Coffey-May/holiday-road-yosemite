const WeatherComponent = (forecast) => {
    let date = forecast.sys.dt_txt
    const splitDate = date.split(" ")[0]
    const convertedDate = new Date(splitDate).toLocaleDateString('en-US')
    return `
        <section class="weather_component">
            <div class="weather__date">
                <h3>${convertedDate}</h3>
            </div>
            <div class="weather__data">
                <div class="weather__conditions">
                    <span>
                        The forecast is for ${forecast.weather[0].description}
                    </span>
                </div>
                <div class="weather__temperatures">
                    <span>
                        ${forecast.main.temp_max}
                    </span>
                    <span>
                        ${forecast.main.temp_min}
                    </span>
                </div>
            </div>
        </section>
    `
}

export default NoteHTML