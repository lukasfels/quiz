//Globale Variablen
//Integer für die Anzahl abgeschlossener Fragen
var countLand;
//JSON enthält alle Fragen/Antworten
var quiz;
//Array für Autocomplete
var autoAbfrage;
//Array für Autocomplete (Expert - Hauptstädte)
var hauptAbfrage;
//String für das nächste Land
var next;
//Integer für zufällige Auswahl
var rand;
//Integer für Anzahl der gebrauchten Hinweise
var clues;
//Array für die abzufragenden Themen
var auswahl;
//Integer wie lange die Antwort angezeigt wird
var delayTime;
//Double für die Punkte der aktuellen Frage
var punkte;
//Double für die gesammelten Punkte
var punkteGesamt;
//JSON für den Modus, Frage, Konfiguration
var mode = {
  'name': 'flaggen', //Name des Modus
  'question': 'name', //Attribut (json), dass gesucht wird, also bei Flaggen wird der Name des Landes gesucht
  'config': {} //Konfiguration auf der Startseite
}

//Wird ausgeführt, wenn die Seite geladen wird
//Erstellt Events für die Startseite und die Antworteingabe
function init() {
  console.log('init');
  //div für die Pokemon Generation verstecken
  $('#checkGens').hide();

  //Event für die Radio Buttons (modus), um die divs umzuschalten
  $(".radioMode").on('click', function (event, ui) {
    let temp = $('input[name=modus]:checked').val();
    if (temp == 'pokemon') {
      $('#checkLand').hide();
      $('#checkGens').show();
    } else {
      $('#checkLand').show();
      $('#checkGens').hide();
    }
  });

  //Event für die Slider der Konfiguration, um den Text umzuschalten
  $("#configAnswer").on('input', function () {
    let temp = $("#configAnswer").val();
    if (temp == 0) {
      $("#configAnswerLabel").text('Selbst Schreiben');
    } else if (temp == 1) {
      $("#configAnswerLabel").text('Schreiben (Autocomplete)');
    } else if (temp == 3) {
      $("#configAnswerLabel").text('Liste füllen');
    } else {
      $("#configAnswerLabel").text('Antworten vorgeben');
    }
  });

  //Event für die Slider der Konfiguration, um den Text umzuschalten
  $("#configOV").on('input', function () {
    let temp = $("#configOV").val();
    if (temp == 0) {
      $("#configOVLabel").text('Keine Übersicht');
    } else {
      $("#configOVLabel").text('Übersicht anzeigen');
    }
  });

  //Event für die Slider der Konfiguration, um den Text umzuschalten
  $("#configDelay").on('input', function () {
    let temp = $("#configDelay").val();
    if (temp == 0) {
      $("#configDelayLabel").text('Antwort nicht zeigen');
    } else {
      $("#configDelayLabel").text('Antwort kurz zeigen');
    }
  });

  //Event um die Antwort zu prüfen (Selbst Schreiben und Autocomplete)
  $("#antwort").on('input', function (event, ui) {
    testLand($("#antwort").val());
  });
}

//Wird ausgeführt, sobald 'Starte Spiel' gedrückt wird
//Initialisiert Variablen, speichert die Konfiguration, schaltet divs um
function startGame() {
  console.log('start game');
  countLand = 0;
  punkteGesamt = 0;
  auswahl = [];
  autoAbfrage = [];
  hauptAbfrage = [];
  //Prüft welcher Modus gewählt ist und speichert den Modus
  mode.name = $('input[name=modus]:checked').val();
  //Beim Modus Hauptstadt, wird das Attribut 'hauptstadt' statt 'name' getestet
  mode.name == 'hauptstadt' ? mode.question = 'hauptstadt' : mode.question = 'name';

  //Prüfen, welche Themen gewählt wurden
  if (mode.name == 'pokemon') {
    $('input[name="generations"]:checked').each(function () {
      //console.log(this.value);
      auswahl.push(this.value);
    });
  } else {
    $('input[name="land"]:checked').each(function () {
      //console.log(this.value);
      auswahl.push(this.value);
    });
  }

  //Prüfen, wie die Antworten eingegeben werden
  $('input[name="config"]').each(function () {
    //console.log(this.checked);
    if (this.id == 'configAnswer') {
      if (this.value == '0') {
        //Selbst Schreiben
        mode.config['configWrite'] = true;
        //Autocomplete
        mode.config['configWriteA'] = false;
        //Auswahlmöglichkeiten
        mode.config['configPick'] = false;
        //In Liste
        mode.config['configList'] = false;
      } else if (this.value == '1') {
        mode.config['configWriteA'] = true;
        mode.config['configPick'] = false;
        mode.config['configWrite'] = false;
        mode.config['configList'] = false;
      } else if (this.value == '2') {
        mode.config['configPick'] = true;
        mode.config['configWriteA'] = false;
        mode.config['configWrite'] = false;
        mode.config['configList'] = false;
      } else {
        mode.config['configList'] = true;
        mode.config['configWriteA'] = false;
        mode.config['configWrite'] = false;
        mode.config['configPick'] = false;
      }
    } else {
      mode.config[this.id] = (this.value == '1') ? true : false;
    }
  });

  //Prüfen, ob ein Modus und Themen gewählt wurden
  if (mode.name && auswahl.length > 0) {
    //Start verstecken und die Quizseite anzeigen
    $("#startPage").toggle();
    $("#quizPage").toggle();

    //Spiel initialisieren
    initGame(auswahl);
  }
}

