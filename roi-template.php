<?php
/*
Template Name: ROI Page Template
*/
$sidebar = qode_startit_sidebar_layout(); ?>
<?php get_header(); ?>
<?php get_template_part( 'title' ); ?>
<?php get_template_part('slider'); ?>
<?php wp_enqueue_style ('theme-style', get_template_directory_uri().'/roi-data/style.css'); ?>

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
                        <div style="font-size:13px">There is value in optimizing your website. How much value? Depending on your desired outcomes, the ZAAZ Calculator is designed to estimate the return on investment. Plug in the numbers and see how it changes the present and future value of your business.</div>
					  </div>
                     <div style="clear:both"> <br/> <hr> <br/> </div>
					  <form>

					  <div class="left_side">
						   <h2>Current site Behavior</h2>


								<h3>Total Average Monthly Site Visits</h3>
								<textarea id="totalAverage" name="totalAverage" rows="1" cols="12"></textarea>
								 <img class="questionMark" alt="" height="20" width="20" title="Enter number of site visitors here. This may be fore your entire site or a section of it." src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png">
							  <br/>
								<h3>Average Monthly Success Events</h3>
								<textarea id="averageSuccess" name="averageSuccess" rows="1" cols="12"></textarea>
								<img class="questionMark" alt="" height="20" width="20" title="Enter number of targeted site behavior completions or conversions for a given month. This number should be a subset of the Monthly Site Visits. This can be any kind of success event(purchase, lead conversion, add item to cart)" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png">
								<p>Indentify specific targeted behaviour (lead conversion, sale conversion, etc.)</p>

								<h3>Success Event Conversion Rate</h3>
								<textarea id="successConversionRate" name="successConversionRate" rows="1" cols="26" placeholder ="Will Generate automatically" readonly></textarea>
								% <img class="questionMark" alt="" height="20" width="20" title="Success Event Conversion Rate is automatically calculated by dividing average monthly success event conversions by total average monthly site behaviors." src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png">
								<p>Shows success event conversion from total site visits</p>

							<h3>Enter Average Value of a Success Event Visit</h3> $ <textarea id="averageValue" name="averageValue" rows="1" cols="12"></textarea>
							  <img class="questionMark" alt="" height="20" width="20" title="Enter the average value associated with a single success event. Example: each visit is worth $20 on average" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"/>
							<p>Average value of lead/sales conversion</p>


						</div>


                        <div class="right_side">
							<h2>Potential Improvement</h2>

							<h3>Increase Site Traffic by X%</h3>

							<textarea id="increaseTraffic" name="increaseTraffic" rows="1" cols="12"></textarea>
							% <img class="questionMark" alt="" height="20" width="20" title="Enter a percentege between 1% & 100%" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"</a>

							<p>Enter a value (percentege) of the potential increase in site traffic ( example 10%).</p>
							<h3>Increase Conversion by X%</h3>

							<textarea id="increaseConversion" name="increaseConversion" rows="1" cols="12"></textarea>
							% <img class="questionMark" alt="" height="20" width="20" title="Enter a percentege between 1% & 100%" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png"</a>

							<p>Enter a value (percentege) of the potential increase in site conversion ( example 10%).</p>

							<h3>Estimated Cost to Improve Performance</h3> $ <textarea id="estimatedCost" name="estimatedCost" rows="1" cols="12"></textarea>
							  <img class="questionMark" alt="" height="20" width="20" title="Enter the estimated company cost required to optimise this site behavior. This value will be subtracted from the estimated ROI to show actual profit( See calculated outputs below)" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/tooltip-img.png">

							<p>Enter estimated costs to optimise indentified behaviours (eg., agency fees, marketing and/or operational costs)</p>
                        </div>

						<div style="clear:both"> <br/> <hr> <br/> </div>

						 <div class="left_side">

							<h2>Estimated Impact of Site Optimisation</h2> <br/>
							<img id="monthly" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png"> Monthly &nbsp;&nbsp;&nbsp; <img id="anually" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png"> Annually
							<br/><br/>
							<h3>Current Value</h3>
							<div> <img id="current_value_monthly_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="currentValueMonthly"> $0</span> </div>
							<div> <img id="current_value_annually_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="currentValueAnnually"> $0</span> </div>
							<br/>
							<h3>Estimated Future Value</h3>
							<div> <img id="estimate_future_value_monthly_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="estimatedFutureMonthly"> $0</span> </div>
							<div> <img id="estimate_future_value_annually_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="estimatedFutureAnnually"> $0</span> </div>
							<br/>
							<h3>Incremental Value</h3>
							<div> <img id="incremental_value_monthly_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="incrementalValueMonthly"> $0</span> </div>
							<div> <img id="incremental_value_annually_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="incrementalValueAnnually"> $0</span> </div>
							<br/>
							<h3>Incremental Success Events</h3>
							<div> <img id="incremental_success_value_monthly_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="incrementalSuccessValueMonthly"> $0</span> </div>
							<div> <img id="incremental_success_value_annually_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="incrementalSuccessValueAnnually"> $0</span> </div>
							<br/>
							<h3>ROI</h3>
							<div> <img id="roi_monthly_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/monthly.png" width="1" height="16"> <span class="roiMonthly"> $0</span> </div>
							<div> <img id="roi_annually_img" src="http://www.ewebmarketing.com.au/wp-content/uploads/2017/08/annually.png" width="1" height="16"> <span class="roiAnnually"> $0</span> </div>

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
					  <div style="clear:both"> <br/> <hr> <br/> </div>
                      <div style="text-align:center"> <input type="button" id="sumbit_roi" onclick="populateData()" value="Calculate"> </div>
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
