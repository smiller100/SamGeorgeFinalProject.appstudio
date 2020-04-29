let requestURLRestaurants = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAejAt7gl_l0U4EwP9Zie20I3YZpkElk0c&location=41.258870,-95.970060&rankby=distance&type=restaurant"

function onXHRLoad() {
  let message = ""
  let apiData = JSON.parse(this.responseText)
  for (i = 0; i <= 9; i++) {
    message = message + apiData.results[i].name + "\n" + "Price Level: " + apiData.results[i].price_level + "\n" + "Address: " + apiData.results[i].vicinity + "\n" + "\n"
  }
  txtaRestaurants.value = message
}
  
function callAPI(URL) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
  xhttp.addEventListener('load', onXHRLoad)
  xhttp.send()
}

btnRestaurants.onclick=function(){
  callAPI(requestURLRestaurants)
}

houseRestaurants.onshow=function(){
  txtaRestaurants_contents.style.height = "200px"
}

btnRestaurantsHome.onclick=function(){
  ChangeForm(Home)
}
