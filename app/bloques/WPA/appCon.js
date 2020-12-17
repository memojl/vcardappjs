//appCon.js index.php
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/'+path_root+'sw.js').then(function(registration) {
		console.log(
		  'Service Worker registro correcto con scope: ',
		  registration.scope
		);
	  }).catch(function(err) {
		console.log('Service Worker registro fallo: ', err);
	  });
  }  