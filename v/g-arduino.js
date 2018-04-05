var data_val = 0  ;

    function GetArduinoInputs()
		{
			nocache = "&nocache=" + Math.random() * 1000000;

			var request = new XMLHttpRequest();
			var alaram;


			request.onreadystatechange = function()
			{
				if (this.readyState == 4) {
					if (this.status == 200) {
						if (this.responseXML != null) {
							document.getElementById("input3").innerHTML =
								this.responseXML.getElementsByTagName('analog')[0].childNodes[0].nodeValue;
								data_val = this.responseXML.getElementsByTagName('analog')[0].childNodes[0].nodeValue  ;

						}
					}
				}
			}
			// voltase drop input di sini 12v/24v notifikasi
			if (data_val > 10.50){
								alaram = "<font color='green'>VOLTASE NORMAL</font>";
								} else {
								alaram = "<span id='blinker'><font color='red'>VOLTASE DROP</font></span>";
								}
								document.getElementById("notif").innerHTML = alaram;

			request.open("GET", "ajax_inputs" + nocache, true);
			request.send(null);
			setTimeout('GetArduinoInputs()', 1000); //timer refresh koding realtime

		}