//THE FACT THAT THIS IS ALL IN ONE FUNCTION LOOKS HORRIBLE
function initMaps() {
	//*****RIVER VALLEY MAP INITIALIZATION*****

	//initalize a new google map, select the div associated with where i want the map
	const rvMap = new google.maps.Map(document.getElementById('rvMap'), {
		//how zoomed in I want the initial view of the map
		zoom: 2,
		//where I want the center of the initial map to be
		center: { lat: 30, lng: 75 },
		mapTypeId: 'hybrid'
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
		center: { lat: 30, lng: 20 },
		mapTypeId: 'hybrid'
	});

	//boundaries of the image overlay
	const classicalImageBounds = {
		north: 65,
		south: 20,
		east: 150,
		west: -22
	};

	//set the image overlay using the link
	const classicalOverlay = new google.maps.GroundOverlay('./images/classical_overlay.jpeg', classicalImageBounds);
	classicalOverlay.setMap(classicalMap);

	//*****AMERICAS MAP INITIALIZATION*****

	//initalize a new google map, select the div associated with where i wantthe map
	const americasMap = new google.maps.Map(document.getElementById('americasMap'), {
		//how zoomed in I want the initial view of the map
		zoom: 2,
		//where I want the center of the initial map to be
		center: { lat: 0, lng: -20 },
		mapTypeId: 'hybrid'
	});

	//boundaries of the image overlay
	const americasImageBounds = {
		north: 33,
		south: -55,
		east: -35,
		west: -120
	};

	//set the image overlay using the link
	const americasOverlay = new google.maps.GroundOverlay('./images/americas_overlay.gif', americasImageBounds);
	americasOverlay.setMap(americasMap);

	//*****POST-CLASSICAL MAP INITIALIZATION*****

	//initalize a new google map, select the div associated with where i want the map
	const pcMap = new google.maps.Map(document.getElementById('pcMap'), {
		//how zoomed in I want the initial view of the map
		zoom: 2.5,
		//where I want the center of the initial map to be
		center: { lat: 15, lng: 30 },
		mapTypeId: 'hybrid'
	});

	//boundaries of the image overlay
	const pcImageBounds = {
		north: 65,
		south: -25,
		east: 140,
		west: -45
	};

	//set the image overlay using the link
	const pcOverlay = new google.maps.GroundOverlay('./images/post-classical_overlay.jpeg', pcImageBounds);
	pcOverlay.setMap(pcMap);

	//*****MEDIEVAL MAP INITIALIZATION*****

	//initalize a new google map, select the div associated with where i want the map
	const medievalMap = new google.maps.Map(document.getElementById('medievalMap'), {
		//how zoomed in I want the initial view of the map
		zoom: 3.3,
		//where I want the center of the initial map to be
		center: { lat: 45, lng: 30 },
		mapTypeId: 'hybrid'
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
		center: { lat: 30, lng: 30 },
		mapTypeId: 'hybrid'
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
		center: { lat: 50, lng: 30 },
		mapTypeId: 'hybrid'
	});

	//boundaries of the image overlay
	const refImageBounds = {
		north: 62,
		south: 32,
		east: 45,
		west: -30
	};

	//set the image overlay using the link
	const refOverlay = new google.maps.GroundOverlay('./images/reformation_overlay.jpeg', refImageBounds);
	refOverlay.setMap(refMap);

	//*****EXPLORATION MAP INITIALIZATION*****

	//initalize a new google map, select the div associated with where i want the map
	const expMap = new google.maps.Map(document.getElementById('expMap'), {
		//how zoomed in I want the initial view of the map
		zoom: 1.5,
		//where I want the center of the initial map to be
		center: { lat: 10, lng: 0 },
		mapTypeId: 'hybrid'
	});

	//boundaries of the image overlay
	const expImageBounds = {
		north: 80,
		south: -68,
		east: 35,
		west: -165
	};

	//set the image overlay using the link
	const expOverlay = new google.maps.GroundOverlay('./images/exploration_overlay.jpeg', expImageBounds);
	expOverlay.setMap(expMap);

	//**********INFO-WINDOWS*****

	//-----MESOPOTAMIA INFO WINDOW-----

	//creates a variable for the mesopotamia info window, where I want it on the map
	const mesopotamia = { lat: 30, lng: 44 };
	//creates content for the info window, USE BACKTICKS AND MAYBE STORE THE HEADINGS AND STUFF IN A VARIABLE
	const mesopotamiaHeading = 'Mesopotamia';
	const mesopotamiaContent =
		'encompasses the land between the Euphrates and Tigris rivers, both of which have their headwaters in the Taurus Mountains. Both rivers are fed by numerous tributaries, and the entire river system drains a vast mountainous region. Overland routes in Mesopotamia usually follow the Euphrates because the banks of the Tigris are frequently steep and difficult. The climate of the region is semi-arid with a vast desert expanse in the north which gives way to a 15,000-square-kilometre (5,800 sq mi) region of marshes, lagoons, mud flats, and reed banks in the south. In the extreme south, the Euphrates and the Tigris unite and empty into the Persian Gulf.';
	const mesopotamiaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${mesopotamiaHeading}</h1>
      <div id="bodyContent">
        <p><b>${mesopotamiaHeading} </b>${mesopotamiaContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of Mesopotamia
	const mesopotamiaInfoWindow = new google.maps.InfoWindow({
		content: mesopotamiaContentString
	});

	//creates a marker object for Mesoptomaia
	const mesopotamiaMarker = new google.maps.Marker({
		position: mesopotamia,
		map: rvMap,
		title: 'Mesopotamia'
	});

	//adds a click event to the mesoptamia info window, FAILED W/ JQUERY
	mesopotamiaMarker.addListener('click', function() {
		mesopotamiaInfoWindow.open(rvMap, mesopotamiaMarker);
	});

	//-----HUANG HE INFO WINDOW-----

	//creates a variable for the mesopotamia info window, where I want it on the map
	const hhe = { lat: 43.5, lng: 105.5 };
	//creates content for the info window, USE BACKTICKS AND MAYBE STORE THE HEADINGS AND STUFF IN A VARIABLE
	const hheHeading = 'Huang He River Valley';
	const hheContent =
		'was the birthplace of ancient Chinese civilization, and it was the most prosperous region in early Chinese history. There are frequent devastating floods and course changes produced by the continual elevation of the river bed, sometimes above the level of its surrounding farm fields.';
	const hheContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${hheHeading}</h1>
      <div id="bodyContent">
        <p>The <b>${hheHeading} </b>${hheContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of Mesopotamia
	const hheInfoWindow = new google.maps.InfoWindow({
		content: hheContentString
	});

	//creates a marker object for Mesoptomaia
	const hheMarker = new google.maps.Marker({
		position: hhe,
		map: rvMap,
		title: hheHeading
	});

	//adds a click event to the mesoptamia info window, FAILED W/ JQUERY
	hheMarker.addListener('click', function() {
		hheInfoWindow.open(rvMap, hheMarker);
	});

	//-----NILE RIVER VALLEY INFO WINDOW-----

	// creates a variable for the nile info window, where I want it on the map
	const nile = { lat: 25.0, lng: 30.5 };
	//creates content for the info window
	const nileHeading = 'Nile River Valley';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const nileContent =
		'also created irrigation systems from their local river, the Nile River, more complex than previous systems. They would rotate legumes with cereal which would stop salt buildup from the freshwater and enhance the fertility of their fields. The Nile River also allowed easier travel, eventually resulting in the creation of two kingdoms in the north and south areas of the river until both were unified into one society by 3000 BC.';
	const nileContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${nileHeading}</h1>
      <div id="bodyContent">
        <p>The Egyptians of the <b>${nileHeading} </b>${nileContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of Nile River Valley
	const nileInfoWindow = new google.maps.InfoWindow({
		content: nileContentString
	});

	//creates a marker object for Nile River Valley
	const nileMarker = new google.maps.Marker({
		position: nile,
		map: rvMap,
		title: nileHeading
	});

	//adds a click event to the nile river valley info window, FAILED W/ JQUERY
	nileMarker.addListener('click', function() {
		nileInfoWindow.open(rvMap, nileMarker);
	});

	//-----INDUS RIVER VALLEY INFO WINDOW-----

	// creates a variable for the indus info window, where I want it on the map
	const indus = { lat: 26.0, lng: 70.5 };
	//creates content for the info window
	const indusHeading = 'Indus River Valley';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const indusContent =
		'is unknown. Discovered in the 1920s, Harappan society remains a mystery because the Harappan system of writing has not yet been deciphered. It was larger than either Egypt or Mesopotamia. Historians have found no evidence of violence or a ruling class; there are no distinctive burial sites and there is not a lot of evidence to suggest a formal military. However, historians believe that the lack of knowledge about the ruling class and the military is mainly due to the inability to read Harappan writing.';
	const indusContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${indusHeading}</h1>
      <div id="bodyContent">
        <p>Much of the history of the <b>${indusHeading} </b>${indusContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of Indus River Valley
	const indusInfoWindow = new google.maps.InfoWindow({
		content: indusContentString
	});

	//creates a marker object for Indus River Valley
	const indusMarker = new google.maps.Marker({
		position: indus,
		map: rvMap,
		title: indusHeading
	});

	//adds a click event to the indus river valley info window, FAILED W/ JQUERY
	indusMarker.addListener('click', function() {
		indusInfoWindow.open(rvMap, indusMarker);
	});

	//-----CLASSICAL CHINA INFO WINDOW-----

	// creates a variable for classical china info window, where I want it on the map
	const classicalChina = { lat: 33, lng: 108 };
	//creates content for the info window
	const classicalChinaHeading = 'Classical China';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const classicalChinaContent =
		'laid the foundations for arguably the single most important civilization in the history of the planet. Any stereotypical ideas you have about the way China is from borders, language, writing, technology, empires, rulers, etc. come from this era. From the point where the region was first unified under the legalist Qin Shi Huangdi to the fall of the Han empire, what we know as China today took shape.';
	const classicalChinaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${classicalChinaHeading}</h1>
      <div id="bodyContent">
        <p><b>${classicalChinaHeading} </b>${classicalChinaContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of classical china
	const classicalChinaInfoWindow = new google.maps.InfoWindow({
		content: classicalChinaContentString
	});

	//creates a marker object for classical china
	const classicalChinaMarker = new google.maps.Marker({
		position: classicalChina,
		map: classicalMap,
		title: classicalChinaHeading
	});

	//adds a click event to classical china info window, FAILED W/ JQUERY
	classicalChinaMarker.addListener('click', function() {
		classicalChinaInfoWindow.open(classicalMap, classicalChinaMarker);
	});

	//-----CLASSICAL INDIA INFO WINDOW-----

	// creates a variable for classical india info window, where I want it on the map
	const classicalIndia = { lat: 25, lng: 75 };
	//creates content for the info window
	const classicalIndiaHeading = 'Classical India';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const classicalIndiaContent =
		"included both the Mauryan, and later Guptan Empire, which laid the foundation for what is quickly becoming the largest civilization on the planet today. When looking at Classical India, focus more on the social and religious; both of which were tied directly to the world's oldest religion: Hinduism.";
	const classicalIndiaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${classicalIndiaHeading}</h1>
      <div id="bodyContent">
        <p><b>${classicalIndiaHeading} </b>${classicalIndiaContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of classical india
	const classicalIndiaInfoWindow = new google.maps.InfoWindow({
		content: classicalIndiaContentString
	});

	//creates a marker object for classical india
	const classicalIndiaMarker = new google.maps.Marker({
		position: classicalIndia,
		map: classicalMap,
		title: classicalIndiaHeading
	});

	//adds a click event to the classical india info window, FAILED W/ JQUERY
	classicalIndiaMarker.addListener('click', function() {
		classicalIndiaInfoWindow.open(classicalMap, classicalIndiaMarker);
	});

	//-----CLASSICAL GREECE INFO WINDOW-----

	// creates a variable for classical greece info window, where I want it on the map
	const classicalGreece = { lat: 40, lng: 21.5 };
	//creates content for the info window
	const classicalGreeceHeading = 'Classical Greece';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const classicalGreeceContent =
		'had a powerful influence on the Roman Empire and on the foundations of Western civilization. Much of modern Western politics, artistic thought (architecture, sculpture), scientific thought, theatre, literature and philosophy derives from this period of Greek history.';
	const classicalGreeceContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${classicalGreeceHeading}</h1>
      <div id="bodyContent">
        <p><b>${classicalGreeceHeading} </b>${classicalGreeceContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of classical greece
	const classicalGreeceInfoWindow = new google.maps.InfoWindow({
		content: classicalGreeceContentString
	});

	//creates a marker object for classical greece
	const classicalGreeceMarker = new google.maps.Marker({
		position: classicalGreece,
		map: classicalMap,
		title: classicalGreeceHeading
	});

	//adds a click event to the classical greece info window, FAILED W/ JQUERY
	classicalGreeceMarker.addListener('click', function() {
		classicalGreeceInfoWindow.open(classicalMap, classicalGreeceMarker);
	});

	//-----CLASSICAL ROME INFO WINDOW-----

	// creates a variable for classical rome info window, where I want it on the map
	const classicalRome = { lat: 50, lng: 8 };
	//creates content for the info window
	const classicalRomeHeading = 'Classical Rome';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const classicalRomeContent =
		'is Roman civilization from the founding of the Italian city of Rome in the 8th century BC to the collapse of the Western Roman Empire in the 5th century AD, encompassing the Roman Kingdom (753 BC–509 BC), Roman Republic (509 BC–27 BC) and Roman Empire (27 BC–476 AD) until the fall of the western empire.';
	const classicalRomeContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${classicalRomeHeading}</h1>
      <div id="bodyContent">
        <p><b>${classicalRomeHeading} </b>${classicalRomeContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of classical rome
	const classicalRomeInfoWindow = new google.maps.InfoWindow({
		content: classicalRomeContentString
	});

	//creates a marker object for classical rome
	const classicalRomeMarker = new google.maps.Marker({
		position: classicalRome,
		map: classicalMap,
		title: classicalRomeHeading
	});

	//adds a click event to the classical rome info window, FAILED W/ JQUERY
	classicalRomeMarker.addListener('click', function() {
		classicalRomeInfoWindow.open(classicalMap, classicalRomeMarker);
	});

	//-----CLASSICAL PERSIA INFO WINDOW-----

	// creates a variable for classical persia info window, where I want it on the map
	const classicalPersia = { lat: 35, lng: 50 };
	//creates content for the info window
	const classicalPersiaHeading = 'Classical Persia';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const classicalPersiaContent =
		" was the most dominant empire on earth. To this day, (as a % of earth's population) the Persian Empire was the largest in history. The Persian Empires emerged in Southwest Asia (Middle East).";
	const classicalPersiaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${classicalPersiaHeading}</h1>
      <div id="bodyContent">
        <p><b>${classicalPersiaHeading} </b>${classicalPersiaContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of classical persia
	const classicalPersiaInfoWindow = new google.maps.InfoWindow({
		content: classicalPersiaContentString
	});

	//creates a marker object for classical persia
	const classicalPersiaMarker = new google.maps.Marker({
		position: classicalPersia,
		map: classicalMap,
		title: classicalPersiaHeading
	});

	//adds a click event to the classical persia info window, FAILED W/ JQUERY
	classicalPersiaMarker.addListener('click', function() {
		classicalPersiaInfoWindow.open(classicalMap, classicalPersiaMarker);
	});

	//-----MAYA INFO WINDOW-----

	// creates a variable for the maya info window, where I want it on the map
	const maya = { lat: 15, lng: -93 };
	//creates content for the info window
	const mayaHeading = 'Maya';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const mayaContent = ' This is where the Maya goes';
	const mayaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${mayaHeading}</h1>
      <div id="bodyContent">
        <p><b>${mayaHeading} </b>${mayaContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of maya
	const mayaInfoWindow = new google.maps.InfoWindow({
		content: mayaContentString
	});

	//creates a marker object for maya
	const mayaMarker = new google.maps.Marker({
		position: maya,
		map: americasMap,
		title: mayaHeading
	});

	//adds a click event to the maya info window, FAILED W/ JQUERY
	mayaMarker.addListener('click', function() {
		mayaInfoWindow.open(americasMap, mayaMarker);
	});

	//-----AZTEC INFO WINDOW-----

	// creates a variable for the aztec info window, where I want it on the map
	const aztec = { lat: 19, lng: -103 };
	//creates content for the info window
	const aztecHeading = 'Aztec';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const aztecContent = ' This is where the Aztec goes';
	const aztecContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${aztecHeading}</h1>
      <div id="bodyContent">
        <p><b>${aztecHeading} </b>${aztecContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of the aztec
	const aztecInfoWindow = new google.maps.InfoWindow({
		content: aztecContentString
	});

	//creates a marker object for classical persia
	const aztecMarker = new google.maps.Marker({
		position: aztec,
		map: americasMap,
		title: aztecHeading
	});

	//adds a click event to the classical persia info window, FAILED W/ JQUERY
	aztecMarker.addListener('click', function() {
		aztecInfoWindow.open(americasMap, aztecMarker);
	});

	//-----INCA INFO WINDOW-----

	// creates a variable for the inca info window, where I want it on the map
	const inca = { lat: -20, lng: -70 };
	//creates content for the info window
	const incaHeading = 'Inca';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const incaContent = ' This is where the Inca goes';
	const incaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${incaHeading}</h1>
      <div id="bodyContent">
        <p><b>${incaHeading} </b>${incaContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of the inca
	const incaInfoWindow = new google.maps.InfoWindow({
		content: incaContentString
	});

	//creates a marker object for the inca
	const incaMarker = new google.maps.Marker({
		position: inca,
		map: americasMap,
		title: incaHeading
	});

	//adds a click event to the inca info window, FAILED W/ JQUERY
	incaMarker.addListener('click', function() {
		incaInfoWindow.open(americasMap, incaMarker);
	});
}

$(document).ready(function() {
	//navbar search form
	$('form').submit((event) => {
		// prevent default behavior of forms
		event.preventDefault();

		// read data from form, store in variable
		const q = $('input').val();
		// console.log(q)
		//add the variable to the link
		window.open(`https://google.com/search?q=${q} `);
	});
});
