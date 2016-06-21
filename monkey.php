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
// require($website_root_path . '/geoip.inc');
// $ip=$_SERVER['REMOTE_ADDR'];
// $gi=geoip_open($website_root_path . '/GeoIP.dat',GEOIP_STANDARD);
// echo geoip_country_code_by_addr($gi, $ip) . " ";
// echo geoip_country_name_by_addr($gi, $ip);
// geoip_close($gi);
//die();
?>
<!DOCTYPE html>
<html lang="en" debug="true">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" lang-switch="en" content="BE THE CHANGE you wish to see in the world">
    <meta name="author" content="tene.space.monkey">
    <meta property="og:image" content="http://tene.space/img/site_preview.jpg" />

    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1990 12:00:00 GMT" />

    <title lang="en">"BE THE CHANGE you wish to see in the world"&copy;Gandhiji</title>

    <?php include('header_styles.php'); ?>

    <?php include('header_scripts.php'); ?></head>

<body id="page-top" class="index">

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

                <!-- languages block 
                <form>
                    <div class="btn-group lang_buttons" data-toggle="buttons">
                        <label class="btn btn-default ">
                            <span class="lang_switch rus"></span>
                            <input name="lang" value="rus" type="radio"><span class="lang_txt">RUS</span></label>
                        <label class="btn btn-default active">
                            <span class="lang_switch eng"></span>
                            <input name="lang" value="eng" type="radio"><span class="lang_txt">ENG</span></label>

                    </div>
                </form>
                -->
            </div>

            <!-- donaton block with ribbon -->
            <div class="navbar-middle" >
                <a href="#donation"  id="donation_link" class="portfolio-link" >
                    <div class="donate_bg" alt="donate" title="Yeeeaaaahhhh"></div>
                </a>
                <div class="ribbon" title="Yeeeaaaahhhh"> <i><span>
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
                        About <b class="caret"></b>
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
                <li class="page-scroll">
                    <a href="#feedback" id="link_feedback" lang="en">Feedback</a>
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
                    <h1 id="logo_moto">be the change</h1>
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
                <h2>Projects</h2>
                <hr class="star-primary"></div>
        </div>
        <div class="row">

            <!-- openspace start -->
            <div class="col-sm-4 portfolio-item">
                <div class="hover09  text-center">
                    <a href="#OpenSpace" class="portfolio-link" title="OpenSpace in arambol, Goa for season '16-'17" alt="OpenSpace in arambol, Goa for season '16-'17">
                        <div class="fader">
                            <img id="img_openspace_pix" src="img/portfolio/openspace_pix_32.png" title="OpenSpace in arambol, Goa for season '16-'17" width=360 height=260 class="img-responsive" alt="OpenSpace project">
                            <img id="img_openspace" src="img/portfolio/openspace.png" width=360 height=260 class="img-responsive" title="OpenSpace in arambol, Goa for season '16-'17" alt="OpenSpace project"></div>
                        <div class="caption carousel-caption">
                            <p>OpenSpace</p>
                        </div>
                    </a>

                </div>
            </div>
            <!-- openspace end -->

            <!-- cacao start -->
            <div class="col-sm-4 portfolio-item">
                <div class="hover09  text-center">
                    <a href="#cacao" id="cacao_modal" class="portfolio-link" title="Experiments with pure cacao from pods" alt="Cacao project" >
                        <div class="fader">
                            <img id="img_cacao_pix" src="img/portfolio/cacao_pix_32.png" width=360 height=260 class="img-responsive" alt="Cacao project" title="Experiments with pure cacao from pods">
                            <img  id="img_cacao" src="img/portfolio/cacao.png" width=360 height=260 class="img-responsive" alt="Cacao project" title="Experiments with pure cacao from pods"></div>
                        <div class="caption carousel-caption">
                            <p>Cacao</p>
                        </div>
                    </a>

                </div>
            </div>
            <!-- cacao end -->

            <!-- images start -->
            <div class="col-sm-4 portfolio-item">
                <div class="hover09  text-center">
                    <a href="http://images.tene.space" alt="Images from journeys" title="images from journeys"  class="portfolio-link" >
                        <div class="fader">
                            <img id="img_images_pix" src="img/portfolio/photos_pix_32.png" width=360 height=260 class="img-responsive" alt="Images from journeys" title="images from journeys">
                            <img  id="img_images" src="img/portfolio/photos.png" width=360 height=260 class="img-responsive" alt="Images from journeys" title="images from journeys"></div>
                        <div class="caption carousel-caption">
                            <p>Images</p>
                        </div>
                    </a>
                </div>
            </div>
            <!-- images end -->

            <!-- other_stuff start -->
            <div class="col-sm-4 portfolio-item">
                <div class="hover09  text-center">
                    <a href="#other_stuff" class="portfolio-link" alt="Ohter projects" title="Many different ideas and concepts which unrealized yet">
                        <div class="fader">
                            <img id="img_other_stuff_pix" src="img/portfolio/other_stuff_pix_32.png" width=360 height=260 class="img-responsive" alt="Ohter projects" title="Many different ideas and concepts which unrealized yet">
                            <img  id="img_other_stuff" src="img/portfolio/other_stuff.png" width=360 height=260 class="img-responsive" alt="Ohter projects" title="Many different ideas and concepts which unrealized yet"></div>
                        <div class="caption carousel-caption">
                            <p>Other_stuff</p>
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
                <h2>What's goin' on?</h2>
                <hr class="star-primary"></div>
        </div>
        <div class="row">

            <div class="news_block ">
                <div class="modal-mod">
                    
                    <div class = "bs-callout bs-callout-warning">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>18/06/16</b>
                        &mdash; Thanks to our friend <a href="http://gogetshop.ru/" target="_blank" title="Denis" alt="Denis">Denis</a> for his <b>hosting-support!</b>
                    </div>
                    <div class = "bs-callout bs-callout-success">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>18/06/16</b>
                        &mdash; Main site started ! english versioin with responsive design
                    </div>
                    <div class = "bs-callout bs-callout-info">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <b>14/06/16</b>
                        &mdash; Gallery with travel images started (in english version for now)
                    </div>
                </div>
                <!-- <div class = "alert alert-warning">Warning ! Dont submit this.</div>
            <div class = "alert alert-danger">Error ! Change few things.</div>
            -->
            <!--
            <ul class = "pager">
                <li class = "previous">
                    <a >&larr; Older</a>
                </li>
                <li class = "next  disabled">
                    <a >Newer &rarr;</a>
                </li>
            </ul>
            -->
        </div>

    </div>
