(this["webpackJsonpwho-is-fth"]=this["webpackJsonpwho-is-fth"]||[]).push([[0],[,,,,,function(e,t,o){e.exports=o(12)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(4),r=o.n(c),u=(o(10),o(2)),l=(o(11),o(1)),s=o.n(l),i=["brakence_DNB.wav","fortuneswan_DNB.wav","HOLIDAYKISS_DNB.wav","jack cates_ DNB.wav","Moon_ DNB.wav","Moore Kismet_DNB.wav","VALENTINE_DNB.wav","VeraMuch_DNB.wav"],f=["brakence_Melodics.wav","fortuneswan_Melodics.wav","HOLIDAYKISS_Melodics.wav","jack cates_ Melodics.wav","MagLo_Melodic.wav","Moon_ MELODICS.wav","VALENTINE_Melodics.wav","VeraMuch_Melodics.wav"],d=["brakence_Vox.wav","fortuneswan_Vox.wav","HOLIDAYKISS_Vox.wav","jack cates_ Vox.wav","Moon_ VOX.wav","VALENTINE_Vox.wav","VeraMuch_Vox.wav"],w=!1,v=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),o=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(u.a)(r,2),v=l[0],m=l[1],h=Object(n.useState)(0),b=Object(u.a)(h,2),M=(b[0],b[1],Object(n.useRef)(null)),g=Object(n.useRef)(null),_=Object(n.useRef)(null),E=Object(n.useRef)(null);E.current=s.a.Transport,Object(n.useEffect)((function(){E.current.loop=!0,E.current.bpm.value=150,E.current.loopStart="0m",E.current.loopEnd="8m",E.current.schedule((function(){w&&(console.log("Auto shuffling..."),p())}),"7m"),M.current=new s.a.Player({url:k(f),loop:!0}).toMaster().sync().start(),g.current=new s.a.Player({url:k(i),loop:!0}).toMaster().sync().start(),_.current=new s.a.Player({url:k(d),loop:!0}).toMaster().sync().start(),s.a.Buffer.on("load",(function(){c(!0)}))}),[]);var p=function(){var e=k(f),t=k(i),o=k(d);console.log("Shuffling..."),console.log("Queued: ".concat(e)),console.log("Queued: ".concat(t)),console.log("Queued: ".concat(o)),M.current.load(e),g.current.load(t),_.current.load(o)},k=function(e){return"./audio/"+e[O(e.length)]},O=function(e){return Math.floor(Math.random()*Math.floor(e))};return a.a.createElement("div",null,a.a.createElement("button",{disabled:!o,onClick:function(){v?E.current.stop():E.current.start(),m(!v)}},"toggle play"),a.a.createElement("button",{disabled:!o,onClick:p},"shuffle once"),a.a.createElement("button",{disabled:!o,onClick:function(){(w=!w)?console.log("Shuffle on"):console.log("Shuffle off")}},"shuffle toggle"),a.a.createElement("button",{disabled:!o,onClick:function(){M.current.mute=!M.current.mute}},"mute chords"),a.a.createElement("button",{disabled:!o,onClick:function(){g.current.mute=!g.current.mute}},"mute drums"),a.a.createElement("button",{disabled:!o,onClick:function(){_.current.mute=!_.current.mute}},"mute vox"),a.a.createElement("button",{onClick:function(){console.log(Math.round(100*E.current.progress))}},"show prog"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.795ef545.chunk.js.map