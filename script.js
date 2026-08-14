const imgs=[
'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80',
'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&q=80'
];
const stories=[
['MEETINGS & EVENTS','AfCFTA Council of Ministers Concludes Strategic Retreat in Accra','June 10, 2026'],
['TRADE FACILITATION','Digital Certificates of Origin Go Live in 15 More Member States','June 9, 2026'],
['YOUTH & INNOVATION','Young African Innovators Showcase Solutions for Intra-African Trade','June 8, 2026'],
['INVESTMENT','AfCFTA Investment Forum Attracts Record $2B in Investment Pledges','June 7, 2026']
];
document.querySelector('#topStories').innerHTML=stories.map((s,i)=>`<article class="story"><div class="photo" style="background-image:url('${imgs[i+1]}')"></div><div class="story-copy"><p class="meta">${s[0]}　 |　 ${s[2]}</p><h4>${s[1]}</h4><span class="arrow">→</span></div></article>`).join('')+'<a class="top-link" href="#">View All Top Stories　→</a>';
const latest=[['AGREEMENTS & POLICY','AfCFTA Secretariat and AfDB Sign Landmark Agreement to Unlock $10B'],...stories];
document.querySelector('#latest').innerHTML=latest.map((s,i)=>`<article class="news-card"><div class="photo" style="background-image:url('${imgs[i]}')"></div><p class="meta">${s[0]}　 |　 June ${12-i}, 2026</p><h4>${s[1]}</h4><p>${i===0?'The partnership will expand access to affordable financing for MSMEs and infrastructure across Africa.':'New progress, partnerships and practical solutions advancing trade across Africa.'}</p><a href="#">Read More　→</a></article>`).join('');
const features=[['SUCCESS STORIES','How AfCFTA is Transforming SMEs Across the Continent'],['SECTOR FOCUS','Renewable Energy Trade: Powering Africa’s Growth'],['EXPERT INSIGHTS','Policy Harmonization: The Key to Seamless Trade']];
document.querySelector('#features').innerHTML=features.map((s,i)=>`<article class="mini"><div class="photo" style="background-image:url('${imgs[i+5]}')"></div><div class="mini-copy"><p class="meta">${s[0]}　 |　 June ${5-i}, 2026</p><h4>${s[1]}</h4><p>${i===0?'Real stories from businesses expanding beyond borders.':'Opportunities and expert guidance shaping trade under AfCFTA.'}</p><a href="#">Read More　→</a></div></article>`).join('');
const list=['AfCFTA Secretariat Launches Women in Trade Network to Boost Inclusion','Regional Customs Leaders Advance Practical Trade Facilitation','Dispute Settlement Body Holds Inaugural Consultation Meeting','New Dashboard Tracks AfCFTA Implementation Across Member States','AfCFTA and UNECA Partner on Trade Data Interoperability','Protocol on Digital Trade Enters into Force in 8 Member States'];
document.querySelector('#newsList').innerHTML=list.map((x,i)=>`<article class="list-item"><div class="photo" style="background-image:url('${imgs[(i+3)%imgs.length]}')"></div><div><h4>${x}</h4><small>${['June 2','May 31','May 29','June 1','May 30','May 28'][i]}, 2026</small></div></article>`).join('');
const vids=['AfCFTA Explained: Building One Africa, One Market','Voices of Business: Trading Without Borders','AfCFTA Council Highlights Key Decisions'];
document.querySelector('#videos').innerHTML=vids.map((x,i)=>`<article class="video"><div class="photo" style="background-image:url('${imgs[i]}')"><span class="play">▶</span><span class="duration">0${i+2}:${i?12:35}</span></div><h4>${x}</h4><small>May ${27-i}, 2026</small></article>`).join('');
document.querySelector('#mostRead').innerHTML=[latest[0][1],stories[1][1],stories[3][1],'The Future of Intra-African Trade: Trends, Data & Opportunities',stories[2][1]].map((x,i)=>`<li><span>${x}</span><time>June ${12-i}, 2026</time></li>`).join('');
document.querySelector('.menu').addEventListener('click',()=>document.body.classList.toggle('nav-open'));