</div>
</section>

<!-- Contact Section -->
<section id="feedback">
<div class="container">
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2>Contact Me</h2>
            <hr class="star-primary"></div>
    </div>
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2" style="height: 482px;">
           
        <!-- reformal.ru russian version 
                    <iframe style="width: 100%; height: 100%; border: 0;" frameborder="0" src="http://reformal.ru/widget/974252"></iframe> 

                    <div class="mobile_contact_ru">
        <a href="http://feedbacks.tene.space" onclick="Reformal.widgetOpen();return false;" onmouseover="Reformal.widgetPreload();">Oтзывы и предложения</a><script type="text/javascript">
            var reformalOptions = {
                project_id: 974252,
                show_tab: false,
                project_host: "feedbacks.tene.space"
            };
            
            (function() {
                var script = document.createElement('script');
                script.type = 'text/javascript'; script.async = true;
                script.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'media.reformal.ru/widgets/v3/reformal.js';
                document.getElementsByTagName('head')[0].appendChild(script);
            })();
        </script><noscript><a href="http://reformal.ru"><img src="http://media.reformal.ru/reformal.png" /></a><a href="http://feedbacks.tene.space">Отзывы и предложения</a></noscript>
    </div> -->
    
    <!-- reformal.ru english version -->
<script type="text/javascript">
reformal_wdg_w    = "713";
reformal_wdg_h    = "460";
reformal_wdg_domain    = "spacemonkey";
reformal_wdg_mode    = 5;
reformal_wdg_title   = "BE THE CHANGE you wish to see in the world";
reformal_wdg_ltitle  = "Got ideas? Share!...";
reformal_wdg_lfont   = "Verdana, Geneva, sans-serif";
reformal_wdg_lsize   = "12px";
reformal_wdg_color   = "#0033ff";
reformal_wdg_bcolor  = "#516683";
reformal_wdg_tcolor  = "#FFFFFF";
reformal_wdg_align   = "";
reformal_wdg_waction = 0;
reformal_wdg_vcolor  = "#9FCE54";
reformal_wdg_cmline  = "#E0E0E0";
reformal_wdg_glcolor  = "#105895";
reformal_wdg_tbcolor  = "#FFFFFF";
</script>

<div class="poxupih_center"><script type="text/javascript" language="JavaScript" src="http://idea.informer.com/tabn3v4.js?domain=spacemonkey"></script><div class="drsdtf">Powered by <a href="http://idea.informer.com" arget="_blank" title="Idea.informer.com">Idea.informer.com</a></div></div>
        <!-- <div class="drsdtf">
        Powered by
        <a href="http://idea.informer.com" arget="_blank" title="Idea.informer.com">Idea.informer.com</a>
    </div>
    -->
</div>

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
        <a href="mailto:monkey@tene.space?subject=[web-site]%20feedback" alt="monkey@tene.space" title="monkey@tene.space">
            <img src="img/23 email.png" title="email" alt="email" height ="40"></a>
    </div>
    <div class="col-md-1">
        <a href="skype:tene.space.monkey?chat">
            <img src="img/23 skype.png" title="skype: tene.space.monkey" alt="skype" height="40"></a>
    </div>
    <div class="col-md-1">
        <a href="https://couchsurfing.com/people/tenebrarum" title="couchsurfing profile" alt="couchsurfing profile" target="_blank">
            <img src="img/cs_logo.png" title="couchsurfing" alt="couchsurfing" height="35"></a>
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
    <span class="pull-center">06 / 2016</span>
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
<div class="share42init" data-top1="70" data-top2="70" data-margin="-30" data-url="http://tene.space/monkey" data-title="BE THE CHANGE you wish to see in the world" data-image="http://tene.space/img/site_preview.jpg" data-description="BE THE CHANGE you wish to see in the world" data-zero-counter="0"></div>
<script type="text/javascript" src="js/share42.js"></script>

<!-- flag counter -->
<div class="flag_counter">
<a href="http://s11.flagcounter.com/more/ICt">
<img src="http://s11.flagcounter.com/count2/ICt/bg_FFFFFF/txt_000000/border_CCCCCC/columns_1/maxflags_5/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0"></a>
</div>

</body>

</html>