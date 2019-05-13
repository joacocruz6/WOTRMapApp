/**
 * This will be global variables, they will be an object that knows every town with it's nation.
 * An array that know the spaces with town (that you can create unit but are not forts or sieges)
 * Another array that have the spaces with forts and the last array that have the sieges
 */
let nations = {
  dwarfs: ["ered luin","north ered luin","erebor","iron hills"],
  elves: ["grey havens","rivendell","lórien","woodland realm"],
  theNorth: ["the shire","buckland","north downs","bree","carrock","rhosgobel","old forest road","dale"],
  gondor: ["anfalas","erech","dol amroth","lamedon","pelargir","lossarnach","minas tirith","druadan forest"],
  rohan: ["fords of isen","helm's deep","westemnet","edoras","eastemnet","folde"],
  isengard: ["north dunland","south dunland","gap of rohan","orthanc"],
  sauron: ["angmar","mount gram","mount gundabad","morannon","barad~dûr","minas morgul","gorgoth","nurn","moria","dol guldur","southern mirkwood"],
  southronEasterling: ["north rhûn","east rhûn","south rhûn","umbar","near harad","far harad","khand"],
  neutral: ["west harondor","east harondor","south ithilien","osgiliath","north ithilien","dead marshes","western emyn muil","eastern emyn muil","dagorlad","ash mountains","fangorn"
            ,"parth celebrant","western brown lands","eastern brown lands","noman~lands","southern dorwinion","dimrill dale","south anduin vale","southern rhovanion","northern dorwinion",
            "north anduin vale","narrows of the forest","eastern mirkwood","northern rhovanion","vale of celduin","gladden fields","vale of the carnen","high pass","goblin's gate","old ford","western mirkwood"
            ,"eagles' eyrie","northern mirkwood","withered heath","andrast","drûwaith iaur","enedwaith","minhiriath","cardolan","south ered luin","old forest","south downs","hollin","harlindon"
            ,"tower hills","weather hills","trollshaws","fords of bruinen","forlindon","evendim","arnor","ettenmoors"] //todo
};
let withTowns = ["orthanc","grey havens","ered luin","the shire","angmar","mount gundabad","rivendell","helm's deep","moria","lórien","carrock","woodland realm"
                ,"dale","erebor","iron hills","north rhûn","south rhûn","westemnet","edoras","folde","minas tirith","lossarnach","pelargir","dol amrroth","lamedon","umbar"
                ,"near harad","far harad","nurn","gorgoth","minas morgul","morannon","barad~dûr","north dunland","south dunland","bree"];
let withFort = ["osgiliath","far harad","pelargir","edoras","dale","the shire","angmar","fords of isen"];
let withSiege = ["grey havens","mount gundabad","rivendell","orthanc","helm's deep","dol amroth","minas tirith","umbar","minas morgul","morannon","barad~dûr","dol guldur","lórien","woodland realm","erebor","moria"];
let regions=[];
/**
 * Constructor for the region object
 * @param {string} name 
 * @param {string} nation 
 * @param {boolean} haveTown 
 * @param {boolean} haveFort 
 * @param {boolean} haveSiege 
 * @returns a new region
 */
function Region(name,nation,haveTown,haveFort,haveSiege){
  this.name = name;
  this.nation = nation;
  this.town =haveTown;
  this.fort = haveFort;
  this.siege = haveSiege;
  this.getName = function (){
    return this.name;
  };
  this.getNation = function(){
    return this.nation;
  };
  this.getTown = function(){
    return this.town;
  };
  this.getFort = function(){
    return this.fort;
  };
  this.getSiege = function(){
    return this.siege;
  };
}
/**
 * builder for the region object
 */
