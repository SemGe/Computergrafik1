
Software Template

Das Template ist in JavaScript unter Verwendung des Dojo Frameworks geschrieben.
Sie können es in einem Bowser lokal (file:///...) oder über eine Webserver (Apache,etc.)
aufrufen.

Installation

Das ZIP-Archiv benötigt 3 kurze Schritte um lauffähig zu sein: 
 
1. Unzip Template-Archiv in einen beliebigen Ordner 
Struktur sollte so aussehen:
[beliebiger Pfad]/cog1
[beliebiger Pfad]/cog1/ext
[beliebiger Pfad]/cog1/modelData
[beliebiger Pfad]/css
[beliebiger Pfad]/docs
[beliebiger Pfad]/index.html 

Dazu kommt Dojo (http://dojotoolkit.org/download/), wenn sie eine lokale Kopie vorhalten wollen:
[beliebiger Pfad]/dojo-release-x.x.x  (neuste Version)

2. Für eine Installation ohne Webserver Dojo Framework für Javascript herunterladen 
und in den gleichen Ordner entpacken.
Oder alternativ dojo direkt von Server laden (dann muss immer eine Internet-Verbindung bestehen):
<script src="http://ajax.googleapis.com/ajax/libs/dojo/x.x.x/dojo/dojo.js" data-dojo-config="async: true"></script>
In der Index Datei müssen die Pfade zu Dojo "<script src=..." entsprechend anpassen.
 
3. In der start.js den Pfad zum "cog1" Ordner für eine Installation ohne Webserver absolut angeben
(unter Windows "cog1" : "file://[Laufwerk]:/[der gleiche Pfad wie oben]/cog1").
Für eine Installation mit (lokalem) Webserver, wird der relative Pfad zum Document-Root des Servers angegeben.

Zum Starten in einem Browser der Wahl laden.

 
