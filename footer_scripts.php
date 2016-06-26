    <?php 

    $prioritize = array(        
        'js/jquery.js',
        'js/bootstrap.min.js', 
        'js/imagelightbox.js',
         "js/rangy/lib/rangy-core.js",
    "js/rangy/lib/rangy-classapplier.js",
    "js/rangy/lib/rangy-textrange.js",
    'js/min/jquery-progresspiesvg-min.js',
    "js/min/jquery-progresspiesvg-controlIcons-min.js",
     "js/jquery.lazy.min.js",
    "js/freelancer.js"
        //'js/cloudinary_js-master/js/jquery.cloudinary.js'

    );
    $exclude = array(
        //'js/jquery.js', 
        //'js/freelancer.js'
        );
    ?>
 
 <script type="text/javascript" src="<?php $minified->merge( 'js/packed.min.js', 'js', 'js', $exclude, $prioritize ); ?>"></script>

  <!-- <script type="text/javascript" src="js/min/jquery-progresspiesvg-min.js"></script>
    <script type="text/javascript" src="js/min/jquery-progresspiesvg-controlIcons-min.js"></script>  
    <script src="js/freelancer.js"></script> -->
    <!-- jQuery 
    <script src="js/jquery.js"></script>                    

    <!-- Bootstrap Core JavaScript 
    <script src="js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript 
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/classie.js"></script>
    <script src="js/cbpAnimatedHeader.js"></script>

    <!-- Contact Form JavaScript 
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!--<script src="js/responsiveImg.js"></script>
    <script src="js/jquery.lettering.js"></script>
    <script src="js/jquery.animate-colors.js"></script>
    <script src="js/jquery.balloon.js"></script>
    <script src="js/imagelightbox.js"></script>
    
    <!-- Add mousewheel plugin (this is optional) 
    <script type="text/javascript" src="js/jquery.mousewheel-3.0.6.pack.js"></script>

            
    <script type="text/javascript" src="js/leaflet.js"></script>

    <script src="js/froogaloop2.min.js"></script>
<script type="text/javascript" src="js/footable_old.js"></script> 
    <script type="text/javascript" src="js/jquery.tablesorter.js"></script>

    <!-- Custom Theme JavaScript 
    <script src="js/freelancer.js"></script>
    -->