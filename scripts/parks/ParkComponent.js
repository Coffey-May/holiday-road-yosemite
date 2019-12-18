const ParkComponent = (park) => {
    let parkName = park.name.split(" ").join("-")

    return `
        <section class="selectedParkCard">
        <header class="parkFullName">${park.name}</header>
            <br>
        <div class="parkInformation">
            <div class="parkImg">
                <img src="${park.images.url}" alt="picture of ${park.name}">
            </div>
        </div>
        <div class="parkDialogButton">
            <button class="parkDialogButton" id="park--${park.parkCode}">Additional Park Details</button>
            <dialog class="dialog--button" id="details--${park.parkCode}">
                <div>More Details</div>
                        <div>Description:</div>
                        <div>Events:</div>
                <button class="button--close">Close Details</button>
            </dialog>
        </div>
        </section>
    `
}

export default ParkComponent