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
            <button class="parkDialogButton" id="park--${park.parkCode}">Additional Park Details</button>
            <dialog class="dialog--button" id="details--${park.parkCode}">
                <div>${park.name}</div>
                        <br>
                        <div>Description: <br>${park.description}</div>
                        <br>
                        <div>Directions: <br>${park.directionsInfo}</div>
                <button class="button--close">Close Details</button>
            </dialog>
        </div>
        </section>
    `
}

export default ParkComponent