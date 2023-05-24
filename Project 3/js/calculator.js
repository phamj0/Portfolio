
document.getElementById("calButton").onclick = function() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    report(summaryStats(num1, num2,  num3));
    
    return false;
    
};


function summaryStats(num1, num2, num3) {
    var max = Math.max(num1, num2, num3);
    
    var min = Math.min(num1, num2, num3);
    
    var median = (num1 + num2 + num3) - max - min;
    
    var range = max - min;

    var average = (num1 + num2 + num3) / 3;
    average = Math.round(average * 100) / 100;
    
    return {
      Max: max,
      Min: min,
      Mean: average,
      Median: median,
      Range: range
    };
  }

  var report = function(result) {
    var statsList = document.getElementById("stats-list");
  
    // clear any previous list items
    statsList.innerHTML = "";
  
    // add list items for each statistic
    for (var prop in result) {
      if (result.hasOwnProperty(prop)) {
        var li = document.createElement("li");
        var value = result[prop];
  
        // round to one decimal if value is not an integer
        if (value % 1 !== 0) {
          value = value.toFixed(1);
        }
  
        li.innerHTML = "<b>" + prop + ":</b> " + value;
        statsList.appendChild(li);
      }
    }
  };
  