//Wird ausgeführt, wenn auf der Quizseite 'Zurück' gedrückt wird
//Startseite anzeigen und Quizseite verstecken, Übersichten leeren
function stopGame() {
  console.log('stop game');
  $("#startPage").show();
  $("#quizPage").hide();
  $("#overview").empty();
  $("#mcFlagge").empty();
  $("#mcUmrisse").empty();
}

//Wird ausgeführt, wenn auf der Quizseite 'Neustart' gedrückt wird
//Übersichten leeren und Variablen zurücksetzen
function restart() {
  console.log('restart game');
  $("#overview").empty();
  $("#mcFlagge").empty();
  $("#mcUmrisse").empty();
  countLand = 0;
  punkteGesamt = 0;
  autoAbfrage = [];
  hauptAbfrage = [];
  initGame(auswahl);
}

//Wird ausgeführt, nach startGame() oder wenn das Spiel neugestartet wird
//Setzt die Texte für die Quizseite, holt die Daten aus der JSON, erstellt die Events für Autocomplete
function initGame(auswahl) {
  console.log('init game ' + auswahl);

  //Header und Frage auf der Quizseite anpassen für jeweiligen Modus
  if (mode.name == 'flaggen') {
    $("#quizHeader").text('Flaggenquiz');
    $("#question").text('Zu welchem Land gehört diese Flagge: ');
  } else if (mode.name == 'umriss') {
    $("#quizHeader").text('Umrissequiz');
    $("#question").text('Zu welchem Land gehört dieser Umriss: ');
  } else if (mode.name == 'hauptstadt') {
    $("#quizHeader").text('Hauptstadtquiz');
    $("#question").text('Wie heißt die Hauptstadt von: ');
  } else if (mode.name == 'pokemon') {
    $("#quizHeader").text('Pokemonquiz');
    $("#question").text('Wie heißt dieses Pokemon: ');
  } else if (mode.name == 'expert') {
    $("#quizHeader").text('Expertenquiz');
    $("#question").text('Kannst du alle auflisten?');
  }

  //benötigte Daten aus der JSON holen und speichern
  quiz = {};
  if (mode.name == 'pokemon') {
    for (i in pokemon) {
      let poke = pokemon[i];
      //Prüfen, ob Generation in der Auswahl
      if (auswahl.indexOf('gen' + poke.generation) != -1) {
        autoAbfrage.push(poke[mode.question]);
        quiz[poke.name] = poke;
      }
    }
  } else {
    for (i in welt) {
      let land = welt[i];
      //Prüfen, ob Kontinent in der Auswahl oder Special gesetzt
      if ((land.uno && auswahl.indexOf(land.kontinent.toLowerCase()) != -1) || (land.special && auswahl.indexOf(land.special.toLowerCase()) != -1)) {
        autoAbfrage.push(land[mode.question]);
        hauptAbfrage.push(land.hauptstadt);
        quiz[land.name] = land;
      }
    }
  }

  //Array, aus dem zufällig die nächste Frage gewählt wird
  abfrage = Object.keys(quiz);

  //Prüfen, ob die Antwort kurz angezeigt werden soll
  if (mode.config.configDelay) {
    delayTime = 1000;
  } else {
    delayTime = 0;
  }

  initMode();

  //Text für die Anzahl beantworteter/übriger Fragen
  $("#anzahl").text(countLand);
  $("#fragen").text(abfrage.length);

  //Konfiguration für Autocomplete
  if (mode.name == 'expert') {
    $("#expertLand").autocomplete({
      source: autoAbfrage,
      autoFocus: true,
      minLength: 5
    });
    $("#expertHaupt").autocomplete({
      source: hauptAbfrage,
      autoFocus: true,
      minLength: 5
    });
  } else if (mode.config.configWriteA) {
    $("#antwort").autocomplete({
      source: autoAbfrage,
      autoFocus: true,
      minLength: 3
    });
  } else {
    $("#antwort").autocomplete({
      source: []
    });
  }

  nextLand();
}

