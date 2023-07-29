let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const slide_text = document.querySelector('.slide1-text');
let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("slide1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }

  slides1[slideIndex1-1].style.display = "block";
  slide_text.innerHTML = `${slideIndex1}/4`;
}
const objects = [{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1133700578749460570/Gon_Freecss_GI_Portrait.webp',
    'name':'Gon'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491935902539867/Killua_Zoldyck_HE_Portrait.webp',
    'name':'Killua'
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134491935499882536/Kurapika_Portrait_3.webp',
    'name':'Kurapika'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491935084650666/Leorio_Paradinight_YC_Portrait.webp',
    'name':'Leorio'
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134491934732337235/Isaac_Netero_HE_Portrait.webp',
    'name':'Netero'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491934371614910/Ging_Freecss_HCE_Portrait.webp',
    'name':'Ging'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491933931225198/Hisoka_Morow_HCE_Portrait.webp',
    'name':'Hisoka'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491933478228018/Illumi_HxH_11.PNG.webp',
    'name':'Illumi'
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134491933234962483/HxH2011_EP41_Chrollo_Portrait.webp',
    'name':'Chrollo'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491932786167858/Tonpa_HE_Portrait.webp',
    'name':'Tonpa'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491821872005242/Meruem_CA_Portrait.webp',
    'name':'Meruem'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491821460951193/Pariston_Hill_HCE_Portrait.webp',
    'name':'Pariston'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491820643074259/Mito_Freecss_HE_Portrait.webp',
    'name':'Mito'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491820261380117/Alluka_Zoldyck_HCE_Portrait.webp',
    'name':'Alluka'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491819900682321/Pairo_V0_Portrait.webp',
    'name':'Pairo'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491819485437952/Pietro_HE_Portrait.webp',
    'name':'Pietro'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491818877259776/Beyond_Netero_DCE_Portrait.webp',
    'name':'Beyond'
},{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134491818512367726/Cheadle_Yorkshire_HCE_Portrait.webp',
    'name':'Cheadle'
}];

let innerHTML = '';
const images = document.querySelector('.images')
objects.forEach((obj,idx)=>{
    const html = `
                        <div class="img">
                            <img src="${obj.url}">
                            <p class="name">${obj.name}</p>
                        </div>
                    </div>
    `;
    innerHTML += html;
    
});

images.innerHTML = innerHTML;

const mangaBtn = document.querySelector('.manga-btn');
const animeBtn = document.querySelector('.anime-btn');

mangaBtn.addEventListener('click',function(){
    animeBtn.classList.remove('toggle-btn');
    mangaBtn.classList.add('toggle-btn');
    document.getElementById('anime').classList.remove('show');
    document.getElementById('manga').classList.add('show');
});

animeBtn.addEventListener('click',function(){
    mangaBtn.classList.remove('toggle-btn');
    animeBtn.classList.add('toggle-btn');
    document.getElementById('manga').classList.remove('show');
    document.getElementById('anime').classList.add('show');
})


