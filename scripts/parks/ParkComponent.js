const ParkComponent = (park) => {
    // let parkName = park.name.split(" ").join("-")

    return `
        <section class="selectedParkCard">
        <header class="parkFullName">${park.name}</header>
            <br>
        <div class="parkInformation">
            <div class="parkImg">
                <img src="${park.images[0].url}" alt="picture of ${park.name}">
            </div>
        </div>
        <div class="parkDialogButton">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <br>
            <button class="parkDialogButton" id="park--${park.parkCode}">Park Details</button>
            <dialog class="dialog--button" id="details--${park.parkCode}">
                <div>${park.name}</div>
                        <br>
                        <div>Description: <br>${park.description}</div>
                        <br>
                        <div>Directions: <br>${park.directionsInfo}</div>
                        <br>
                        <a href="${park.directionsUrl}">Click for Directions</a>
                <br><button class="button--close">Close Details</button>
            </dialog>
        </div>
        </section>
    `
}

export default ParkComponent