app

    .factory("catalogoService", function($resource, configCatalogo) {
    var url = configCatalogo.catalogoUrl;
    return {

        Categoria: $resource(url + "categorias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),
        Cliente: $resource(url + "cliente/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
        }),

        Motor: $resource(url + "motor/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),

        Moto: $resource(url + "moto/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),

        Repuesto: $resource(url + "repuesto/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),
        
        Autor: $resource(url + "autors/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "query": {
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
            }

        }),


    };
});
