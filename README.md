<html>
	<head>
		<script src="lib/js/angular.js"></script>
		<script src="lib/js/route.js"></script>
		<script src="lib/js/jquery.js"></script>
		<script src="lib/js/bootstrap.js"></script>
		<script src="lib/js/myproject.js"></script>	
		<link rel="stylesheet" href="lib/css/bootstrap.css">
		<style>
         		#div1{
					color:white;
					border-radius:200px;
					background:linear-gradient(to left, pink, maroon, violet);
					-moz-transition: transform 8s;
				-webkit-transition: transform 8s;
				transition:transform 8s;
			
				
			}
			 #div1:hover{
				-ms-transform:rotateY(120deg);
				transform:rotateY(120deg);
			 }
			 .mypadding{
				padding:10px;
			 }
			footer{
				padding:10px;
				color: blue;
				background-color:skyblue;
				font-size:25px;
				text-align:center;
			}
		</style>
		<script>
			function testclick()
			{
				alert("To get further details kindly login");
			}
		
			function pageload()
			{
				alert("The page is being loaded");
			}
		</script>
	</head>
	<body onload = pageload()>
	<br>
		<div class="container" ng-app="myApp">
			<div class="row  text-center">
				<div class="col-sm-12 mypadding bg-success">
					<ul class="nav nav-pills text-center">
						<li class="active"><a href="#/">Home</a></li>
						<li><a href="#/user">User List</a></li>
					</ul>
					
				</div>
				
			</div>
		<br>
		<ng-view></ng-view>
			<br>
		<footer> Thank You </footer>
	</div>

	</body>

</html>
