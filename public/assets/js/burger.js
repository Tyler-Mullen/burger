$(function() {

    $("#eat").on("click", function(event){
        
        var id = $(this).data("id");
        var name = $(this).data("burger_name");

        var newDevouredState = {
            devoured: true
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("changed devoured state to ", newDevouredState);
                location.reload();
            }
        )
    })

    $(".create-update-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("created a new burger.");
                location.reload();
            }
        )
    })
})