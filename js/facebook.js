
		window.fbAsyncInit = function() {
          FB.init({
            appId      : '478818295571046',
            channelUrl : '//http://www.domovye.com/courtbuddy/channel.html',
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true  // parse XFBML
          });
          FB.Event.subscribe('auth.authResponseChange', function(response) {
            if (response.status === 'connected') {
              console.log("connected");
              testAPI();
            } else if (response.status === 'not_authorized') {
              FB.login();
            } else {
              FB.login();
            }
          });
          };


          (function(d){
           var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement('script'); js.id = id; js.async = true;
           js.src = "//connect.facebook.net/en_US/all.js";
           ref.parentNode.insertBefore(js, ref);
          }(document));


          function loginUser(){
          		FB.login(function(response){
          			if (response.status === 'connected') {
             			console.log("connected");
          				$('#signIn').removeClass("activePage");
          				$('#signUp').addClass("activePage");
          			}
          			else{
          				alert("sorry you cannot sign in with facebook, find another app to hack you BUM!")
          			}
          		})
          }


          function testAPI() {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
              console.log('Good to see you, ' + response.name + '.');
            });
          }