//Wird ausgeführt, um die Unterschiede in den Modi auf der Quizseite anzuzeigen
function initMode() {
  console.log('init mode ' + mode.name);

  //divs verstecken/anzeigen je nach Modus
  if (mode.name == 'expert') {
    $('#answerWrite').hide();
    $('#answerExpert').show();
    $('#answerPick').hide();
  } else if (mode.config.configPick) {
    $('#answerWrite').hide();
    $('#answerExpert').hide();
    $('#answerPick').show();
    $('#clues').hide();
  } else {
    $('#answerWrite').show();
    $('#answerExpert').hide();
    $('#answerPick').hide();
  }

  //Prüfen, ob eine Übersicht erstellt/angezeigt werden soll
  if (mode.config.configOV) {
    //Mischt die Fragen, damit die Übersicht nicht alphabetisch ist, außer bei Hauptstädten
    (mode.name == 'hauptstadt') ? '' : shuffle(abfrage);

    for (i in abfrage) {
      let land = quiz[abfrage[i]];
      let name = land.name.replaceAll(' ', '');

      const node = document.createElement("div");
      node.setAttribute('onclick', "pickLand('" + land.name + "')");
      node.setAttribute('id', name);

      if (mode.name == 'umriss') {
        node.setAttribute('style', 'background-image: url(Umrisse/' + land.kontinent + '/' + land.code + '.svg)');
      } else if (mode.name == 'flaggen') {
        node.setAttribute('style', 'background-image: url(Flaggen/' + land.code + '.svg)');
      } else if (mode.name == 'hauptstadt') {
        node.setAttribute('style', 'background-image: url(Flaggen/' + land.code + '.svg)');

        const textnode = document.createElement("p");
        textnode.innerText = land.name;
        node.appendChild(textnode);
      } else if (mode.name == 'pokemon') {
        let zeroId = ('000' + land.id).slice(-3);
        node.setAttribute('style', 'background-image: url(Pokemon/' + land.generation + 'Generation/' + zeroId + '.png); filter: brightness(0.0); height: 95px');
      }

      const answernode = document.createElement("p");
      answernode.setAttribute('class', (mode.name == 'pokemon') ? 'answer' + land.name : 'answer' + land.code);
      answernode.innerText = '-';
      node.appendChild(answernode);
      document.getElementById("overview").appendChild(node);
    }
  }

  //Prüfen ob Expert Modus, erstellt die Elemente zum Antworten
  if (mode.name == 'expert') {
    shuffle(abfrage);

    for (i in abfrage) {
      let land = quiz[abfrage[i]];

      const node = document.createElement("div");
      node.setAttribute('onclick', "pickExpertF('" + land.code + "')");

      const inode = document.createElement("img");
      inode.setAttribute('src', 'Flaggen/' + land.code + '.svg')
      inode.setAttribute('class', 'modalImg');

      node.appendChild(inode);

      document.getElementById("mcFlagge").appendChild(node);

      const node2 = document.createElement("div");
      node2.setAttribute('onclick', "pickExpertU('" + land.kontinent + "','" + land.code + "')");

      const inode2 = document.createElement("img");
      inode2.setAttribute('src', 'Umrisse/' + land.kontinent + '/' + land.code + '.svg')
      inode2.setAttribute('class', 'modalImg');

      node2.appendChild(inode2);

      document.getElementById("mcUmrisse").appendChild(node2);
    }
  }

  if (mode.name == 'umriss' || mode.name == 'flaggen') {
    $("#land").hide();
    $("#pokemonShadow").hide();
    $("#flagge").show();
  } else if (mode.name == 'hauptstadt') {
    $("#land").show();
    $("#pokemonShadow").hide();
    $("#flagge").hide();
  } else if (mode.name == 'pokemon') {
    $("#land").hide();
    $("#pokemonShadow").show();
    $("#flagge").hide();
  } else if (mode.name == 'expert') {
    $("#land").hide();
    $("#pokemonShadow").hide();
    $("#flagge").hide();
  }

}

