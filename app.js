var app = angular.module('miApp', []);

app.controller('miController', function($scope, $timeout){
	
    var preguntasRef = new Firebase('https://triviapp-c9b77.firebaseio.com/preguntas');
    
    $scope.infofirebase = [];
    
    preguntasRef.on('child_added', function(snapshot){
        $timeout(function(){
            var pregunta = snapshot.val();
            $scope.infofirebase.push(pregunta);
        });
    });
    
    $scope.respuesta = {};
    
    $scope.Enviar = function(){
        alert("Sus respuestas fueron: " + JSON.stringify($scope.respuesta));
    }
});