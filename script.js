const titles = [
 {id:1,title:"Spirited Away",type:"anime",year:2001,genre:"Fantasy · Adventure",psTitle:"له ارواوو سره سفر",psGenre:"خیالي · ماجراجويي",art:"SPIRITED AWAY",tone:"linear-gradient(145deg,#597e69,#182a35)",en:"A young girl enters a mysterious world of spirits and must find her way home.",ps:"یوه کوچنۍ نجلۍ د ارواوو یوې عجیبه نړۍ ته ننوځي او د بېرته ستنېدو لار لټوي."},
 {id:2,title:"Your Name",type:"anime",year:2016,genre:"Romance · Fantasy",psTitle:"ستا نوم",psGenre:"خیالي · احساساتي",art:"YOUR NAME",tone:"linear-gradient(145deg,#e18b65,#344f83)",en:"Two teenagers discover a strange connection that crosses time and distance.",ps:"دوه ځوانان داسې عجیبه اړیکه مومي چې وخت او واټن سره نښلوي."},
 {id:3,title:"A Silent Voice",type:"anime",year:2016,genre:"Drama",psTitle:"خاموش غږ",psGenre:"ډرامه",art:"SILENT VOICE",tone:"linear-gradient(145deg,#8db8bd,#344a62)",en:"A former bully tries to make amends and rebuild a meaningful friendship.",ps:"یو پخوانی ځوروونکی هڅه کوي خپلې تېروتنې سمې او ملګرتیا بېرته جوړه کړي."},
 {id:4,title:"Demon Slayer",type:"anime",year:2019,genre:"Action · Fantasy",psTitle:"شیطان وژونکی",psGenre:"اکشن · خیالي",art:"DEMON SLAYER",tone:"linear-gradient(145deg,#9d5844,#202b38)",en:"A determined young swordsman searches for a cure for his sister.",ps:"یو هوډمن ځوان توره‌وال د خپلې خور د درملنې لاره لټوي."},
 {id:5,title:"Attack on Titan",type:"anime",year:2013,genre:"Action · Drama",psTitle:"پر ټایټانانو برید",psGenre:"اکشن · ډرامه",art:"TITAN",tone:"linear-gradient(145deg,#75644a,#252b2b)",en:"Humanity fights for survival behind enormous walls.",ps:"انسانان د لویو دېوالونو تر شا د ژوندي پاتې کېدو لپاره مبارزه کوي."},
 {id:6,title:"One Piece",type:"anime",year:1999,genre:"Adventure · Comedy",psTitle:"وان پیس",psGenre:"ماجراجويي · کامیډي",art:"ONE PIECE",tone:"linear-gradient(145deg,#4a8b9c,#203b49)",en:"A young pirate and his crew sail in search of the legendary treasure.",ps:"یو ځوان سمندري غل له خپلې ډلې سره د افسانوي خزانې په لټه کې سفر کوي."},
 {id:7,title:"Interstellar",type:"movie",year:2014,genre:"Sci-Fi · Drama",psTitle:"انټرسټیلر",psGenre:"ساینسي خیال · ډرامه",art:"INTERSTELLAR",tone:"linear-gradient(145deg,#6b8292,#151d32)",en:"Explorers travel beyond Earth in search of a future for humanity.",ps:"پلټونکي د انسانانو د راتلونکي لپاره له ځمکې هاخوا سفر کوي."},
 {id:8,title:"The Martian",type:"movie",year:2015,genre:"Sci-Fi · Adventure",psTitle:"مریخي",psGenre:"ساینسي خیال · ماجراجويي",art:"THE MARTIAN",tone:"linear-gradient(145deg,#b86b42,#422b25)",en:"An astronaut uses science and ingenuity to survive on Mars.",ps:"یو فضانورد پر مریخ د ژوندي پاتې کېدو لپاره له ساینس او هوښیارۍ کار اخلي."},
 {id:9,title:"Inception",type:"movie",year:2010,genre:"Sci-Fi · Thriller",psTitle:"انسیپشن",psGenre:"ساینسي خیال · هیجاني",art:"INCEPTION",tone:"linear-gradient(145deg,#637b82,#202d35)",en:"A specialist enters dreams to carry out an unusual mission.",ps:"یو متخصص د یوې ځانګړې دندې لپاره د خلکو خوبونو ته ننوځي."},
 {id:10,title:"The Dark Knight",type:"movie",year:2008,genre:"Action · Crime",psTitle:"تور اتل",psGenre:"اکشن · جنایي",art:"DARK KNIGHT",tone:"linear-gradient(145deg,#555d62,#151719)",en:"A masked hero faces a dangerous criminal in Gotham City.",ps:"یو نقاب‌لرونکی اتل په ګوتم ښار کې له خطرناک مجرم سره مخ کېږي."},
 {id:11,title:"Coco",type:"movie",year:2017,genre:"Animation · Family",psTitle:"کوکو",psGenre:"انیمېشن · کورنۍ",art:"COCO",tone:"linear-gradient(145deg,#d17b42,#52304b)",en:"A boy follows his love of music into a colourful world of family history.",ps:"یو هلک د موسیقۍ د مینې له امله د خپلې کورنۍ رنګینې کیسې ته ننوځي."},
 {id:12,title:"The Lion King",type:"movie",year:1994,genre:"Animation · Drama",psTitle:"زمری پاچا",psGenre:"انیمېشن · ډرامه",art:"LION KING",tone:"linear-gradient(145deg,#b67b3d,#3b3428)",en:"A young lion grows into his responsibility and place in the circle of life.",ps:"یو ځوان زمری د ژوند په کړۍ کې خپل مسؤلیت او ځای پېژني."},
 {id:13,title:"Planet Earth",type:"series",year:2006,genre:"Documentary · Nature",psTitle:"سیاره ځمکه",psGenre:"مستند · طبیعت",art:"PLANET EARTH",tone:"linear-gradient(145deg,#3f806a,#172d3c)",en:"A landmark nature documentary exploring the planet's remarkable habitats.",ps:"یو مشهور طبیعي مستند چې د ځمکې حیرانوونکي چاپېریالونه ښيي."},
 {id:14,title:"Our Planet",type:"series",year:2019,genre:"Documentary · Nature",psTitle:"زموږ سیاره",psGenre:"مستند · طبیعت",art:"OUR PLANET",tone:"linear-gradient(145deg,#4b8d80,#1b3842)",en:"A documentary series about wildlife and the importance of protecting nature.",ps:"د ځنګلي ژوند او د طبیعت د ساتنې د ارزښت په اړه مستند سریال."},
 {id:15,title:"Sherlock",type:"series",year:2010,genre:"Crime · Mystery",psTitle:"شرلاک",psGenre:"جنایي · معما",art:"SHERLOCK",tone:"linear-gradient(145deg,#6a777c,#252d31)",en:"A modern detective and his friend solve complex mysteries in London.",ps:"یو عصري پلټونکی او ملګری یې په لندن کې پېچلې معماوې حلوي."},
 {id:16,title:"Stranger Things",type:"series",year:2016,genre:"Sci-Fi · Mystery",psTitle:"نااشنا پېښې",psGenre:"ساینسي خیال · معما",art:"STRANGER THINGS",tone:"linear-gradient(145deg,#a33b39,#25172b)",en:"A group of friends uncover strange events in their small town.",ps:"د ملګرو یوه ډله په خپل کوچني ښار کې عجیبه پېښې رابرسېره کوي."},
 {id:17,title:"Planet Earth II",type:"series",year:2016,genre:"Documentary · Nature",psTitle:"سیاره ځمکه ۲",psGenre:"مستند · طبیعت",art:"EARTH II",tone:"linear-gradient(145deg,#6d8e4e,#1b3530)",en:"A closer look at wildlife in jungles, mountains, deserts and cities.",ps:"په ځنګلونو، غرونو، دښتو او ښارونو کې د ژوو ژوند ته نږدې کتنه."},
 {id:18,title:"Blue Planet II",type:"series",year:2017,genre:"Documentary · Ocean",psTitle:"شنه سمندر ۲",psGenre:"مستند · سمندر",art:"BLUE PLANET",tone:"linear-gradient(145deg,#397c9a,#172d47)",en:"Explore the remarkable wildlife and ecosystems beneath the oceans.",ps:"د سمندرونو لاندې د ژوو او طبیعي چاپېریالونو حیرانوونکې نړۍ وپېژنئ."}
];

