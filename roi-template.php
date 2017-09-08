<?php
/*
Template Name: ROI Page Template
*/
$sidebar = qode_startit_sidebar_layout(); ?>
<?php get_header(); ?>
<?php get_template_part( 'title' ); ?>
<?php get_template_part('slider'); ?>
<?php wp_enqueue_style ('theme-style', get_template_directory_uri().'/roi-data/roi-style.css'); ?>

<div class="qodef-full-width">
  <div class="qodef-full-width-inner">
    <div class="qodef-container">
      <div class="qodef-container-inner clearfix">
        <div class="qodef-container-inner clearfix">
          <div class="vc_row wpb_row vc_row-fluid qodef-section vc_custom_1504053015560 qodef-content-aligment-left" style="">
            <div class="clearfix qodef-full-section-inner">
              <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                  <div class="wpb_wrapper">
                    <div class="wpb_raw_code wpb_content_element wpb_raw_html vc_custom_1504080720226">
                      <div class="wpb_wrapper">
                        <div style="width:100%">
                          <div>
                            <h1 id="test">Calculating ROI: Website Optimisation</h1>
                            <img src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/400wideewebbanner.png" alt="">
                            <div style="font-size:13px">There is value in optimizing your website. How much value? Depending on your desired outcomes, the Calculator is designed to estimate the return on investment. Plug in the numbers and see how it changes the present and future value of your business.</div>
                          </div>
                          <div style="clear:both"> <br/>
                            <hr>
                            <br/>
                          </div>
                          <form>
                            <div class="left_side">
                              <h2>Current site Behavior</h2>
                              <div class="inner_main_div">
                                <div class="inner_left_div">
                                  <h3>Total Average Monthly Site Visits</h3>
                                </div>
                                <div class="inner_right_div">
                                  <input type="text" placeholder="Ex:1500" name="totalAverage" id="totalAverage">
                                  <img class="questionMark" alt="" height="20" width="20" title="Enter number of site visitors here. This may be fore your entire site or a section of it." src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"> </div>
                              </div>
                              <div class="inner_main_div">
                                <div class="inner_left_div">
                                  <h3>Average Monthly Success Events</h3>
                                </div>
                                <div class="inner_right_div">
                                  <input type="text" placeholder="Ex: 50" name="averageSuccess" id="averageSuccess">
                                  <img class="questionMark" alt="" height="20" width="20" title="Enter number of targeted site behavior completions or conversions for a given month. This number should be a subset of the Monthly Site Visits. This can be any kind of success event(purchase, lead conversion, add item to cart)" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"> </div>
                                <p>Indentify specific targeted behaviour (lead conversion, sale conversion, etc.)</p>
                              </div>
                              <div class="inner_main_div">
                                <div class="inner_left_div">
                                  <h3>Success Event Conversion Rate</h3>
                                </div>
                                <div class="inner_right_div">
								<textarea id="successConversionRate" placeholder="No Input"  name="successConversionRate" readonly></textarea>

                                  <img class="questionMark" alt="" height="20" width="20" title="Success Event Conversion Rate is automatically calculated by dividing average monthly success event conversions by total average monthly site behaviors." src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"> </div>
                                <p>Shows success event conversion from total site visits</p>
                              </div>
                              <div class="inner_main_div">
                                <div class="inner_left_div">
                                  <h3>Enter Average Value of a Success Event Visit</h3>
                                </div>
                                <div class="inner_right_div">
                                  <input type="text" placeholder="Eg: 150" name="averageValue" id="averageValue">
                                  <img class="questionMark" alt="" height="20" width="20" title="Enter the average value associated with a single success event. Example: each visit is worth $20 on average" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"/> </div>
                                <p>Average value of lead/sales conversion</p>
                              </div>
                            </div>
                            <div class="right_side">
                              <h2>Potential Improvement</h2>
                              <div class="inner_main_div">
                                <div class="inner_left_div">
                                  <h3>Increase Site Traffic by <b>X%</b></h3>
                                </div>
                                <div class="inner_right_div">
                                  <input type="text" placeholder="Ex: 2" name="increaseTraffic" id="increaseTraffic">
                                  <img class="questionMark" alt="" height="20" width="20" title="Enter a percentege between 1% & 100%" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"</a> </div>
                                <p>Enter a value (percentege) of the potential increase in site traffic ( example 10%).</p>
                              </div>
                              <div class="inner_main_div">
                                <div class="inner_left_div">
                                  <h3>Increase Conversion by <b>X%</b></h3>
                                </div>
                                <div class="inner_right_div">
                                 <input type="text" placeholder="Ex: 3"name="increaseConversion" id="increaseConversion">
                                 <img class="questionMark" alt="" height="20" width="20" title="Enter a percentege between 1% & 100%" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"</a> </div>
                                <p>Enter a value (percentege) of the potential increase in site conversion ( example 10%).</p>
                              </div>
                              <div class="inner_main_div">
                                <div class="inner_left_div">
                                  <h3>Estimated Cost to Improve Performance</h3>
                                </div>
                                <div class="inner_right_div">
                                  <input type="text" placeholder="Ex: 5200"name="estimatedCost" id="estimatedCost">
								  <img class="questionMark" alt="" height="20" width="20" title="Enter the estimated company cost required to optimise this site behavior. This value will be subtracted from the estimated ROI to show actual profit( See calculated outputs below)" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"> </div>
                                <p>Enter estimated costs to optimise indentified behaviours (eg., agency fees, marketing and/or operational costs)</p>
                              </div>
                            </div>
                            <div style="clear:both">
                              <hr>
                              <br/>
                            </div>
                            <div class="left_side">
                              <h2 style="text-align:left">Estimated Impact of Site Optimisation</h2>
                              <img id="monthly" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png"> Monthly &nbsp;&nbsp;&nbsp; <img id="anually" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png"> Annually <br/>
                              <br/>
                              <h3>Current Value</h3>
                              <div> <img id="current_value_monthly_img" class = "graph" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="currentValueMonthly"> $0</span> </div>
                              <div> <img id="current_value_annually_img" class = "graph" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="currentValueAnnually"> $0</span> </div>
                              <br/>
                              <h3>Estimated Future Value</h3>
                              <div> <img id="estimate_future_value_monthly_img" class = "graph" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="estimatedFutureMonthly"> $0</span> </div>
                              <div> <img id="estimate_future_value_annually_img" class = "graph"src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="estimatedFutureAnnually"> $0</span> </div>
                              <br/>
                              <h3>Incremental Value</h3>
                              <div> <img id="incremental_value_monthly_img" class = "graph" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="incrementalValueMonthly"> $0</span> </div>
                              <div> <img id="incremental_value_annually_img" class = "graph" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="incrementalValueAnnually"> $0</span> </div>
                              <br/>
                              <h3>Incremental Success Events</h3>
                              <div> <img id="incremental_success_value_monthly_img" class = "graph" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="incrementalSuccessValueMonthly"> 0</span> </div>
                              <div> <img id="incremental_success_value_annually_img" class = "graph" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="incrementalSuccessValueAnnually"> 0</span> </div>
                              <br/>
                              <h3>ROI</h3>
                              <div> <img id="roi_monthly_img" class = "graph" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="roiMonthly"> 0%</span> </div>
                              <div> <img id="roi_annually_img" class = "graph" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="roiAnnually"> 0%</span> </div>
                            </div>
                            <div class="right_side">
                            <!-- <table>
							  <tr>
								<th></th>
								<th>Monthly</th>
								<th>Annually</th>
							  </tr>
							  <tr>
								<td>Current Value</td>
								<td class="currentValueMonthly"> $0</td>
								<td class="currentValueAnnually">$0</td>
							  </tr>
							  <tr>
								<td>Estimated Future Value</td>
								<td class="estimatedFutureMonthly">$0</td>
								<td class="estimatedFutureAnnually">$0</td>
							  </tr>
							  <tr>
								<td>Incremental Value</td>
								<td class="incrementalValueMonthly">$0</td>
								<td class="incrementalValueAnnually">$0</td>
							  </tr>
							  <tr>
								<td>Incremental Success Events</td>
								<td class="incrementalSuccessValueMonthly">0</td>
								<td class="incrementalSuccessValueAnnually">0</td>
							  </tr>
							  <tr>
								<td>ROI</td>
								<td class="roiMonthly"></td>
								<td class="roiAnnually"></td>
							  </tr>
							</table> -->
                          </form>
                        </div>
                        <div style="clear:both"> <br/>
                          <hr>
                          <br/>
                        </div>
                        <div style="text-align:center">
                          <input type="button" id="sumbit_roi" onclick="populateData()" value="Calculate">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/roi-data/jq.js"></script>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/roi-data/app.js"></script>
<?php get_footer(); ?>
