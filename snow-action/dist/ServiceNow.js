import Constants from './Constants.js';
import Rest from './Rest.js';

class ServiceNow {

    constructor(username, password, instanceUrl)
     {
      //  super();
        this.instanceUrl = instanceUrl;
        this.rest = new Rest (
            username = username,
            password = password ); 
        this.responseObj;    
    }

    
    async raise_change_request( short_description = "", type = "" )
    {
        var json = {}
        json['short_description'] = short_description;
        json['type'] = type;                
        return await this.rest._post(`${this.instanceUrl}/api/sn_chg_rest/change`, json);
    }


    async get_change_request ( number = "")
    {
        var json = {}
        json['number'] = number;
        return await this.rest._get(`${this.instanceUrl}/api/sn_chg_rest/change?number=${number}`, json);
    }
}

export default ServiceNow;