const feeds = [{
    'date':'Dec 26,2022',
    'title':'NEW Hunter x Hunter Promotional Video',
    'url':'https://pbs.twimg.com/ext_tw_video_thumb/1607301775085674499/pu/img/-4uzzmk-6hRi1f4-.jpg',
    'cmt': 328,
    'love':'84k'
},{
    'date':'Dec 26,2022',
    'title':'New Illustration by Yoshihiro Togashi',
    'url':'https://pbs.twimg.com/media/FWaA4wPXoAId01m?format=jpg&name=small',
    'cmt': 237,
    'love':'52k'
},{
    'date':'Nov 3,2022',
    'title':'Official Hunter x Hunter Vol.37 Trailer',
    'url':'https://pbs.twimg.com/ext_tw_video_thumb/1588185344721158144/pu/img/IpSJEoAiSYFQlaA0.jpg',
    'cmt': 174,
    'love':'29k'
},{
    'date':'Oct 29, 2022',
    'title':'Eiichiro Oda\'s illustration of Gon Freecss (w/ Luffy & Copper) for Yoshihiro Togashi\'s Exhibition',
    'url':'https://pbs.twimg.com/media/FgMvddQWAAAsQIf?format=jpg&name=small',
    'cmt': 78,
    'love':'24k'
},{
    'date':'Oct 11,2022',
    'title':'OFFICIAL: The Hunter x Hunter manga returns on October 23rd!',
    'url':'https://pbs.twimg.com/media/FewBkYLXEAAKUkA?format=jpg&name=small',
    'cmt':155,
    'love':'23k'
},{
    'date':'Oct 23,2022',
    'title':'Yoshihiro Togashi\'s author comment from Shonen Jump issue #47',
    'url':'https://pbs.twimg.com/media/Ffw5-5yX0AEcz62?format=jpg&name=small',
    'cmt':40,
    'love':'20k'
},{
    'date':'Dec 23,2022',
    'title':`Hunter x Hunter (2011) anime is getting re-leased in Japan! 
        <br>
        First set will include episodes 1-25 with bonus content! Release Date: March 22, 2023
        <br>
        <i class="fas fa-star" style="color: #e6b60a;"></i> More info <i class="fas fa-star" style="color: #e6b60a;"></i> :
        <br>
        <a href="">vap.co.jp/hunterhunter</a>`,
    'url':'https://pbs.twimg.com/media/FkoZhExXgAA1AsH?format=jpg&name=small',
    'cmt':150,
    'love':'18k' 
},{
    'date':'Jun 29,2022',
    'title':'Yoshihiro Togashi\'s comment on his new exhibition coming to Japan on October 28th',
    'url':'https://pbs.twimg.com/media/FWZ2TP7WIAUq0wc?format=jpg&name=small',
    'cmt':117,
    'love':'15k'
},{
    'date':'Dec 17,2022',
    'title':'Yoshihiro Togashi\'s shikishi for Jump Festa 2023',
    'url':'https://pbs.twimg.com/media/FkI8IWJXEAAGitH?format=jpg&name=small',
    'cmt':28,
    'love':'15k'
},{
    'date':'April 16,2022',
    'title':'The Japanese voice actor for Leorio, Keji Fujiwara, has passed away...',
    'url':'https://pbs.twimg.com/media/EVtS562WsAEVFvk?format=jpg&name=small',
    'cmt':577,
    'love':'12k'
},{
    'date':'Sep 1,2022',
    'title':'Today is a national day',
    'url':'https://pbs.twimg.com/media/FbjbZ6AWAAE0FTA?format=jpg&name=small',
    'cmt':14,
    'love':'13k'
},{
    'date':'Nov 3, 2022',
    'title':'Hunter x Hunter Vol. 37 Poster',
    'url':'https://pbs.twimg.com/media/FgsH5_bXEAE3Lx_?format=jpg&name=small',
    'cmt':49,
    'love':'12k'
},{
    'date':'May 24,2022',
    'title':'BREAKING NEWS: It\'s official! Yoshihiro Togashi opens his first Twitter account to announce that he back drawing Hunter x Hunter!!',
    'url':'https://pbs.twimg.com/media/EVtS562WsAEVFvk?format=jpg&name=small',
    'cmt':166,
    'love':'11k'
},{
    'date':'Oct 11,2022',
    'title':`Hunter x Hunter vol. 36 Cover
        Releases November 4th!`,
    'url':'https://pbs.twimg.com/media/FewFlA2X0AAAWbM?format=jpg&name=small',
    'cmt':52,
    'love':'11k'
},{
    'date':'Nov 3,2022',
    'title':'Yoshiro Togashi\'s author comment from Hunter x Hunter Vol.37',
    'url':'https://pbs.twimg.com/media/FgpfEubWIAUJAOs?format=jpg&name=900x900',
    'cmt':52,
    'love':'10k'
},{
    'date':'May 27,2022',
    'title':'Yoshihiro Togashi has now surpassed Kohei Horikoshi in the most followed manga artist on Twitter! (And it only took 3 days)',
    'url':'https://pbs.twimg.com/media/EVtS562WsAEVFvk?format=jpg&name=small',
    'cmt':577,
    'love':'12k'
},{
    'date':'October 31,2022',
    'title':'What did you think of the new Hunter x Hunter chapter?!',
    'url':'https://pbs.twimg.com/media/FgWJsRPWAAU78i7?format=jpg&name=small',
    'cmt':121,
    'love':'8k'
},{
    'date':'Aug 9,2022',
    'title':'The voice of Zeno Zoldyck, Hiroshi Otake, passed away on August 1st. May he rest in peace.',
    'url':'https://pbs.twimg.com/media/FZueEuMWAAEGddR?format=jpg&name=240x240',
    'cmt':97,
    'love':'8k'
},{
    'date':'Jan 26,2022',
    'title':'This is the greatest thing I have ever seen',
    'url':'https://pbs.twimg.com/ext_tw_video_thumb/824464556818923521/pu/img/ARn7JL_u8rsxwDLj.jpg',
    'cmt':128,
    'love':'6k'
},{
    'date':'Oct 2,2022',
    'title':'10 years ago today, Hunter x Hunter (2011)\'s first episode aired in Japan',
    'url':'https://pbs.twimg.com/media/FArciogXsAMhxz6?format=jpg&name=small',
    'cmt':577,
    'love':'12k'
},{
    'date':'Dec 19,2022',
    'title':'Next week',
    'url':'https://pbs.twimg.com/media/FkWgDKgXoAQtfAA?format=jpg&name=small',
    'cmt':23,
    'love':'7k'
},{
    'date':'Nov 20,2022',
    'title':'Gege Akutami\'s Illustration of Hisoka Morow & Pakunoda for Yoshiro Togashi\'s Exhibition',
    'url':'https://pbs.twimg.com/media/FgMMaHPXEAU5k4r?format=jpg&name=small',
    'cmt':27,
    'love':'7k'
},{
    'date':'Apr 26,2019',
    'title':'On April 27, 1966 in Japan, one of the greatest mangaka of all time was born. Happy 53rd birthday Yoshihiro Togashi and thank YOU for all the wonderful stories you\'ve created.',
    'url':'https://pbs.twimg.com/media/D5F416cXoAA6p2U?format=jpg&name=small',
    'cmt':53,
    'love':'5k'
},{
    'date':'Oct 23,2022',
    'title':'Mangaka commenting on Hunter x Hunter returning back to Weekly Shonen Jump',
    'url':'https://pbs.twimg.com/media/Ffw8QHiX0AIi1ab?format=jpg&name=240x240',
    'cmt':17,
    'love':'6k'
},{
    'date':'Nov 20,2022',
    'title':'Gege Akutami\'s Illustration of Hisoka Morow & Pakunoda for Yoshiro Togashi\'s Exhibition',
    'url':'https://pbs.twimg.com/media/FgMMaHPXEAU5k4r?format=jpg&name=small',
    'cmt':27,
    'love':'7k'
}];

