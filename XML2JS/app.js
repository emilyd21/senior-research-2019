var xml2js = require('xml2js');
var xml = '<player uni="1" code="1" name="Nicole Alford" checkname="ALFORD,NICOLE" class="SO" gp="3" ms="1"><attack k="2" e="0" ta="4" pct=".500"/><set a="26"/><serve sa="0" se="1"/><defense dig="7" re="0"/><block bs="0" ba="1" be="0" tb="1"/><misc bhe="0" pts="2.5"/></player>';

var attacks = "";
var sets = "";
var serves = "";
var defense = "";
var blocks = "";
var misc = "";

var parser = new xml2js.Parser();
parser.parseString(xml, function(err,result){
  //Extract the value from the data element
  attacks = result['player']['attack'];
  sets = result['player']['set'];
  serves = result['player']['serve'];
  defense = result['player']['defense'];
  blocks = result['player']['block'];
  misc = result['player']['misc'];

  console.log(attacks);
  console.log(sets);
  console.log(serves);
  console.log(defense);
  console.log(blocks);
  console.log(misc);
});