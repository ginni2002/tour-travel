o<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Title Page-->
    <title>BOOKING</title>

    <!-- Icons font CSS-->
    <link rel="stylesheet" href="style.css" />
    <link
      href="vendor/mdi-font/css/material-design-iconic-font.min.css"
      rel="stylesheet"
      media="all"
    />
    <link
      href="vendor/font-awesome-4.7/css/font-awesome.min.css"
      rel="stylesheet"
      media="all"
    />

    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
      rel="stylesheet"
    />

    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all" />
    <link
      href="vendor/datepicker/daterangepicker.css"
      rel="stylesheet"
      media="all"
    />

    <link href="css01/main.css" rel="stylesheet" media="all" />
  </head>

  <body>
    <!-- navbar -->
  <nav class="MO-top-nav" style = "background-color:red;">
      <div class="MO-top-nav-container">
        <a href="index.html" id="MOid-top-nav-logo">LaGh-Travels</a>
        <div class="MO-top-nav-toggle" id="MOid-top-nav-mobile">
          <span class="MO-top-nav-toggle-bar"></span>
          <span class="MO-top-nav-toggle-bar"></span>
          <span class="MO-top-nav-toggle-bar"></span>
        </div>
        <ul class="MO-top-nav-ul">
          <li class="MO-top-nav-li">
            <a
              href="index.html"
              class="MO-top-nav-ul-li-a"
              id="MOid-top-nav-ul-li-home"
              >Home</a
            >
          </li>
          <li class="MO-top-nav-li">
            <a
              href="aboutUs.html"
              class="MO-top-nav-ul-li-a"
              id="MOid-top-nav-ul-li-about"
              >About Us</a
            >
          </li>
          <li class="MO-top-nav-li">
            <a
              href="services.html"
              class="MO-top-nav-ul-li-a"
              id="MOid-top-nav-ul-li-services"
              >Services</a
            >
          </li>
          <li class="MO-top-nav-li-btn">
            <a href="login.php" class="MO-btn" id="MOid-top-nav-ul-li-btn-signup"
              >Login</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- navbar end ************ -->
    <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo MO-block-signUp" style = "background-color:#eee">
      <div class="wrapper wrapper--w960">
        <div class="card card-2">
          <div class="card-heading"></div>
          <div class="card-body">
            <h2 class="title">BOOK NOW</h2>
            <form  action = "/Main Web Proj/bookLogin.php" method="post">
       
              <div class="input-group">
              <input
                  class="input--style-2"
                  type="text"
                  placeholder="Enter your Name"
                  name="nameOfUser"
                  required
                />
              </div>
              <div class="input-group">
              <input
                  class="input--style-2"
                  type="text"
                  placeholder="Package Type"
                  name="packageName"
                required />
              </div>
              <select name = "price">
                <option value = "">Select Price</option>
                <option value = "5000">5000</option>
                <option value = "6500">6500</option>
                <option value = "9500">9500</option>
</select>
              <div class="p-t-30">
                <button class="btn btn--radius btn--green MO-btn-signup" type="submit">
                  BOOK
                </button>
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>

    <?php
//get post request

$MO_username = '';
$MO_name = '';
$MO_packageName = '';
$MO_price =0;
$servername = "localhost";
$username = "root";
$password = "";
$database = "booking"; //selecting this database
$database1 = "girimaindb";
$result = '';
$count = 0;
$row ='';

//creating a connection with mysql:
$con = mysqli_connect($servername,$username,$password,$database);
$con1 = mysqli_connect($servername,$username,$password,$database1);
if($_SERVER['REQUEST_METHOD'] == 'POST'){
  

$MO_name = $_POST['nameOfUser'];
$MO_packageName  =$_POST['packageName'];
$MO_price = $_POST['price'];
$sqlCreateDb = "SELECT * FROM `information`"; // These commands can be changed,for eg we are inserting now
$result = mysqli_query($con1 , $sqlCreateDb);
$count = mysqli_num_rows($result);
if($count>0){
    while($row = mysqli_fetch_assoc($result)){
        $MO_username  =$row['Username'];  //last entered username

}

    }
 
    
    $sqlCreateDb = "INSERT INTO `booking info` (`Name`, `Price`, `PackageName`, `Username`) VALUES ('$MO_name','$MO_price', '$MO_packageName', '$MO_username')";
$result = mysqli_query($con,$sqlCreateDb);

if($result){
    echo '<center style = "position:absolute; left:50%;top:20%;transform:translate(-50%,-50%)"><h3>Package Booked!!</h3></center>';
}

}










?>
 <!-- Footer -->
 <div class="MO-footer-container">
      <div class="MO-footer-links">
        <div class="MO-footer-link-wrapper">
          <div class="MO-footer-link-items">
            <h2>About Us</h2>
            <a href="">How it works</a>
            <a href="">Testimonials</a>
            <a href="">Careers</a>
            <a href="">Terms of Service</a>
          </div>
          <div class="MO-footer-link-items">
            <h2>Info 1</h2>
            <a href="">Lorem, ipsum.</a>
            <a href="">Lorem, ipsum dolor.</a>
            <a href="">Lorem ipsum dolor sit.</a>
            <a href="">Lorem, ipsum. </a>
          </div>
        </div>
        <div class="MO-footer-link-wrapper">
          <div class="MO-footer-link-items">
            <h2>Info 2</h2>
            <a href="">Lorem ipsum dolor sit.</a>
            <a href="">Lorem, ipsum dolor.</a>
            <a href="">Lorem, ipsum.</a>
            <a href="">Lorem, ipsum dolor. </a>
          </div>
          <div class="MO-footer-link-items">
            <h2>Info 3</h2>
            <a href="">Lorem, ipsu </a>
            <a href="">Lorem, ipsum dolor.</a>
            <a href="">Lorem, ipsum dol.</a>
            <a href=""> Lorem, ipsu.</a>
          </div>
        </div>
      </div>
      <section class="MO-socialmedia">
        <div class="MO-socialmedia-wrap">
          <div class="MO-footer-logo">
            <a href="#" id="MOid-footer-logo">LaGh-Travels</a>
          </div>
          <p class="website-rights">
            ©️ LaGh-Travels 2022. All rights reserved
          </p>
          <div class="social-icons">
            <a href="/" class="social-icon-link"
              ><i class="fa fa-facebook-square"></i
            ></a>
            <a href="/" class="social-icon-link"
              ><i class="fa fa-instagram"></i
            ></a>
            <a href="/" class="social-icon-link"
              ><i class="fa fa-twitter-square"></i
            ></a>
            <a href="/" class="social-icon-link"
              ><i class="fa fa-youtube-play"></i
            ></a>
            <a href="/" class="social-icon-link"
              ><i class="fa fa-cc-visa"></i
            ></a>
          </div>
        </div>
      </section>
    </div>


    <script src="vendor/jquery/jquery.min.js"></script>

    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>

    <script src="js01/global.js"></script>
    <script src="script.js"></script>
  </body>
</html>
