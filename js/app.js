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

function graphValue(target,img){
  if (target > 50000) {
  document.getElementById("current_value_annually_img").width = state.currentValueAnnually/500;
  console.log(target/500)
}
  else if(target >1000){
    document.getElementById(img).width = target/100;
    console.log(target/100)
  }
  else if(target >100){
    document.getElementById(img).width = target/10
  }
  else{
    document.getElementById(img).width = target
  }
}

function loopClassesCurrentValue(){
  state.currentValueMonthly = Number(enterAverageValueofaSuccessEventVisit.value) * Number(averageMonthlySuccessEvents.value)
  state.currentValueAnnually = state.currentValueMonthly*12
  currentValueMonthly.innerHTML = "$"+numberWithCommas(state.currentValueMonthly)
  graphValue(state.currentValueMonthly,"current_value_monthly_img")
  graphValue(state.currentValueAnnually,"current_value_annually_img")
  currentValueAnnually.innerHTML = "$"+numberWithCommas(state.currentValueAnnually)

}


function loopClassesFutureValue(conversionRate){
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
  estimatedFutureMonthly.innerHTML = "$"+numberWithCommas(newMonthly.toFixed(0))
  graphValue(state.estimatedFutureMonthly,"estimate_future_value_monthly_img")
  graphValue(state.incrementalValueMonthly,"incremental_value_monthly_img")
  graphValue(state.incrementalSuccessMonthly,"incremental_success_value_monthly_img")
  graphValue(state.roiMonthly,"roi_monthly_img")
  estimatedFutureAnnually.innerHTML = "$"+numberWithCommas(newAnnual.toFixed(0))
  graphValue(state.estimatedFutureAnnually,"estimate_future_value_annually_img")
  graphValue(state.incrementalValueAnnually,"incremental_value_annually_img")
  graphValue(state.incrementalSuccessAnnually,"incremental_success_value_annually_img")
  graphValue(state.roiAnnually,"roi_annually_img")

}

function loopClassesIncremental(){
  incrementalValueMonthly.innerHTML = "$"+numberWithCommas(state.incrementalValueMonthly.toFixed(0))
  incrementalSuccessMonthly.innerHTML = numberWithCommas(state.incrementalSuccessMonthly.toFixed(0))
  incrementalValueAnnually.innerHTML = "$"+numberWithCommas(state.incrementalValueAnnually.toFixed(0))
  incrementalSuccessAnnually.innerHTML = numberWithCommas(state.incrementalSuccessAnnually.toFixed(0))
  roiMonthly.innerHTML = numberWithCommas(state.roiMonthly.toFixed(0)) +"%"
  roiAnnually.innerHTML = numberWithCommas(state.roiAnnually.toFixed(0)) +"%"
}

function populateData() {
  conversionRate = (averageMonthlySuccessEvents.value / totalAverageMonthlySiteVisits.value)*100
  successEventConversionRates.innerHTML = conversionRate
  loopClassesCurrentValue()
  loopClassesFutureValue(conversionRate)
  loopClassesIncremental()
}
