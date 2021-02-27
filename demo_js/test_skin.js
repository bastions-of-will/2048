if(typeof NetFunnel == "object"){

	//blockSkin
	NetFunnel.SkinUtil.add('blockSkin',{
		prepareCallback:function(){
		},
		updateCallback:function(percent,nwait,totwait,timeleft){
		},
		htmlStr:'<div id="NetFunnel_Skin_Top" style="background-color:white;border:1px solid black; width:300px"> \
			<div style="text-align:right;padding-top:5px;padding-right:5px;;text-align:center;"> \
				<div style="text-align:center;font-size:9pt;color:black"><b><span style="color:black"> 해당 상품은 조기 소진되었습니다. </span> \
				<div style="text-align:center;font-size:9pt;color:black"><b><span style="color:black"> 10:00 부터 서비스 가능합니다. </span> \
					<br><br><br><span onclick="NetFunnel_sendStop();" style="cursor:pointer">[닫기]</span> </b><br><br> \
				</div> \
			</div>'
	},'normal');

	//ipBlockSkin
	NetFunnel.SkinUtil.add('ipBlockSkin',{
		prepareCallback:function(){
		},
		updateCallback:function(percent,nwait,totwait,timeleft){
		},
		htmlStr:'<div id="NetFunnel_Skin_Top" style="background-color:white;border:1px solid black; width:300px"> \
			<div style="text-align:right;padding-top:5px;padding-right:5px;;text-align:center;"> \
				<div style="text-align:center;font-size:9pt;color:black"><b><span style="color:black"> 비정상적인 시도가 감지되어 접근을 차단합니다!!! </span> \
					<br><br><br><span onclick="NetFunnel_sendStop();" style="cursor:pointer">[닫기]</span> </b><br><br> \
				</div> \
			</div>'
	},'normal');

	//skin1
	NetFunnel.SkinUtil.add('skin1',{
		prepareCallback:function(){
			var progress_print = document.getElementById("Progress_Print");
			progress_print.innerHTML="0 % (0/0) - 0 sec";
		},
		updateCallback:function(percent,nwait,totwait,timeleft){
			var progress_print = document.getElementById("Progress_Print");
			var prog=totwait - nwait;
			progress_print.innerHTML=percent+" % ("+prog+"/"+totwait+") - "+timeleft+" sec";
		},
		htmlStr:'<div id="NetFunnel_Skin_Top" style="background-color:#ffffff;border:1px solid #9ab6c4;width:300px;height:218px"> \
					<div style="text-align:right;padding-top:5px;padding-right:5px;;text-align:center;"> \
						<img style="height:16px;color:black;font-size:11px;" border=0 src="data:image/png;base64,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">  \
						<div style="text-align:left;font-size:9pt;color:#001f6c;padding-left:10px;"> \
							<h2>skin1</h2> \
							<b><span style="color:#013dc1">접속대기 중!!!!</span>..</b><br> \
							- 본인 앞 대기자수 : <span id="NetFunnel_Loading_Popup_Count"></span>명<br> \
							- 본인 뒤 대기자수 : <span id="NetFunnel_Loading_Popup_NextCnt"></span>명<br> \
							- 대기시간 : <span id="NetFunnel_Loading_Popup_TimeLeft"></span><br> \
							<div id="Progress_Print" \
								style="text-align:center;padding:5px;font:bold 20px Trebuchet MS,굴림,Gulim;color:gray"></div> \
						</div> \
						<div style="padding:10px;;vertical-align:center;width:280px" id="NetFunnel_Loading_Popup_Progressbar"> \
						</div> \
						<span onclick="NetFunnel.countdown_stop()" style="cursor:pointer">[중지]</span> \
					</div> \
				</div>'

	},'normal');

	//skin2
    NetFunnel.SkinUtil.add('skin2',{ 
        prepareCallback:function(){
            var progress_print = document.getElementById("Progress_Print");
            progress_print.innerHTML="0 % (0/0) - 0 sec";
        },
        updateCallback:function(percent,nwait,totwait,timeleft){
            var progress_print = document.getElementById("Progress_Print");
            var prog=totwait - nwait;
            progress_print.innerHTML=percent+" % ("+prog+"/"+totwait+") - "+timeleft+" sec";
        },
        htmlStr:
			'<div id="NetFunnel_Skin_Top" style="position:relative;width:550px;height:150px;padding:68px 0 72px 0;font-family:Nanum Gothic;background-color:#ffffff;border:2px solid #006fb7;"> '
				+ '<div> '					
					+ '<strong style="position:absolute;left:0;top:0;display:block;width:100%;height:68px;font-weight:normal;background:#006db8;"> '
					+ '<h2>skin2</h2> '
					+ '<p style="padding:24px 30px;margin:0 60px 0 0;text-align:left;font-size:20px;color:#fff;">서비스 이용고객이 많아 <span style="font-weight:bold;">접속 대기중</span>입니다.</p></strong> '
					+ '<p style="position:absolute;left:30px;top:60px;width:100%;color:#006db8;font-size:20px">대기 순서에 따라 <span style="color:#ff4a1a;">자동 접속</span>됩니다.</p> '
					+ '<p style="position:absolute;left:30px;top:100px;color:#006db8;font-size:17px">  예상 대기 시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" style="color:#ff4a1a;"></span>'
					+ '&nbsp;/&nbsp;현재 대기순번 <span id="NetFunnel_Loading_Popup_Count" style="color:#ff4a1a;"></span>번째</p> '
					+ '<div style="position:absolute;left:0;bottom:0;width:100%;height:65px;background:#eff4f5;">'
							+ '<div style="padding:25px 30px 0 30px;color:#455251;font-size:13px;line-height:20px;">- 새로고침, 뒤로가기 또는 재접속하시면 대기시간이 더 길어집니다.</div>'
					+ '</div> '
					+ '<div id="Progress_Print" style="display:none;position:absolute;left:0;top:100px;width:100%;text-align:center;font-size:17px;color:gray"></div> '
				+ '</div> '
				+ '<div style="padding:90px 0 0 30px;width:490px" id="NetFunnel_Loading_Popup_Progressbar"> </div>'
				+ '<center><button id="NetFunnel_Countdown_Stop" style=" font-size: 15px;  padding: 5px 5px 5px 5px;color: #900; font-weight: bold;margin:15px;width:80px;">중지</button> </center>'
			+ '</div>'
    },'normal'); 

	//skin3 대기창에 동영상 추가
	NetFunnel.tstr = ' \
		<div id="NetFunnel_Skin_Top" style="background-color:#ffffff;border:1px solid #9ab6c4;width:620px;height:600px;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;"> \
			<div style="background-color:#ffffff;border:6px solid #eaeff3;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;"> \
				<div style="padding-top:0px;padding-left:25px;padding-right:25px"> \
					<h2>skin3</h2> \
					<div>  <iframe width="560" height="315" src="https://www.youtube.com/embed/6m4lR2oW_SI?rel=0;amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> \
					<div style="text-align:left;font-size:12pt;color:#001f6c;height:22px"><b>서비스 <span style="color:#013dc1">접속대기 중</span>입니다.</b></div> \
					<div style="text-align:right;font-size:9pt;color:#4d4b4c;padding-top:4px;height:17px" ><b>PC 예상대기시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" class="%H시간 %M분 %02S초^ ^false"></span></b></div> \
					<div style="padding-top:6px;padding-bottom:6px;vertical-align:center;width:560px;height:20px" id="NetFunnel_Loading_Popup_Progressbar"></div> \
					<div style="background-color:#ededed;width:560px;padding-bottom:8px;overflow:hidden"> \
						<div style="padding-left:5px"> \
							<div style="text-align:left;font-size:8pt;color:#4d4b4c;padding:3px;padding-top:10px;height:10px">고객님 앞에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_Count" class="'+NetFunnel.TS_LIMIT_TEXT+'"></span></span></b> 명, 뒤에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_NextCnt" class="'+NetFunnel.TS_LIMIT_TEXT+'"></span></span></b> 명의 대기자가 있습니다.  </div> \
							<div style="text-align:left;font-size:8pt;color:#4d4b4c;padding:3px;height:10px">현재 접속 사용자가 많아 대기 중이며, 잠시만 기다리시면 </div> \
							<div style="text-align:left;font-size:8pt;color:#4d4b4c;padding:3px;height:10px;">서비스로 자동 접속 됩니다.</div> \
							<div style="text-align:center;font-size:9pt;color:#2a509b;padding-top:10px;"> \
								<b>※ 재 접속하시면 대기시간이 더 길어집니다. <span id="NetFunnel_Countdown_Stop" style="cursor:pointer">[중지]</span> </b> \
							</div> \
						</div> \
					</div> \
					<div style="height:5px;"></div> \
				</div> \
			</div> \
		</div>';
	NetFunnel.SkinUtil.add('skin3',{htmlStr:NetFunnel.tstr},'normal');

		//skin4
    NetFunnel.SkinUtil.add('skin4',{ 
        prepareCallback:function(){
            var progress_print = document.getElementById("Progress_Print");
            progress_print.innerHTML="0 % (0/0) - 0 sec";
        },
        updateCallback:function(percent,nwait,totwait,timeleft){
            var progress_print = document.getElementById("Progress_Print");
            var prog=totwait - nwait;
            progress_print.innerHTML=percent+" % ("+prog+"/"+totwait+") - "+timeleft+" sec";
        },
        htmlStr:
			'<div id="NetFunnel_Skin_Top" style="position:relative;width:550px;height:150px;padding:68px 0 72px 0;font-family:Nanum Gothic;background-color:#ffffff;border:2px solid #006fb7;"> '
				+ '<div> '					
					+ '<strong style="position:absolute;left:0;top:0;display:block;width:100%;height:68px;font-weight:normal;background:#006db8;"> '
					+ '<h2>skin2</h2> '
					+ '<p style="padding:24px 30px;margin:0 60px 0 0;text-align:left;font-size:20px;color:#fff;">서비스 이용고객이 많아 <span style="font-weight:bold;">접속 대기중</span>입니다.</p></strong> '
					+ '<p style="position:absolute;left:30px;top:60px;width:100%;color:#006db8;font-size:20px">대기 순서에 따라 <span style="color:#ff4a1a;">자동 접속</span>됩니다.</p> '
					+ '<p style="position:absolute;left:30px;top:100px;color:#006db8;font-size:17px">  예상 대기 시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" style="color:#ff4a1a;"></span>'
					+ '&nbsp;/&nbsp;현재 대기순번 <span id="NetFunnel_Loading_Popup_Count" style="color:#ff4a1a;"></span>번째</p> '
					+ '<div style="position:absolute;left:0;bottom:0;width:100%;height:65px;background:#eff4f5;">'
							+ '<div style="padding:25px 30px 0 30px;color:#455251;font-size:13px;line-height:20px;">- 새로고침, 뒤로가기 또는 재접속하시면 대기시간이 더 길어집니다.</div>'
					+ '</div> '
					+ '<div id="Progress_Print" style="display:none;position:absolute;left:0;top:100px;width:100%;text-align:center;font-size:17px;color:gray"></div> '
				+ '</div> '
				+ '<div style="padding:90px 0 0 30px;width:490px" id="NetFunnel_Loading_Popup_Progressbar"> </div>'
				+ '<center><button id="NetFunnel_Countdown_Stop" style=" font-size: 15px;  padding: 5px 5px 5px 5px;color: #900; font-weight: bold;margin:15px;width:80px;">중지</button> </center>'
			+ '</div>'
    },'normal'); 

	//skin4
	NetFunnel.tstr = ' \
		<div id="NetFunnel_Skin_Top" style="background-color:#ffffff;border:1px solid #9ab6c4;width:580px;height:600px;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;"> \
			<div style="background-color:#ffffff;border:6px solid #eaeff3;-moz-border-radius: 5px; -webkit-border-radius: 5px; -khtml-border-radius: 5px; border-radius: 5px;"> \
				<div style="padding-top:0px;padding-left:25px;padding-right:25px"> \
					<h2>skin3</h2> \
					<div>  <iframe width="560" height="315" src="https://www.youtube.com/embed/6m4lR2oW_SI?rel=0;amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> \
					<div style="text-align:left;font-size:12pt;color:#001f6c;height:22px"><b>서비스 <span style="color:#013dc1">접속대기 중</span>입니다.</b></div> \
					<div style="text-align:right;font-size:9pt;color:#4d4b4c;padding-top:4px;height:17px" ><b>mobile 예상대기시간 : <span id="NetFunnel_Loading_Popup_TimeLeft" class="%H시간 %M분 %02S초^ ^false"></span></b></div> \
					<div style="padding-top:6px;padding-bottom:6px;vertical-align:center;width:400px;height:20px" id="NetFunnel_Loading_Popup_Progressbar"></div> \
					<div style="background-color:#ededed;width:400px;padding-bottom:8px;overflow:hidden"> \
						<div style="padding-left:5px"> \
							<div style="text-align:left;font-size:8pt;color:#4d4b4c;padding:3px;padding-top:10px;height:10px">고객님 앞에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_Count" class="'+NetFunnel.TS_LIMIT_TEXT+'"></span></span></b> 명, 뒤에 <b><span style="color:#2a509b"><span id="NetFunnel_Loading_Popup_NextCnt" class="'+NetFunnel.TS_LIMIT_TEXT+'"></span></span></b> 명의 대기자가 있습니다.  </div> \
							<div style="text-align:left;font-size:8pt;color:#4d4b4c;padding:3px;height:10px">현재 접속 사용자가 많아 대기 중이며, 잠시만 기다리시면 </div> \
							<div style="text-align:left;font-size:8pt;color:#4d4b4c;padding:3px;height:10px;">서비스로 자동 접속 됩니다.</div> \
							<div style="text-align:center;font-size:9pt;color:#2a509b;padding-top:10px;"> \
								<b>※ 재 접속하시면 대기시간이 더 길어집니다. <span id="NetFunnel_Countdown_Stop" style="cursor:pointer">[중지]</span> </b> \
							</div> \
						</div> \
					</div> \
					<div style="height:5px;"></div> \
				</div> \
			</div> \
		</div>';
	NetFunnel.SkinUtil.add('skin4',{htmlStr:NetFunnel.tstr},'mobile');



}