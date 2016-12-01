app

    .factory("authsService", function($resource, configAuths) {
    var url = configAuths.authsUrl;
    return {
        Log: $resource(url + "logs/:param/", { 'param': '@param' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true }

        }),

        Categoria: $resource(url + "categorias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),
        Menu: $resource(url + "menus/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results : angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options : {
                        "count": 1,
                        "pages": 1,
                        "page": 1,
                        "range": "all",
                        "previous": null,
                        "page_size": 1,
                        "next": null
                    };
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    return angular.fromJson(r).actions.POST;
                }
            }


        }),
        
        Permission: $resource(url + "permissions/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": {
                method: 'GET', isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results : angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options : {
                        "count": 1,
                        "pages": 1,
                        "page": 1,
                        "range": "",
                        "previous": null,
                        "page_size": 0,
                        "next": null
                    };
                    return { results: results, options: options };
                }
            },

        }),
        

    };
});
