	let domelems = getDOMElements();

	domelems.normaldoggy.addEventListener("click", playClick, false);
	domelems.hatdoggy.addEventListener("click", playClick, false);
	domelems.scarfdoggy.addEventListener("click", playClick, false);
	domelems.fcrowndoggy.addEventListener("click", playClick, false);

	function playShow(){
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
        let pointnum = userDetails.playtimes;

        //show post points
	    domelems.postnum.innerHTML = pointnum;

		showPlayPic(dogpicnum, pointnum);
	    });
	}

	function showPlayPic(dogpicnum, pointnum) {
			let dogpictureid = dogpicnum;
			let point = pointnum;
console.log("dogpictureid:" + dogpictureid);
console.log("point:" + point);
			
			if(( 10 <= point) && (point < 20)) {
				domelems.hatdoggy.src = "img/shop-2.png";
			} else if ((20 <= point) && (point < 30)) {
				domelems.hatdoggy.src = "img/shop-2.png";
				domelems.scarfdoggy.src = "img/shop-3.png";
			} else if ((30 <= point) && (point < 40)) {
				domelems.hatdoggy.src = "img/shop-2.png";
				domelems.scarfdoggy.src = "img/shop-3.png";
				domelems.fcrowndoggy.src = "img/shop-4.png";
			}
	}

	function playClick() {
console.log("test");
	}

	//get elements 
    function getDOMElements() {
        return {
          "postpoint": document.getElementById("points"),
          "postnum": document.getElementById("pointsnum"),
          "normaldoggy": document.getElementById("normaldog"),
          "hatdoggy": document.getElementById("hatdog"),
          "scarfdoggy": document.getElementById("scarfdog"),
          "fcrowndoggy": document.getElementById("fcrowndog")
        }
    }