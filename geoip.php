<?php 
echo json_encode(array('country_name'=>getenv(GEOIP_COUNTRY_NAME),'country_code'=>getenv(GEOIP_COUNTRY_CODE)));
    ?>