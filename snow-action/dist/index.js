/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 518:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./ServiceNow.js
class ServiceNow extends Constants {

    constructor(username, password, instanceUrl)
     {
        super();
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
        return await this.rest._post(`${this.instanceUrl}/${this.api_change_request}`, json);
    }


    async get_change_request ( number = "")
    {
        var json = {}
        json['number'] = number;
        return await this.rest._get(`${this.instanceUrl}/${this.api_change_request}?number=${number}`, json);
    }
}

/* harmony default export */ const ServiceNow_0 = ((/* unused pure expression or super */ null && (ServiceNow)));

;// CONCATENATED MODULE: ./index.js


const core = __nccwpck_require__(518);
const github = __nccwpck_require__(832);

try {
    // inputs ------------------------	   
    const snowUsername = core.getInput('snow-username');
    const snowPassword = core.getInput('snow-password');
    const snowUrl = core.getInput('snow-url');

    // debug --------------------------
    console.log(`snow username: ${snowUsername}`);
    console.log(`snow password: ${snowPassword}`);
    console.log(`snow url: ${snowUrl}`);

    // work to do --------------------- 
    const time = (new Date()).toTimeString();
   
    // outputs ------------------------	
    core.setOutput("time", time);
    
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
} catch(error) {
    core.setFailed(error.message);
}

})();

module.exports = __webpack_exports__;
/******/ })()
;