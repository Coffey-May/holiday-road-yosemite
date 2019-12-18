/*button talk and dialogs box listing. dialogs box have responsibilty to about
 knowm-assosiates data*/




 const initializeAttractionButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const CloseButtons = document.querySelectorAll(".button--close")
  
    for (const btn of CloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
  /*const eventHub=document.querySelector(".container")
  eventHub.addEventListener("click", clickEvent=>{
    if(clickEvent.target.id.startsWith("button--")){
  
      const message= new CustomEvent("buttonSelected")
      eventHub.dispatchEvent(message)
    }
  })*/
  
  
  
  const allDetailButtons = document.querySelectorAll("button[id^='button--']")
  console.log(allDetailButtons)
  for (const btn of allDetailButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
              const theDialog = document.querySelector(dialogSiblingSelector)
              console.log(dialogSiblingSelector)
              theDialog.showModal()
          }
      )
  }
    
  }
  export default initializeAttractionButtonEvents