<?php include("includes/config.php"); 
$about = 1;
include("app/gtheader.php");
?>
<div class="rws-jobdetailsheader">
    <div class="rws-jdhinner">
        <div class="container">
            <h1>About Us</h1>
        </div>
    </div>
</div>


<?php

    $query="SELECT * FROM ss_aboutus"; 
    $rs = $db->query($query);

    $rowlist = $rs->rows;
    $j=1; 

    foreach($rowlist as $key => $row) {
   
?>


<div class="rws-breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <a href="<?php echo $baseurl;?>">Home</a>
                <a href="javascript:void(0)"><span><i class="fa fa-angle-right" aria-hidden="true"></i></span> About Us</a>
            </div>
        </div>
    </div>
</div>

<div class="rws-content">
<div class="container">
<div class="row">
 <div class="col-lg-6">
 <a href="#">
    <img src="images/ship5.jpg" alt="" style="height: 350px; width:650px">
 </a>
 </div>
    <div class="col-lg-6"> 
        <p><?php echo $row["description"]; ?></p>
    </div>
    </div>
    </div>
</div>

<div>
    
    <a href="bymyvisa/index.php"> Buy My visa Test Visit</a>
</div>

 <?php } ?> 

<?php include("app/gtfooter.php"); ?>