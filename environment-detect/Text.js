
class Text {  

    async field( str, seperator, field) 
    {
        var ret = []
        var splits = str.split(seperator)
        var index = 0
        
        for(var i = 0; i < splits.length; i++ ) {
          ret.push([index, splits[i] ]);
          index += splits[i].length+seperator.length;
        }

        return ret[ field ];
    }

    async filter( items, filterTxt) {

        return items.filter(function(str) { return str.includes(filterTxt) });
    }

}

export default Text;