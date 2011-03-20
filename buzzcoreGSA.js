var GBuzzGSA;
(function(){
	this.core = function() {
		this.q = false;
		// Dimension information
		this.height = false;
		this.width = false;
		
		// Utilities
		this.poll = true;
		this.interval = 10;
		this.showclips = true;
		
		// Defaults
		this.buzzURL = 'https://www.googleapis.com/buzz/v1/activities/search?alt=json&callback=GBuzzGSA.update';
		this.limit = 10;
		
		this.c = 'http://www.google.com/jsapi';
		this.load = function() {
			this.googlel();
			if(this.q != false) {
				this.fetch(this.buzzURL + '&q=' + this.q + '&max-results=' + this.limit);
			}
		};
		
		this.fetch = function(a) {
			{try{if(this.a){
				if (this.b){
					this.a.removeChild(this.b);
				}
			}else{
				this.a = document.getElementsByTagName('head')[0];
			}
			}catch(e){
				this.a = document.getElementsByTagName('head')[0];
			}};
			this.b = document.createElement('script');
			this.b.type = 'text/javascript';
			this.b.src = a;
			this.a.appendChild(this.b);
		};
		this.inc = function(a) {
			{try{if(this.a){
			}else{
				this.a = document.getElementsByTagName('head')[0];
			}
			}catch(e){
				this.a = document.getElementsByTagName('head')[0];
			}};
			var b = document.createElement('script');
			b.type = 'text/javascript';
			b.src = a;
			
			var c = document.createElement('link');
			c.type = 'text/css';
			c.href = 'http://code.stevenking.com.au/gsa/gbuzz/buzzcoreGSA.css';
			c.rel = 'stylesheet';
			this.a.appendChild(c);
			this.a.appendChild(b);
		};
		this.googlel = function() {
			google.load("prototype", "1.6");google.load("scriptaculous", "1.8.3");
		};
		
		this.buzzObject = function(a) {
			this.a = a;
			this.image = function() {
				var a = null;
				return a;
			};
			
			this.profileUrl = function() {
			};
			
			this.buzzBoz = function() {
			};
		};
		
		this.Za = function (a) {
			a = a.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var b = "[\\?&]"+a+"=([^&#]*)";
			var c = new RegExp( b );
			var d = c.exec( window.location.href );
			if( d == null ){
				return "";
			}else{
				return d[1];
			}
		}
		{try{this.inc(this.c);}catch(e){}};
		this.update = function(a) {
			if(a){if(a.data){if(a.data.items){
				if(a.data['items'].length > 0) {
					document.write('<div id="gsaBuzzBox" style="display: block;');
					if(this.width) {
						document.write('width:' + this.width + ';');
					};
					document.write('">');
					var pmonths = "{'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'June','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}";
					pmonths = pmonths.evalJSON();
					a.data['items'].each(function(a,b){
						
						document.write('<div class="gsaBuzzItem">');
						if(a.actor.thumbnailUrl){
							document.write('<a href="' + a.actor.profileUrl + '" target="_blank"><img src="' + a.actor.thumbnailUrl + '"/></a>');
						}
						else {
							document.write('<a href="' + a.actor.profileUrl + '" target="_blank"><img src="http://www.gstatic.com/s2/tt/landing/landing_taco.png" /></a>');
						}
						document.write('<p class="gsaBuzzTitle">' + a.title + '</p>');

						document.write('<p class="gsaBuzzActor">');
						if(a.actor){
							if(a.actor.name) {
								document.write('<a href="' + a.actor.profileUrl + '" target="_blank">' + a.actor.name + '</a>');
							};
						}
						if (a.source){if(a.source.title){
							document.write(' - via ' + a.source.title);
						}};
						if (a.placeName) {
							document.write(' - near ');
							if ( a.geocode) { document.write('<a href="http://maps.google.com/?q=' + a.geocode + '" target="_blank">')};
							document.write(a.placeName);
							if ( a.geocode) { document.write('</a>'); };
						};
						if (a.published) {
							// Year
							var pdate = a.published.split('T');
							var ptime = pdate[1];
							pdate = pdate[0].split('-');
							ptime = ptime.split('.');
							ptime = ptime[0];
							var pyear = pdate[0];
							var pmonth = pdate[1];
							var pday = pdate[2];
							document.write( ' - at ' + pday + '-' + pmonths[pmonth] + ' ' +  pyear + ' at ' + ptime);
						};
						document.write('</p>');
						document.write('</div>');
					});
					if ( a.data.links ) { if(a.data.links.next) {
						document.write('<p class="gsaBuzzNext"><a href="https://mail.google.com/mail/#buzz/search/' + this.q + '" target="_blank">Show more Buzz Results</a></p>');
					}};
					document.write('</div>');
				};
			}}};
		};
		{try{this.Zb = this.Za('q');}catch(e){this.Zb = false}};
		if (this.Zb != false){this.q = this.Zb;};
	};
	
	GBuzzGSA = new this.core();
})();