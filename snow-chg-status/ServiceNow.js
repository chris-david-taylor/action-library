import Rest from './Rest.js';

class ServiceNow  {
    
    constructor(username, password, instanceUrl)
     {
        this.instanceUrl = instanceUrl;
        this.rest = new Rest ( username, password ); 
        this.responseObj;    
    }
    
    async get_change_request ( number = "")
    {
        return await this.rest._get(`${this.instanceUrl}/api/sn_chg_rest/change?number=${number}`);
    }
}

export default ServiceNow;
