const initializeAttractionDetailButtonEvents = () => {




    const eventHub = document.querySelector(".container")
    
    eventHub.addEventListener("click", event => {
    
        if (event.target.id.startsWith("attraction--")){
            const dialogSiblingSelector = `#${event.target.id}+dialog`
            console.log(dialogSiblingSelector)
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
        }
    
        if (event.target.classList.contains("button--close")){
            const dialogElement = event.target.parentNode
            dialogElement.close()
        }
    })
}
   export  default initializeAttractionDetailButtonEvents

    