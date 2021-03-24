const cities = ["Akaa", "Alajärvi", "Alavus", "Espoo", "Forssa", "Haapajärvi",
  "Haapavesi", "Hamina", "Hanko", "Harjavalta", "Heinola", "Helsinki", "Huittinen",
  "Hyvinkää", "Hämeenlinna", "Iisalmi", "Ikaalinen", "Imatra", "Joensuu", "Jyväskylä",
  "Jämsä", "Järvenpää", "Kaarina", "Kajaani", "Kalajoki", "Kangasala", "Kankaanpää",
  "Kannus", "Karkkila", "Kaskinen", "Kauhajoki", "Kauhava", "Kauniainen", "Kemi",
  "Kemijärvi", "Kerava", "Keuruu", "Kitee", "Kiuruvesi", "Kokemäki", "Kokkola", "Kotka",
  "Kouvola", "Kristiinankaupunki", "Kuhmo", "Kuopio", "Kurikka", "Kuusamo", "Lahti",
  "Laitila", "Lappeenranta", "Lapua", "Lieksa", "Lohja", "Loimaa", "Loviisa", "Maarianhamina",
  "Mikkeli", "Mänttä-Vilppula", "Naantali", "Nivala", "Nokia", "Nurmes"
  , "Närpiö", "Orimattila", "Orivesi", "Oulainen", "Oulu", "Outokumpu", "Paimio", "Parainen",
  "Parkano", "Pieksämäki", "Pietarsaari", "Pori", "Porvoo", "Pudasjärvi", "Pyhäjärvi",
  "Raahe", "Raasepori", "Raisio", "Rauma", "Riihimäki", "Rovaniemi", "Saarijärvi", "Salo",
  "Sastamala", "Savonlinna", "Seinäjoki", "Somero", "Suonenjoki", "Tampere", "Tornio",
  "Turku", "Ulvila", "Uusikaarlepyy", "Uusikaupunki", "Vaasa", "Valkeakoski", "Vantaa",
  "Varkaus", "Viitasaari", "Virrat", "Ylivieska", "Ylöjärvi", "Äähtäri", "Äänekoski"];

const municipalities = ["Akaa", "Alajärvi", "Alavieska", "Alavus", "Asikkala", "Askola", "Aura"
  , "Brändö", "Eckerö", "Enonkoski", "Enontekijä", "Espoo", "Eura", "Eurajoki", "Evijärvi",
  "Finström", "Forssa", "Föglö", "Geta", "Haapajärvi", "Haapavesi", "Hailuoto", "Halsua",
  "Hamina", "Hammarland", "Hankasalmi", "Hanko", "Harjavalta", "Hartola", "Hattula",
  "Hausjärvi", "Heinola", "Heinävesi", "Helsinki", "Hirvensalmi", "Hollola", "Honkajoki",
  "Huittinen", "Humppila", "Hyrynsalmi", "Hyvinkää", "Hämeenkyrö", "Hämeenlinna", "Ii",
  "Iisalmi", "Iitti", "Ikaalinen", "Ilmajoki", "Ilomantsi", "Imatra", "Inari", "Inkoo",
  "Isojoki", "Isokyrö", "Janakkala", "Joensuu", "Jokioinen", "Jomala", "Joroinen", "Joutsa",
  "Juuka", "Juupajoki", "Juva", "Jyväskylä", "Jämijärvi", "Jämsä", "Järvenpää", "Kaarina",
  "Kaavi", "Kajaani", "Kalajoki", "Kangasala", "Kangasniemi", "Kankaanpää", "Kannonkoski",
  "Kannus", "Karijoki", "Karkkila", "Karstula", "Karvia", "Kaskinen", "Kauhajoki", "Kauhava",
  "Kauniainen", "Kaustinen", "Keitele", "Kemi", "Kemijärvi", "Keminmaa", "Kemiönsaari",
  "Kempele", "Kerava", "Keuruu", "Kihniö", "Kinnula", "Kirkkonummi", "Kitee", "Kittilä",
  "Kiuruvesi", "Kivijärvi", "Kokemäki", "Kokkola", "Kolari", "Konnevesi", "Kontiolahti",
  "Korsnäs", "Koski Tl", "Kotka", "Kouvola", "Kristiinankaupunki", "Kruunupyy", "Kuhmo",
  "Kuhmoinen", "Kumlinge", "Kuopio", "Kuortane", "Kurikka", "Kustavi", "Kuusamo", "Kyyjärvi",
  "Kärkölä", "Kärsämäki", "Kökar", "Lahti", "Laihia", "Laitila", "Lapinjärvi", "Lapinlahti",
  "Lappajärvi", "Lappeenranta", "Lapua", "Laukaa", "Lemi", "Lemland", "Lempäälä", "Leppävirta",
  "Lestijärvi", "Lieksa", "Lieto", "Liminka", "Liperi", "Lohja", "Loimaa", "Loppi", "Loviisa",
  "Luhanka", "Lumijoki", "Lumparland", "Luoto", "Luumäki", "Maalahti", "Maarianhamina",
  "Marttila", "Masku", "Merijärvi", "Merikarvia", "Miehikkälä", "Mikkeli", "Muhos", "Multia",
  "Muonio", "Mustasaari", "Muurame", "Mynämäki", "Myrskylä", "Mäntsälä", "Mänttä-Vilppula",
  "Mäntyharju", "Naantali", "Nakkila", "Nivala", "Nokia", "Nousiainen", "Nurmes", "Nurmijärvi",
  "Närpiö", "Orimattila", "Oripää", "Orivesi", "Oulainen", "Oulu", "Outokumpu", "Padasjoki",
  "Paimio", "Paltamo", "Parainen", "Parikkala", "Parkano", "Pedersören kunta", "Pelkosenniemi",
  "Pello", "Perho", "Pertunmaa", "Petäjävesi", "Pieksämäki", "Pielavesi", "Pietarsaari",
  "Pihtipudas", "Pirkkala", "Polvijärvi", "Pomarkku", "Pori", "Pornainen", "Porvoo", "Posio",
  "Pudasjärvi", "Pukkila", "Punkalaidun", "Puolanka", "Puumala", "Pyhtää", "Pyhäjoki",
  "Pyhäjärvi", "Pyhäntä", "Pyhäranta", "Pälkäne", "Pöytyä", "Raahe", "Raasepori", "Raisio",
  "Rantasalmi", "Ranua", "Rauma", "Rautalampi", "Rautavaara", "Rautjärvi", "Reisjärvi",
  "Riihimäki", "Ristijärvi", "Rovaniemi", "Ruokolahti", "Ruovesi", "Rusko", "Rääkkylä",
  "Saarijärvi", "Salla", "Salo", "Saltvik", "Sastamala", "Sauvo", "Savitaipale", "Savonlinna",
  "Savukoski", "Seinäjoki", "Sievi", "Siikainen", "Siikajoki", "Siikalatva", "Siilinjärvi",
  "Simo", "Sipoo", "Siuntio", "Sodankylä", "Soini", "Somero", "Sonkajärvi", "Sotkamo",
  "Sottunga", "Sulkava", "Sund", "Suomussalmi", "Suonenjoki", "Sysmä", "Säkylä",
  "Taipalsaari", "Taivalkoski", "Taivassalo", "Tammela", "Tampere", "Tervo", "Tervola",
  "Teuva", "Tohmajärvi", "Toholampi", "Toivakka", "Tornio", "Turku", "Tuusniemi", "Tuusula",
  "Tyrnävä", "Ulvila", "Urjala", "Utajärvi", "Utsjoki", "Uurainen", "Uusikaarlepyy",
  "Uusikaupunki", "Vaala", "Vaasa", "Valkeakoski", "Valtimo", "Vantaa", "Varkaus", "Vehmaa",
  "Vesanto", "Vesilahti", "Veteli", "Vieremä", "Vihti", "Viitasaari", "Vimpeli", "Virolahti",
  "Virrat", "Värdö", "Vöyri", "Ylitornio", "Ylivieska", "Ylöjärvi", "Ypäjä", "ähtäri", "äänekoski"];

