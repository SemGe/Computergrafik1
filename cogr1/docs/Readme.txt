
Software Template

Das Template ist in JavaScript unter Verwendung des Dojo Frameworks geschrieben.
Sie k�nnen es in einem Bowser lokal (file:///...) oder �ber eine Webserver (Apache,etc.)
aufrufen.

Installation

Das ZIP-Archiv ben�tigt 3 kurze Schritte um lauff�hig zu sein: 
 
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

2. F�r eine Installation ohne Webserver Dojo Framework f�r Javascript herunterladen 
und in den gleichen Ordner entpacken.
Oder alternativ dojo direkt von Server laden (dann muss immer eine Internet-Verbindung bestehen):
<script src="http://ajax.googleapis.com/ajax/libs/dojo/x.x.x/dojo/dojo.js" data-dojo-config="async: true"></script>
In der Index Datei m�ssen die Pfade zu Dojo "<script src=..." entsprechend anpassen.
 
3. In der start.js den Pfad zum "cog1" Ordner f�r eine Installation ohne Webserver absolut angeben
(unter Windows "cog1" : "file://[Laufwerk]:/[der gleiche Pfad wie oben]/cog1").
F�r eine Installation mit (lokalem) Webserver, wird der relative Pfad zum Document-Root des Servers angegeben.

Zum Starten in einem Browser der Wahl laden.

 
