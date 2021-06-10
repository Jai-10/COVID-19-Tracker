$("button").click(function() {

     var customCountry = $(".countryName").val();

     // fetch covid details
     fetch('https://corona.lmao.ninja/v2/countries/' + customCountry).then((response) => {
          return response.json();
     }).then((data) => {
          
          $(".countryName").text(data.country);
          $(".displayTotalCases").text(data.cases);
          $(".displayActiveCases").text(data.active);
          $(".displayRecoveredCases").text(data.recovered);
          $(".displayTotalDeaths").text(data.deaths);

     });
});
