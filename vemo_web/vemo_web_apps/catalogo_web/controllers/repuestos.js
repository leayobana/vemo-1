app
// =========================================================================
// Show View and Delete motor marca
// =========================================================================
    .controller("RepuestoCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.repuesto = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        catalogoService.Repuesto.query(params, function(r) {
            $scope.lista = r;
            $scope.options = r.options;
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
            catalogoService.Repuesto.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó repuesto:" + JSON.stringify(d));
                toastr.success('Se eliminó repuesto ' + d.nombre, 'Repuesto');
                $scope.list(params);
            }, function(err) {
                $log.log("Error al eliminar:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Motor
// =========================================================================
.controller("RepuestoSaveCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.repuesto = {};

    $scope.sel = function() {
        catalogoService.Repuesto.get({ id: $stateParams.id }, function(r) {
            $scope.repuesto = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.repuesto.id) {
            catalogoService.Repuesto.update({ id: $scope.repuesto.id }, $scope.repuesto, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó Repuesto ' + r.nombre, 'Repuesto');
                $state.go('catalogo.catalogo.repuestos');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            catalogoService.Repuesto.save($scope.repuesto, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó moto ' + r.nombre, 'Repuesto');
                $state.go('catalogo.catalogo.repuesto');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('catalogo.catalogo.repuestos');


        
    };
});
