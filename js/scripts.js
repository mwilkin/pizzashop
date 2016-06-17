//business logic
var customer1 ="";

function Customer(customername, size, crust, sauce, cheese, veg){
  this.customername;
  this.customerphone;
  this.pizzanumber = 0;
  this.pizzasize = size;
  this.pizzacrust = crust;
  this.pizzasauce = sauce;
  this.pizzacheese = cheese;
  this.pizzameat = meat;
  this.pizzaveg = veg;
  this.total = 0;
}

Customer.prototype.cost = function (){
   return [this.pizzanumber *(this.pizzasize + this.pizzacrust + this.pizzasauce + this.pizzacheese + this.pizzameat + this.pizzaveg)]
};

var clearValues = function (){
  $(".customerName").val("");
  $(".customerPhone").val("");
}

var checkTally = function (){

}


//user Interface
$(document).ready(function(){
  $("#reviewOrder").click(function(even){
    event.preventDefault();
    var customerName = $(".customerName").val();
    var customerPhone = $(".customerPhone").val();

    var number = $("#pizza-number").val();
    var size = $("#pizza-size").val();
    var crust = $("#pizza-crust").val();
    var sauces = $("#pizza-sauce").val();
    var cheese = $("#cheese").val();
    var meat = [];
    $("input:checkbox[name='meat']:checked").each(function() {
      (meat).push(this.value);
    });
    var vegetable = [];
    $("input:checkbox[name='vegetable']:checked").each(function() {
      (vegetable).push(this.value);
    });
    $("#orderForm").hide();
    $(".orderSummary").show();
    $(".customerName").text(customerName);
    $(".customerPhone").text(customerPhone);
    $(".pizza-size").value(size);
    $(".pizza-crust").text(crust);
    $(".pizza-sauce").text(sauce);
    $(".pizza-cheese").text(cheese);
    $(".pizza-meat").text(meat);
    $(".pizza-veggies").text(vegetable);




  });
  $("#placeOrder").click(function(event){

    $(".pizza-meat").text(meat);
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
