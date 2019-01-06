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
                ,"near harad","far harad","nurn","gorgoth","minas morgul","morannon","barad~dûr"];
let withFort = []; 

