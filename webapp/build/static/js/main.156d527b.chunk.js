(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),s=a.n(r),i=(a(78),a(79),a(80),a(67)),c=a(28),l=a(20),u=a(21),p=a(25),h=a(22),m=a(27),d=a(26),g=a(29),f=a.n(g),y=a(39),b="http://localhost:3001",w=a(46),v=a.n(w);function O(e,t){return k.apply(this,arguments)}function k(){return(k=Object(y.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="locations/getnearbyfood/latlong/"+t+","+a,e.next=3,v.a.get(n,{baseURL:b,headers:{"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(y.a)(f.a.mark((function e(t,a,n){var o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="locations/nearbycusine/cusine/"+t+"/latlong/"+a+","+n,e.next=3,v.a.get(o,{baseURL:b,headers:{"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={lat:1.352,lng:103.82,map:void 0,markers:[],geocoder:void 0,proximityRange:a.props.proximityRange||50},a.locationInput=o.a.createRef(),a.mapView=o.a.createRef(),a.changeProximity=a.changeProximity.bind(Object(m.a)(a)),a.onGeocodeSuccess=a.onGeocodeSuccess.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(window.initMap=function(){e.onGMapsReady()},void 0===window.google||void 0===window.google.maps){var t="".concat("https://maps.googleapis.com/maps/api/js","?key=").concat("AIzaSyB4satK4-ltTLZFf_HxR5-AABSIEYRxxiU","&libraries=places&region=SG&callback=initMap"),a=document.createElement("script");a.src=t,a.async=!0,document.body.appendChild(a)}else this.onGMapsReady()}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;e.userSearchQuery!=this.props.userSearchQuery&&(""===this.props.userSearchQuery?this.retrieveNearbyFoodPlaces(this.state.lat,this.state.lng):function(e,t,a){return j.apply(this,arguments)}(this.props.userSearchQuery,this.state.lat,this.state.lng).then((function(e){var t=n.state.markers;t.forEach((function(e){e.setMap(null)})),e.data.results.forEach((function(e){var a=new window.google.maps.InfoWindow({content:e.name}),o=new window.google.maps.Marker({map:n.state.map,animation:window.google.maps.Animation.DROP,position:e.geometry.location,title:e.name});o.addListener("click",(function(){a.open(o.getMap(),o)})),t.push(o)})),n.setState({markers:t,nearbyFoodPlaces:e.data.results},(function(){n.props.onNearbyFoodPlacesChangeListener(e.data.results)}))})))}},{key:"render",value:function(){return o.a.createElement("div",{className:"mapContainer"},o.a.createElement("div",{ref:this.mapView,className:"map"}))}},{key:"onGMapsReady",value:function(){var e=this,t=new window.google.maps.LatLng(this.state.lat,this.state.lng),a=new window.google.maps.Map(this.mapView.current,{center:t,zoom:12,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1}),n=new window.google.maps.Geocoder,o=new window.google.maps.places.Autocomplete(this.locationInput.current,{componentRestrictions:{country:"sg"}});o.setFields(["address_components","geometry","types"]),o.bindTo("bounds",a),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){return e.onGeocodeSuccess(t)})):console.log("Geolocation is not supported by this browser."),this.setState({map:a,geocoder:n})}},{key:"changeLocation",value:function(e){e.geometry&&(e.geometry.viewport?this.state.map.fitBounds(e.geometry.viewport):(this.state.map.setCenter(e.geometry.location),this.state.map.setZoom(17)),this.state.marker.setPosition(e.geometry.location),this.state.markerRadius.setCenter(e.geometry.location),this.geocode(e))}},{key:"geocode",value:function(e){if("postal_code"===e.types[0])this.reverseGeocode(e.geometry.location);else{var t=new Map;t.set("street_number",""),t.set("route",""),t.set("postal_code",""),t.set("premise",""),t.set("establishment",""),t.set("point_of_interest","");for(var a=e.address_components,n=0;n<a.length;n++){var o=a[n].types;t.has(o[0])&&t.set(o[0],a[n].long_name)}""===t.get("route")?this.reverseGeocode(e.geometry.location):this.onLocationChange(t,e.geometry.location)}}},{key:"reverseGeocode",value:function(e){var t=this;this.state.geocoder.geocode({location:e},(function(a,n){if("OK"===n){var o=new Map;o.set("street_number",""),o.set("route",""),o.set("postal_code",""),o.set("premise",""),o.set("establishment",""),o.set("point_of_interest","");for(var r=0;r<a.length;r++)for(var s=a[r].address_components,i=0;i<s.length;i++){var c=s[i],l=c.types[0];o.has(l)&&""===o.get(l)&&o.set(l,c.long_name)}t.onLocationChange(o,e)}}))}},{key:"changeProximity",value:function(e){this.setState({proximityRange:e.target.value}),this.state.markerRadius.setRadius(parseInt(e.target.value)),this.onProximityChange(parseInt(e.target.value))}},{key:"onLocationChange",value:function(e,t){this.props.onLocationChange&&this.props.onLocationChange(e,t)}},{key:"onProximityChange",value:function(e){this.props.onProximityChange&&this.props.onProximityChange(e)}},{key:"onGeocodeSuccess",value:function(e){console.log(e);new window.google.maps.LatLng(e.coords.latitude,e.coords.longitude);this.retrieveNearbyFoodPlaces(e.coords.latitude,e.coords.longitude)}},{key:"retrieveNearbyFoodPlaces",value:function(){var e=Object(y.a)(f.a.mark((function e(t,a){var n,o,r=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,a);case 2:n=e.sent,(o=this.state.markers).forEach((function(e){e.setMap(null)})),n.data.results.forEach((function(e){var t=new window.google.maps.InfoWindow({content:e.name}),a=new window.google.maps.Marker({map:r.state.map,animation:window.google.maps.Animation.DROP,position:e.geometry.location,title:e.name});a.addListener("click",(function(){t.open(a.getMap(),a)})),o.push(a)})),this.setState({lat:t,lng:a,markers:o,nearbyFoodPlaces:n.data.results},(function(){r.props.onNearbyFoodPlacesChangeListener(n.data.results)}));case 7:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),t}(o.a.Component),C=a(154),P=a(146),S=a(144),L=function(e){function t(e){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.nearbyFoodPlace;return o.a.createElement("div",{className:"estabContainer"},o.a.createElement("h3",{className:"estabName"},e.name),o.a.createElement("p",{className:"estabRating"},e.rating.toFixed(2)," ",o.a.createElement(S.a,{style:{fontSize:14,color:"orange"}},"star")))}}]),t}(o.a.Component),F=function(e){function t(e){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.nearbyFoodPlaces?o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,{className:"listContainer"},this.props.nearbyFoodPlaces.map((function(e){return o.a.createElement(L,{nearbyFoodPlace:e})})))):o.a.createElement(o.a.Fragment,null)}}]),t}(o.a.Component),x=a(69),R=a(40),N=a(147),M=a(30),_=a(155),G=a(148),I=a(157),U=(a(150),a(149)),D=(a(63),a(64),a(153)),B=a(65),A=a.n(B),T=a(45),Q=a(151),V=a(152),W=a(62),z=a.n(W),K=a(156);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Z=Object(N.a)((function(e){return{list:{width:250},fullList:{width:"auto"},search:Object(R.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(M.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(M.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputInput:Object(R.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}}));function H(e){var t,a=Z(),n=o.a.useState({top:!1,left:!1,bottom:!1,right:!1}),r=Object(x.a)(n,2),s=r[0],i=r[1],c=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},s,Object(R.a)({},e,t)))}};return o.a.createElement("div",null,o.a.createElement(Q.a,{position:"static",class:"appBar"},o.a.createElement(V.a,{class:"toolBar"},o.a.createElement(D.a,{mx:"2rem",edge:"start",color:"white","aria-label":"Find Food for me"},o.a.createElement(A.a,{onClick:c("left",!0),style:{color:"white",marginLeft:15}}),o.a.createElement(T.a,{class:"whiteText"},"Find Fud 4 Me")),o.a.createElement(K.a,{style:{marginLeft:15},placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onChange:function(t){return e.onUserSearchListener(t.target.value)}}))),o.a.createElement(_.a,{open:s.left,onClose:c("left",!1)},(t="left",o.a.createElement("div",{className:a.list,role:"presentation",onClick:c(t,!1),onKeyDown:c(t,!1)},o.a.createElement(G.a,null,["Favorite"].map((function(e,t){return o.a.createElement(I.a,{button:!0,key:e},o.a.createElement(z.a,{style:{marginRight:10}}),o.a.createElement(U.a,{primary:e}))})))))))}var Y=a(66),$=a.n(Y),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).showList=function(){console.log("setted"),a.setState({showList:!a.state.showList})},a.state={nearbyFoodPlaces:[],userSearch:"",showList:!1},a.onNearbyFoodPlacesChange=a.onNearbyFoodPlacesChange.bind(Object(m.a)(a)),a.onUserSearch=a.onUserSearch.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"AppContainer"},o.a.createElement(H,{onUserSearchListener:this.onUserSearch}),this.state.showList?o.a.createElement(F,{nearbyFoodPlaces:this.state.nearbyFoodPlaces}):null,o.a.createElement(E,{onNearbyFoodPlacesChangeListener:this.onNearbyFoodPlacesChange,userSearchQuery:this.state.userSearch}),o.a.createElement("div",{class:"bottomRightBtn"},o.a.createElement(C.a,{onClick:this.showList,style:{margin:5},color:"primary","aria-label":"add"},o.a.createElement($.a,null))))}},{key:"onNearbyFoodPlacesChange",value:function(e){this.setState({nearbyFoodPlaces:e})}},{key:"onUserSearch",value:function(e){this.setState({userSearch:e})}}]),t}(o.a.Component);var X=function(){return o.a.createElement(i.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,a){e.exports=a(106)},78:function(e,t,a){},79:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},80:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.156d527b.chunk.js.map