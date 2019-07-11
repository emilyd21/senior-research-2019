var parseString = require("xml2js").parseString;

var xml = '<player uni="1" code="1" name="Nicole Alford" checkname="ALFORD,NICOLE" class="SO" gp="3" ms="1"><attack k="2" e="0" ta="4" pct=".500"/><set a="26"/><serve sa="0" se="1"/><defense dig="7" re="0"/><block bs="0" ba="1" be="0" tb="1"/><misc bhe="0" pts="2.5"/></player>';

parseString(xml, function(error, result) 
{
    if(error) 
    {
        console.log("Error: " + error);
        return;
    }
    console.dir(JSON.stringify(result));
});