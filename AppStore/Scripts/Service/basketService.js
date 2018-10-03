app.factory("basketService", function ($http) {
    var _basketService = {};

    // get all data from database
    _basketService.GetAll = function () {
        var token = sessionStorage.getItem("token:Key");
        var promise = $http({
                method: "GET",
                url: "/api/Basket",
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
    };


    // get single record from database
    _basketService.GetSingle = function (id) {
        var token = sessionStorage.getItem("token:Key");
        var promise = $http({
                method: 'GET',
                url: '/api/PersonalDetails/' + id,
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
    };

    // get single record from database
    _basketService.GetCount = function () {

        var token = sessionStorage.getItem("token:Key");
        var promise = $http({
                method: "GET",
                url: "/api/GetCount/",
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(function (response) {
                    return response;
                },
                function (response) {
                    return response;
                });
        return promise;
    };

    // post the data from database
    _basketService.Insert = function (amount, goodsId) {
        var token = sessionStorage.getItem("token:Key");
        var personalDetail = {
            Amount: amount,
            GoodsId: goodsId
        };

        var promise = $http({
                method: "POST",
                url: "/api/Basket",
                data: personalDetail,
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(function(response) {
                    return response.statusText;
                },
                function(response) {
                    return response.statusText;
                });

        return promise;
    };

    // put the data from database
    _basketService.Update = function (autoId, firstName, lastName, age, active) {
        var token = sessionStorage.getItem("token:Key");
        var personalDetail = {
            AutoId: autoId,
            FirstName: firstName,
            LastName: lastName,
            Age: age,
            Active: active,
        };

        var promise = $http({
                method: 'PUT',
                url: '/api/PersonalDetails/' + autoId,
                data: personalDetail,
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(function(response) {
                    return "Updated";
                    // return response.statusText + ' ' + response.status + ' ' + response.data;
                },
                function(response) {
                    return response.statusText + ' ' + response.status + ' ' + response.data;
                });

        return promise;
    };

    // delete the data from database
    _basketService.Remove = function (id) {
        var token = sessionStorage.getItem("token:Key");
        var promise = $http({
                method: "DELETE",
                url: "/api/Basket/" + id,
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(function(response) {
                    // return "Deleted";
                    return response;
                },
                function(response) {
                    return response;
                });

        return promise;
    };

    return _basketService;
});