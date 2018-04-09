(function (){
  'use strict;'
  angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.msg = "";
    $scope.in = "";

    $scope.check = function (){
      var temp = checkNum($scope.in);
      //console.log($scope.in);
      if (temp>0 && temp<=3){
        $scope.msg = "Enjoy!";
      }else if (temp>3){
        $scope.msg = "Too Much!";
      }else if (temp == 0){
        $scope.msg = "Please enter data first";
      }
    }

  }

  function checkNum (str){
    if (str==""){
      return 0;
    }else{
      var arr = str.split(',');
      return arr.length;
    }
  }
})();
