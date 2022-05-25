
class Text {  

    async field( string, seperator, index) 
    {
        var ret = []
        var splits = str.split(delim)
        var index = 0
        
        for(var i = 0; i < splits.length; i++ ) {
          ret.push([index, splits[i] ]);
          index += splits[i].length+delim.length;
        }

        return ret['index'];
    }

}

export default Text;