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
                <div>More Details</div>
                        <div>Description: ${park.description}</div>
                        <div>Direction: ${park.directions}</div>
                        <div>Additional Images:</div>
                        <img src="${park.images.map(image => {return image.url}).join(" ")}" alt="picture of ${park.name}">
                <button class="button--close">Close Details</button>
            </dialog>
        </div>
        </section>
    `
}

export default ParkComponent