let regionsName=["forlindon","north ered luin",""];
let regionsWithTown=[];
let regionsWithFort=[];
let regionsWithSiege=[];
let nations={};
let regions=[];
function Region(name,town,fort,siege,nation){
  this.name=name;
  this.town=town;
  this.fort=fort;
  this.siege=siege;
  this.nation=nation;
  this.getName=function(){
    return this.name;
  };
  this.haveTown=function(){
    return this.town;
  };
  this.haveFort=function(){
    return this.fort;
  };
  this.haveSiege=function(){
    return this.siege;
  };
  this.getNation=function(){
    return this.nation;
  };
}
let regionBuilder={
  regionName: "",
  regionTown: false,
  regionFort: false,
  regionSiege: false,
  nation: "",
  withRegionName: function(name){
    this.regionName=name;
    return this;
  },
  withTown: function(haveTown){
    this.regionTown=haveTown;
    return this;
  },
  withFort: function(haveFort){
    this.regionFort=haveFort;
    return this;
  },
  withSiege: function(haveSiege){
    this.regionSiege=haveSiege;
    return this;
  },
  withNationName: function(nationName){
    this.nation=nationName;
    return this;
  },
  build: function(){
    return new Region(this.regionName,this.regionTown,this.regionFort,this.regionSiege,this.nation);
  }
}
const functions={
  /**
  *True if x is in the array
  *@param x the element to search
  *@param array the array that is going to be searched
  *@return True if x in array, False otherwise
  */
  contiene: function(x,array){
    for(let i=0; i<array.lenght;i++){
      if(array[i].toLowerCase() === x){
        return true;
      }
    }
    return false;
  },
  buscarRegion: function(region,regiones){
    return;
  }
};
module.exports = functions;
