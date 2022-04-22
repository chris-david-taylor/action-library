import XMLHttpRequest from 'xhr2';

class Rest {
   

    constructor(username, password) 
    {
        this.username = username;
        this.password = password;
        this.xhr = new XMLHttpRequest();
        this.responseObj = {};
    }
   

    async _get( url = "" ) 
    {       
        console.log(`URL = ${url}`);
        var response = await this.get( url, 
            this.username, this.password, this.xhr);

        return JSON.parse(response);
    }
   

    async _post( url = "", json) 
    {  
        var data = JSON.stringify(json);
        var response = await this.post(data, 
            url, this.username, this.password, this.xhr);
            
        return JSON.parse(response);      
    }


    post(json, url = "", username = "", password = "", xhr ) 
    {                
        return new Promise(function (resolve, reject) 
        {   
            xhr.open("POST", url, true);        
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader('Accept','application/json');
            xhr.setRequestHeader('Source','inbound_event v1');
            xhr.setRequestHeader('Authorization', 
                'Basic ' + Buffer.from(username+':'+password).toString('base64'));
            xhr.onreadystatechange = function () 
            {
                if ( this.readyState === 4 )                 
                { 
                   resolve(xhr.response);           
                };
            };
            xhr.send(json);
        });
    }

    
    get(url = "", username = "", password = "", xhr ) 
    {                
        return new Promise(function (resolve, reject) 
        {   
            xhr.open("GET", url, true);        
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader('Accept','application/json');
            xhr.setRequestHeader('Authorization', 
                'Basic ' + Buffer.from(username+':'+password).toString('base64'));
            xhr.onreadystatechange = function () 
            {
                if ( this.readyState == this.DONE )                 
                { 
                   resolve(xhr.response);           
                };
            };
            xhr.send();
        });
    }
}
