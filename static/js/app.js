
// save table body selection to variable
var tbody = d3.select("tbody");

// append rows of data to table
data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// save button and datetime selection to variables
  var button = d3.select('#filter-btn');
  var date = d3.select("#datetime");  

// define event handler
  function handleChange() {
    d3.event.preventDefault();

    var userInput = date.property("value");
    console.log(userInput);
    filteredData = data.filter(sighting => sighting.datetime === userInput);
    console.log(filteredData);

    // clear table data
    d3.selectAll("td").remove();

    // repopulate table with filtered data
    filteredData.forEach((ufoSightings) => {
      var row = tbody.append("tr");
      Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
  })
};
  // define event listener
  button.on("click", handleChange);
