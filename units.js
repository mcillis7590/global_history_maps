function initRvMap() {
        let map = new google.maps.Map(document.getElementById('rvMap'), {
          zoom: 3,
          center: {lat: 30, lng: 75}
        });

        let imageBounds = {
          north: 48,
          south: 7.5,
          east: 135,
          west: 11.5
        };

        rvOverlay = new google.maps.GroundOverlay(
      'https://sites.google.com/a/smcm.edu/apworldhistory/_/rsrc/1457535463582/early-classical-civilization-until-600-bce/river%20valley%20map.png',
            imageBounds);
        rvOverlay.setMap(map);
      }

$(document).ready(function(){

  //navbar search form
  $('form').submit((event) => {
     // prevent default behavior of forms
     event.preventDefault()

     // read data from form, store in variable
     const q = $('input').val()
     // console.log(q)
     //add the variable to the link
     window.open(`https://google.com/search?q=${q} `)
    })


  })
