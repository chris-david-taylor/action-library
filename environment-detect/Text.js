
class Text {  

    async field( string, seperator, index) 
    {
        var ret = []
        var splits = string.split(seperator)
        var index = 0
        
        for(var i = 0; i < splits.length; i++ ) {
          ret.push([index, splits[i] ]);
          index += splits[i].length+seperator.length;
        }

        return ret[ index ];
    }

    async filter( items, filterTxt) {

        return items.filter(function(str) { return str.includes(filterTxt) });
    }

}

export default Text;