// BECAUSE THE HTML PAGE LOADS THE GOOGLE MAPS API BEFORE THE JS FILE RUNS, IT DOESN'T RECOGNIZE THE FUNCTION: initMap(). THAT'S WHY IT HAS TO GO BEFORE THE DOC.READY FUNCTION

let map;
function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7078, lng: -73.4444},
    zoom: 15

  });
}

$(document).ready(function(){
  $('')

  //google classroom button on HOMEPAGE
  $('#google-classroom-button').click(() => {
    // console.log('google classroom button clicked')
    let url = 'https://google.com/classroom';
    window.open(url);
  });


  // Initialize and add the map
  // async function initMap() {
  //   // The location of Farmingdale
  //   const fDale = {lat: 40.7326, lng: 73.4454};
  //   // The map, centered at Farmingdale
  //   let url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDQ3WNxkaa6G6nRIB0lUqdlp4kQl6TG1FU&callback=initMap"
  //   try {
  //     let map = await axios.get(url)
  //       return new google.maps.Map(
  //         $('.map'), {zoom: 4, center: fDale});
  //         // The marker, positioned at Farmingdale
  //         let marker = new google.maps.Marker({position: fDale, map: map});
  //   } catch(e){
  //       console.log(e)
  //   }
  // }
  //
  //
  // initMap()

})
//routes
//database
//server