function winGame() {
  $('#answerWrite').hide();
  $('#answerPick').hide();
  $('#answerExpert').hide();

  $('#land').hide();
  $('#flagge').hide();
  $('#pokemonShadow').hide();

  $("#question").text('Alle Fragen beantwortet. Starten Sie das Spiel neu oder versuchen Sie einen anderen Modus.');
}

function nextLand() {
  $("#anzahl").text(countLand);
  if (countLand > 0) {
    $("#prozent").text(Math.floor((punkteGesamt / (countLand * 10)) * 1000) / 10 + '%');
  } else {
    $("#prozent").text('100%');
  }

  if (abfrage.length > 0) {
    rand = Math.floor(Math.random() * abfrage.length);
    next = abfrage[rand];
    setLand();
  } else {
    winGame();
  }
}

function pickLand(land) {
  let temp1 = land;
  let temp2 = abfrage.indexOf(temp1);
  if (temp2 >= 0) {
    rand = temp2;
    next = temp1;
    setLand();
  }
}

function testLand(x) {
  if (x.toLowerCase() == quiz[next][mode.question].toLowerCase() || (quiz[next]['alt' + mode.question] && x.toLowerCase() == quiz[next]['alt' + mode.question].toLowerCase())) {
    if (mode.config.configWriteA) {
      $("#antwort").autocomplete(
        "disable"
      );
    }

    abfrage.splice(rand, 1);
    countLand++;
    punkteGesamt += punkte;

    console.log(punkteGesamt);

    if (mode.name == 'pokemon') {
      $("#" + quiz[next].name).css({ filter: 'brightness(1.0)' });
      $(".answer" + quiz[next].name).text(quiz[next][mode.question]);
    } else {
      $(".answer" + quiz[next].code).text(quiz[next][mode.question]);
    }

    if (delayTime > 0) {
      $('#pokemonShadow').css({ filter: 'brightness(1.0)' });
      $("#antwort").attr("style", "background-color:lawngreen");

      delay(delayTime).then(() => {
        $('#pokemonShadow').css({ filter: 'brightness(0.0)' });
        $("#antwort").attr("style", "background-color:white");
        nextLand();
      });
    } else {
      nextLand();
    }

    return true;
  } else {
    return false;
  }
}

function pickExpertF(code) {
  $('#modalFlagge').hide();
  $("#expertFlagge").attr("src", 'Flaggen/' + code + '.svg');
  $("#expertFlagge").val(code);
}

function pickExpertU(kontinent, code) {
  $('#modalUmrisse').hide();
  $("#expertUmrisse").attr("src", 'Umrisse/' + kontinent + '/' + code + '.svg');
  $("#expertUmrisse").val(code);
}

function testExpert() {
  let a = $("#expertLand").val();
  let b = $("#expertHaupt").val();
  let c = $("#expertFlagge").val();
  let d = $("#expertUmrisse").val();

  let e = abfrage.indexOf(a);

  let richtig = 0;
  if (e >= 0) {
    richtig++;
    $("#expertDivLand").attr("style", "background-color:lawngreen");
  } else {
    $("#expertDivLand").attr("style", "background-color:red");
  }
  if (quiz[a].hauptstadt == b) {
    richtig++;
    $("#expertDivHaupt").attr("style", "background-color:lawngreen");
  } else {
    $("#expertDivHaupt").attr("style", "background-color:red");
  }
  if (quiz[a].code == c) {
    richtig++;
    $("#expertDivFlagge").attr("style", "background-color:lawngreen");
  } else {
    $("#expertDivFlagge").attr("style", "background-color:red");
  }
  if (quiz[a].code == d) {
    richtig++;
    $("#expertDivUmriss").attr("style", "background-color:lawngreen");
  } else {
    $("#expertDivUmriss").attr("style", "background-color:red");
  }

  if (richtig == 4) {
    abfrage.splice(e, 1);
    countLand++;

    if (delayTime > 0) {
      delay(delayTime).then(() => {
        nextLand();
      });
    } else {
      nextLand();
    }
  }
}

