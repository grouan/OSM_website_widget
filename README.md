# OSM Website Widget
Insert a custom Open Street Map (OSM) widget map pointing to a specified localization : great for "Contact" page, for example !
You don't need to code anything, neither to be a great designer : simply copy-paste these little pieces of code at the specified place :) And it's free and Open Source !

## /// What you need

### Displayed marker's GPS Coordinates
1. Use <a href="http://www.openstreetmap.org" target="_blank">OSM</a> to find the coordinates,
2. Replace <code>[XXX-LATITUDE-XXX, XXX-LONGITUDE-XXX]</code> inside <code>javascript_part.js</code> file with your coordinates &rarr; example : <code>[53.266803,-9.046916]</code>

### Map Center's GPS Coordinates
Same method. Obviously, you can use the same coordinates as your marker. Then, replace <code>[XXX-LATITUDE-CENTER-XXX, XXX-LONGITUDE-CENTER-XXX]</code> inside <code>javascript_part.js</code> code.

### MapBox background
1. Create an account on MapBox website : https://www.mapbox.com
2. Get your individual Access Token : "Account" > Tab "API access token" in the upper right menu > click on "Default Public Token" to show your Access Token
3. Replace <code>XXX-YOUR-MAPBOX-ACCESS-TOKEN-XXX</code> inside <code>javascript_part.js</code> code.
4. Choose the type of background you want to use for your widget : light / dark / streets / outdoors / satellite... and set <code>id: 'mapbox.streets'</code> inside <code>javascript_part.js</code> code.

## /// How it works
1. Insert <code>head_part.html</code> code inside the <code>```<head></head>```</code> Tags of your website. Thanks to keep credit's mentions :)
2. Insert <code>css_part.css</code> code into <style></style> Tags inside <code>```<head></head>```</code> Tags just after <code>head_part.html</code> code,
3. Insert <code>body_part.html</code> where you want to display your map,
4. Insert <code>javascript_part.js</code> inside <script></script> Tags, just after <code>body_part.html</code>,
5. Brew a delicious tea & enjoy !

<hr />

## /// Credits
(CC-BY) Creative Commons Attribution https://creativecommons.org/licenses/by/2.0/fr/<br />
Guillaume ROUAN | 2016<br />
Github/Twitter : @grouan | http://guillaume-rouan.net
