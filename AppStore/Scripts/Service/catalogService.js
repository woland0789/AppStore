app.factory("catalogService", function ($http, tokenHelperService) {

    function getAll(page) {
        var promise = $http({
            method: "GET",
            url: "/api/Goods?page=" + page
        })
            .then(function (response) {
                return response;
            },
            function (response) {
                return response;
            });
        return promise;
    };

    function getGoods(id) {
        var promise = $http({
                method: "GET",
                url: "/api/Goods/" + id
            })
            .then(function (response) {
                    return response;
                },
                function (response) {
                    return response;
                });
        return promise;
    };

    function addGoods(goods) {
        var promise = $http({
                method: "POST",
                url: "/api/Goods",
                data: goods,
                headers: { "Authorization" : tokenHelperService.TokenHeader() }
            })
            .then(function (response) {
                    return response;
                },
                function (response) {
                    return response;
                });

        return promise;
    }

    function editGoods(goods) {
        var promise = $http({
                method: "PUT",
                url: "/api/Goods/" + goods.Id,
                data: goods,
                headers: { "Authorization": tokenHelperService.TokenHeader() }
            })
            .then(function (response) {
                    return response;
                },
                function (response) {
                    return response;
                });

        return promise;
    }

    function removeGoods(id) {
        var promise = $http({
                method: "DELETE",
                url: "/api/Goods/" + id,
                headers: { "Authorization": tokenHelperService.TokenHeader() }
            })
            .then(function (response) {
                    return response;
                },
                function (response) {
                    return response;
                });

        return promise;
    }

    return {
        GetAll: getAll,
        AddGoods: addGoods,
        GetGoods: getGoods,
        EditGoods: editGoods,
        RemoveGoods: removeGoods
    };
    
});