let regionBuilder = {
  name: "",
  nation: "",
  town: false,
  fort: false,
  siege: false,
  withName: function(aName){
    this.name= aName;
    return this;
  },
  withNation: function(aNation){
    this.nation=aNation;
    return this;
  },
  withTown: function(aTown){
    this.town = aTown;
    return this;
  },
  withFort: function(aFort){
    this.fort =aFort;
    return this;
  },
  withSiege: function(aSiege){
    this.siege = aSiege;
    return this;
  },
  buildRegion: function(){
    return new Region(this.name,this.nation,this.town,this.fort,this.siege);
  }
};
/**
 * We start to build the regions objects with the info
 */
for(let i = 0; i<nations.dwarfs.length;i++){
  let regionName=nations.dwarfs[i];
  let nationName="Dwarfs"
  let town = withTowns.includes(regionName);
  let fort = withFort.includes(regionName);
  let siege = withSiege.includes(regionName);
  let newRegion = regionBuilder.withName(regionName)
                .withNation(nationName)
                .withTown(town)
                .withFort(fort)
                .withSiege(siege)
                .buildRegion();
  regions.push(newRegion);
}
//For elves
for(let i = 0; i<nations.elves.length;i++){
  let regionName=nations.elves[i];
  let nationName="Elves"
  let town = withTowns.includes(regionName);
  let fort = withFort.includes(regionName);
  let siege = withSiege.includes(regionName);
  let newRegion = regionBuilder.withName(regionName)
                .withNation(nationName)
                .withTown(town)
                .withFort(fort)
                .withSiege(siege)
                .buildRegion();
  regions.push(newRegion);
}
//The north
for(let i = 0; i<nations.theNorth.length;i++){
  let regionName=nations.theNorth[i];
  let nationName="The North"
  let town = withTowns.includes(regionName);
  let fort = withFort.includes(regionName);
  let siege = withSiege.includes(regionName);
  let newRegion = regionBuilder.withName(regionName)
                .withNation(nationName)
                .withTown(town)
                .withFort(fort)
                .withSiege(siege)
                .buildRegion();
  regions.push(newRegion);
}
//Gondor
for(let i = 0; i<nations.gondor.length;i++){
  let regionName=nations.gondor[i];
  let nationName="Gondor"
  let town = withTowns.includes(regionName);
  let fort = withFort.includes(regionName);
  let siege = withSiege.includes(regionName);
  let newRegion = regionBuilder.withName(regionName)
                .withNation(nationName)
                .withTown(town)
                .withFort(fort)
                .withSiege(siege)
                .buildRegion();
  regions.push(newRegion);
}
//Rohan
for(let i = 0; i<nations.rohan.length;i++){
  let regionName=nations.rohan[i];
  let nationName="Rohan"
  let town = withTowns.includes(regionName);
  let fort = withFort.includes(regionName);
  let siege = withSiege.includes(regionName);
  let newRegion = regionBuilder.withName(regionName)
                .withNation(nationName)
                .withTown(town)
                .withFort(fort)
                .withSiege(siege)
                .buildRegion();
  regions.push(newRegion);
}
//Isengard 
for(let i = 0; i<nations.isengard.length;i++){
  let regionName=nations.isengard[i];
  let nationName="Isengard"
  let town = withTowns.includes(regionName);
  let fort = withFort.includes(regionName);
  let siege = withSiege.includes(regionName);
  let newRegion = regionBuilder.withName(regionName)
                .withNation(nationName)
                .withTown(town)
                .withFort(fort)
                .withSiege(siege)
                .buildRegion();
  regions.push(newRegion);
}
//Sauron
for(let i = 0; i<nations.sauron.length;i++){
  let regionName=nations.sauron[i];
  let nationName="Sauron"
  let town = withTowns.includes(regionName);
  let fort = withFort.includes(regionName);
  let siege = withSiege.includes(regionName);
  let newRegion = regionBuilder.withName(regionName)
                .withNation(nationName)
                .withTown(town)
                .withFort(fort)
                .withSiege(siege)
                .buildRegion();
  regions.push(newRegion);
}
//Southron & Easterlings
for(let i = 0; i<nations.southronEasterling.length;i++){
  let regionName=nations.southronEasterling[i];
  let nationName="Southron & Easterlings"
  let town = withTowns.includes(regionName);
  let fort = withFort.includes(regionName);
  let siege = withSiege.includes(regionName);
  let newRegion = regionBuilder.withName(regionName)
                .withNation(nationName)
                .withTown(town)
                .withFort(fort)
                .withSiege(siege)
                .buildRegion();
  regions.push(newRegion);
}
/**
 *  Change the image of the map to the corresponding one of the nation searched
 * @param {string} name: its the name of the nation to load the image
 * @returns void
 */
