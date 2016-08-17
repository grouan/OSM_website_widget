/* // Insert this code just after the widget map (html_part.html) inside <script></script> // */

/* Map Settings */

		var mymap = L.map('my_osm_widget_map', { /* use the same name as your <div id=""> */
    			center: [47.697992, -2.804822], /* set the center of the displayed map */
    			zoom: 17, /* define the zoom level */
    			zoomControl: false, /* false = no zoom control buttons displayed */
			scrollWheelZoom: false /* false = scrolling zoom on the map is locked */
		});

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=XXX-YOUR-MAPBOX-ACCESS-TOKEN-XXX', { /* set your personal MapBox Access Token */
			maxZoom: 20, /* zoom limit of the map */
			attribution: 'Données &copy; Contributeurs <a href="http://openstreetmap.org">OpenStreetMap</a> + ' +
				'<a href="http://mapbox.com">Mapbox</a> | ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> ' +
				'Guillaume Rouan 2016', /* set the map's caption */
			id: 'mapbox.streets' /* set MapBox's map background : mapbox.light / dark / streets / outdoors / satellite */
		}).addTo(mymap);

		L.marker([XXX-LATITUDE-XXX, XXX-LONGITUDE-XXX]).addTo(mymap); /* set your localization's GPS Coordinates : [LAT,LON] */
