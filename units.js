function initMaps() {

  //*****RIVER VALLEY MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const rvMap = new google.maps.Map(document.getElementById('rvMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {lat: 30, lng: 75}
  });

  //boundaries of the image overlay
  const rvImageBounds = {
    north: 48,
    south: 7.5,
    east: 135,
    west: 11.5
  };

  //set the image overlay using the link
  const rvOverlay = new google.maps.GroundOverlay(
'https://lh3.googleusercontent.com/proxy/UcBBYLnTs5ixSkRwABaYyoolXSrf2kBRIK_B9crem6ZXRdC0J0y277bSzdUsqoeBQV_HVh-Mqv018sOiZHMEkfETkv1kbokTd6BM1TlyumX9tGapu-iBqlY9g8oCe844qD3-abHGOyMSFLKCFKny9zHiEOPFyaaAy7k62dXyBI4',
      rvImageBounds);
  rvOverlay.setMap(rvMap);

  //*****CLASSICAL MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const classicalMap = new google.maps.Map(document.getElementById('classicalMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {lat: 30, lng: 75}
  });

  //boundaries of the image overlay
  const classicalImageBounds = {
    north: 58,
    south: -10,
    east: 157,
    west: -136
  }

  //set the image overlay using the link
  const classicalOverlay = new google.maps.GroundOverlay(
  'https://images.squarespace-cdn.com/content/v1/53b17013e4b0f83f2d8a8a4a/1472848392840-XNV1MQ55S1QZNSV7KEAZ/ke17ZwdGBToddI8pDm48kA41Et9-KWEuzTlhf0ryX-YUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkokWOPDb6XkkUX0zx4uc-5iEXu21vyZa8BBNNGausosm7cT0R_dexc_UL_zbpz6JQ/image-asset.jpeg?format=1500w',
          classicalImageBounds);
    classicalOverlay.setMap(classicalMap);


  //*****AMERICAS MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i wantthe map
  const americasMap = new google.maps.Map(document.getElementById('americasMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {lat: 0, lng: 0}
  });

  //boundaries of the image overlay
  const americasImageBounds = {
    north: 33,
    south: -55,
    east: -35,
    west: -120
  }

  //set the image overlay using the link
  const americasOverlay = new google.maps.GroundOverlay(
'https://www.ducksters.com/history/aztec_maya_inca_map_lg.gif',
          americasImageBounds);
    americasOverlay.setMap(americasMap);


    //*****POST-CLASSICAL MAP INITIALIZATION*****

    //initalize a new google map, select the div associated with where i want the map
    const pcMap = new google.maps.Map(document.getElementById('pcMap'), {
      //how zoomed in I want the initial view of the map
      zoom: 1,
      //where I want the center of the initial map to be
      center: {lat: 0, lng: 0}
    });

    //boundaries of the image overlay
    const pcImageBounds = {
      north: 80,
      south: -55,
      east: 180,
      west: -160
    }

    //set the image overlay using the link
    const pcOverlay = new google.maps.GroundOverlay(
    'https://images.squarespace-cdn.com/content/v1/53b17013e4b0f83f2d8a8a4a/1473708649363-X35NW9XBB6ID8KO1PUZE/ke17ZwdGBToddI8pDm48kGWkMK9XmOAbKxucyzqr418UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc-lFvNDfrYj5dl6yePibN_oeJBY007OMmxZJVIpOZHukZl55gJ1spv0-u5zkA7ino/image-asset.jpeg?format=1000w',
            pcImageBounds);
      pcOverlay.setMap(pcMap);

  //*****MEDIEVAL MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i wanthe map
  const medievalMap = new google.maps.Map(document.getElementById('medievalMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {lat: 30, lng: 50}
  });

  //boundaries of the image overlay
  const medievalImageBounds = {
    north: 60,
    south: 28,
    east: 50,
    west: -13
  };

  //set the image overlay using the link
  const medievalOverlay = new google.maps.GroundOverlay(
  'https://www.euratlas.net/history/europe/1300/1300.jpg',
      medievalImageBounds);
  medievalOverlay.setMap(medievalMap);

  //*****RENAISSANCE MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const renMap = new google.maps.Map(document.getElementById('renMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {lat: 30, lng: 75}
  });

  //boundaries of the image overlay
  const renImageBounds = {
    north: 48,
    south: 7.5,
    east: 135,
    west: 11.5
  };

  //set the image overlay using the link
  const renOverlay = new google.maps.GroundOverlay(
  'https://lh3.googleusercontent.com/proxy/UcBBYLnTs5ixSkRwABaYyoolXSrf2kBRIK_B9crem6ZXRdC0J0y277bSzdUsqoeBQV_HVh-Mqv018sOiZHMEkfETkv1kbokTd6BM1TlyumX9tGapu-iBqlY9g8oCe844qD3-abHGOyMSFLKCFKny9zHiEOPFyaaAy7k62dXyBI4',
      renImageBounds);
  renOverlay.setMap(renMap);

  //*****REFORMATION MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const refMap = new google.maps.Map(document.getElementById('refMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {lat: 30, lng: 75}
  });

  //boundaries of the image overlay
  const refImageBounds = {
    north: 48,
    south: 7.5,
    east: 135,
    west: 11.5
  };

  //set the image overlay using the link
  const refOverlay = new google.maps.GroundOverlay(
  'https://lh3.googleusercontent.com/proxy/UcBBYLnTs5ixSkRwABaYyoolXSrf2kBRIK_B9crem6ZXRdC0J0y277bSzdUsqoeBQV_HVh-Mqv018sOiZHMEkfETkv1kbokTd6BM1TlyumX9tGapu-iBqlY9g8oCe844qD3-abHGOyMSFLKCFKny9zHiEOPFyaaAy7k62dXyBI4',
      refImageBounds);
  refOverlay.setMap(refMap);

  //*****EXPLORATION MAP INITIALIZATION*****

  //initalize a new google map, select the div associated with where i want the map
  const expMap = new google.maps.Map(document.getElementById('expMap'), {
    //how zoomed in I want the initial view of the map
    zoom: 2,
    //where I want the center of the initial map to be
    center: {lat: 30, lng: 75}
  });

  //boundaries of the image overlay
  const expImageBounds = {
    north: 48,
    south: 7.5,
    east: 135,
    west: 11.5
  };

  //set the image overlay using the link
  const expOverlay = new google.maps.GroundOverlay(
  'https://lh3.googleusercontent.com/proxy/UcBBYLnTs5ixSkRwABaYyoolXSrf2kBRIK_B9crem6ZXRdC0J0y277bSzdUsqoeBQV_HVh-Mqv018sOiZHMEkfETkv1kbokTd6BM1TlyumX9tGapu-iBqlY9g8oCe844qD3-abHGOyMSFLKCFKny9zHiEOPFyaaAy7k62dXyBI4',
      expImageBounds);
  expOverlay.setMap(expMap);




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
