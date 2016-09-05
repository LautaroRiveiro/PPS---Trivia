var app = angular.module('miApp', []);

app.controller('miController', function($scope, $timeout){
	
    var preguntasRef = new Firebase('https://triviapp-c9b77.firebaseio.com/preguntas');
    
    $scope.infofirebase = [];
    $scope.respuestasCorrectas = {};
    $scope.respuestasElegidas = {};
    
    preguntasRef.on('child_added', function(snapshot){
        $timeout(function(){
            var pregunta = snapshot.val();
            $scope.infofirebase.push(pregunta);
            $scope.respuestasCorrectas[pregunta.id] = pregunta.respuesta;
        });
    });    
    
    $scope.Enviar = function(){
        //alert("Sus respuestas fueron: " + JSON.stringify($scope.respuestasElegidas));
        var contadorAciertos = 0;
        var contadorPreguntas = 0;
        
        for(var respuesta in $scope.respuestasCorrectas){
            
            contadorPreguntas ++;
            
            if ($scope.respuestasCorrectas[respuesta] === $scope.respuestasElegidas[respuesta]){
                alert("Respuesta "+respuesta+": BIEN");
                contadorAciertos ++;
            }
            else{
                alert("Respuesta "+respuesta+": MAL");   
            }
        }
        
        alert("Cantidad de aciertos: "+contadorAciertos+"/"+contadorPreguntas);
    }
});