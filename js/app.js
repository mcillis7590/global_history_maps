// BECAUSE THE HTML PAGE LOADS THE GOOGLE MAPS API BEFORE THE JS FILE RUNS, IT DOESN'T RECOGNIZE THE FUNCTION: initMap(). THAT'S WHY IT HAS TO GO BEFORE THE DOC.READY FUNCTION
// require('dotenv').config()

// const apiKey = process.env.GOOGLE_API_KEY
// const googleScript = `maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`

let map

function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7078, lng: -73.4444},
    zoom: 15,
    mapTypeId: 'hybrid',
  });

  //-----FARMINGDALE HIGH SCHOOL INFO WINDOW-----

	// creates a variable for fhsinfo window, where I want it on the map
	const fhs = { lat: 40.7078, lng: -73.4444 };
	//creates content for the info window
	const fhsHeading = 'Farmingdale High School';
	const fhsContent =
		" is located close to the South Shore in the center of Long Island. Just east of Massapequa Preserve and south of Bethpage State Park, Farmingdale has a lot of opportunities for residents to enjoy the outdoors. Another opportunity for residents to enjoy nature is Jones Beach, which is 12.5 miles to the south-east of Farmingdale. Farmingdale's geography also allows for residents to travel easily to Manhattan and the rest of Long Island.";
	const fhsContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${fhsHeading}</h1>
      <div id="bodyContent">
        <p><b>${fhsHeading} </b>${fhsContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of fhs
	const fhsInfoWindow = new google.maps.InfoWindow({
		content: fhsContentString
	});

	//creates a marker object for fhs
	const fhsMarker = new google.maps.Marker({
		position: fhs,
		map: map,
		title: fhsHeading
	});

	//adds a click event to the fhs info window
	fhsMarker.addListener('click', function() {
		fhsInfoWindow.open(map, fhsMarker);
	});
}

$(document).ready(function(){

  //allows hamburger icon to toggle when clicked in mobile
  $('.navbar-toggler').click(() => {
    $('#navbarToggleExternalContent').toggle()
  })

  //google classroom button on HOMEPAGE
  $('#google-classroom-button').click(() => {
    // console.log('google classroom button clicked')
    let url = 'https://google.com/classroom';
    window.open(url);
  });

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

  
//routes
//database
//server