function setLand() {
  punkte = 10;
  clues = 1;
  $("#antwort").val('');
  $("#clue").text('');

  if (mode.name == 'expert') {
    $("#expertDivLand").attr("style", "");
    $("#expertDivHaupt").attr("style", "");
    $("#expertDivFlagge").attr("style", "");
    $("#expertDivUmriss").attr("style", "");

    $("#expertLand").val('');
    $("#expertHaupt").val('');
    $("#expertFlagge").attr("src", "");
    $("#expertUmrisse").attr("src", "");
  }

  if (mode.config.configPick) {
    $("#optionA").attr("style", "");
    $("#optionB").attr("style", "");
    $("#optionC").attr("style", "");
    $("#optionD").attr("style", "");
  }

  if (mode.name == 'flaggen') {
    $("#flagge").attr("src", "Flaggen/" + quiz[next].code + '.svg');
  } else if (mode.name == 'hauptstadt') {
    $("#land").text(quiz[next].name);
    //$("#flagge").attr("src", "Flaggen/" + quiz[next].code + '.svg');
  } else if (mode.name == 'umriss') {
    $("#flagge").attr('src', 'Umrisse/' + quiz[next].kontinent + '/' + quiz[next].code + '.svg');
  } else if (mode.name == 'pokemon') {
    let zeroId = ('000' + quiz[next].id).slice(-3);
    $("#pokemonShadow").attr('src', 'Pokemon/' + quiz[next].generation + 'Generation/' + zeroId + '.png');
  }

  if (mode.config.configPick) {
    randomAnswers();
  }

  if (mode.config.configWriteA) {
    $("#antwort").autocomplete(
      "enable"
    );
  }
}

function solve() {
  punkte = 0;
  if (abfrage.length > 0) {
    testLand(quiz[next][mode.question]);
  }
}

function solveAll() {
  delayTime = 0;
  while (abfrage.length > 0) {
    solve();
  }
}

function skip() {
  if (abfrage.length > 0) {
    nextLand();
  }
}

function getClue() {
  if (abfrage.length > 0) {
    let temp = quiz[next][mode.question];

    if (temp.charAt(clues) == ' ') {
      clues++;
    }

    $("#clue").text(temp.substring(0, clues));
    if (clues > temp.length) {
      punkte = 0;
      solve();
    }

    clues++;
    punkte = Math.floor(10 / clues);
  }
}

function pickAnswer(x) {
  let test = testLand($("#answer" + x).text());
  //console.log(test);
  if (!test) {
    punkte = punkte / 2;
    //$("#prozent").text(((punkteGesamt + punkte) / ((countLand + 1 ) * 10)) * 100 + '%');
    $("#option" + x).attr("style", "background-color:#f00");
  } else if (delayTime > 0) {
    $("#option" + x).attr("style", "background-color:#0f0");
  }
}

function randomAnswers() {
  let picked = [];

  picked.push(quiz[next][mode.question]);

  let rightAnswer = autoAbfrage.indexOf(picked[0]);
  let i = autoAbfrage.length - 1;

  let temp = autoAbfrage[i];
  autoAbfrage[i] = autoAbfrage[rightAnswer];
  autoAbfrage[rightAnswer] = temp;

  let j = 3;
  while (j > 0 && i > 0) {
    let r = Math.floor(Math.random() * i);
    picked.indexOf(autoAbfrage[r]) == -1 ? picked.push(autoAbfrage[r]) : '';
    i--;

    let temp = autoAbfrage[i];
    autoAbfrage[i] = autoAbfrage[r];
    autoAbfrage[r] = temp;
    j--;
  }

  shuffle(picked);

  picked[0] != undefined ? $("#answerA").text(picked[0]) : $("#optionA").hide();
  picked[1] != undefined ? $("#answerB").text(picked[1]) : $("#optionB").hide();
  picked[2] != undefined ? $("#answerC").text(picked[2]) : $("#optionC").hide();
  picked[3] != undefined ? $("#answerD").text(picked[3]) : $("#optionD").hide();
}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
