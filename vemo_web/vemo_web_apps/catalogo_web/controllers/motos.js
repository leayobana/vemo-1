app
// =========================================================================
// Show View and Delete motor marca
// =========================================================================
    .controller("MotoCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.moto = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        catalogoService.Moto.query(params, function(r) {
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
            catalogoService.Moto.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó moto:" + JSON.stringify(d));
                toastr.success('Se eliminó moto ' + d.nombre, 'Moto');
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
.controller("MotoSaveCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.moto = {};

    $scope.sel = function() {
        catalogoService.Moto.get({ id: $stateParams.id }, function(r) {
            $scope.moto = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.moto.id) {
            catalogoService.Moto.update({ id: $scope.moto.id }, $scope.moto, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó Moto ' + r.nombre, 'Moto');
                $state.go('catalogo.catalogo.moto');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            catalogoService.Moto.save($scope.moto, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó moto ' + r.nombre, 'Moto');
                $state.go('catalogo.catalogo.moto');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('catalogo.catalogo.moto');


        
    };
});