let tweetHTML = '';

feeds.forEach((feed,idx)=>{
    let html = '';
    if(idx===0 || feed===2){
    html = `
    <div class="tweets">
                                <div class="small-header">
                                    <div class="avatar">
                                        <img src="https://images-ext-1.discordapp.net/external/31ucIxh0z0OXI49_O7oo_qRTGYPteP8OcUMlO3_i4iQ/%3Fq%3Dtbn%3AANd9GcSprVPRhm3RiS3fp4Kv2lQZ4Eh9G-wIv1WYOg_qpSz71NXfzfoB/https/encrypted-tbn3.gstatic.com/images?width=40&height=40">
                                    </div>
                                    <div>
                                        <p class="name">Hunter <i class="fas fa-times" style="color: #e70d23;"></i> Hunter</p>
                                        <p class="date">@HxH... .<a href="">${feed.date}</a></p>
                                    </div>
                                    <div class="twitter-icon">
                                        <i class="fab fa-twitter" style="color: #0bc9f9;font-size: 30px;"></i>
                                    </div>
                                </div>
                                <div class="small-body">
                                ${feed.title}<br><br>
                                <img src="${feed.url}" width="100%" style="border-radius: 10px;">
                                <div class="play">
                                    <a href=""><button class="play-btn"><i class="fas fa-play-circle" style="color: #0bc9f9;"></i></button></a>
                                </div>
                                </div>
                                <div class="reaction">
                                    <span class="cmt"><i class="far fa-comment" style="font-size: 20px;margin-right: 5px;"></i> ${feed.cmt}</span> <span class="love"><i class="far fa-heart" style=" font-size: 15px; margin-right: 5px;margin-left: 15px;"></i>${feed.love}</span> 

                                </div>
                            </div>
    `;
    }else{
        html = `
        <div class="tweets">
        <div class="small-header">
            <div class="avatar">
                <img src="https://images-ext-1.discordapp.net/external/31ucIxh0z0OXI49_O7oo_qRTGYPteP8OcUMlO3_i4iQ/%3Fq%3Dtbn%3AANd9GcSprVPRhm3RiS3fp4Kv2lQZ4Eh9G-wIv1WYOg_qpSz71NXfzfoB/https/encrypted-tbn3.gstatic.com/images?width=40&height=40">
            </div>
            <div>
                <p class="name">Hunter <i class="fas fa-times" style="color: #e70d23;"></i> Hunter</p>
                <p class="date">@HxH... .<a href="">${feed.date}</a></p>
            </div>
            <div class="twitter-icon">
                <i class="fab fa-twitter" style="color: #0bc9f9;font-size: 30px;"></i>
            </div>
        </div>
        <div class="small-body">
        ${feed.title}<br><br>
        <img src="${feed.url}" width="100%" style="border-radius: 10px;">
        </div>
        <div class="reaction">
            <span class="cmt"><i class="far fa-comment" style="font-size: 20px;margin-right: 5px;"></i> ${feed.cmt}</span> <span class="love"><i class="far fa-heart" style=" font-size: 15px; margin-right: 5px;margin-left: 15px;"></i>${feed.love}</span> 

        </div>
    </div>
        `;
    }
    tweetHTML += html;
});

