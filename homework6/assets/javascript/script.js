function renderButtons() {
  console.log("render");
  $(".cityPlaceHolder").empty();

  if (localStorage.getItem("city")) {
    city = JSON.parse(localStorage.getItem("city"));
  }

  for (var i = 0; i < city.length; i++) {
    var citiesbutton = $("<button>");
    citiesbutton.addClass("city-name");
    citiesbutton.attr("data-name", encodeURI(city[i]));
    citiesbutton.text(city[i]);

    console.log(city[i]);

    $(".cityPlaceHolder").append(citiesbutton);

    // $(".cityPlaceHolder").html(name);
    // $(name).append($(".cityPlacceHolder"));
  }
}

function getWeatherInfo(name) {
  if (name != "") {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&units=imperial" +
      "&APPID=c1e92f1102f974ef4c31578d4a625bfa";
    console.log(queryURL);

    $.ajax({
      type: "GET",
      url: queryURL
    })
      .then(function(response) {
        console.log(queryURL);
        console.log(response);
        $(".card1").attr("class", "card1");
        $("#weather1").css("background-color", "white");
        $(".city").html(response.name);
        $(".temp").html("Temperature: " + parseInt(response.main.temp));
        $(".humidity").html("Humidity: " + parseInt(response.main.humidity));
        $(".condition").html(response.weather[0].description);
        $("#weatherIcon").attr(
          "src",
          "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        );
        $(".wind").html("Wind Speed: " + parseInt(response.wind.speed));
        $("#weather1").css({
          border: "1px solid black",
          "border-radius": "16px"
        });
      })
      .fail(function(error) {
        console.log(JSON.parse(error));
        //alert(JSON.parse(error.responseText).message);
      });

    queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      name +
      "&units=imperial" +
      "&APPID=c1e92f1102f974ef4c31578d4a625bfa";
    console.log(queryURL);

    $.ajax({
      type: "GET",
      url: queryURL
    })
      .then(function(response) {
        // for (var i = 0; i < response.list.length; i++) {
        //   if (response.list[i].dt_txt.indexOf("12:00:00") !== -1) {
        //     console.log(response.list[i].dt_txt);
            $(".card-body").attr("class", "card-body");
            $(".day1").attr("class", "day1");
            $(".day2").attr("class", "day2");
            $(".day3").attr("class", "day3");
            $(".day4").attr("class", "day4");
            $(".day5").attr("class", "day5");
            $(".card-text1.2").html(response.city.name);
            $(".1").attr("src", "http://openweathermap.org/img/w/" + response.list[7].weather[0].icon + ".png");
            $(".1").css("max-width", "20s%");
            $(".card-title1.1").html("Temperature: " + parseInt(response.list[7].main.temp) + "<br></br>" + "Humidity: " + parseInt(response.lsit[7].main.humidity));
            $(".day2").attr("class", "day2");
            $(".card-text2.2").html(response.city.name);
            $(".2").attr("src", "http://openweathermap.org/img/w/" + response.list[15].weather[0].icon + ".png");
            $(".2").css("max-width", "20%");
            $(".card-title2.1").html("Temperature: " + parseInt(response.list[15].main.temp) + "<br></br>" + "Humidity: " + parseInt(response.lsit[15].main.humidity));
            $(".day3").attr("class", "day3");
            $(".card-text3.2").html(response.city.name);
            $(".3").attr("src", "http://openweathermap.org/img/w/" + response.list[23].weather[0].icon + ".png");
            $(".3").css("max-width", "20%");
            $(".card-title3.1").html("Temperature: " + parseInt(response.list[23].main.temp) + "<br></br>" + "Humidity: " + parseInt(response.lsit[23].main.humidity));
            $(".day4").attr("class", "day4");
            $(".card-text4.2").html(response.city.name);
            $(".4").attr("src", "http://openweathermap.org/img/w/" + response.list[31].weather[0].icon + ".png");
            $(".4").css("max-width", "20%");
            $(".card-title4.1").html("Temperature: " + parseInt(response.list[31].main.temp) + "<br></br>" + "Humidity: " + parseInt(response.lsit[31].main.humidity));
            $(".day5").attr("class", "day5");
            $(".card-text5.2").html(response.city.name);
            $(".5").attr("src", "http://openweathermap.org/img/w/" + response.list[39].weather[0].icon + ".png");
            $(".5").css("max-width", "20%");
            $(".card-title5.1").html("Temperature: " + parseInt(response.list[39].main.temp) + "<br></br>" + "Humidity: " + parseInt(response.lsit[39].main.humidity));
        //   }
        // }
      })
      .fail(function(error) {
        console.log(JSON.parse(error));
        // alert(JSON.parse(error.responseText).message);
      });
  } else {
    alert("Please enter a search option.");
  }
}

$(function() {
  $(document).on("click", ".city-name", function(event) {
    var title = $(this).attr("data-name");
    console.log(title);
    getWeatherInfo(title);
    //getMovie(title);
  });

  $("#submit").click(function(event) {
    event.preventDefault();
    console.log("Search");
    var name = $("#value")
      .val()
      .trim();

    console.log("name:" + name);

    if (city.indexOf(name) === -1) {
      console.log("Not in Array");
      city.push(name);
      localStorage.setItem("city", JSON.stringify(city));
    }
    getWeatherInfo(name);
  });

  // First Actions on Load
  var city = [];
  renderButtons();
});
