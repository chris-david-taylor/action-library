
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
        const allEqual = arr => arr.every( v => v === arr[0] );
        var result = allEqual(items);
        return result;
    }

}

export default Text;