document.querySelector('.tweets-content').innerHTML = tweetHTML;

const footer_imgs = [{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134134063192604875/Site-logo_1.webp?width=120&height=49',
    'name':'City Hunter Movie',
},
{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134134063477825576/Wiki-wordmark.webp?width=190&height=49',
    'name':'Demon Slayer: Hashira Training Arc',
},
{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134134026224009337/Wiki-wordmark_1.webp?width=190&height=49',
    'name':'Dr.Stone: New World Part 2',
},
{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134134027863986258/Wiki-wordmark_2.webp?width=166&height=49',
    'name':'Haikyu!! FINAL',
},
{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134134027536826448/Wiki-wordmark_3.webp?width=171&height=49',
    'name':'Kinnikuman',
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134134027331313756/Wiki-wordmark_4.webp?width=190&height=49',
    'name':'Mashle Season 2',
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134134027046096967/Wiki-wordmark_5.webp?width=148&height=49',
    'name':'Me and Roboco Movie',
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134133944078569502/Wiki-wordmark_6.webp?width=174&height=49',
    'name':'Misson: Yozakura Family',
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134133946259607653/Wiki-wordmark_7.webp?width=190&height=49',
    'name':'Monsters: Ippyakusanjo Hiryu Jigoku',
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134134026433728512/Wiki-wordmark_8.webp?width=190&height=49',
    'name':'My Hero Academia Season 7',
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134133945156513842/Site-logo_2.webp?width=117&height=49',
    'name':'Naruto (Shinsaku Anime)',
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134133944909041674/Wiki-wordmark_9.webp?width=190&height=49',
    'name':'Sand Land',
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134133944690942083/Wiki-wordmark_10.webp?width=118&height=49',
    'name':'The Elusive Samurai',
},{
    'url':'https://media.discordapp.net/attachments/1110555331492335617/1134133944347013135/Wiki-wordmark_11.webp?width=190&height=49',
    'name':'Undead Unluck',
}];
const text = document.querySelector('.upcoming-container');
const expandBtn = document.querySelector('.expand-btn1');
let expandHTML = '';
footer_imgs.forEach((img)=>{
    expandHTML += `
    <div>
                        <img src="${img.url}">
                        <br>
                        <a href="" style="text-align: center;">${img.name}</a>
                    </div>
    `;
});

