import XMLHttpRequest from 'xhr2';


class Rest {  

    constructor(token = "") 
    {        
        this.xhr = new XMLHttpRequest();
        this.token = token;
    }
 
    async _get( url = "" ) 
    {       
        var response = await this.get( url, 
            this.xhr);

        return JSON.parse(response);
    }
    
    get(url = "" , xhr ) 
    {                
        return new Promise(function (resolve, reject) 
        {   
            xhr.open("GET", url, true);        
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader('Accept','application/json');
            xhr.setRequestHeader('Authorization', 
                'token ' + Buffer.from(self.token).toString('base64'));
            xhr.onreadystatechange = function () 
            {
                if ( this.readyState == this.DONE )                 
                { 
                   resolve(xhr.response);  
                   console.log(`response: ${xhr.response}`);         
                };
            };
            xhr.send();
        });
    }
}

export default Rest;