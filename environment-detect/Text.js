
class Text {  

    async field( str, seperator, field) 
    {
        var splits = str.split(seperator)
        return splits[ field ];
    }

    async filter( items, filterTxt) {

        return items.filter(function(str) { return str.includes(filterTxt) });
    }

}

export default Text;