expandBtn.addEventListener('click',function(){
    if(expandBtn.innerHTML==='[Collapse]'){
        expandBtn.innerHTML = '[Expand]';
        text.innerHTML = '';
    }else{
        expandBtn.innerHTML='[Collapse]';
        text.innerHTML = expandHTML;
    }
});

const bigBtn = document.querySelector('.big-btn');
const lockBtn = document.querySelector('.lock-btn');

window.addEventListener('scroll',function(){
    const bigHeight = bigBtn.getBoundingClientRect().top;
    console.log(bigHeight)
    if(bigHeight<40){
        bigBtn.style.position = 'fixed';
        bigBtn.style.top = '77px';
        
        lockBtn.style.position = 'fixed';
        lockBtn.style.top = '   127px';
        
    }
    if(this.window.pageYOffset < 150){
        bigBtn.style.position = 'absolute';
        lockBtn.style.position = 'absolute';
        bigBtn.style.top = '200px';
        lockBtn.style.top =  '250px';
    }
});

const linkHTML = `
<p style="font-size: 12px;color:grey;"><i>Finished Manga Series</i></p>
                    <a href="">One Piece </a><i class="fas fa-circle"></i> <a href="">Hunter x Hunter </a><i class="fas fa-circle"></i> <a href=""> My Hero Academia </a><i class="fas fa-circle"></i>
                    <a href=""> Black Clover </a> <i class="fas fa-circle"></i> <a href=""> Jujutsu Kaisen </a> <i class="fas fa-circle"></i> <a href=""> Mission: Yozakura</a><i class="fas fa-circle"></i>
                    <a href=""> Family </a> <i class="fas fa-circle"></i><a href=""> Undead Unluck </a><i class="fas fa-circle"></i> <a href=""> Me & Roboco </a><i class="fas fa-circle"></i><a href=""> Burn the </a>
                    <a href=""> Witch </a><i class="fas fa-circle"></i><a href=""> Sakamoto Days </a><i class="fas fa-circle"></i><a href=""> The elusive Samurai </a><i class="fas fa-circle"></i> <a href=""> Witch </a>
                    <a href=""> Watch </a><i class="fas fa-circle"></i><a href=""> Blue Box </a><i class="fas fa-circle"></i><a href=""> Akane-banashi </a><i class="fas fa-circle"></i><a href=""> RuriDragon </a><i class="fas fa-circle"></i>
                    <a href=""> The Ichinose Family's Deadly Sins </a><i class="fas fa-circle"></i> <a href=""> Cipher Academy</a>
                    <a href="">One Piece </a><i class="fas fa-circle"></i> <a href="">Hunter x Hunter </a><i class="fas fa-circle"></i> <a href=""> My Hero Academia </a><i class="fas fa-circle"></i>
                    <a href=""> Black Clover </a> <i class="fas fa-circle"></i> <a href=""> Jujutsu Kaisen </a> <i class="fas fa-circle"></i> <a href=""> Mission: Yozakura</a><i class="fas fa-circle"></i>
                    <a href=""> Family </a> <i class="fas fa-circle"></i><a href=""> Undead Unluck </a><i class="fas fa-circle"></i> <a href=""> Me & Roboco </a><i class="fas fa-circle"></i><a href=""> Burn the </a>
                    <a href=""> Witch </a><i class="fas fa-circle"></i><a href=""> Sakamoto Days </a><i class="fas fa-circle"></i><a href=""> The elusive Samurai </a><i class="fas fa-circle"></i> <a href=""> Witch </a>
                    <a href=""> Watch </a><i class="fas fa-circle"></i><a href=""> Blue Box </a><i class="fas fa-circle"></i><a href=""> Akane-banashi </a><i class="fas fa-circle"></i><a href=""> RuriDragon </a><i class="fas fa-circle"></i>
                    <a href=""> The Ichinose Family's Deadly Sins </a><i class="fas fa-circle"></i> <a href=""> Cipher Academy</a>
                    <a href="">One Piece </a><i class="fas fa-circle"></i> <a href="">Hunter x Hunter </a><i class="fas fa-circle"></i> <a href=""> My Hero Academia </a><i class="fas fa-circle"></i>
                    <a href=""> Black Clover </a> <i class="fas fa-circle"></i> <a href=""> Jujutsu Kaisen </a> <i class="fas fa-circle"></i> <a href=""> Mission: Yozakura</a><i class="fas fa-circle"></i>
                    <a href=""> Family </a> <i class="fas fa-circle"></i><a href=""> Undead Unluck </a><i class="fas fa-circle"></i> <a href=""> Me & Roboco </a><i class="fas fa-circle"></i><a href=""> Burn the </a>
                    <a href=""> Witch </a><i class="fas fa-circle"></i><a href=""> Sakamoto Days </a><i class="fas fa-circle"></i><a href=""> The elusive Samurai </a><i class="fas fa-circle"></i> <a href=""> Witch </a>
                    <a href=""> Watch </a><i class="fas fa-circle"></i><a href=""> Blue Box </a><i class="fas fa-circle"></i><a href=""> Akane-banashi </a><i class="fas fa-circle"></i><a href=""> RuriDragon </a><i class="fas fa-circle"></i>
                    <a href=""> The Ichinose Family's Deadly Sins </a><i class="fas fa-circle"></i> <a href=""> Cipher Academy</a>
                    <a href="">One Piece </a><i class="fas fa-circle"></i> <a href="">Hunter x Hunter </a><i class="fas fa-circle"></i> <a href=""> My Hero Academia </a><i class="fas fa-circle"></i>
                    <a href=""> Black Clover </a> <i class="fas fa-circle"></i> <a href=""> Jujutsu Kaisen </a> <i class="fas fa-circle"></i> <a href=""> Mission: Yozakura</a><i class="fas fa-circle"></i>
                    <a href=""> Family </a> <i class="fas fa-circle"></i><a href=""> Undead Unluck </a><i class="fas fa-circle"></i> <a href=""> Me & Roboco </a><i class="fas fa-circle"></i><a href=""> Burn the </a>
                    <a href=""> Witch </a><i class="fas fa-circle"></i><a href=""> Sakamoto Days </a><i class="fas fa-circle"></i><a href=""> The elusive Samurai </a><i class="fas fa-circle"></i> <a href=""> Witch </a>
                    <a href=""> Watch </a><i class="fas fa-circle"></i><a href=""> Blue Box </a><i class="fas fa-circle"></i><a href=""> Akane-banashi </a><i class="fas fa-circle"></i><a href=""> RuriDragon </a><i class="fas fa-circle"></i>
                    <a href=""> The Ichinose Family's Deadly Sins </a><i class="fas fa-circle"></i> <a href=""> Cipher Academy</a>
                    <a href="">One Piece </a><i class="fas fa-circle"></i> <a href="">Hunter x Hunter </a><i class="fas fa-circle"></i> <a href=""> My Hero Academia </a><i class="fas fa-circle"></i>
                    <a href=""> Black Clover </a> <i class="fas fa-circle"></i> <a href=""> Jujutsu Kaisen </a> <i class="fas fa-circle"></i> <a href=""> Mission: Yozakura</a><i class="fas fa-circle"></i>
                    <a href=""> Family </a> <i class="fas fa-circle"></i><a href=""> Undead Unluck </a><i class="fas fa-circle"></i> <a href=""> Me & Roboco </a><i class="fas fa-circle"></i><a href=""> Burn the </a>
                    <a href=""> Witch </a><i class="fas fa-circle"></i><a href=""> Sakamoto Days </a><i class="fas fa-circle"></i><a href=""> The elusive Samurai </a><i class="fas fa-circle"></i> <a href=""> Witch </a>
                    <a href=""> Watch </a><i class="fas fa-circle"></i><a href=""> Blue Box </a><i class="fas fa-circle"></i><a href=""> Akane-banashi </a><i class="fas fa-circle"></i><a href=""> RuriDragon </a><i class="fas fa-circle"></i>
                    <a href=""> The Ichinose Family's Deadly Sins </a><i class="fas fa-circle"></i> <a href=""> Cipher Academy</a><a href="">One Piece </a><i class="fas fa-circle"></i> <a href="">Hunter x Hunter </a><i class="fas fa-circle"></i> <a href=""> My Hero Academia </a><i class="fas fa-circle"></i>
                    <a href=""> Black Clover </a> <i class="fas fa-circle"></i> <a href=""> Jujutsu Kaisen </a> <i class="fas fa-circle"></i> <a href=""> Mission: Yozakura</a><i class="fas fa-circle"></i>
                    <a href=""> Family </a> <i class="fas fa-circle"></i><a href=""> Undead Unluck </a><i class="fas fa-circle"></i> <a href=""> Me & Roboco </a><i class="fas fa-circle"></i><a href=""> Burn the </a>
                    <a href=""> Witch </a><i class="fas fa-circle"></i><a href=""> Sakamoto Days </a><i class="fas fa-circle"></i><a href=""> The elusive Samurai </a><i class="fas fa-circle"></i> <a href=""> Witch </a>
                    <a href=""> Watch </a><i class="fas fa-circle"></i><a href=""> Blue Box </a><i class="fas fa-circle"></i><a href=""> Akane-banashi </a><i class="fas fa-circle"></i><a href=""> RuriDragon </a><i class="fas fa-circle"></i>
                    <a href=""> The Ichinose Family's Deadly Sins </a><i class="fas fa-circle"></i> <a href=""> Cipher Academy</a>
`;
const expandLink = document.querySelector('.expand-btn');
const linkContainer = document.querySelector('.link-container');

