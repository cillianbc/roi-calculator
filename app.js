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

let state = {
  currentValueMonthly:0,
  currentValueAnnually:0,
  estimatedFutureMonthly:0,
  estimatedFutureAnnually:0,
  incrementalValueMonthly:0,
  incrementalValueAnnually:0,
  incrementalSuccessMonthly:0,
  incrementalSuccessAnnually:0,
  roiMonthly:0,
  roiAnnually:0
}
function stateRest() {
    state.currentValueMonthly = 0;
    state.currentValueAnnually = 0;
    state.estimatedFutureMonthly = 0;
    state.estimatedFutureAnnually = 0;
    state.incrementalValueMonthly = 0;
    state.incrementalValueAnnually = 0;
    state.incrementalSuccessMonthly = 0;
    state.incrementalSuccessAnnually = 0;
    state.roiMonthly=0;
    state.roiAnnually=0;
}

// finalUrl.onkeyup = function(){
//   buildchart()
// }
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function loopClassesCurrentValue(month,annual){
  var month = document.querySelectorAll(month);
  var annual = document.querySelectorAll(annual);
  state.currentValueMonthly = Number(enterAverageValueofaSuccessEventVisit.value) * Number(averageMonthlySuccessEvents.value)
  state.currentValueAnnually = state.currentValueMonthly*12
  var index = 0, length = month.length;
    for ( ; index < length; index++) {
      month[index].innerHTML = "$"+numberWithCommas(state.currentValueMonthly)
	  document.getElementById("current_value_monthly_img").width = state.currentValueMonthly/100;
    }
  var index = 0, length = annual.length;
    for ( ; index < length; index++) {
      annual[index].innerHTML = "$"+numberWithCommas(state.currentValueAnnually)
	  document.getElementById("current_value_annually_img").width = state.currentValueAnnually/100;
    }
  // var index = 0, length = annual.length;
  //   for ( ; index < length; index++) {
  //     annual[index].innerHTML = "$"+(numberWithCommas(state.currentValueAnnually)
  //   }
}

function loopClassesIncremental(incmonth,incannual,successmonth,successannual,roiAnnual,roiMonthly,state){
  var incmonths = document.querySelectorAll(incmonth);
  var incannuals = document.querySelectorAll(incannual);
  var successmonths = document.querySelectorAll(successmonth);
  var successannuals = document.querySelectorAll(successannual);
  var roimonths = document.querySelectorAll(roiMonthly);
  var roiannuals = document.querySelectorAll(roiAnnual);
  console.log(successannuals)
  var index = 0, length = incmonths.length;
    for ( ; index < length; index++) {
      incmonths[index].innerHTML = "$"+numberWithCommas(state.incrementalValueMonthly)
    }
  var index = 0, length = successmonths.length;
    for ( ; index < length; index++) {
      successmonths[index].innerHTML = numberWithCommas(state.incrementalSuccessMonthly)
    }
    var index = 0, length = incannuals.length;
      for ( ; index < length; index++) {
        incannuals[index].innerHTML = "$"+numberWithCommas(state.incrementalValueAnnually)
      }
    var index = 0, length = successannuals.length;
      for ( ; index < length; index++) {
        successannuals[index].innerHTML = numberWithCommas(state.incrementalSuccessAnnually)
      }
    var index = 0, length = roimonths.length;
      for ( ; index < length; index++) {
        roimonths[index].innerHTML = numberWithCommas(state.roiMonthly) +"%"
      }
    var index = 0, length = roiannuals.length;
      for ( ; index < length; index++) {
        roiannuals[index].innerHTML = numberWithCommas(state.roiAnnually) +"%"
      }
}

function loopClassesFutureValue(month,annual,conversionRate){
  var month = document.querySelectorAll(month);
  var annual = document.querySelectorAll(annual);
  var newTrafficMonthly = totalAverageMonthlySiteVisits.value * (1.+(increaseSiteTrafficbyX.value/100))
  var newConversionperc = Number(increaseConversionbyX.value) + conversionRate
  var newConversionEvents = (newTrafficMonthly /100)*newConversionperc
  var newMonthly = newConversionEvents*Number(enterAverageValueofaSuccessEventVisit.value)
  var newAnnual = newMonthly*12
  state.estimatedFutureMonthly = newMonthly
  state.estimatedFutureAnnually = newAnnual
  state.incrementalValueMonthly = state.estimatedFutureMonthly - state.currentValueMonthly
  state.incrementalValueAnnually= state.estimatedFutureAnnually - state.currentValueAnnually
  state.incrementalSuccessMonthly= newConversionEvents - Number(averageMonthlySuccessEvents.value)
  state.incrementalSuccessAnnually= state.incrementalSuccessMonthly *12
  state.roiMonthly = (state.estimatedFutureMonthly / estimatedCosttoImprovePerformance.value) *100
  state.roiAnnually = state.roiMonthly *12
  var index = 0, length = month.length;
    for ( ; index < length; index++) {
      month[index].innerHTML = "$"+numberWithCommas(newMonthly)
	   document.getElementById("estimate_future_value_monthly_img").width = state.estimatedFutureMonthly/1000;
	   document.getElementById("incremental_value_monthly_img").width = state.incrementalValueMonthly/1000;
	   document.getElementById("incremental_success_value_monthly_img").width = state.incrementalSuccessMonthly/100;
	   document.getElementById("roi_annually_img").width = state.roiMonthly/1000;
    }
  var index = 0, length = annual.length;
    for ( ; index < length; index++) {
      annual[index].innerHTML = "$"+numberWithCommas(newAnnual)
	   document.getElementById("estimate_future_value_annually_img").width = state.estimatedFutureAnnually/1000;
	   document.getElementById("incremental_value_annually_img").width = state.incrementalValueAnnually/1000;
	   document.getElementById("incremental_success_value_annually_img").width = state.incrementalSuccessAnnually/100;
	   document.getElementById("roi_annually_img").width = state.roiAnnually/1000;
    }
  loopClassesIncremental(".incrementalValueMonthly",".incrementalValueAnnually",".incrementalSuccessValueMonthly",".incrementalSuccessValueAnnually",".roiAnnually",".roiMonthly",state)
}



function populateData() {
  stateRest();	
  conversionRate = (averageMonthlySuccessEvents.value / totalAverageMonthlySiteVisits.value)*100
  successEventConversionRates.innerHTML = conversionRate
  loopClassesCurrentValue(".currentValueMonthly",".currentValueAnnually",)
  loopClassesFutureValue(".estimatedFutureMonthly",".estimatedFutureAnnually",conversionRate)
}
