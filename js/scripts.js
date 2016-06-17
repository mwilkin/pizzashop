//Business Logic:
var customer1 ="";

function Customer(customername, size, crust, sauce, cheese, veg) {
  this.customername="";
  this.customerphone="";
  this.pizzanumber = 0;
  this.pizzasize = size;
  this.pizzacrust = crust;
  this.pizzasauce = sauce;
  this.pizzacheese = cheese;
  this.pizzameat = meat;
  this.pizzaveg = veg;
  this.total = 0;
}

Customer.prototype.size = function() {
  if (this.pizzasize === "Small") {
    return this.total += 10;
  } else if (this.pizzasize === "Medium") {
    return this.total += 12;
  } else if (this.pizzasize === "Large") {
    return this.total += 15;
  } else {
    return this.total += 18;
  }
}

Customer.prototype.crust = function() {
  if (this.pizzacrust === "Traditional") {
    return this.total += 1;
  } else if (this.pizzacrust === "Gluten Free") {
    return this.total += 3;
  } else {
    return this.total +=5;
  }
}

Customer.prototype.sauce = function() {
  if (this.pizzasauce === "Tomato") {
  return this.total +=1;
  } else {
  return this.total +=3;
  }
}

Customer.prototype.cheese = function() {
  if (this.pizzasauce === "Fresh Mozzarella") {
  return this.total +=5;
  } else if (this.pizzasauce === "Ricotta") {
    return this.total +=3;
  } else {
    return this.total +=1;
  }
}

Customer.prototype.meat = function() {
  var meatNumber = this.pizzameat.length;
}

Customer.prototype.veg = function() {
  var vegNumber = this.pizzaveg.length;
}

Customer.prototype.cost = function() {
  return this.total = [this.pizzanumber * this.total]
}

// User Interface functions:
var clearValues = function(){
  $(".customerName").val("");
  $(".customerPhone").val("");
  $("#pizza-number").val("");
  $("#pizza-size").val("");
  $("#pizza-crust").val("");
  $("#pizza-sauce").val("");
  $("#cheese").val("");
}

var displaySelection = function() {
  $("#orderForm").hide();
  $(".orderSummary").show();
  $(".customerName").text(customer1.customerName);
  $(".customerPhone").text(customer1.customerPhone);
  $(".pizza-size").text(customer1.pizzasize);
  $(".pizza-crust").text(customer1.pizzacrust);
  $(".pizza-sauce").text(customer1.pizzasauce);
  $(".pizza-cheese").text(customer1.pizzacheese);
  $(".pizza-meat").text(customer1.pizzameat);
  $(".pizza-veggies").text(customer1.pizzaveg);
  $(".pizza-price").text(customer1.total);
}

//User Interface:
$(document).ready(function(){
  $("#reviewOrder").click(function(event){
    event.preventDefault();
    var customerName = $(".customerName").val();
    var customerPhone = $(".customerPhone").val();
    var number = $("#pizza-number").val();
    var size = $("#pizza-size").val();
    var crust = $("#pizza-crust").val();
    var sauces = $("#pizza-sauce").val();
    var cheese = $("#cheese").val();
    // debugger;
    var meat = [];
    var vegetable = [];
    $("input:checkbox[name='meat']:checked").each(function(){
      (meat).push(this.value);
    });
    $("input:checkbox[name='vegetable']:checked").each(function(){
      (vegetable).push(this.value);
    });
    displaySelection();

  });
  $("#placeOrder").click(function(event) {
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
