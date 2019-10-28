      $(function() {
        $("#submit").click(function(event) {
          event.preventDefault();
          var name = $("#value")
            .val()
            .trim();

            $(".cityPlacceHolder").html(name);
            $(name).append($(".cityPlacceHolder"));

          if (name != "") {
            var queryURL =
              "https://api.openweathermap.org/data/2.5/weather?q=" +
              name +
              "&units=imperial" +
              "&APPID=c1e92f1102f974ef4c31578d4a625bfa";

            $.ajax({
              type: "GET",
              url: queryURL
            })
              .then(function(response) {
                console.log(queryURL);
                console.log(response);
                $(".card1").attr("class", "card1");
                $(".city").html(response.name);
                $(".temp").html(response.main.temp);
                $(".humidity").html(response.main.humidity);
                $(".condition").html(response.weather[0].description);
                $("#weatherIcon").html(response.weather[0].icon);
                $(".wind").html(response.wind.speed);
              })
              .fail(function(error) {
                console.log(error);
                alert(JSON.parse(error.responseText).message);
              });
          } else {
            alert("Please enter a search option.");
          }
        });
      });