expandLink.addEventListener('click',function(){
    if(expandLink.innerHTML==='[Collapse]'){
        expandLink.innerHTML = '[Expand]';
        linkContainer.innerHTML = '';
    }else{
        expandLink.innerHTML='[Collapse]';
        linkContainer.innerHTML = linkHTML;
    }
});

const downHTML = `
    <a href="">Categories</a> : <a href="">Browse</a>
    <br><br>
    <a href="" style="font-size:13px;float:right">[Configure Reference Popups]</a><br>
`;

const browse = document.querySelector('.browse');
const categories = document.querySelector('.category-container');
const rotateIcon = document.querySelector('.fa-angle-down');

let isContentVisible = false; // A variable to track the state of the content visibility

categories.addEventListener('click', function () {
  if (!isContentVisible) {
    rotateIcon.style.transform = 'rotate(180deg)';
    browse.innerHTML = downHTML;
    isContentVisible = true; // Set the state to true when content is visible
  } else {
    rotateIcon.style.transform = 'rotate(0deg)'; // Set to 0deg when content is hidden
    browse.innerHTML = '';
    isContentVisible = false; // Set the state to false when content is hidden
  }
});

const languageHTML = `
<a href="">العربية</a> <div class="vertical-bar"></div>
                <a href="">Čeština</a> <div class="vertical-bar"></div>
                <a href="">Deutsch</a> <div class="vertical-bar"></div>
                <a href="">Français</a> <div class="vertical-bar"></div>
                <a href="">Español</a> <div class="vertical-bar"></div>
                <a href="">Bahasa Indonesia</a> <div class="vertical-bar"></div>
                <a href="">Italiano</a> <div class="vertical-bar"></div>
                <a href="">日本語</a> <div class="vertical-bar"></div>
                <a href="">한국어</a> <div class="vertical-bar"></div>
                <a href="">Bahasa Melayu</a> <div class="vertical-bar"></div>
                <a href="">Polski</a> <div class="vertical-bar"></div>
                <a href="">Português</a> <div class="vertical-bar"></div>
                <a href="">Русский</a> <div class="vertical-bar"></div>
                <a href="">Türkçe</a> <div class="vertical-bar"></div>
                <a href="">中文</a> 
`;
const language = document.querySelector('.language');
const languages = document.querySelector('.language-container');
const rotateIcon1 = document.querySelector('.fa-angle-down1');

