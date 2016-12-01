app
 // =========================================================================
 // Show View and Delete docente 
 // =========================================================================
     .controller("ClienteCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
     //Valores iniciales
     $scope.fields = 'nombre';
     var params = {};
     $scope.lista = [];
     $scope.cliente = {};
 
     $scope.list = function(params) {
        $scope.isLoading = true;
        registroService.Cliente.query(params, function(r) {
            $scope.lista = r.results;
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
             registroService.Cliente.delete({ id: d.id }, function(r) {
                 $log.log("Se eliminó Cliente:" + JSON.stringify(d));
                 toastr.success('Se eliminó Cliente ' + d.nombre, 'Cliente');
                 $scope.list(params);
             }, function(err) {
                 $log.log("Error in delete:" + JSON.stringify(err));
                 toastr.error(err.data.detail, err.status + ' ' + err.statusText);
             });
         }
     };
 
 })
 
 // =========================================================================
 // Create and Update Docente
 // =========================================================================
.controller("ClienteSaveCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.cliente = {};

    $scope.sel = function() {
        registroService.Cliente.get({ id: $stateParams.id }, function(r) {
            $scope.cliente = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
         $scope.sel();
     }
 
     $scope.save = function() {
         if ($scope.cliente.id) {
             registroService.Cliente.update({ id: $scope.cliente.id }, $scope.cliente, function(r) {
                 $log.log("r: " + JSON.stringify(r));
                 toastr.success('Se editó Cliente ' + r.nombre, 'Cliente');
                 $state.go('modelo.modelo.cliente');
             }, function(err) {
                 $log.log("Error in update:" + JSON.stringify(err));
                 toastr.error(err.data.detail, err.status + ' ' + err.statusText);
             });
         } else {
             registroService.Cliente.save($scope.cliente, function(r) {
                $log.log("r: " + JSON.stringify(r));              toastr.success('Se insertó Cliente ' + r.nombre, 'Cliente');
                 $state.go('registro.registro.clientes');
             }, function(err) {
                 $log.log("Error in save:" + JSON.stringify(err));
                 toastr.error(err.data.detail, err.status + ' ' + err.statusText);
             });
         }
     };
 
     $scope.cancel = function() {
        $state.go('modelo.modelo.clientes');
 
         
    };
 });