
class Text {  

    async field( str, seperator, field) 
    {
        var splits = str.split(seperator);
        return splits[ field ];
    }

    async filter( items, filterTxt) {

        return items.filter(function(str) { return str.includes(filterTxt) });
    }

    async all_unique ( items) {
        return items.every( (val, i, arr) => val === arr[0] );
    }

}

export default Text;