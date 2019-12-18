// DECLARE AN EMPTY ARRAY STORED IN A VARIABLE NAMED PARKS.
import settings from "../Settings.js"
let parks = [
    {
        "states": "DC",
        "directionsInfo": "The memorial is located at the corner of Vermont Avenue, 10th St, and U Street NW, near the U Street/African-American Civil War Memorial/Cardozo Metro Station.",
        "directionsUrl": "http://www.nps.gov/afam/planyourvisit/directions.htm",
        "url": "https://www.nps.gov/afam/index.htm",
        "weatherInfo": "Washington DC gets to see all four seasons. Humidity will make the temps feel hotter in summer and colder in winter.\n\nSpring (March - May) Temp: Average high is 65.5 degrees with a low of 46.5 degrees\n\nSummer (June - August) Temp: Average high is 86 degrees with a low of 68.5 degrees\n\nFall (September - November) Temp: Average high is 68 degrees with a low of 51.5 degrees\n\nWinter (December - February) Temp: Average high is 45 degrees with a low of 30 degrees\n\n(Source: www.usclimatedata.com)",
        "name": "African American Civil War Memorial",
        "latLong": "lat:38.916554, long:-77.025977",
        "description": "Over 200,000 African-American soldiers and sailors served in the U.S. Army and Navy during the Civil War. Their service helped to end the war and free over four million slaves. The African American Civil War Memorial honors their service and sacrifice.",
        "designation": "",
        "parkCode": "afam",
        "addresses": [
            {
                "postalCode": "20001",
                "city": "Washington",
                "stateCode": "DC",
                "line1": "1925 Vermont Avenue Northwest",
                "type": "Physical",
                "line3": "",
                "line2": ""
            },
            {
                "postalCode": "20024",
                "city": "Washington",
                "stateCode": "DC",
                "line1": "900 Ohio Drive SW",
                "type": "Mailing",
                "line3": "",
                "line2": ""
            }
        ],
        "id": "1A47416F-DAA3-4137-9F30-14AF86B4E547",
        "fullName": "African American Civil War Memorial"
    }
]

// DECLARE AND EXPORT A FUNCTION NAMED USEPARKS THAT RETURNS OUR NEW PARKS ARRAY
export const useParks = () => {
    return parks
}

// DECLARE AND EXPORT A FUNCTION CALLED GETPARKS THAT FETCHES OUR API DATA, MAKES IT ITERABLE.
// THEN POPULATES IT AS THE CONTENT OUR OUR ORIGINAL ARRAY CALLED PARKS
// export const getParks = () => {
//   return fetch("http://localhost:8000/parks")
//   .then(response => response.json()
//   )
//   .then(
//       parsedParks => {
          
//           parks = parsedParks.slice()
//       }
//   )


export const getParks = (selectedState) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${selectedState}&fields=addresses&sort=states&fields=images&api_key=${settings.npsKey}`)
        .then(response => response.json()
        )
        .then(
            parsedParks => {

                console.table(parsedParks)
                parks = parsedParks.data.slice()
                    .sort(function (a, b) {
                        var nameA = a.states.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.states.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }

                        // names must be equal
                        return 0;
                    });;
            }
        )
}
