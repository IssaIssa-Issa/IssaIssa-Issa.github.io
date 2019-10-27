    function weather() {


        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + name + "&APPID=c1e92f1102f974ef4c31578d4a625bfa";

        $.ajax({
            type: "GET",
            url: queryURL,
        }).then(function(response){
            console.log(queryURL);
            console.log(response);
        });
    }
    weather();

    $(function(){
        $('#submit').click(function(){
            var name = $("#value").val();

            if (name != "") {

            }
            else{
                alert("Please enter a search option.")
            }
            weather();
        });
      });