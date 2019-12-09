$(document).ready(function(){





    var displayedButtons = ["Spiderman","Ironman","Reak","Sir-Illin"];

    
    
    function renderButtons(){
        
        $(“#display-buttons”).empty();


        
        for (var i = 0; i < displayedButtons.length; i++){
            var newButton = $(“<button>“)
            newButton.attr(“class”, “btn btn-default”);
            newButton.attr(“id”, “input”)
            newButton.attr(“data-name”, displayedButtons[i]);
            newButton.text(displayedButtons[i]);
            $(“#display-buttons”).append(newButton);
        }
    }
    renderButtons()
});
console.log(‘hi’)