const loadImage = function(name){
  let names = name.split(" ");
  let imageName = "imagenes/map-";
  for(let i = 0; i<names.length-1;i++){
    imageName += names[i]+"-";
  }
  let file = imageName+names[names.length-1]+".jpg";
  let imageElement = document.querySelector(".imagen-mapa");
  imageElement.src = file;
  return;
}
/**
 * Search for the nation information on the objects created.
 * @param {string} input the input text of the box to search
 * @returns void sample
 */
const searchRegion = function(input){
  let text = document.querySelector(".info-text");
  let box = document.querySelector(".info-display");
  let box_info  = document.querySelector(".information");
  box_info.style.display = "";
  box.innerHTML = "";
  text.innerHTML = "Information of the Search";
  let searchText = input.toLowerCase().trim();
  for(let i = 0; i<regions.length;i++){
    if(regions[i].name === searchText){
      let region = regions[i];
      let table = document.createElement("table");
      let tableBox = document.createElement("tr");
      let elements = document.createElement("ul");
      elements.setAttribute("class","list-group list-group-flush");
      let nameElement = document.createElement("li");
      nameElement.setAttribute("class","list-group-item");
      nameElement.style="background-color: grey";
      let textName = document.createTextNode("Name: "+region.name);
      nameElement.appendChild(textName);
      elements.appendChild(nameElement);
      let nationElement = document.createElement("li");
      nationElement.setAttribute("class","list-group-item");
      nationElement.style="background-color: grey";
      let textNation = document.createTextNode("Nation: "+region.nation);
      nationElement.appendChild(textNation);
      elements.appendChild(nationElement);
      
      let townElement = document.createElement("li");
      townElement.setAttribute("class","list-group-item");
      townElement.style="background-color: grey";
      let townText;
      let fortElement = document.createElement("li");
      fortElement.setAttribute("class","list-group-item");
      fortElement.style="background-color: grey";
      let fortText;
      let siegeElement = document.createElement("li");
      siegeElement.setAttribute("class","list-group-item");
      siegeElement.style="background-color: grey";
      let siegeText; 
      if(region.town){
        townText = document.createTextNode("Town: Yes");
      }
      else{
        townText = document.createTextNode("Town: No");
      }
      if(region.fort){
        fortText = document.createTextNode("Fort: Yes");
      }
      else{
        fortText = document.createTextNode("Fort: No");
      }
      if(region.siege){
        siegeText = document.createTextNode("Siege: Yes");
      }
      else{
        siegeText = document.createTextNode("Siege: No");
      }
      townElement.appendChild(townText);
      fortElement.appendChild(fortText);
      siegeElement.appendChild(siegeText);
      elements.appendChild(townElement);
      elements.appendChild(fortElement);
      elements.appendChild(siegeElement);
      tableBox.appendChild(elements);
      table.appendChild(tableBox);
      box.appendChild(table);
      loadImage(regions[i].name);
      return;
    }
  }
  eraseInput();
  return;
}
/**
 * Erase the input of the file, going back to the normal image of the world.
 * @returns nothing, change the html content of the page.
 */
const eraseInput = function(){
  let text = document.querySelector(".info-text");
  let box_info  = document.querySelector(".information");
  box_info.style.display = "none";
  let box = document.querySelector(".info-display");
  let image = document.querySelector(".imagen-mapa");
  image.src = "imagenes/WholeMap.jpg";
  text.innerHTML = "";
  box.innerHTML = "";
  return;
}