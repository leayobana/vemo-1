app
// =========================================================================
// Show View and Delete clientes
 
// =========================================================================
    .controller("ClienteCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.clientes = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        clienteService.Clientes.query(params, function(r) {
            $scope.lista = r;
            //$scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("Error in list:" + JSON.stringify(err));
            toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
        });
    };
    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = $scope.fields;
        params.query = $scope.query;
        $scope.list(params);
    };

    $scope.onReorder = function(order) { //TODO
        $log.log('Order: ' + order);
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            clienteService.clientes.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó cliente:" + JSON.stringify(d));
                toastr.success('Se eliminó al cliente ' + d.nombre, 'Cliente');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update clientes

// =========================================================================
.controller("clientesaveCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.clientes = {};

    $scope.sel = function() {
        clientegoService.clientes.get({ id: $stateParams.id }, function(r) {
            $scope.clientes = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.clientes.id) {
            catalogoService.clientes.update({ id: $scope.clientes.id }, $scope.clientes, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la categoría ' + r.nombre, 'Categoría');
                $state.go('catalogo.catalogo.clientes');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            catalogoService.clientes.save($scope.clientes, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la categoría ' + r.nombre, 'Categoría');
                $state.go('catalogo.catalogo.clientes');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('catalogo.catalogo.clientes');
    };
});
