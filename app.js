// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var clearButton = d3.select("#clear-btn");
var txtDatetime = d3.select("#datetime");
var txtCity = d3.select("#city");
var txtState = d3.select("#state");
var txtCountry = d3.select("#country");
var txtShape = d3.select("#shape");

function loadTable(tableData) {

var alienData = ''

 for (var i = 0; i < tableData.length; i++) {

    alienData +=
       "<tr>" +
       "<td>" + tableData[i].datetime + "</td>" +
       "<td>" + tableData[i].city + "</td>" +
       "<td>" + tableData[i].state + "</td>" +
       "<td>" + tableData[i].country + "</td>" +
       "<td>" + tableData[i].shape + "</td>" +
       "<td>" + tableData[i].duration + "</td>" +
       "<td>" + tableData[i].comments + "</td>" +
       "</tr>"
}
    d3.select("tbody").html(alienData);
};
function filterData() {
  var filteredData = tableData;
if (txtDatetime.property("value") > '') {
  filteredData = filteredData.filter(filteredData => filteredData.datetime === txtDatetime.property("value"));
  }
   if (txtCity.property("value") > '') {

 filteredData = filteredData.filter(filteredData => filteredData.city === txtCity.property("value"));
  }
   if (txtState.property("value") > '') {
    filteredData = filteredData.filter(filteredData => filteredData.state === txtState.property("value"));
  }
   if (txtCountry.property("value") > '') {
   filteredData = filteredData.filter(filteredData => filteredData.country === txtCountry.property("value"));
   }
    if (txtShape.property("value") > '') {
 filteredData = filteredData.filter(filteredData => filteredData.shape === txtShape.property("value"));
   }
    loadTable(filteredData);
  }

function clearData() {
  d3.select("#datetime").property("value", "");
  d3.select("#city").property("value", "");
  d3.select("#state").property("value", "");
  d3.select("#country").property("value", "");
  d3.select("#shape").property("value", "");

  loadTable(tableData);
}

button.on("click", function() {

 filterData(d3.select("#datetime").property("value"));

});

clearButton.on("click", function() {

  clearData();
});

window.onload = loadTable(tableData);