(function (){
  angular.module('ShoppingListCheckOff',[])
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .controller('ToBuyController',ToBuyController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    this.tbList = ShoppingListCheckOffService.getToBuy();
    this.boughtAction = ShoppingListCheckOffService.boughtAction;
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    this.btList = ShoppingListCheckOffService.getBought();
  }

  function ShoppingListCheckOffService(){
    var to_buy = [
      {num: 10, name: "Cookies"},
      {num: 20, name: "Cake"},
      {num: 12, name: "Pepsi"},
      {num: 90, name: "Peanut"},
      {num: 2, name: "iPhone"}
    ];
    var bought = [];

    this.getBought = function (){
      return bought;
    }

    this.getToBuy = function (){
      return to_buy;
    }

    this.boughtAction = function (index){
      var temp = to_buy.splice(index,1);
      //console.log(temp);
      bought.push(temp[0]);
    }
  }

})()
