let totalAverageMonthlySiteVisits = document.getElementById('totalAverage')
let averageMonthlySuccessEvents = document.getElementById('averageSuccess')
let successEventConversionRates = document.getElementById('successConversionRate')
let enterAverageValueofaSuccessEventVisit = document.getElementById('averageValue')
let increaseSiteTrafficbyX = document.getElementById('increaseTraffic')
let increaseConversionbyX = document.getElementById('increaseConversion')
let estimatedCosttoImprovePerformance = document.getElementById('estimatedCost')
// Results
let currentValueMonthly = document.querySelector(".currentValueMonthly")
let currentValueAnnually = document.querySelector(".currentValueAnnually")
let estimatedFutureMonthly = document.querySelector(".estimatedFutureMonthly")
let estimatedFutureAnnually = document.querySelector(".estimatedFutureAnnually")
let incrementalValueMonthly = document.querySelector(".incrementalValueMonthly")
let incrementalValueAnnually = document.querySelector(".incrementalValueAnnually")
let incrementalSuccessMonthly = document.querySelector(".incrementalSuccessValueMonthly")
let incrementalSuccessAnnually = document.querySelector(".incrementalSuccessValueAnnually")
let roiannually = document.querySelector(".roiMonthly")
let roiAnnually = document.querySelector(".roiAnnually")




// finalUrl.onkeyup = function(){
//   buildchart()
// }
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function loopClassesCurrentValue(month,annual){
  var month = document.querySelectorAll(month);
  var annual = document.querySelectorAll(annual);
  var index = 0, length = month.length;
    for ( ; index < length; index++) {
      month[index].innerHTML = "$"+numberWithCommas(totalAverageMonthlySiteVisits.value * averageMonthlySuccessEvents.value)
    }
  var index = 0, length = annual.length;
    for ( ; index < length; index++) {
      annual[index].innerHTML = "$"+(numberWithCommas((totalAverageMonthlySiteVisits.value * averageMonthlySuccessEvents.value)*12))
    }
}

function loopClassesFutureValue(month,annual){
  var month = document.querySelectorAll(month);
  var annual = document.querySelectorAll(annual);
  var newperc = totalAverageMonthlySiteVisits.value * (1.+(increaseSiteTrafficbyX.value/100))
  var index = 0, length = month.length;
    for ( ; index < length; index++) {
      month[index].innerHTML = "$"+numberWithCommas()
    }
  var index = 0, length = annual.length;
    for ( ; index < length; index++) {
      annual[index].innerHTML = "$"+(numberWithCommas((totalAverage.value * averageEvents.value)*12))
    }
}



function populateData() {
  successEventConversionRates.innerHTML = (totalAverageMonthlySiteVisits.value / averageMonthlySuccessEvents.value)/100
  loopClassesCurrentValue(".currentValueMonthly",".currentValueAnnually",totalAverageMonthlySiteVisits,averageMonthlySuccessEvents)
  // loopClassesFutureValue(".estimatedFutureMonthly",".estimatedFutureAnnually",)

}
