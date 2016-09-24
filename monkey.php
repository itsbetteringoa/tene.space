<?php 
/*----------  LANG detection  ----------*/
//Include the caching/minification class
require( 'class.magic-min.php' );
//Initialize the class with image encoding, gzip, a timer, and use the google closure API
$vars = array( 
    'encode' => true, 
    'timer' => true, 
    'gzip' => true, 
    'closure' => true, 
    'remove_comments' => false, 
    'force_rebuild' => false, //USE THIS SPARINGLY!
    'hashed_filenames' => true, 
);
$minified = new Minifier( $vars );

$website_root_path=__DIR__;
require($website_root_path . '/geoip.inc');
$ip=$_SERVER['REMOTE_ADDR'];
$gi=geoip_open($website_root_path . '/GeoIP.dat',GEOIP_STANDARD);
//echo geoip_country_code_by_addr($gi, $ip) . " ";
//echo geoip_country_name_by_addr($gi, $ip);

//die();
?>
<!DOCTYPE html>
<html >

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=yes">
    <meta name="description" lang="en" content="fundraising for OpenSpace in Arambol (Goa), interesting Cacao experiments, pictures from travels and other un-mainstream ideas">
    <meta name="author" content="tene.space.monkey">
    <meta property="og:image" content="http://tene.space/img/site_preview.jpg" />
    <meta property="og:title" content=""/>
    <meta property="og:description" content=""/>
<meta http-equiv="Cache-control" content="public">
 <!--    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1990 12:00:00 GMT" />  -->

    <title lang="en">"BE THE CHANGE you wish to see in the world"(c)Gandhiji</title>

    <?php include('header_styles.php'); ?>

    <?php include('header_scripts.php'); ?></head>

<body id="page-top" class="index">
<input type="hidden" name="geoip" id="geoip" value="<?php echo geoip_country_name_by_addr($gi, $ip); ?>">
<?php geoip_close($gi); ?>
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">

            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span lang="en" class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- languages block -->
                <form>
                    <div class="btn-group lang_buttons" data-toggle="buttons">
                        <label class="btn btn-default ">
                            <span class="lang_switch ru"></span>
                            <input name="lang" value="rus" type="radio"><span class="lang_txt">RUS</span></label>
                        <label class="btn btn-default active">
                            <span class="lang_switch en"></span>
                            <input name="lang" value="eng" type="radio"><span class="lang_txt">ENG</span></label>

                    </div>
                </form>
                
            </div>
            <div id="hidden" style="display: none;"></div>
            <!-- donaton block with ribbon -->
            <div class="navbar-middle" >
                <a href="#donation"  id="donation_link" class="portfolio-link" >
                    <div class="donate_bg" lang="en" alt="donate"  title="Yeeeaaaahhhh"></div>
                </a>
                <div class="ribbon" lang="en" title="Yeeeaaaahhhh"> <i><span>
                            <s></s>
                            <div lang="en">donate</div>
                            <s></s>
                        </span></i> 
                </div>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right"  data-offset-top="55">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#projects" lang="en">Projects</a>
                    </li>
                    <!--
                    <li class="page-scroll">
                    <a href="#about">About</a>
                </li>
                -->
                <li class="dropdown">
                    <a href="#" id="menu_about" data-target="#collapsable_menu" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <span lang="en">About</span> <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu" id="collapsable_menu">
                        <li>
                            <a href="#spacemonkey_brief" id="a_spacemonkey_brief">
                                <span lang="en">one word</span> <i class="fa fa-comment-o"></i>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#spacemonkey_blah" id="a_spacemonkey_blah">
                                <span lang="en">blah-blah</span>
                                <i class="fa fa-commenting-o"></i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="page-scroll">
                    <a href="#news" lang="en">News</a>
                </li>
                <li class="page-scroll" id="link_fdb">
                    <a href="http://feedback.tene.space" id="link_feedback" lang="en">Feedback</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse --> </div>
    <!-- /.container-fluid -->
</nav>

<!-- Header -->
<header>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">

                <!-- ASCII art logo -->
                <?php include('header_logo.php'); ?>

                <div class="intro-text">
                    <h1 id="logo_moto_en" >BE THE CHANGE</h1>
                    <h1 id="logo_moto_ru" style="display:none;">БУДЬ ИЗmЕHЕHИEм</h1>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- projects Grid Section -->
