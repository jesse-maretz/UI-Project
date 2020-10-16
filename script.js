//Get the API url
let url = 'https://api.nasa.gov/planetary/apod'
//let headers = {headers: 'hjLU1COK5d19vjU34PL1XQFzDEJ6bswts34PHU5M'}
//Get my personl API key
let apiKey = 'hjLU1COK5d19vjU34PL1XQFzDEJ6bswts34PHU5M'
//Concat the url with my API key to create one var
//Get left button
let lBtn = document.querySelector('#leftArrow')
//Get right button
let rBtn = document.querySelector('#rightArrow')
//Get the astronomy picture of the day
let apod = document.querySelector('.apodImg')
let dateCounter = 9
function minusD() {
    newDate = dateCounter - 1
    urlWithApi = `${url}?api_key=hjLU1COK5d19vjU34PL1XQFzDEJ6bswts34PHU5M&date=2020-10-0${newDate}`
    console.log(typeof(newDate))
    dateCounter = newDate
    return newDate
}
function plusD() {
    newDate = dateCounter + 1
    urlWithApi = `${url}?api_key=hjLU1COK5d19vjU34PL1XQFzDEJ6bswts34PHU5M&date=2020-10-0${newDate}`
    console.log(typeof(newDate))
    dateCounter = newDate
    return newDate
}
let date = '2020-10-0' + dateCounter
//let urlWithApi = url + '?api_key=' + apiKey + `&date=${date}`
let urlWithApi = `${url}?api_key=hjLU1COK5d19vjU34PL1XQFzDEJ6bswts34PHU5M&date=2020-10-0${dateCounter}`
//Add click event listener to left arrow button
    //On click, go to the previous day's APOD
lBtn.addEventListener('click', leftBtn)
function leftBtn() {
    fetch(urlWithApi)
        .then(res=>res.json())
        .then(data => {
            console.log(urlWithApi)
            apod.src = data.url
        })
        minusD()
}
rBtn.addEventListener('click', rightBtn)
function rightBtn() {
    fetch(urlWithApi)
        .then(res=>res.json())
        .then(data => {
            console.log(urlWithApi)
            apod.src = data.url
    })
    plusD()
}