// const apiKey = process.env.GOOGLE_API_KEY

function initMaps() {
	//*****RIVER VALLEY MAP INITIALIZATION*****

	//initalize a new google map, select the div associated with where i want the map
	const rvMap = new google.maps.Map(document.getElementById('rvMap'), {
		//how zoomed in I want the initial view of the map
		zoom: 3,
		//where I want the center of the initial map to be
		center: { lat: 25, lng: 75 },
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
		zoom: 2.5,
		//where I want the center of the initial map to be
		center: { lat: 30, lng: 30 },
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

	function addClassicalOverlay() {
		classicalOverlay.setMap(map);
	}

	function removeClassicalOverlay() {
		classicalOverlay.setMap(null);
	}

	//*****AMERICAS MAP INITIALIZATION*****

	//initalize a new google map, select the div associated with where i wantthe map
	const americasMap = new google.maps.Map(document.getElementById('americasMap'), {
		//how zoomed in I want the initial view of the map
		zoom: 2,
		//where I want the center of the initial map to be
		center: { lat: 5, lng: -20 },
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
		zoom: 3,
		//where I want the center of the initial map to be
		center: { lat: 50, lng: 28 },
		mapTypeId: 'hybrid'
	});

	//boundaries of the image overlay
	const medievalImageBounds = {
		north: 60,
		south: 28,
		east: 52,
		west: -17
	};

	//set the image overlay using the link
	const medievalOverlay = new google.maps.GroundOverlay('./images/medieval-europe_overlay.jpg', medievalImageBounds);
	medievalOverlay.setMap(medievalMap);

	//*****RENAISSANCE MAP INITIALIZATION*****

	//initalize a new google map, select the div associated with where i want the map
	const renMap = new google.maps.Map(document.getElementById('renMap'), {
		//how zoomed in I want the initial view of the map
		zoom: 3,
		//where I want the center of the initial map to be
		center: { lat: 45, lng: 28 },
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
		<p><a href="https://drive.google.com/file/d/1h2q1b9Fp6Ecf397CTTvTN9RwB6QmFw2e/view?usp=sharing" class="class-notes" target="_blank">Qin Dynasty Notes</a></p>
		<p><a href="https://drive.google.com/file/d/1ugqjMzbcf5-lfjK9GR1S8puwn8GzucEk/view?usp=sharing" class="class-notes" target="_blank">Han Dynasty Notes</a></p>
		<p><a href="https://docs.google.com/presentation/d/15zBuTWQaRMEQeXTolsVM0c48f4VEIfviiHFE9halXG4/edit?usp=sharing" class="class-notes" target="_blank">Han Dynasty Slides</a></p>
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
		<p><a href="https://docs.google.com/document/d/10Z749eoMefkHA33Vv8fRYbsbyi12yIqeHM3bWMxhsaQ/edit?usp=sharing" class="class-notes" target="_blank">Maurya Empire Notes</a></p>
		<p><a href="https://docs.google.com/document/d/1dL2mR7bX0rUR8hSBClmDw3nVFoq80g3cptYwP4oactc/edit?usp=sharing" class="class-notes" target="_blank">Gupta Empire Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1v1Q3BEBjZ3OQn0jKKTnRK_GuNuhdu3Ae" class="class-notes" target="_blank">Gupta Empire Slides</a></p>
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
		<p><a href="https://drive.google.com/open?id=1Df59Q6H8zqa9tAvU1vsm0HDi2I9p79Gm" class="class-notes" target="_blank">Greek City-States Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1-LYV6YADkoj1S2gfN5TzOim8e48BIMyx" class="class-notes" target="_blank">Power in Classical Greece Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1Z8v_cxBoFgrel9s1rjos11F7nMPXt6WREF8V3AoWiYM" class="class-notes" target="_blank">Conflict in Classical Greece Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1X_6MZwxwgkO-DUuONpzRXKB17RRD5BGevZ7Qi08-XYY" class="class-notes" target="_blank">Golden Age of Athens Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1AzL_lUBQWnhKFQSeftn9DQLJdwz4FgdW" class="class-notes" target="_blank">Golden Age of Athens Slides</a></p>
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
		<p><a href="https://drive.google.com/open?id=1xXJ1EDeuWx0Hp5tHqAxFBWR99whIfP0p" class="class-notes" target="_blank">Power in the Roman Republic Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1Yzcikpityz999ms4DuVd0BMqCUcmvzeCe7OInLYamdY" class="class-notes" target="_blank">Julius Caesar Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1i8gyOuTtKqRaqPwSQ4tsxcFb692Y17fZKd1f5bYG25w" class="class-notes" target="_blank">Octavian Augustus Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1qry32isEvMPxWJLTDoW8jl83o-6udx7mErObI1j6qIs" class="class-notes" target="_blank">Pax Romana Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1-pKnIt_nVxBw3qVzS0F5K8aZq2Vy6meTBVkkoZvO7hY" class="class-notes" target="_blank">Pax Romana Slides</a></p>
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
		<p><a href="https://drive.google.com/open?id=1xnxw5eHB7lWvjtmqerqwPeyD5SxTnv2r5D88NVP1OIw" class="class-notes" target="_blank">Persian Empire Notes</a></p>
		<p><a href="https://drive.google.com/open?id=0BwvSTOvf97U1dUhKVmo2RXpvek0" class="class-notes" target="_blank">Persian Empire Slides</a></p>
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
	const mayaContent =
		'civilization was a Mesoamerican civilization developed by the Maya peoples, and noted for its logosyllabic script—the most sophisticated and highly developed writing system in pre-Columbian Americas—as well as for its art, architecture, mathematics, calendar, and astronomical system. The Maya civilization developed in an area that encompasses southeastern Mexico, all of Guatemala and Belize, and the western portions of Honduras and El Salvador. This region consists of the northern lowlands encompassing the Yucatán Peninsula, and the highlands of the Sierra Madre, running from the Mexican state of Chiapas, across southern Guatemala and onwards into El Salvador, and the southern lowlands of the Pacific littoral plain. The overarching term "Maya" is a modern collective term that refers to the peoples of the region, however, the term was not used by the indigenous populations themselves since there never was a common sense of identity or political unity among the distinct populations.';
	const mayaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${mayaHeading}</h1>
      <div id="bodyContent">
		<p>The <b>${mayaHeading} </b>${mayaContent} </p>
		<p><a href="https://drive.google.com/open?id=1xRZteYJRvc-I5aj7bHo8P4vElHhzUC6JS47Bf2qgrkM" class="class-notes" target="_blank">Maya Slides</a></p>
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
	const aztecContent =
		' were a Mesoamerican culture that flourished in central Mexico in the post-classic period from 1300 to 1521. The Aztec peoples included different ethnic groups of central Mexico, particularly those groups who spoke the Nahuatl language and who dominated large parts of Mesoamerica from the 14th to the 16th centuries. Aztec culture was organized into city-states (altepetl), some of which joined to form alliances, political confederations, or empires. The Aztec Empire was a confederation of three city-states established in 1427: Tenochtitlan, city-state of the Mexica or Tenochca; Texcoco; and Tlacopan, previously part of the Tepanec empire, whose dominant power was Azcapotzalco. Although the term Aztecs is often narrowly restricted to the Mexica of Tenochtitlan, it is also broadly used to refer to Nahua polities or peoples of central Mexico in the prehispanic era, as well as the Spanish colonial era (1521–1821).';
	const aztecContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${aztecHeading}</h1>
      <div id="bodyContent">
		<p>The <b>${aztecHeading}s</b>${aztecContent} </p>
		<p><a href="https://drive.google.com/open?id=113vJxvRuSgmoXhZJeh-iKpnJqRN4X38g-NyAPOlO-j8" class="class-notes" target="_blank">Aztec Slides</a></p>
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
	const incaContent =
		' was the largest empire in pre-Columbian America. The administrative, political and military center of the empire was located in the city of Cusco. The Inca civilization arose from the Peruvian highlands sometime in the early 13th century. Its last stronghold was conquered by the Spanish in 1572. From 1438 to 1533, the Incas incorporated a large portion of western South America, centered on the Andean Mountains, using conquest and peaceful assimilation, among other methods. At its largest, the empire joined Peru, southwest Ecuador, western and south central Bolivia, northwest Argentina, a large portion of what is today Chile, and southwest Colombia into a state comparable to the historical empires of Eurasia.';
	const incaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${incaHeading}</h1>
      <div id="bodyContent">
		<p>The <b>${incaHeading} Empire</b>${incaContent} </p>
		<p><a href="https://drive.google.com/open?id=1P5ZBJQ5Mtu9ZFeQPQfiacOJ_KaMGmfsl4FpScfMVv1I" class="class-notes" target="_blank">Inca Slides</a></p>
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

	//-----BYZANTINE INFO WINDOW-----

	// creates a variable for the byzantine info window, where I want it on the map
	const byzantine = { lat: 30, lng: 35 };
	//creates content for the info window
	const byzantineHeading = 'Byzantine Empire';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const byzantineContent =
		" This term wasn't even used until 100 years after the Empire itself fell. The Byzantine Empire is the Eastern half of the Roman Empire. When Rome 'fell', the Byzantines thrived.";
	const byzantineContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${byzantineHeading}</h1>
      <div id="bodyContent">
		<p><b>${byzantineHeading}? </b>${byzantineContent} </p>
		<p><a href="https://drive.google.com/open?id=1T5kKtuXQsd8MmRQiDlUHh1LiwfJBk09wUgSl57myBCw" class="class-notes" target="_blank">Byzantine/Justinian Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1aArsJrj2lJIyrz7YuXMqJDWr8un9GWw10_XZrBi8ock" class="class-notes" target="_blank">Byzantine/Justinian Organizer</a></p>
		<p><a href="https://drive.google.com/open?id=1vHq6DYzQ7aW-k_bL4BpUtQf5irnft5Wb6a7SgIaUxDQ" class="class-notes" target="_blank">Byzantine Legacy Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1wuaR-vOgIx7mKca-ZwzbvLalgIX5pdc-DkQMF0xtReg" class="class-notes" target="_blank">Byzantine Legacy Documents</a></p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of the byzantine
	const byzantineInfoWindow = new google.maps.InfoWindow({
		content: byzantineContentString
	});

	//creates a marker object for the byzantine
	const byzantineMarker = new google.maps.Marker({
		position: byzantine,
		map: pcMap,
		title: byzantineHeading
	});

	//adds a click event to the byzantine info window, FAILED W/ JQUERY
	byzantineMarker.addListener('click', function() {
		byzantineInfoWindow.open(pcMap, byzantineMarker);
	});

	//-----ISLAMIC CALIPHATES INFO WINDOW-----

	// creates a variable for the islamic caliphates info window, where I want it on the map
	const islam = { lat: 25, lng: 48 };
	//creates content for the info window
	const islamHeading = 'Islamic Caliphates';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const islamContent = ' This is where the Islamic Caliphates goes';
	const islamContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${islamHeading}</h1>
      <div id="bodyContent">
		<p><b>${islamHeading} </b>${islamContent} </p>
		<p><a href="https://drive.google.com/open?id=1kJ-Ks7o_II9gtRrx-eqMCbQFVy-_c4Pi" class="class-notes" target="_blank">Spread of Islam Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1UpOeQ5SY3yZPKAYzft1o06taHTGe5rn2" class="class-notes" target="_blank">Abbasid Caliphate Notes</a></p>
		<p><a href="https://drive.google.com/open?id=15npEAglRkrxatZIHvHokSCkJIjuJ2mLY" class="class-notes" target="_blank">Ottoman Empire Notes</a></p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of the islamic caliphates
	const islamInfoWindow = new google.maps.InfoWindow({
		content: islamContentString
	});

	//creates a marker object for the islamic caliphates
	const islamMarker = new google.maps.Marker({
		position: islam,
		map: pcMap,
		title: islamHeading
	});

	//adds a click event to the islamic info window, FAILED W/ JQUERY
	islamMarker.addListener('click', function() {
		islamInfoWindow.open(pcMap, islamMarker);
	});

	//-----POST-CLASSICAL CHINA INFO WINDOW-----

	// creates a variable for the post-classical china info window, where I want it on the map
	const pcChina = { lat: 40, lng: 100 };
	//creates content for the info window
	const pcChinaHeading = 'Post-Classical China';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const pcChinaContent =
		"is when China experiences it's second Golden Age.. After centuries of decentralized rule, the SUI DYNASTY emerged and reunited the Empire (and built the Grand Canal). The short-lived SUI DYNASTY gave way to arguably China's greatest Dynasty, THE TANG. After the TANG came the SONG and then... THE MONGOLS! If the Post-Classical Period is remembered for Muslims & Mongols; China is a close third.";
	const pcChinaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${pcChinaHeading}</h1>
      <div id="bodyContent">
		<p><b>${pcChinaHeading} </b>${pcChinaContent} </p>
		<p><a href="https://drive.google.com/open?id=1SV6zEA4lCYrtsUC-6ifPkJspAKLohmDzULjTeTima-k" class="class-notes" target="_blank">Tang & Song Dynasty Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1io36XWiY1XBnRbGXCPmLcm2ynmgCKUB_" class="class-notes" target="_blank"></a>Profile of the Tang & Song Dynasties</p>
		<p><a href="https://drive.google.com/open?id=1sYPJsKWoAJ4ZjNGb5GQ85GJHfbYBaPxk" class="class-notes" target="_blank">Mongols Notes</a></p>
		<p><a href="https://drive.google.com/open?id=1T_r1RJKQ1N7dTarIb2sQmr3euM2skduWFFSjdpoSsJM" class="class-notes" target="_blank">Mongols Slides</a></p>
		<p><a href="https://drive.google.com/open?id=1aX6nCnO6suPf6sDzSQzMrfDYEB4Jwha2JFOodU6Nz9E" class="class-notes" target="_blank">Ming Dynasty Historical Context</a></p>
		<p><a href="https://drive.google.com/open?id=1-tZKGe7DSZDgszUhaxHpuQE1Jhwb56wDbqV8qelt09U" class="class-notes" target="_blank">Power in the Ming Dynasty</a></p>
	  </div>
    </div>
      `;
	//creates an infowindow object for text of post-classical China
	const pcChinaInfoWindow = new google.maps.InfoWindow({
		content: pcChinaContentString
	});

	//creates a marker object for post-classical China
	const pcChinaMarker = new google.maps.Marker({
		position: pcChina,
		map: pcMap,
		title: pcChinaHeading
	});

	//adds a click event to the post-classical china info window, FAILED W/ JQUERY
	pcChinaMarker.addListener('click', function() {
		pcChinaInfoWindow.open(pcMap, pcChinaMarker);
	});

	//-----WEST AFRICA INFO WINDOW-----

	// creates a variable for the west Africa info window, where I want it on the map
	const westAfrica = { lat: 15, lng: -5 };
	//creates content for the info window
	const westAfricaHeading = 'West African Kingdoms';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const westAfricaContent =
		' were forming, relatively close to each other. These were the three kingdoms of Ghana, Mali, and Songhai. These three kingdoms settled along regions near the Niger River.';
	const westAfricaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${westAfricaHeading}</h1>
      <div id="bodyContent">
        <p>By at least 800 CE, a handful of <b>${westAfricaHeading} </b>${westAfricaContent} </p>
		<p><a href="https://drive.google.com/open?id=1PznwYOD4F2EEwm0lDy5G8vH3e_zZqosC" class="class-notes" target="_blank">West African Kindoms Notes</a></p>
	  </div>
    </div>
      `;
	//creates an infowindow object for text of west african kingdoms
	const westAfricaInfoWindow = new google.maps.InfoWindow({
		content: westAfricaContentString
	});

	//creates a marker object for west-african kingdoms
	const westAfricaMarker = new google.maps.Marker({
		position: westAfrica,
		map: pcMap,
		title: westAfricaHeading
	});

	//adds a click event to the west-africa info window, FAILED W/ JQUERY
	westAfricaMarker.addListener('click', function() {
		westAfricaInfoWindow.open(pcMap, westAfricaMarker);
	});

	//-----EAST AFRICA INFO WINDOW-----

	// creates a variable for the east Africa info window, where I want it on the map
	const eastAfrica = { lat: 5, lng: 40 };
	//creates content for the info window
	const eastAfricaHeading = 'East African Kingdoms';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const eastAfricaContent =
		"East Africa may well be the birthplace of humanity. The oldest human skeletons are found in modern-day Ethiopia, and there's pretty good evidence that this is where modern humans evolved. This means that East Africa can claim a longer human heritage than anywhere else on Earth. So, it's not surprising to learn that some of the world's oldest kingdoms also developed in this area. Not all of them are names we immediately recognize today, but to people of the ancient world, there were few greater powers than those of East Africa.";
	const eastAfricaContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${eastAfricaHeading}</h1>
      <div id="bodyContent">
        <p>Prior to <b>${eastAfricaHeading}, </b>${eastAfricaContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of east african kingdoms
	const eastAfricaInfoWindow = new google.maps.InfoWindow({
		content: eastAfricaContentString
	});

	//creates a marker object for east-african kingdoms
	const eastAfricaMarker = new google.maps.Marker({
		position: eastAfrica,
		map: pcMap,
		title: eastAfricaHeading
	});

	//adds a click event to the east-africa info window, FAILED W/ JQUERY
	eastAfricaMarker.addListener('click', function() {
		eastAfricaInfoWindow.open(pcMap, eastAfricaMarker);
	});

	//-----EUROPE EXPLORATION INFO WINDOW-----

	// creates a variable for the europe exploration info window, where I want it on the map
	const europeExploration = { lat: 48, lng: -3 };
	//creates content for the info window
	const europeExplorationHeading = 'European Exploration';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const europeExplorationContent =
		'The interconnection of the Eastern and Western hemispheres made possible by transoceanic voyaging marked a key transformation of this period. Technological innovations helped to make transoceanic connections possible. Changing patterns of long-distance trade included the global circulation of some commodities and the formation of new regional markets and financial centers. Increased trans-regional and global trade networks facilitated the spread of religion and other elements of culture as well as the migration of large numbers of people. Germs carried to the Americas ravaged the indigenous peoples, while the global exchange of crops and animals altered agriculture, diets, and populations around the planet.';
	const europeExplorationContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${europeExplorationHeading}</h1>
      <div id="bodyContent">
        <p>${europeExplorationContent}</p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of europe exploration
	const europeExplorationInfoWindow = new google.maps.InfoWindow({
		content: europeExplorationContentString
	});

	//creates a marker object for europe exploration
	const europeExplorationMarker = new google.maps.Marker({
		position: europeExploration,
		map: expMap,
		title: europeExplorationHeading
	});

	//adds a click event to the europe exploration info window, FAILED W/ JQUERY
	europeExplorationMarker.addListener('click', function() {
		europeExplorationInfoWindow.open(expMap, europeExplorationMarker);
	});

	//-----CARIBBEAN EXPLORATION INFO WINDOW-----

	// creates a variable for the caribbean exploration info window, where I want it on the map
	const caribbeanExploration = { lat: 30, lng: -90 };
	//creates content for the info window
	const caribbeanExplorationHeading = 'Caribbean Colonies';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const caribbeanExplorationContent =
		' The new connections between the Eastern and Western hemispheres resulted in the Columbian Exchange. European colonization led to the spread of diseases— including smallpox, measles, and influenza — that were endemic in the Eastern Hemisphere among Amerindian populations and the unintentional transfer of disease vectors, including mosquitoes and rats.';
	const caribbeanExplorationContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${caribbeanExplorationHeading}</h1>
      <div id="bodyContent">
        <p>Christopher Columbus was one of the first to land in the <b>${caribbeanExplorationHeading}</b>${caribbeanExplorationContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of caribbean exploration
	const caribbeanExplorationInfoWindow = new google.maps.InfoWindow({
		content: caribbeanExplorationContentString
	});

	//creates a marker object for caribbean exploration
	const caribbeanExplorationMarker = new google.maps.Marker({
		position: caribbeanExploration,
		map: expMap,
		title: caribbeanExplorationHeading
	});

	//adds a click event to the caribbean exploration info window, FAILED W/ JQUERY
	caribbeanExplorationMarker.addListener('click', function() {
		caribbeanExplorationInfoWindow.open(expMap, caribbeanExplorationMarker);
	});

	//-----AMERICAS EXPLORATION INFO WINDOW-----

	// creates a variable for the americas exploration info window, where I want it on the map
	const americasExploration = { lat: 45, lng: -86 };
	//creates content for the info window
	const americasExplorationHeading = 'American Colonies';
	//MAYBE FIND AN EASIER WAY TO PUT IN CONTENT?
	const americasExplorationContent =
		'were used for European mercantilisim. Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories, and joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and compete against one another in global trade. American foods (potatoes, maize, manioc) became staple crops in various parts of Europe, Asia, and Africa. Cash crops (sugar, tobacco) were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East in this period.';
	const americasExplorationContentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${americasExplorationHeading}</h1>
      <div id="bodyContent">
        <p>The <b>${americasExplorationHeading} </b>${americasExplorationContent} </p>
      </div>
    </div>
      `;
	//creates an infowindow object for text of americas exploration
	const americasExplorationInfoWindow = new google.maps.InfoWindow({
		content: americasExplorationContentString
	});

	//creates a marker object for americas exploration
	const americasExplorationMarker = new google.maps.Marker({
		position: americasExploration,
		map: expMap,
		title: americasExplorationHeading
	});

	//adds a click event to the ameriacs exploration info window, FAILED W/ JQUERY
	americasExplorationMarker.addListener('click', function() {
		americasExplorationInfoWindow.open(expMap, americasExplorationMarker);
	});
}

$(document).ready(function() {

	  //allows hamburger icon to toggle when clicked in mobile
	  $('.navbar-toggler').click(() => {
		$('#navbarToggleExternalContent').toggle()
	  })
	
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
