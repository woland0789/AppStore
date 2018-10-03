app.factory("tokenHelperService", function () {

    function getTokenHeader() {
        var token = sessionStorage.getItem("token:Key");
        return "Bearer " + token;
    }
    
    return {
        TokenHeader: getTokenHeader
    }
    
});