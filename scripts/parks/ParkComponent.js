const ParkComponent = (park) => {
    let parkName = park.name.split(" ").join("-")

    return `
        <section class="selectedParkCard">
        <header class="parkFullName">${park.name}</header>
            <br>
            <div class="parkInformation">
            <div class="parkImg">
                <img src="${park.images[0]}" alt="picture of ${park.name}">
            </div>
            <div class="dialogButton">
                <button class="parkDialogButton" id="park--${parkName}">Additional Park Details</button>
            </div>
            <dialog class="dialog--button" id="details--${parkName}">
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