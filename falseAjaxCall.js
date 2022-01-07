export default class ajaxMaker {

    url = null
    xhr = new XMLHttpRequest()
    method = "GET"
    oneResponseOk = null

    constructor(url, method, oneResponseOk = null) {
        this.url = url;
        this.oneResponseOk = oneResponseOk;
        if (typeof method === "string") {
            this.method = method.length in ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] ? method : 'GET';
        }
    }

    sayHello() {
        console.log("hello");
    }
}