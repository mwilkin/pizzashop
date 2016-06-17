//business logic
var customer1 ="";
var pizzacost = function (){

}

function Custom(){
  this.customername;
  this.customerphone;
  this.pizzanumber = 0;
  this.pizzasize;
  this.pizzacrust;
  this.pizzasauce;
  this.pizzacheese;
  this.pizzameat;
  this.pizzaveg;
}

Custom.prototype.cost = function (){
  var price = 0;

};

var clearValues = function (){
  $(".customerName").val("");
  $(".customerPhone").val("");
}

//user Interface
$(document).ready(function(){
  $("#reviewOrder").click(function(even){
    event.preventDefault();
    $("#orderForm").hide();
    $(".orderSummary").show();

  });
  $("#placeOrder").click(function(even){
    $(".orderSummary").hide();
    $(".orderSubmitted").show();
    clearValues();
    //Note to self:How do I enter a date/time stamp when the "placeOrder" button is clicked?
  });
  $("#newOrder").click(function(even){
    $("#orderForm").show();
    $(".orderSubmitted").hide();
  });
});
