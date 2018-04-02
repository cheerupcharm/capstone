	function playShow(){
		console.log("Playworks");
		firebase.auth().onAuthStateChanged(function(user_) {
	    if (user_) {
	          playCheck();       
	      } else {
			   console.log("nouser");
	      } 
	    });
	};

	function playCheck(){
		//get a user who is logging in
	    let currentUser = firebase.auth().currentUser;

	    //get a userid
	    let userId = currentUser.uid 
	    let dbRefUserInfo = firebase.database().ref("users/" + userId);

	    dbRefUserInfo.on("value", function(snapshot) {
        let userDetails = snapshot.val();
        let dogpicnum = userDetails.dogpicture;
console.log("playdogpicnum: " + dogpicnum);
		showPlayPic(dogpicnum);
	    });
	}

	function showPlayPic(dogpicnum) {
			let dogpictureid = dogpicnum;
console.log("playdogPic:" + dogpictureid);
	}