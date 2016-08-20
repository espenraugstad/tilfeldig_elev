var liste = [];
var listeUten = [];
var valgKnapp;
var valg;
var valgUten;
var uten;

function setup() {
  noCanvas();
  //== LAST INN FIL ==//
  var inputFile = createFileInput(gotFile);
  inputFile.parent('#velgfil');
  inputFile.style('font-size', '14pt');
  inputFile.style('font-family', 'Merriweather, serif');
  //== VELG TILFELDIG NAVN FRA LISTE ==/
  valgKnapp = select('#valg');
  valgKnapp.mousePressed(velgElev);

  // Med eller uten tilbakelegging.
  // Hvis checkbox endres

  select('#tilbake').changed(checkChange);

}

function checkChange() {
  // Hvis endres til checked, restart listen uten tilbakelegging
  if (select('#tilbake').checked) {
    listeUten.length = 0;
    listeUten = liste.slice();
  } else {
    listeUten.length = 0;
  }
}

function velgElev() {
  valg = floor(random(0, liste.length));
  valgUten = floor(random(0, listeUten.length));

  select('#elev').style('justify-content', 'center');

  // Hvis uten tilbakelegging
  if( select('#tilbake').checked()) {
    // Hvis lista er tom, gi beskjed og reset
    if (listeUten.length == 0) {
      listeUten = liste.slice();
      alert('Ferdig. Trykk OK for å begynne på nytt.');
    } else {
      select('#elev').html(listeUten[valgUten]);
      // Fjern elementet fra listeUten
      listeUten.splice(valgUten,1);
    }
  } else {
    select('#elev').html(liste[valg]);

  }

}

function gotFile(data) {
  // Nullstill listene
  liste.length = 0;
  listeUten.length = 0;

  // Fjern tomme linjer
  var tempListe = [];

  tempListe = data.data.split(/\r\n|\n|\r/);
  for (var i = 0; i < tempListe.length; i++) {
    if (tempListe[i] !== '') {
      liste.push(tempListe[i]);
      listeUten.push(tempListe[i]);
    }
  }
  select('#bekreft').html('Fil lastet');
}
