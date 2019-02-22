function student() {
  var stud = {nome: "Mario", cognome: "Rossi", età: 17};
  for (var field in stud) {
    document.getElementById("primo_task").innerHTML += "Primo task: " + stud[field] + "<br>";
  }
}

function nameSurnameStamp(arr) {
  for (var i = 0; i < arr.length; i++) {
    var n = arr[i].nome;
    var c = arr[i].cognome;
    document.getElementById("secondo_task").innerHTML +=  "Secondo task: " + n + c + "<br>";
  }
}

function addStudent(arr) {
  do {
  var newStud = {nome: "", cognome: "", età: 0};
  arr.push(newStud);
  newStud.nome = prompt("Dimmi il nome dello studente: ");
  newStud.cognome = prompt("Dimmi il cognome dello studente: ");
  newStud.età = prompt("Dimmi l'età dello studente: ");
} while (prompt("Vuoi aggiungere un altro studente?") != "no");
  document.getElementById("terzo_task").innerHTML +=  "Terzo task: " + JSON.stringify(arr) + "<br>";
}

var studs = [
  {nome: "Luca", cognome: "Neri", età: 18},
  {nome: "Marco", cognome: "Verdi", età: 18},
  {nome: "Andrea", cognome: "Gialli", età: 18},
  {nome: "Alessandro", cognome: "Blu", età: 18},
  {nome: "Francesco", cognome: "Marroni", età: 18}
];

student();
nameSurnameStamp(studs);
addStudent(studs);
