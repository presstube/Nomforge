"use strict"

let frags = [
"brunce",
"broon",
"clem",
"stang",
"brim",
"fong",
"grulch",
"mag",
"helm",
"rinse",
"sag",
"hold",
"glip",
"freak",
"udder",
"chomp",
"chimp",
"grep",
"link",
"flap",
"right",
"lump",
"shrank",
"slig",
"hulg",
"proto",
"chang",
"self",
"homo",
"ween",
"kneel",
"wrist",
"shag",
"rage",
"hogey",
"meat",
"pelt",
"tunnel",
"uni",
"plat",
"ox",
"don",
"fist",
"love",
"punkt",
"sch",
"bank",
"ball",
"hot",
"hag",
"dog",
"gibbon",
"cleft",
"shrimp",
"log",
"stang",
"jong",
"rim",
"digg",
"mak",
"hold",
"bold",
"hump",
"you",
"rap",
"bum",
"wig",
"slit",
"slap",
"winter",
"gist",
"goose",
"krill",
"mang",
"hord",
"bron",
"shelf",
"oom",
"blu",
"oid",
"arg",
"ot",
"sky",
"org",
"pant",
"blow",
"hyper",
"sad",
"lost",
"gym",
"donk",
"uni",
"cry",
"chicken",
"mage",
"queen",
"fling",
"cyber",
"cryo",
"laser",
"metal",
"iron",
"blade",
"shrine",
"chest",
"traitor",
"lie",
"opus",
"trade",
"chem",
"trail",
"trial",
"raider",
"money",
"lust",
"hate",
"frigid",
"slut",
"blast",
"cream",
"shank",
"gun",
"sword",
"knife",
"yay",
"tat"
]

let suffixes = [
"er",
"ed",
"ing",
"us",
"is",
"ine",
"e",
"ous",
"ious",
"s",
"y",
"ey",
"ers",
"ay",
"itus",
"ler",
"lon",
"tron",
"ton"
]

function makeName() {
  
  let name = ""
  let rando = Math.random()

  if (rando < 0.20) {
    name = _.sample(frags)
  } else if (rando < 0.90) {
    name = _.sample(frags) + _.sample(frags)
  } else {
    name = _.sample(frags) + _.sample(frags) + _.sample(frags)
  }

  if (Math.random() < 0.5) {
    name = name + _.sample(suffixes)
  }

  return name

}

let noms = _.times(1000, makeName)
document.body.innerHTML = noms.toString().replace(/,/g, ',</br>');

// var paragraph = document.getElementById("noms")
// var text = document.createTextNode(noms)
// paragraph.appendChild(text)

