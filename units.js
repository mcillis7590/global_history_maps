function initMaps() {

  //*****RIVER VALLEY MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const rvMap = new google.maps.Map(document.getElementById('rvMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 3,
    //where I want the center of the initial map to be
    center: {lat: 30, lng: 75},
    mapTypeId: 'hybrid',
  });

  //boundaries of the image overlay
  const rvImageBounds = {
    north: 52,
    south: 7.5,
    east: 135,
    west: 11.5
  };

  //set the image overlay using the link
  const rvOverlay = new google.maps.GroundOverlay('./images/river-valley_overlay.png', rvImageBounds);
  rvOverlay.setMap(rvMap);

  //*****CLASSICAL MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const classicalMap = new google.maps.Map(document.getElementById('classicalMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {lat: 30, lng: 20},
    mapTypeId: 'hybrid',
  });

  //boundaries of the image overlay
  const classicalImageBounds = {
    north: 65,
    south: 20,
    east: 150,
    west: -22
  }

  //set the image overlay using the link
  const classicalOverlay = new google.maps.GroundOverlay('./images/classical_overlay.jpeg', classicalImageBounds);
    classicalOverlay.setMap(classicalMap);


  //*****AMERICAS MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i wantthe map
  const americasMap = new google.maps.Map(document.getElementById('americasMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {lat: 0, lng: -20},
    mapTypeId: 'hybrid',
  });

  //boundaries of the image overlay
  const americasImageBounds = {
    north: 33,
    south: -55,
    east: -35,
    west: -120
  }

  //set the image overlay using the link
  const americasOverlay = new google.maps.GroundOverlay('./images/americas_overlay.gif',
          americasImageBounds);
    americasOverlay.setMap(americasMap);


    //*****POST-CLASSICAL MAP INITIALIZATION*****

    //initalize a new google map, select the div associated with where i want the map
    const pcMap = new google.maps.Map(document.getElementById('pcMap'), {
      //how zoomed in I want the initial view of the map
      zoom: 2.5,
      //where I want the center of the initial map to be
      center: {lat: 15, lng: 30},
      mapTypeId: 'hybrid',
    });

    //boundaries of the image overlay
    const pcImageBounds = {
      north: 65,
      south: -25,
      east: 140,
      west: -45
    }

    //set the image overlay using the link
    const pcOverlay = new google.maps.GroundOverlay('./images/post-classical_overlay.jpeg', pcImageBounds);
      pcOverlay.setMap(pcMap);

  //*****MEDIEVAL MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const medievalMap = new google.maps.Map(document.getElementById('medievalMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 3.3,
    //where I want the center of the initial map to be
    center: {lat: 45, lng: 30},
    mapTypeId: 'hybrid',
  });

  //boundaries of the image overlay
  const medievalImageBounds = {
    north: 60,
    south: 28,
    east: 50,
    west: -13
  };

  //set the image overlay using the link
  const medievalOverlay = new google.maps.GroundOverlay('./images/medieval-europe_overlay.jpg', medievalImageBounds);
  medievalOverlay.setMap(medievalMap);

  //*****RENAISSANCE MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const renMap = new google.maps.Map(document.getElementById('renMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2.5,
    //where I want the center of the initial map to be
    center: {lat: 30, lng: 30},
    mapTypeId: 'hybrid',
  });

  //boundaries of the image overlay
  const renImageBounds = {
    north: 65,
    south: 35,
    east: 25,
    west: -50
  };

  //set the image overlay using the link
  const renOverlay = new google.maps.GroundOverlay('./images/spread-of-renaissance_overlay.jpeg', renImageBounds);
  renOverlay.setMap(renMap);

  //*****REFORMATION MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const refMap = new google.maps.Map(document.getElementById('refMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 3,
    //where I want the center of the initial map to be
    center: {lat: 50, lng: 30},
    mapTypeId: 'hybrid',
  });

  //boundaries of the image overlay
  const refImageBounds = {
    north: 65,
    south: 30,
    east: 50,
    west: -30
  };

  //set the image overlay using the link
  const refOverlay = new google.maps.GroundOverlay('./images/reformation_overlay.gif', refImageBounds);
  refOverlay.setMap(refMap);

  //*****EXPLORATION MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const expMap = new google.maps.Map(document.getElementById('expMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 1.5,
    //where I want the center of the initial map to be
    center: {lat: 10, lng: 0},
    mapTypeId: 'hybrid',
  });

  //boundaries of the image overlay
  const expImageBounds = {
    north: 80,
    south: -70,
    east: 180,
    west: -180
  };

  //set the image overlay using the link
  const expOverlay = new google.maps.GroundOverlay(
  './images/exploration_overlay.jpeg', expImageBounds);
  expOverlay.setMap(expMap);


//**********INFO-WINDOWS*****

  //MESOPOTAMIA INFO WINDOW

  //creates a variable for the mesopotamia info window, where I want it on the map
  const mesopotamia = {lat: 30, lng: 44};
  //creates content for the info window, MAYBE FIND A BETTER WAY??
  const mesopotamiaContentString =
    '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Mesopotamia</h1>'+
      '<div id="bodyContent">'+
        '<p><b>Mesopotamia</b> encompasses the land between the Euphrates and Tigris rivers, both of which have their headwaters in the Taurus Mountains. Both rivers are fed by numerous tributaries, and the entire river system drains a vast mountainous region. Overland routes in Mesopotamia usually follow the Euphrates because the banks of the Tigris are frequently steep and difficult. The climate of the region is semi-arid with a vast desert expanse in the north which gives way to a 15,000-square-kilometre (5,800 sq mi) region of marshes, lagoons, mud flats, and reed banks in the south. In the extreme south, the Euphrates and the Tigris unite and empty into the Persian Gulf.</p>'+
      '</div>'+
    '</div>';

    //creates an infowindow object for text of Mesopotamia
  const mesopotamiaInfoWindow = new google.maps.InfoWindow({
    content: mesopotamiaContentString
  });

  //creates a marker object for Mesoptomaia
  const marker = new google.maps.Marker({
    position: mesopotamia,
    map: rvMap,
    title: 'Mesopotamia'
      });

  //adds a click event to the mesoptamia info window, FAILED W/ JQUERY
  marker.addListener('click', function() {
    mesopotamiaInfoWindow.open(rvMap, marker);
  });

















};











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
