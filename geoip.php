<?php 
$website_root_path=__DIR__;
require($website_root_path . '/geoip.inc');
$ip=$_SERVER['REMOTE_ADDR'];
$gi=geoip_open($website_root_path . '/GeoIP.dat',GEOIP_STANDARD);
echo geoip_country_code_by_addr($gi, $ip) . " ";
echo geoip_country_name_by_addr($gi, $ip);
geoip_close($gi);
//echo json_encode(array('country_name'=>getenv(GEOIP_COUNTRY_NAME),'country_code'=>getenv(GEOIP_COUNTRY_CODE)));
    ?>