<section id="projects" data-offset="50">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 lang="en">My Projects</h2>
                <hr class="star-primary"></div>
        </div>
        <div class="row">

            <!-- openspace start -->
            <div class="col-sm-4 portfolio-item">
                <div class="hover09  text-center">
                    <a href="#OpenSpace" lang="en" class="portfolio-link portfolio" title="OpenSpace in arambol, Goa for season 16-17" alt="OpenSpace in arambol, Goa for season 16-17">
                        
                            <img id="img_openspace" lang="en" data-src="img/portfolio/slideshow/openspace1.png" title="OpenSpace in arambol, Goa for season 16-17" width=360 height=260 class="lazy img-responsive " alt="OpenSpace project">
                            <!-- 
                            <img src="" alt="OpenSpace project" class=" img-responsive" width="360" height="260" data-src="img/portfolio/slideshow/openspace2.png" title="OpenSpace in arambol, Goa for season 16-17" id="img_openspace">
                            <img src="" alt="OpenSpace project" class=" img-responsive" width="360" height="260" data-src="img/portfolio/slideshow/openspace3.png" title="OpenSpace in arambol, Goa for season 16-17" id="img_openspace">
                            <img src="" alt="OpenSpace project" class=" img-responsive" width="360" height="260" data-src="img/portfolio/slideshow/openspace4.png" title="OpenSpace in arambol, Goa for season 16-17" id="img_openspace">
                            <img src="" alt="OpenSpace project" class=" img-responsive" width="360" height="260" data-src="img/portfolio/slideshow/openspace5.png" title="OpenSpace in arambol, Goa for season 16-17" id="img_openspace">
                            <img src="" alt="OpenSpace project" class=" img-responsive" width="360" height="260" data-src="img/portfolio/slideshow/openspace6.png" title="OpenSpace in arambol, Goa for season 16-17" id="img_openspace">
                            <img src="" alt="OpenSpace project" class=" img-responsive" width="360" height="260" data-src="img/portfolio/slideshow/openspace7.png" title="OpenSpace in arambol, Goa for season 16-17" id="img_openspace">
                            <img src="" alt="OpenSpace project" class=" img-responsive" width="360" height="260" data-src="img/portfolio/slideshow/openspace8.png" title="OpenSpace in arambol, Goa for season 16-17" id="img_openspace">
                            <img src="" alt="OpenSpace project" class=" img-responsive" width="360" height="260" data-src="img/portfolio/slideshow/openspace9.png" title="OpenSpace in arambol, Goa for season 16-17" id="img_openspace">
                            <img src="" alt="OpenSpace project" class=" img-responsive" width="360" height="260" data-src="img/portfolio/slideshow/openspace10.png" title="OpenSpace in arambol, Goa for season 16-17" id="img_openspace">
                             --><!-- <img id="img_openspace" src="img/portfolio/openspace.jpg" width=360 height=260 class="img-responsive" title="OpenSpace in arambol, Goa for season '16-'17" alt="OpenSpace project"></div> -->
                        
                        <div class="caption carousel-caption">
                            <p lang="en">OpenSpace</p>
                        </div>
                    </a>

                </div>
            </div>
            <!-- openspace end -->

            <!-- cacao start -->
            <div class="col-sm-4 portfolio-item">
                <div class="hover09  text-center">
                    <a href="#cacao" id="cacao_modal" lang="en" class="portfolio-link" title="Experiments with pure cacao from pods" alt="Cacao project" >
                        
                            <img id="img_cacao" lang="en" data-src="img/portfolio/cacao.jpg" width=360 height=260 class="lazy img-responsive" alt="Cacao project" title="Experiments with pure cacao from pods">
                            <!-- <img  id="img_cacao" src="img/portfolio/cacao.jpg" width=360 height=260 class="img-responsive" alt="Cacao project" title="Experiments with pure cacao from pods"></div> -->
                        
                        <div class="caption carousel-caption">
                            <p lang="en">Cacao</p>
                        </div>
                    </a>

                </div>
            </div>
            <!-- cacao end -->

            <!-- images start -->
            <div class="col-sm-4 portfolio-item">
                <div class="hover09  text-center">
                    <a href="http://images.tene.space" lang="en" alt="Images from journeys" title="Images from journeys"  class="portfolio-link" >
                        
                            <img id="img_images" lang="en" data-src="img/portfolio/photos.jpg" width=360 height=260 class="lazy img-responsive" alt="Images from journeys" title="Images from journeys">
                            <!-- <img  id="img_images" src="img/portfolio/photos.jpg" width=360 height=260 class="img-responsive" alt="Images from journeys" title="images from journeys"></div> -->
                       
                        <div class="caption carousel-caption">
                            <p lang="en">Travelpics</p>
                        </div>
                    </a>
                </div>
            </div>
            <!-- images end -->

            <!-- other_stuff start -->
            <div class="col-sm-4 portfolio-item">
                <div class="hover09  text-center">
                    <a href="#other_stuff" lang="en" class="portfolio-link" alt="Ohter projects" title="Many different ideas and concepts which unrealized yet">
                        
                            <img id="img_other_stuff" lang="en" data-src="img/portfolio/other_stuff.jpg" width=360 height=260 class="lazy img-responsive" alt="Ohter projects" title="Many different ideas and concepts which unrealized yet">
                            <!-- <img  id="img_other_stuff" src="img/portfolio/other_stuff.jpg" width=360 height=260 class="img-responsive" alt="Ohter projects" title="Many different ideas and concepts which unrealized yet"></div> -->
                        
                        <div class="caption carousel-caption">
                            <p lang="en">Other_stuff</p>
                        </div>
                    </a>

                </div>
            </div>

        </div>
    </div>
