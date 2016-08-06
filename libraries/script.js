var liste = [];
var valgKnapp;
var valg;

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

}

function velgElev() {
  valg = floor(random(0, liste.length));
  //println(liste[valg]);
  select('#elev').style('justify-content', 'center');
  select('#elev').html(liste[valg]);

}

function gotFile(data) {
  liste = [];
  // Fjern tomme linjer
  var tempListe = [];
  tempListe = data.data.split(/\r\n|\n/);
  for (var i = 0; i < tempListe.length; i++) {
    if (tempListe[i] !== '') {
      liste.push(tempListe[i]);
    }
  }
  select('#bekreft').html('Fil lastet');
}