function checkCity(letters) {
  let answers = [];

  // loop through the cities
  for (let i = 0; i < cities.length; i++) {
    let checkLetter = letters.slice(0);
    let word = '';

    // loop through each letter of the city
    for (let j = 0; j < cities[i].length; j++) {
      if (checkLetter.indexOf(cities[i][j].toLowerCase()) != -1) {
        word += cities[i][j];
        checkLetter.splice(checkLetter.indexOf(cities[i][j].toLowerCase()), 1);
      }
    }

    if (word === cities[i]) {
      answers.push(word);
    }
  }

  return answers
}

function checkMunicipality(letters) {
  let answers = [];

  // loop through the cities
  for (let i = 0; i < municipalities.length; i++) {
    let checkLetter = letters.slice(0);
    let word = '';

    // loop through each letter of the city
    for (let j = 0; j < municipalities[i].length; j++) {
      if (checkLetter.indexOf(municipalities[i][j].toLowerCase()) != -1) {
        word += municipalities[i][j];
        checkLetter.splice(checkLetter.indexOf(municipalities[i][j].toLowerCase()), 1);
      }
    }

    if (word.length == municipalities[i].length) {
      answers.push(word);
    }
  }

  return answers
}


// this function is called by pressing the button
function answers() {
  // get the letters from the cells displayed on the site.
  let letters = (() => {
    let output = [];
    let letters = document.getElementsByTagName("TD");
    for (let i = 0; i < letters.length; i++) {
      output.push(letters[i].firstChild.value.toLowerCase())
    }
    return output
  })();

  let answers = {
    cities: checkCity(letters),
    municipalities: checkMunicipality(letters)
  }

  let ul = document.getElementById("cities");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.childNodes[0])
  }

  for (let i = 0; i < answers.cities.length; i++) {
    let li = document.createElement("LI");
    let text = document.createTextNode(answers.cities[i]);
    li.appendChild(text);
    ul.appendChild(li);
  }

  let ul2 = document.getElementById("municipalities");
  while (ul2.hasChildNodes()) {
    ul2.removeChild(ul2.childNodes[0])
  }

  for (let i = 0; i < answers.municipalities.length; i++) {
    let li = document.createElement("LI");
    let text = document.createTextNode(answers.municipalities[i]);
    li.appendChild(text);
    ul2.appendChild(li);
  }
}