</section>

<!-- News Section -->
<section class="" id="news">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 lang="en">What's goin' on?</h2>
                <hr class="star-primary"></div>
        </div>
        <div class="row">

            <div class="news_block "> 
                <div class="modal-mod">
                    <div class = "bs-callout bs-callout-info" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>24/09/16</b>
                        &mdash; <span lang="en" data-lang-token="news7">Finally got one year indian business-visa. it means that i can do my projects much more seriously and confidently (i guess). Was already visited Auroville to get more ideas /inspirations about community structure and way of living. + had visited Aurospirul farm to find out the way of growing and producing spirulina and a price for Mother culture (culture medium) </span>
                    </div> 
                    <div class = "bs-callout bs-callout-warning" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>08/08/16</b>
                        &mdash; <span lang="en" data-lang-token="news6">Added some snaps from Bali in <a href="http://images.tene.space" alt="travel_pics" title="travel_pics" target="_blank">Travelography</a></span>
                    </div>  
                    <div class = "bs-callout bs-callout-info" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>08/08/16</b>
                        &mdash; <span lang="en" >Unfortunately Vimeo is blocked in Indonesia (and it could be also in other countries), so i switched to Jwplayer and self-hosted video-files for now</span>
                    </div>
                    <div class = "bs-callout bs-callout-info" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>02/08/16</b>
                        &mdash; <span lang="en" >Added photo with chocolog in CACAO & changed album covers in Travelography</span>
                    </div>
                    <div class = "bs-callout bs-callout-info" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>19/07/16</b>
                        &mdash; <span lang="en" >Project previews made like slideshow (for OpenSpace and Travelography)</span>
                    </div>
                    <div class = "bs-callout bs-callout-warning" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>19/07/16</b>
                        &mdash; <span lang="en" data-lang-token="news5">Added Map feature to <a href="http://images.tene.space" alt="travel_pics" title="travel_pics" target="_blank">Travelography</a> </span>
                    </div>
                    <div class = "bs-callout bs-callout-warning" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>15/07/16</b>
                        &mdash; <span lang="en" data-lang-token="news4">Hurrah! <b>55$</b> of <a href="https://www.generosity.com/community-fundraising/openspace-in-arambol-goa-india-2016-2017/" target="_blank" title="generosity" alt="generosity">donations</a>. first milestone is done </span>
                    </div>
                    <div class = "bs-callout bs-callout-success" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>30/06/16</b>
                        &mdash; <span lang="en">Russian version of whole site and video released!</span>
                    </div>
                    <div class = "bs-callout bs-callout-warning" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>18/06/16</b>
                        &mdash; <span lang="en" data-lang-token="news1">Thanks to our friend <a href="http://ibudni.ru/" target="_blank" title="Denis" alt="Denis">Denis</a> for his <b>hosting-support!</b></span>
                    </div>
                    <div class = "bs-callout bs-callout-success" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>18/06/16</b>
                        &mdash; <span lang="en" data-lang-token="news2">Main site started ! english version with responsive design</span>
                    </div>
                    <div class = "bs-callout bs-callout-info" >
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>14/06/16</b>
                        &mdash; <span lang="en" data-lang-token="news3"><a href="http://images.tene.space" alt="travel_pics" title="travel_pics" target="_blank">Gallery</a> with travel images started (in english version for now)</span>
                    </div>
                </div>
                <!-- <div class = "alert alert-warning">Warning ! Dont submit this.</div>
            <div class = "alert alert-danger">Error ! Change few things.</div>
            -->
            
            <ul class = "pager">
                <li class = "previous">
                    <a >&larr; Older</a>
                </li>
                <li class = "next  disabled">
                    <a >Newer &rarr;</a>
                </li>
            </ul>
            
        </div>

    </div>
