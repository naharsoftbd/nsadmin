<?php 
$minutesBeforeSessionExpire=1;
if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > ($minutesBeforeSessionExpire))) {
    session_unset();     // unset $_SESSION   
    session_destroy();   // destroy session data  
    header("Location: http://www.facebook.com", TRUE, 301);
    exit();
}
$_SESSION['LAST_ACTIVITY'] = time(); // update last activity
echo $_SESSION['LAST_ACTIVITY'];
?>