$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var inputItems = items.map(function(item) {
      return ($("input#" + item).val().toUpperCase());
        });
    inputItems.sort();
    inputItems.forEach(function(item){
      $(".listItems").append($("<li>").text(item));
    });
  $(".input").hide();
  $(".list").show();
  $(".refresh").click(function(){
    location.reload();
  });
  });
});