</div>
</section>


<!-- Footer -->
<footer class="text-center">
<div class="footer-above">
<div class="container">
<div class="row">
<div class="footer-col col-md-12 ">
    <div class="col-md-1">
        <!--  -->
        <a href="mailto:monkey@tene.space?subject=[web-site]%20feedback" alt="monkey@tene.space" title="monkey@tene.space" target="_blank">
            <img src="img/23 email.png" title="email" alt="email" height ="30"></a>
    </div>
    <div class="col-md-1">
        <a href="skype:tene.space.monkey?chat" target="_blank">
            <img src="img/23 skype.png" title="skype: tene.space.monkey" alt="skype" height="35"></a>
    </div>
    <div class="col-md-1">
        <a href="http://telegram.me/tenespacemonkey" alt='@tenespacemonkey' target="_blank">
            <img src="img/23 telegram.png" title="@tenespacemonkey" alt="@tenespacemonkey" height="35"></a>
    </div>
    <div class="col-md-1">
        <a href="https://couchsurfing.com/people/tenebrarum" title="couchsurfing profile" alt="couchsurfing profile" target="_blank">
            <img src="img/cs_logo.png" title="couchsurfing" alt="couchsurfing" height="32"></a>
    </div>
</div>
</div>
</div>
</div>
<div class="footer-below">
<div class="container">
<div class="row">
<div class="col-lg-12" style="text-align: center;">
    <a target="_blank" href="http://www.wtfpl.net/" alt="Do What the Fuck You Want to Public License" title="Do What the Fuck You Want to Public License">
        <img
       src="img/wtfpl-badge.png"
       width="88" height="31" alt="WTFPL" title="Do What the Fuck You Want to Public License" />
    </a>
    <span class="pull-center">09/2016</span>
</div>
</div>
</div>
</div>
</footer>

<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) 
<div class="scroll-top page-scroll visible-xs visible-sm">
<a class="btn btn-primary" href="#page-top">
<i class="fa fa-chevron-up"></i>
</a>
</div> -->

<!-- Projects  -->
 
<?php include('donations.php'); ?>

<?php include('proj_openspace.php'); ?>

<?php include('proj_cacao.php'); ?>

<?php include('proj_other_stuff.php'); ?>

<!-- about -->
<?php include('about_brief.php'); ?>

<?php include('about_blah.php'); ?>

<?php include('footer_scripts.php'); ?>

<!-- Share42 widget  -->
  <div class="share42init" data-top1="70" lang="en" data-top2="70" data-margin="0" data-url="http://tene.space/monkey" data-title="BE THE CHANGE you wish to see in the world" data-image="http://tene.space/img/site_preview.jpg" data-description="fundraising for OpenSpace in Arambol (Goa), interesting Cacao experiments, pictures from travels and other un-mainstream ideas" data-zero-counter="0"></div>
<script type="text/javascript" src="js/share42.js"></script> 


<!-- flag counter -->
<div class="flag_counter">
<a href="http://s11.flagcounter.com/more/ICt">
<img src="http://s11.flagcounter.com/count2/ICt/bg_FFFFFF/txt_000000/border_CCCCCC/columns_1/maxflags_5/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0"></a>
</div>

</body>

</html>