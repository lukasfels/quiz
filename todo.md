# Open TODOs

## Anforderungen
- [Q1] "Datenanbindung" abstrakter Gestalten, sodass jegliche JSON-Objekte ohne Code-seitige Anpassungen genutzt werden können
- [Q2] Spiele sollten unterbrochen und zu einem späteren Zeitpunkt wieder aufgenommen werden können. Und zwischengespeicherte Spiele können gelöscht werden

## Umsetzung
- [Q1-1] Allgemein verwendbare Datenstruktur ausarbeiten
    - Datensatz (world.json) -> Filter (alle, europa, asien, länder mit a, etc.) -> Spielmodus (Hauptstädte, Flaggen, Pokemon-Generation 1, etc.) -> Spieltyp (Multiple Choice, Typing (w./wo. Auto Correct), Liste füllen, Expert)
- [Q2-1]
    - Spielstand definieren (Was wird mindestens benötigt um ein Spiel wiederaufnehmen zu können?)
    - Klasse Spielstand (Savestate) anlegen
    - Game um Funktion erweitern, um einen Spielstand zu generieren
    - Pinia nutzen um Spielstände zwischenzuspeichern