let isContentVisible1 = false; 
languages.addEventListener('click', function () {
    if (!isContentVisible1) {
      rotateIcon1.style.transform = 'rotate(180deg)';
      language.innerHTML = languageHTML;
      isContentVisible1 = true; // Set the state to true when content is visible
    } else {
      rotateIcon1.style.transform = 'rotate(0deg)'; // Set to 0deg when content is hidden
      language.innerHTML = '';
      isContentVisible1 = false; // Set the state to false when content is hidden
    }
  });


  const fan_feeds = [{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134413701257109624/Chapter_350_Kurapika_DC_Portrait.webp',
    'name':'kurapika',
  },{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134413704834850866/Chapter_46_Killua_HA_Portrait.webp',
    'name':'Killua Zoldyck',
  },{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134413704302178394/Gon_Portrait_HXH_1999_EP62.webp',
    'name':'Gon Freecss',
  },{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134413703803052072/Nen_Diagram.webp',
    'name':'Nen',
  },{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134413703366840370/Hisoka_Morow_YC_Portrait.webp',
    'name':'Hisoka Morrow',
  },{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134413702943223808/Chap_396_-_The_Troupe.webp',
    'name':'Phantom Troupe',
  },{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134413702314070117/2011_Volume_9_Textless.webp',
    'name':'Story Arcs',
  },{
    'url':'https://cdn.discordapp.com/attachments/1110555331492335617/1134413701718487070/Kaito_HXH_1999_EP1_001.webp',
    'name':'Kite',
  }];
  const grid = document.querySelector('.fan-feed-grid');
  fan_feeds.forEach((feed)=>{
    grid.innerHTML += `
    <div class="grid">
                    <img src="${feed.url}">
                    <div class="gradient">
                        <br><br><br><br><br><br><br><br><br><br>
                        <h3 style="color: white;">${feed.name}</h3>
                        <h4 style="color:#636e72;margin-top:-10px ;">Hunterpedia</h4>
                    </div>
                </div>
    `;
  });

  const topBar = document.querySelector('.top-bar');

  window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 100){
        topBar.style.transform = 'translateY(0)';
    }else{
        topBar.style.transform = 'translateY(-100%)';
    }
  });

  const wikiBtn = document.querySelector('.fass');
  const wiki = document.querySelector('.wiki-pop-up');
  const book = document.querySelector('.book');
  wikiBtn.addEventListener('mouseover',function(){
    wiki.classList.add('show-pop-up');
  });

const ko = document.querySelector('.ko');
ko.addEventListener('mouseleave',function(){
    console.log('hi');
    wiki.addEventListener('mouseleave',function(){
        console.log('ho');
        wiki.classList.remove('show-pop-up');
    })
});

