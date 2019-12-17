let attractions = []



export const useAttraction = () => {
  return  attractions
}
export const getAttraction = ()=> {
 
    return fetch ("http://holidayroad.nss.team/bizarreries")
    
    .then(response => response.json()
    )
    .then(

        parsedAttraction =>{
            console.log(" data relate to attraction")
            attractions = parsedAttraction.slice()
        }
    )
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
}