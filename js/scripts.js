function Task (name) {
  this.name1 = name;
}

Task.prototype.completed = function(){
  return this.name1 + " DONE";
}




$(document).ready(function() {



 $("form#list").submit(function(event){
   event.preventDefault();
   var newTask = $("input#newTask").val();
   var listedTask = new Task(newTask);

   $(".spaceJam").append("<li><span class='clickable'>" + listedTask.name1 + "</span></li>");
   $("#showList").show();
   console.log(listedTask);

   $(".clickable").click(function(){

     return listedTask.completed;
     console.log(listedTask.completed());
     $(".spaceJam").append("<li><span class='clickable'>" + listedTask.completed() + "</span></li>");
   });
 });


});