let language = "en";
let activeFilter = "all";
let favorites = [];
try { favorites = JSON.parse(localStorage.getItem("frameXFavorites") || "[]"); } catch (_) { favorites = []; }
const grid = document.getElementById("cardsGrid");
const search = document.getElementById("searchInput");
const modal = document.getElementById("detailModal");

function typeLabel(type){return language==="ps"?({anime:"انیمي",movie:"فلم",series:"سریال"}[type]):({anime:"ANIME",movie:"MOVIE",series:"SERIES"}[type]);}
function render(){
 const q=search.value.trim().toLowerCase();
 const list=titles.filter(t=>(activeFilter==="all"||(activeFilter==="favorites"?favorites.includes(t.id):t.type===activeFilter)) &&
   [t.title,t.psTitle,t.genre,t.psGenre].join(" ").toLowerCase().includes(q));
 grid.innerHTML=list.map(t=>`
  <article class="title-card" data-id="${t.id}" tabindex="0" role="button" aria-label="${t.title}">
   <div class="poster" style="background:${t.tone}">
    <span class="poster-index">FX / ${String(t.id).padStart(3,"0")}</span>
    <button class="favorite-btn ${favorites.includes(t.id)?"saved":""}" type="button" aria-label="${favorites.includes(t.id)?"Remove from favorites":"Add to favorites"}">${favorites.includes(t.id)?"★":"☆"}</button>
    <span class="poster-word">${t.art}</span><span class="poster-type">${typeLabel(t.type)}</span>
   </div>
   <div class="card-body"><div class="card-top"><span>${typeLabel(t.type)}</span><span>${t.year}</span></div>
    <h3>${language==="ps"?t.psTitle:t.title}</h3><p>${language==="ps"?t.psGenre:t.genre}</p></div>
  </article>`).join("");
 document.getElementById("resultCount").textContent=`${list.length} ${language==="ps"?"عنوانونه":"TITLES"}`;
 document.getElementById("emptyState").hidden=list.length!==0;
 grid.querySelectorAll(".title-card").forEach(card=>{
  card.addEventListener("click",()=>openDetails(Number(card.dataset.id)));
  card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openDetails(Number(card.dataset.id));}});
  card.querySelector(".favorite-btn").addEventListener("click",e=>{
   e.stopPropagation();
   const id=Number(card.dataset.id);
   favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];
   try { localStorage.setItem("frameXFavorites",JSON.stringify(favorites)); } catch (_) {}
   render();
  });
 });
}
function openDetails(id){
 const t=titles.find(x=>x.id===id); if(!t)return;
 document.getElementById("modalPoster").style.background=t.tone;
 document.getElementById("modalPoster").innerHTML=`<span class="poster-word">${t.art}</span>`;
 document.getElementById("modalMeta").textContent=`${typeLabel(t.type)} · ${t.year}`;
 document.getElementById("modalTitle").textContent=language==="ps"?t.psTitle:t.title;
 document.getElementById("modalDescription").textContent=language==="ps"?t.ps:t.en;
 const detailLabels = language==="ps"
  ? {genre:"ژانر",year:"کال",rating:"درجه‌بندي",audio:"اصلي غږ",subs:"فرعي لیکنې"}
  : {genre:"GENRE",year:"RELEASE YEAR",rating:"RATING",audio:"AUDIO",subs:"SUBTITLES"};
 const detailValues = language==="ps"
  ? [t.psGenre,String(t.year),"تر اوسه نه دی تایید شوی","د اصلي خپرونې ژبه","د خپرونې له نسخې سره توپیر لري"]
  : [t.genre,String(t.year),"Not verified","Original release audio","Varies by release"];
 document.getElementById("modalTags").innerHTML=detailLabels
  ? detailLabels.genre+"|"+detailValues[0] : "";
 document.getElementById("modalTags").innerHTML=[
  [detailLabels.genre,detailValues[0]],[detailLabels.year,detailValues[1]],
  [detailLabels.rating,detailValues[2]],[detailLabels.audio,detailValues[3]],
  [detailLabels.subs,detailValues[4]]
 ].map(([label,value])=>`<div class="detail-row"><span>${label}</span><strong>${value}</strong></div>`).join("");
 const trailer=document.getElementById("trailerLink");
 trailer.href="https://www.youtube.com/results?search_query="+encodeURIComponent(t.title+" official trailer");
 trailer.textContent=language==="ps"?"▶ رسمي ټریلر ولټوئ":"▶ Find official trailer";
 modal.classList.add("open");modal.setAttribute("aria-hidden","false");
}
function closeDetails(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");}
document.getElementById("closeModal").addEventListener("click",closeDetails);
document.getElementById("modalBackdrop").addEventListener("click",closeDetails);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDetails();});
search.addEventListener("input",render);
document.getElementById("filters").addEventListener("click",e=>{
 const b=e.target.closest("[data-filter]");if(!b)return;
 activeFilter=b.dataset.filter;
 document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));
 render();
});
document.getElementById("languageToggle").addEventListener("click",()=>{
 language=language==="en"?"ps":"en";
 document.documentElement.lang=language;
 document.body.classList.toggle("ps",language==="ps");
 document.getElementById("languageToggle").textContent=language==="en"?"پښتو":"English";
 document.querySelectorAll("[data-en][data-ps]").forEach(el=>el.innerHTML=el.dataset[language]);
 search.placeholder=search.dataset[language==="en"?"enPlaceholder":"psPlaceholder"];
 render();
});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
render();
