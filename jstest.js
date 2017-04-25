#############################################################
## NPM
npm init // erstellt package.json (mit Fragen)
npm init --yes // erstellt default package.json
npm install packagename1 packagename2 --save // installiert Packete in node_modules und vermerkt sie im package.json
npm uninstall --save packagename // deintslliert package und löscht es aus package.json

npm install d3 --save // installiert d3.js
npm install jquery --save // installiert jquery
npm install bootstrap@3 --save
npm install openlayers --save
npm install leaflet --save
npm install --save glyphicons
npm install font-awesome --save

// lokaler Server (Node Standard) // https://www.npmjs.com/package/http-server
npm install http-server -g // installiert http-server global
http-server [path] [options] // startet http-server in aktuellem Verzeichnis
http-server D:\Folder // startet http-server in bestimmtem Verzeichnis
http-server -p 8088 // startet http-server mit Port 8088
http-server -a test567 // startet http-server mit url test567
http-server -p 4004 -a http://test567 // startet http-server mit Port 4004 und mit url test567
http-server -a myhost -p 4004
http-server -p 4004
http-server -p 4004 -s -o
http-server -p 4004 -a localhost

#############################################################
## Git
git config --global user.name "[name]"
git config --global user.email "[email address]"
git config --global color.ui auto

git init // erstellt git repository
echo "To-do list web app, organize and share your to-do's" > README.md // erstellt ReadMe
git add myFile.txt // fügt Datei zu git "staging area" hinzu (auch mehrere)
git add . // fügt alle Dateien zu staging area hinzu
git commit -m "Initial Project Commit" // speichert alles als commit
git status // Zeigt den aktuellen Status an
git diff // zeigt Unterschied zwischen working directory und Staging Area
git commit -a -m "Initial project files + HTML Markup" // -a committed alle Dateien
git log // zeigt alle commits
git checkout 4ea35 // bringt einen zu einem bestimmten Commit zurück (ertse 5 Zeichen reichen)
git checkout master // zum production branch

//Branching
git branch feature_x // erstellt neuen branch feature_x
git checkout feature_x // wechselt zu branch feature_x
echo "function(){...}" > script.js
git commit -a -m "Function x done"
git branch // zeigt Liste von branches
git branch -v // zeigt Liste von branches mit Version

git checkout master
git merge feature_x // merged den branch "feature_x" mit aktuell ausgewähltem

/*
git status
// dann Conflicts in der Master Datei editieren
git add .
git commit -m "commit comment"
*/

git mergetool // bei Konfliketen mergetool aufrufen
git reset --merge // bricht merge ab
git add filename.txt //nachdem merge bereinigt ist
git commit -m "" //nachdem merge bereinigt ist

git config // git Konfiguration

//GitHub nutzen
git remote add origin https://github.com/mcodebox/proj1.git // git repo zu online adden
git remote set-url origin https://github.com/mcodebox/proj1.git // git online repo url ändern
git push -u origin master // pusht repo auf GitHub
git pull https://github.com/mcodebox/proj1.git master // pullt den master branch von github
git push -f origin master // force push auf GitHub

git fetch <remote> // download all changes from remote without intergrating into HEAD
git pull <remote> <branch> // download all changes from remote and directly merge into HEAD

git branch -d branch_name // delete local branch

#############################################################
## JavaScript
// letzten Teil von URL auslesen
var fileUrl = window.location.href;
var urlArray = fileUrl.split('/');
var lastSegment = urlArray[urlArray.length-1];
	// oder
var fileUrl = window.location.href;
var lastSegment = fileUrl.substr(fileUrl.lastIndexOf('/') + 1);

#############################################################
## OpenLayers
// Layer Extent (Indien), richtige Projection muss in view stehen!
layers: [
    new ol.layer.Tile({
        title: 'Global Imagery',
        extent: [11.02737, 55.36174, 23.90338, 69.10625],
        source: new ol.source.TileWMS({
            url: 'https://ahocevar.com/geoserver/wms',
            params: {
                LAYERS: 'nasa:bluemarble',
                TILED: true
            }
        })
    })
],
view: new ol.View({
    projection: 'EPSG:4326',
    center: [0, 0],
    zoom: 0,
    maxResolution: 0.703125
})

// View mit Extent (Schweden) (es kann nicht aus Extent rausgeschoben werden, center muss innerhalb von Extent liegen)
view: new ol.View({
    projection: 'EPSG:4326',
    center: [14.188842773437498, 62.81501770019528],
    zoom: 5,
    extent: [11.02737, 55.36174, 23.90338, 69.10625],
    maxResolution: 0.703125
})

// Zoom to Extent
var extent = source.getExtent();
map.getView().fit(extent, map.getSize());

## D3
// TickFormat
var formatAsPercentage = d3.format(".1%");
formatAsPercentage(0.54321) --> "54.3%"

var formatAsDecimal = d3.format(".2f");
formatAsDecimal(0.12345) --> "0.12"

d3.format(".2f")(2.1236);
--> "2.12"
