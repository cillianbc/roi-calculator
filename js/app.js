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
let roiMonthly = document.querySelector(".roiMonthly")
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
function stateRest(state) {
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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function loopClassesCurrentValue(){
  // var month = document.querySelector(month);
  // var annual = document.querySelector(annual);
  state.currentValueMonthly = Number(enterAverageValueofaSuccessEventVisit.value) * Number(averageMonthlySuccessEvents.value)
  state.currentValueAnnually = state.currentValueMonthly*12
  // var index = 0, length = month.length;
  //   for ( ; index < length; index++) {
      currentValueMonthly.innerHTML = "$"+numberWithCommas(state.currentValueMonthly)
    // }
  // var index = 0, length = annual.length;
  //   for ( ; index < length; index++) {
      currentValueAnnually.innerHTML = "$"+numberWithCommas(state.currentValueAnnually)
    // }
  // var index = 0, length = annual.length;
  //   for ( ; index < length; index++) {
  //     annual[index].innerHTML = "$"+(numberWithCommas(state.currentValueAnnually)
  //   }
}


function loopClassesFutureValue(conversionRate){
  // var month = document.querySelectorAll(month);
  // var annual = document.querySelectorAll(annual);
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
  // var index = 0, length = month.length;
  //   for ( ; index < length; index++) {
      estimatedFutureMonthly.innerHTML = "$"+numberWithCommas(newMonthly.toFixed(0))
    // }
  // var index = 0, length = annual.length;
  //   for ( ; index < length; index++) {
      estimatedFutureAnnually.innerHTML = "$"+numberWithCommas(newAnnual.toFixed(0))
    // }

}

function loopClassesIncremental(){
  // var incmonths = document.querySelectorAll(incmonth);
  // var incannuals = document.querySelectorAll(incannual);
  // var successmonths = document.querySelectorAll(successmonth);
  // var successannuals = document.querySelectorAll(successannual);
  // var roimonths = document.querySelectorAll(roiMonthly);
  // var roiannuals = document.querySelectorAll(roiAnnual);
  // console.log(successannuals)
  // var index = 0, length = incmonths.length;
  //   for ( ; index < length; index++) {
      incrementalValueMonthly.innerHTML = "$"+numberWithCommas(state.incrementalValueMonthly.toFixed(0))
    // }
  // var index = 0, length = successmonths.length;
  //   for ( ; index < length; index++) {
      incrementalSuccessMonthly.innerHTML = numberWithCommas(state.incrementalSuccessMonthly.toFixed(0))
    // }
    // var index = 0, length = incannuals.length;
    //   for ( ; index < length; index++) {
        incrementalValueAnnually.innerHTML = "$"+numberWithCommas(state.incrementalValueAnnually.toFixed(0))
      // }
    // var index = 0, length = successannuals.length;
    //   for ( ; index < length; index++) {
        incrementalSuccessAnnually.innerHTML = numberWithCommas(state.incrementalSuccessAnnually.toFixed(0))
      // }
    // var index = 0, length = roimonths.length;
    //   for ( ; index < length; index++) {
        roiMonthly.innerHTML = numberWithCommas(state.roiMonthly.toFixed(2)) +"%"
      // }
    // var index = 0, length = roiannuals.length;
    //   for ( ; index < length; index++) {
        roiAnnually.innerHTML = numberWithCommas(state.roiAnnually.toFixed(2)) +"%"
      // }
}

function populateData() {
  conversionRate = (averageMonthlySuccessEvents.value / totalAverageMonthlySiteVisits.value)*100
  successEventConversionRates.innerHTML = conversionRate
  loopClassesCurrentValue()
  loopClassesFutureValue(conversionRate)
  loopClassesIncremental()
}
