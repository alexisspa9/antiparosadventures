 function initMap() {
      	//marker icons
      	var image = 'marker.svg';
        var boat = 'boat.svg';
      	//first map
        var first = new google.maps.Map(document.getElementById('first'), {
          zoom: 11,
          center: {lat: 37, lng: 25.099369}
        });
        //first map path
        var firstPlanCoordinates = [
          {lat: 37.037115, lng: 25.100133},
          {lat: 37.029989, lng: 25.091721},
          {lat: 36.994801, lng:  25.095464},
          {lat: 36.994011, lng:  25.103676},
           {lat: 36.979944, lng: 25.114460},
            {lat: 36.978364, lng: 25.113372},
            {lat:36.938044, lng: 25.072215},
            {lat:36.956388, lng: 25.046590},
            {lat:36.962802, lng: 25.046862},
            {lat:36.974688, lng: 25.020842},
            {lat:36.937990, lng: 25.069215},
            {lat:36.937033, lng: 25.076327},
            {lat:36.949192, lng: 25.076094},
            {lat:36.947269, lng: 25.072911},
            {lat: 37.037115, lng: 25.100133}
        ];
        var firstPath = new google.maps.Polyline({
          path: firstPlanCoordinates,
          geodesic: true,
          strokeColor: 'blue',
          strokeOpacity: 0.5,
          strokeWeight: 3
        });
        firstPath.setMap(first);
        //first map marker with infobox
            var firstlocations = [
      ['Blue Lagoon', 36.978364, 25.113372, 4],
      ['Antiparos Sea Caves', 36.962802, 25.046862, 3],
      ['Despotiko Island', 36.974688, 25.020842, 2],
      ['Faneromeni', 36.947269, 25.072911, 1]
    ];
        var firstinfowindow = new google.maps.InfoWindow();
		var firstmarker, f;

    	for (f = 0; f < firstlocations.length; f++) { 
      	firstmarker = new google.maps.Marker({
        position: new google.maps.LatLng(firstlocations[f][1], firstlocations[f][2]),
        map: first,
        icon: image
      	});

      	google.maps.event.addListener(firstmarker, 'click', (function(firstmarker, f) {
        return function() {
          firstinfowindow.setContent(firstlocations[f][0]);
          firstinfowindow.open(first, firstmarker);
        }
      	})(firstmarker, f));
    	}
    	//first map departure marker
        var afetiria = {lat: 37.037115, lng: 25.100133};
        var afetiriamarker = new google.maps.Marker({
		position: afetiria,
		map: first,
		title: 'Departure',
		icon: boat
		});
        
        // //second map
        // var second = new google.maps.Map(document.getElementById('second'), {
        //   zoom: 11,
        //   center: {lat: 37, lng: 25.099369}
        // });
        //second map path
      //   var secondPlanCoordinates = [
      //     {lat: 37.037115, lng: 25.100133},
      //     {lat: 37.024310, lng: 25.089523},
      //    {lat: 36.994371, lng: 25.094646},
      //    {lat: 36.994288, lng: 25.098607},
 			// {lat:36.993873, lng: 25.102462},
 			// {lat:36.979550, lng: 25.114077},
 			// {lat:36.975825, lng: 25.176197},
 			// {lat:36.983636, lng: 25.145127},
 			// {lat:37.006423, lng: 25.087068},
 			// {lat: 37.037115, lng: 25.100133}
      //   ];
        // var secondPath = new google.maps.Polyline({
        //   path: secondPlanCoordinates,
        //   geodesic: true,
        //   strokeColor: 'blue',
        //   strokeOpacity: 0.5,
        //   strokeWeight: 3
        // });

        // secondPath.setMap(second);
        //second map departure marker
    //     var afetiriadyomarker = new google.maps.Marker({
		// position: afetiria,
		// map: second,
		// title: 'Departure',
		// icon: boat
		// });
		//second map marker with infobox
    //         var secondlocations = [
    //   ['Blue Lagoon', 36.978364, 25.113372, 4],
    //   ['Ag.Nikolaos', 36.994288, 25.098607, 3],
    //   ['Pirates Cave', 36.975825, 25.176197, 2],
    //   ['Makria Miti', 36.983636, 25.145127, 1]
    // ];
    //     var secondinfowindow = new google.maps.InfoWindow();
		// var secondmarker, s;

    	// for (s = 0; s < secondlocations.length; s++) { 
      // 	secondmarker = new google.maps.Marker({
      //   position: new google.maps.LatLng(secondlocations[s][1], secondlocations[s][2]),
      //   map: second,
      //   icon: image
      // 	});

      // 	google.maps.event.addListener(secondmarker, 'click', (function(secondmarker, s) {
      //   return function() {
      //     secondinfowindow.setContent(secondlocations[s][0]);
      //     secondinfowindow.open(second, secondmarker);
      //   }
      // 	})(secondmarker, s));
    	// }
      	//third map
        // var third = new google.maps.Map(document.getElementById('third'), {
        //   zoom: 9,
        //   center: {lat: 36.890984, lng: 25.322435}
        // });
        //third map path
        // var thirdPlanCoordinates = [
        //   {lat: 37.031645, lng: 25.258527},
        //   {lat: 36.904042, lng: 25.434442},
        //   {lat: 36.927230, lng: 25.603758},
        //   {lat: 36.909721, lng: 25.592782}, 
        //   {lat:36.868568, lng: 25.536623}, 
        //   {lat:36.902213, lng: 25.528761},
        //   {lat:36.874400, lng: 25.486086},
        //   {lat:36.864674, lng: 25.507518},
        //   {lat:36.867026, lng: 25.477780},
        //   {lat:36.826690, lng: 25.487335},
        //   {lat:36.815484, lng: 25.429750},
        //   {lat:36.822667, lng: 25.417143},
        //   {lat: 37.031645, lng: 25.258527}

        // ];
        // var thirdPath = new google.maps.Polyline({
        //   path: thirdPlanCoordinates,
        //   geodesic: true,
        //   strokeColor: 'blue',
        //   strokeOpacity: 0.5,
        //   strokeWeight: 3
        // });
        //  thirdPath.setMap(third);
        //third map departure marker
    //     var afetiriatria =  {lat: 37.031645, lng: 25.258527};
    //     var afetiriatriamarker = new google.maps.Marker({
		// position: afetiriatria,
		// map: third,
		// title: 'Departure',
		// icon: boat
		// });
		//third map markers with infobox
    //         var thirdlocations = [
    //   ['Koufonisi', 36.927230, 25.603758, 6],
    //   ['Mikro Koufonisi', 36.909721, 25.592782, 5],
    //   ['Sxoinousa', 36.868568, 25.536623, 4],
    //   ['Sxoinousa Port', 36.864674, 25.507518, 3],
    //   ['Iraklia',36.867026, 25.477780, 2],
    //   ['Shipwreck', 36.822667, 25.417143, 1]
    // ];
    //     var thirdinfowindow = new google.maps.InfoWindow();
		// var thirdmarker, t;

    	// for (t = 0; t < thirdlocations.length; t++) { 
      // 	thirdmarker = new google.maps.Marker({
      //   position: new google.maps.LatLng(thirdlocations[t][1], thirdlocations[t][2]),
      //   map: third,
      //   icon: image
      // 	});

      // 	google.maps.event.addListener(thirdmarker, 'click', (function(thirdmarker, t) {
      //   return function() {
      //     thirdinfowindow.setContent(thirdlocations[t][0]);
      //     thirdinfowindow.open(third, thirdmarker);
      //   }
      // 	})(thirdmarker, t));
    	// }
      //   //fourth map
      //   var fourth = new google.maps.Map(document.getElementById('fourth'), {
      //     zoom: 8,
      //     center: {lat: 37.037595, lng: 25.099369}
      //   });

      };