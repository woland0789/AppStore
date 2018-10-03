app.factory("accountService", function ($http) {

    function registration(email, pass, cmPass) {
        var promise = $http({
                method: "POST",
                url: "/api/Account/Register",
                data: {
                    Email: email,
                    Password: pass,
                    ConfirmPassword: cmPass
                }
            })
            .then(function(response) {
                    return response;
                },
                function(response) {
                    return response;
                });
        return promise;
    };

    function login(email, pass) {
        var promise = $http({
                method: "POST",
                url: "/Token",
                data: "grant_type=password&username=" + email + "&password=" + pass,
                headers: {
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            })
            .then(function(response) {
                    return response;
                },
                function(response) {
                    return response;
                });
        return promise;
    }

    function logout() {
        var token = sessionStorage.getItem("token:Key");
        var promise = $http({
                method: "POST",
                url: "/api/Account/Logout",
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(function(response) {
                    return response;
                },
                function(response) {
                    return response;
                });
        return promise;
    }

    function checkAdmin() {
        var token = sessionStorage.getItem("token:Key");
        var promise = $http({
                method: "POST",
                url: "/api/Account/CheckAdminRoles",
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(function(response) {
                    return response;
                },
                function(response) {
                    return response;
                });
        return promise;
    }

    return {
        Registration: registration,
        Login: login,
        Logout: logout,
        CheckAdmin: checkAdmin
    }
    
});