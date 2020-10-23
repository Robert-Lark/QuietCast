import {
	ISOLATE_FEATURE,
	RETURN_HOME,
	DARKMODE,
	ASSIGN_MODAL,
	// SHOW_FEATURE,
	// DELETE_COMPLETED,
} from "../Actions/Actions";

//MIX COVER IMAGES
import QC009 from "../img/QC001.png";
import QC008 from "../img/QC002.png";
import QC007 from "../img/QC003.png";
import QC006 from "../img/QC004.png";
import QC005 from "../img/QC005.png";
import QC004 from "../img/QC006.png";
import QC003 from "../img/QC007.png";
import QC002 from "../img/QC008.png";
import QC001 from "../img/QC009.png";

//ARTIST ALBUM ARTWORK FOR GALLERY
//Drastic Steps
import QC001AAA1 from "../img/artistAlbumArtworkDrasticSteps/hidden_rivers.jpg";

//ARTIST MIX ALBUM ARTWORK FOR GALLERY
//Drastic Steps
import QC001AMAA from "../img/artistMixAlbumArtworkDrasticSteps/boardsOfCanada.jpg";

export const initialState = {
	currentItem: 0,
	interviewInfo: [
		{
			img: QC001,
			id: 1,
			trackId: 812356096,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "DRASTIC STEPS",
			question1:
				"QCR: Hey Drastic Steps - thank you so much for creating such an overwhelmingly amazing mix - it truly is one of the best mixes we have ever heard. People who follow Quiet Calm Records will probably be familiar with you and your mixes but for those new to your sound could you introduce yourself and give a little information on your musical journey. ",
			answer1:
				"Hey Rob, thanks for having my work as a part of the highly enjoyable and innovative Quiet Cast series. I have been listening to these mixes and reading the interviews and having a wonderful time wading through the work of all these amazing artists. Thanks for your kind words. It has been a pleasure mixing with vinyls you referred me to, and this mix, I hope, pays proper tribute to that collaborative musical journey. One of my earliest memories of music is that of my parents and their friends gathering around Hindustani classical and jazz vinyls. Outside, the Darjeeling sunset quietly painted the rolling tea gardens with colors borrowed from mysterious orchids. Soon my parents will move to Calcutta: the dusty 'city of love' that is obsessed with cinema, tea, endless chats, music, literature, cricket, football, and food. For the next two decades, besides school and college, I will try to learn how to play Hindustani Classical on a violin. I was fascinated by the works of Ali Akbar Khan, Nikhil Bannerjee, and Parween Sultana. Along with classical music I also listened to a lot for jazz, blues, and rock. In the US, between finishing my doctoral degree and teaching, I found like minded musical souls and played violin in a funk-jazz band. It was refreshing to play differently- away from the rigors of classical music. It is during this time, as I was being introduced to a wide range of music by my fellow musicians and colleagues, that I got interested in digging for records. Soon I got a cheap mixer and another turntable. The ability to change speeds and pitch created endless musical possibilities.  It will be disingenuous if I don’t mention the amazing artists and visionaries like Jazzy Jeff, Cool Herc, Q-Bert, DJ Shadow, whose work I listen and watch with wonder. I still play the legendary Boiler Room Set of DJ Shadow several times a year. To me the art of soundscaping is playing a fragmented story by juxtaposing and layering pre-recorded sounds such that the composite transcends and transforms the constituents into an altered totality of musical experience. To me it is also a way to listen creatively and actively while paying homage to the artists and their work that I rely on.",
			question2:
				"QCR: Could you take us through your mix and give us a little information about your relationship to the pieces and why you selected them.",
			answer2:
				"First the Hardware: The mix is recorded with a Zoom H6 Handy Recorder in a single take. I use an Allan and Heath Xone 92 Four Channel Analog Mixer, Three turntables and two effects pedals (Boss reverb and delay). It is a vinyl only mix with no edits. My Hindustani classical roots perhaps helped me see how Dustin O'Halloran's ecstatic Sundoor can talk with a choir to create a musical emotion of grandiose mellifluous doom. Alicia Merz's oneiric work towards the end of the mix also creates a sense of desolation and distance. A forlorn voice lifted off by Nils Frahm's serene flutter of a piano piece that follows us into the silence. Max Richter's soundtrack for Nose Dive attempts to convey a sense of momentum with those immaculate violins that naturally lend themselves to a lovely piece by A Winged Victory for the Sullen (Slow Descent has Begun). I allow Richter and Winged Victory to play alongside each other, trying to tease a composite that enriches and transforms the constituents. We then move into the electronic surrealism of Ocoeur. The soundtrack of Circe was a beautiful find from Quiet Calm Records. It gives us the lift-off via Dj Koze's deep house Burn with me that ultimately plateaus into the slow motion solace of Bohren's latest album Patchouli Blue. I could have carried on with Losci and Sarah Davachi but serendipitously the Victoria album played on and I didn't cue it out, instead I changed my mind and opted for some magic-real voice. ",
			question3:
				"QCR: This mix traverses almost every genre we represent here at QCR how do you decide which direction genre-wise your mix will take",
			answer3:
				" I am very thankful to Quiet Calm Records for curating some amazing musical works over the past few years. This 'Tempo Tantrums' mix tries to showcase the range of music that we get from this amazing house. Two self imposed restrictions were: using film soundtracks, and using more than one track from the same album. Given those binders I tried to traverse as much variety as I could to give an  essence of this venue. I often choose tracks on the fly and do not have any tracklist in my mind, only a general idea of possible paths and entry points to different tracks. There are immaculate layers where the mix runs itself and there is almost nothing that needs to be done, it is as if some tracks just find each other even when they don’t intend to. You can just let the two or three tracks play simultaneously with only minor adjustments. I jokingly call this the DJ Lay Z mode. I try to listen to a wide variety of music and show how they can be blended in interesting ways. For example I love mixing Loscil's Chinook with the dreamy vocals of Parveen Sultana, or play with Begum Akhtar's vocals and Bonobo's downtempo works, or let Floating Points' Alaenia transform Floyd's Animals. In each of these cases the tracks play with each other as if they are surprised and elated to have found themselves. Playing different genres throughout a set helps me broaden and push the boundaries of vinyl based mixing especially in a time where playlists often pass as mixes. But it is important to convey that I remain indebted to the people whose work informs and shapes my musical endeavors. It is with humility, care, and sincerity that I approach the works I use to scape sounds.",
			question4:
				"Your mix beautifully weaves a piece from hildur guðnadóttir's amazing score from the HBO series Chernobyl. The last few years have seen more and more underground musicians be used to score film and television. What are some of the standout scores you have added to your collection in the last few years. ",
			answer4:
				"I grew up around South Asian film scores that formed the core of popular culture. It is astounding to see how these filmi songs, these tunes and images, traverse borders and how widely they are celebrated throughout the African continent and the Middle East. Some of the legendary compositions and orchestrations of RD Burman accompanied by his signature Moog were later sampled by downtempo artists in the U.S. This rich heritage where music is an integral element of the silver screen has helped me remain curious about motion picture soundtracks. They provide me with the time and tension needed to enrich the mix and push it in unknown yet exciting directions. Soundtracks are serendipitous. Some of the  memorable soundtracks in my collection that I cherish and often use are, to name a few, Music From Twin Peaks (Angelo Badalamenti), Requiem For A Dream (Clint Mansell Featuring Kronos Quartet),  Short Eyes - The Original Picture Soundtrack (Curtis Mayfield), A Score For Darling (Erik K Skodvin* & Rauelsson), Man With A Movie Camera (Cinematic Orchestra), Nosedive (Max Richter), Salero (Adam Bryanbaum Wiltzie). I am sure I am not doing justice to a lot of other soundtracks, the names of which will occur to me later. I also try mixing a set with one or two soundtracks in my basket. ",
			question5:
				"The last six months have seen an unprecedented upheaval in the artistic world with concerts worldwide canceled/indefinitely postponed. A recent trial run at a suitably socially distanced concert in London was found to be incompatible to the running of a venue as ticket sales were not nearly enough to cover the cost of hosting the performance. The following excerpt is taken from a 29th July 2020 article from the BBC that can be found here: https://www.bbc.com/news/entertainment-arts-53578188 'Only 200 people attended, compared to the venue's normal capacity of 1,250. Venue manager Ally Wolf said the government- backed pilot was not financially viable for venues. 'It can't be the future for live music, it can't be the future for venues,' he said, noting that the show did not make enough money to cover the venue's operating costs, even before the performer's fee was taken into account. Given the fact that this may be the reality for venues for the next year causing many such venues to close permanently - what do you think the landscape of live performance will look like this time next year and in the years following?",
			answer5:
				"It saddens me to see this disruption in the music scene. I am not sure what will happen, and the worst that can happen is more consolidation of power among chains of large venues that will take this opportunity to acquire and take over small ones. I believe there is some place for innovation, for example, I can imagine not so costly drive-in shows in large parking lots or fields where  people can still enjoy some good quality live sound without being unsafe. Or large scale audio-visual projects beamed onto giant screens with good quality sound can combine cinematic elements with live music and physical distancing. I believe we can see a renaissance in radio shows and podcasts, and also more places like QC that showcases mixes and interviews of artists will be welcome. Perhaps we will find our roots in listening more than seeing and listening more intently, perhaps. However, for the foreseeable future indoor venues might not be able to gain the trust of the public to break even, and that is very unfortunate.",
			question6:
				"QCR: You yourself have taken advantage of the rise in live-streaming, hosting several amazing performances online. What is your set-up when making these happen and what are your future plans in this area. Where and when can we interact with your livestreams?",
			answer6:
				"Last spring I was mixing some quiet listening sessions where people will bring in their favorite rug to lie on and listen to an hour long soundscaping. It was quite well accepted by the small batch crowds I was mixing for. Listeners enjoyed the experience of silent-time where the mind is allowed to be overwhelmed by sound waves. When the pandemic hit and everything in summer was cancelled, my listeners encouraged me to livestream. It was fun to do some shows over twitch.tv/drasticsteps, which I felt, thanks to your suggestion, is a great platform, and yet significantly underutilized by DJs. The easiest set up for me was to take a line out from my mixer into a Zoom H6 handy recorder, and then using a line out from the H6 into a Zoom Q2n-4k camera. The Q2n then streams both the audio and the visual onto my twitch account via the Open Broadcasting Software. The listeners’ feedback has been great so far.  I have concentrated more on the quality of sound than that of the video. The good thing is that people can listen to my hour long mixes every alternate Friday from the privacy and comfort of their home. The key here is a good internet connection, and that is of course a challenge as I don’t have control over the listener’s surroundings. But still the overall experience has been overwhelmingly positive.",
			question7:
				"Your record collection is viewable on Discogs (an impressive 1100 titles) it is interesting to see the breadth of tastes you foster. You have Adele nestled in next to a compilation of live concerts that took place in Zaire in 1974 a deeper dig reveals classics like a 12' of Goldie's 'inner city life', 'The Wall' by Pink Floyd & Kruder & Dorfmeister's 'K&D Sessions' along with possibly 75% of the Quiet Calm Records store.Is there a unifying theme you see when you browse your collection, what is it that makes you decide to add a title to your collection? ",
			answer7:
				"Such a wonderfully creative question, this one. There are quite a few aspects that drive my wishes to procure particular vinyls, but one unifying theme is my desire to expand the field of listening by being open to ideas and sounds from around the world. More often than not I am attracted by the cover art and the liner notes.Eric Holm’s Andøya is a case in point.A lot of times I will get a record because I have come across an artist who was featured in some other record I have.I often go digging in different cities and find wonderful gems, like  Selim Sarwat* - الليل والقانون = Kanoun In The Night or Yesudas - Voice Of The Soul.Sometimes I will hunt down artists or singles that other artists have used in their mixes  or compilations.For example, I had to get Darondo - Let My People Go  after listening to it in Bonobo - LateNightTales, or I was obsessed with getting my hands on a vinyl issue of Bless the Telephone by Labi Siffre after I heard the remix called Making Days Longer by RJD2 - Since We Last Spoke.My interest in playing Hindustani classical on the violin also compels me to collect and listen to vinyls from South Asia.I do try to keep my collection around 1000 records, give or take.So even if I don’t want to, I sell some old stuff to keep my collection from getting out of hand and unnavigable.Needless to say that the records that you have curated for me have taken my collection in interesting directions and have surely enriched my mixes in more ways than I can think of.If not for QuietCalm Records I doubt that I will have a soundtrack of Circe or get to know the intriguing musical worlds of ambient, electronic, and neoclassical forms.",
			question8:
				"QCR: You mentioned in a previous interview that you came rather late to the party when it comes to ambient and neo-classical music. As someone who has long had a deep listening sensibility when it comes to engaging with music - do you feel that there is anything about the releases you have added from Quiet Calm Records that transcend the rest of your collection or are they merely great examples of another style of music? ",
			answer8:
				"Quiet Calm Record has been and continues to be my only source for the contemporary and diverse range of  neoclassical, neojazz, melodic techno, and ambient works. It does stand out from the collection in the sense that I find myself not only using them in my mixes but also listening to them after a hectic day of teaching and research. I wouldn’t have known a lot of artists whose works I have come to admire and create with, if not for the suggestions and collaborations with Quiet Calm Records. From Bohren to Birds of Passage and Loffler to Field Rotation my collection from QC opens up this vast arena of creativity. The availability, access and knowledge base for all those wonderful vinyls in one place is definitely a boon to any vinyl user. Moreover, it is a joy to write about this music as I listen to them, and I am thankful that some of my responses (and nor reviews per se)  were appreciated by the artists. In any case I like the challenge of interpreting music in words in order to explore the possibility and limitation of language, and the records from Quiet Calm have helped me explore those creative pathways.",
			question9:
				"QCR: You are a 100% vinyl aficionado - what are your thoughts on what could be referred to as the 'inconvenience' of the format?",
			answer9:
				"Vinyl slows me down. It keeps me tied to a place. And it takes a lot of time to set up and break down a set. Also, one needs to get up and change sides and listen to older records because a software is not going to play from your archive of songs. It’s you who have to take the record out of the sleeve and drop the needle. Hence, my record habit forces me to go listen to old records or try to find a time to do so. Otherwise the older stuff never gets played and every gathers dust. Last time my partner and I were supposed to move we convinced our landlord to sell the house, and, half-jokingly, the weight of vinyls and books were a deciding factor. But it is good that I cannot rely on an algorithm to suggest songs to me with key and tempo matches. I enjoy the dread of fumbling for a vinyl when the track on the other is running out during a set. Vinyls point out my mistakes and help me improve my sound and its delicacy. A vinyl only way of life is a difficult one but it is a well examined life - one that is worth enjoying to the fullest. I have discovered more from digging vinyl than from some streaming service.",
			question10:
				"QCR: You are a devotee of labels like Denovali, Erased Tapes, Kranky & Sonic Pieces if you could recommend one or two releases from each label to someone unfamiliar with their releases which would you choose?",
			answer10: "Sonic PIeces:",
			question11: "BODY9",
			answer11: "Denovali:",
			question12: "BODY1",
			answer12: "Erased Tapes:",
			question13: "BODY3",
			answer13: "Kranky:",
			question14:
				"I know one of your favorite releases was the amazing box set Erased Tapes put out for Record Store Day to celebrate their tenth anniversary. To achieve this they gathered together everyone on the roster and camped out at Nils Frahms studio in the legendary Funkhaus in Berlin and had each artist collaborate with another (or several others). If you could gather artists together in a similar fashion where would the environment be and which artists would you put in this short term musical community?",
			answer14: "Anirbans Musical Adventure Camp.",
			question15: "Geographic Location:  46.8691° N, 121.5175° W.",
			answer15:
				"Participants: High Planes, Otto Totland, Birds of Passage, Flying Lotus, Hecq, Piano Interrupted, Christian Loffler, Burial, Federico Albanese, Sarah Davichi, Field Rotation, Masayoshi Fujita, Bohren & Club Der Gore, Floating Points, Rauelsson, Cinematic Orchestra. Title of 3xlp box set of recordings from the camp: How to Paint Silence. (Adapted from Lawrence Ferlinghetti’s title for a book of poems called “How to Paint Sunlight.”) ",
			question16:
				"QCR: If you were put in charge of curating a day long music festival what would the lineup look like.",
			answer16:
				"This is quite a fun question, but also a difficult one. After going back and forth I finally wrote 30 names and asked a program to pick randomly from that list.  I then put them in order.",
			twoPm: "Kadhja Bonet",
			fourPm: "Amadou & Miriam",
			sixPm: "Snarky Puppy",
			eightPm: "Piano Interrupted",
			tenPm: "The Thing With 5 Eyes",
			midnight: "Kruder & Dorfmeister",
			twoAm: "Stars of the Lid",
			fourAm: "Hecq",
			sixAm: "Loscil",
			artistAlbumsCoverArt: [QC001AAA1, QC001AMAA],
			artistAlbumsMixCoverArt: [QC001AAA1, QC001AMAA],
			modal1: {
				artistAlbumTitle1: "Hidden Rivers - Where the moss grows",
				artistAlbumInfo1: "Created by the founder of Serein",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal2: {
				artistAlbumTitle2: "Boards of Canada - Not Sure",
				artistAlbumInfo2: "An early album from the masters of downtempo",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal3: {
				artistAlbumTitle3: "www.quietcalmrecords.com/store",
				artistAlbumInfo3: "test13",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal4: {
				artistAlbumTitle4: "",
				artistAlbumInfo4: "test14",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal5: {
				artistAlbumInfo5: "test15",
				artistAlbumInfo6: "test16",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal6: {
				artistAlbumInfo7: "test17",
				artistAlbumInfo8: "test18",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal7: {
				artistAlbumInfo9: "test19",
				artistAlbumInfo10: "test11",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal8: {
				artistAlbumMixInfo1: "test1",
				artistAlbumMixInfo2: "test12",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal9: {
				artistAlbumMixInfo3: "test13",
				artistAlbumMixInfo4: "test14",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal10: {
				artistAlbumMixInfo5: "test15",
				artistAlbumMixInfo6: "test16",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal11: {
				artistAlbumMixInfo7: "test17",
				artistAlbumMixInfo8: "test18",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
			modal12: {
				artistAlbumMixInfo9: "test19",
				artistAlbumMixInfo10: "test11",
				artistAlbumUrl1: "www.quietcalmrecords.com",
			},
		},
		{
			img: QC002,
			id: 2,
			trackId: 812356096,
			soundcloudUrl:
				"https://soundcloud.com/quietcast/birds-of-passage-quiet-cast",
			display: true,
			bodyDisplay: false,
			title: "BIRDS OF PASSAGE",
			question1:
				"QCR: Hey Alicia, Thanks so much for taking the time to answer a few questions. We are huge fans of yours over this way and have all your albums constantly on rotation in our office.  You have also provided us a rare & fantastic mix. Please take us through it - where was it recorded and what would you like people to know about it.",
			answer1:
				"AM: Hi Rob :) Thanks so much for inviting me to answer some questions and submit a mix. This is a group of songs I put together; most of them are from the bands who I played with on the last tour. It was so beautiful meeting all of them and I wanted to pay a tribute to them of sorts. The rest are tracks of some of the music I like to listen to.",
			question2:
				"QCR: You masterfully combine drone & vocals in a way that is unmatched. Take us on a tour of your studio - what are your go-to bits of hardware/software/instruments that you use to achieve such evocative & haunting music. ",
			answer2:
				"AM: Electric guitars, synth, piano, cello, violin, bamboo flutes, sounds I make around the place with various things, field recordings. + various reverb and delay pedals and a very old rubbishy but cool sounding amp. Sometimes I use an unimpressive mic to create a very low fi sound, other times I use one that picks up my voice very well (a Rode NT1A). I don’t often record instruments straight into the computer as I like the sound of something that has been recorded more lo-fi. For live shows, I use the VoiceLive 3 Extreme pedal. It suits me very well and I also use the Rode mic as any other mic doesn’t pick up my voice ..it’s very quiet and I am often singing almost at a whisper.",
			question3:
				"QCR: Next year will see the 10th Anniversary of your first album ‘Without the world’. Recently your entire back catalog of albums was re-issued by Denovali. How do you feel listening back to these early albums after all these years?",
			answer3:
				"AM: I don’t actually listen back. But maybe I should. I haven’t listened to the album ‘Without the World’ in so long..I would probably appreciate it now. I think it’s much more minimalist than my later stuff, and I really like that minimalism.",
			question4:
				"QCR: Your first few albums have the ‘Mastered by Nils Frahm’ stamp on them - what was it like working with Nils back in his Durton Studio days. ",
			answer4:
				"AM: I feel very lucky to have been able to have Nils Frahm master my album. I reached out to him as I was looking for someone to master ‘Winter Lady’. We worked on it remotely and the whole experience was a breeze (on my end anyway, hopefully it was for him too, hehe). I remember he spoke quite highly of Waltz While we Sleep, which I was honoured to hear. He did an incredibly amazing job and he seems like a lovely person. I’m really happy I asked him to do it as he added something really special with his magical mastering skills. I haven’t seen him perform live but I really hope I get to some time.",
			question5:
				"QCR: You & I both grew up in New Zealand, a small group of islands far from anywhere else, in the South Pacific. How has this isolated island influenced your music? ",
			answer5:
				"AM: Hmm, well I guess the isolated island of New Zealand has had quite an influence on my music. I am quite an isolated person in general. New Zealand has this stillness about it that allows one to exist quite peacefully.  It’s quite weird in New Zealand wouldn’t you agree? It’s easy to feel out of touch with the rest of the world, which isn’t necessarily a good thing, but does somehow allow a certain calm in everyday life. I’m never sure what the cause of my extreme case of introvertness though, may have nothing to do with growing up in New Zealand. But I also think growing up and living there allowed me to be somewhat free from convention, which comes out in my music. It possibly allows me to withdraw too much though. These days I am mostly completely cut off. I abhor social media, everything about it seems mediocre and exhausting. I don’t want to feel this way, but its inauthenticity makes it difficult for me to have anything to do with it. But this cuts me off from my listeners and they may think I’m not making music anymore or that I don’t appreciate them (I appreciate them more than I can ever say), as I offer no updates etc, and hardly a glimpse into my personal life. But I am writing and recording music and I will be releasing it when it’s ready. My children are growing up and I spend as much time as I can with them. We live a quiet, happy life. I just wish it was closer to Europe.",
			question6:
				"QCR: In 2019 Denovali re-issued your back catalog, along with the LP’s being repressed the artwork was retooled. The album art on your releases is beautifully cohesive. What can you tell us about it? Is it made in conjunction with the albums being put together or is it a separate project entirely?",
			answer6:
				"AM: My brother Bruno, an amazingly talented person, outstanding artist and musician, has done all the artwork for my albums so far  for me. I relay the vision I have for the cover/artwork to him and he is able to turn it into a dreamy reality. I sing back-up vocals on his albums in return, so we just help each other out. He and I are working on a new project together which I’m really excited about. He also played guitar for me on this recent tour, which I’m extremely grateful to him for.",
			question7:
				"QCR: I was lucky enough to catch your performance at the Funkhaus in Berlin at the tail end of November. It was an experience that really defies description all I can say is that it was truly flawless and breathtaking. How do you approach performing live? Do you bring most of your studio gear with you?",
			answer7:
				"AM: Thank you so much for your kind words. I really appreciate that so much. Performing live has always been a bit tricky for me. I find it hard to get the sound across as I’d like it to sound. It gets complicated and putting so much faith in the sound engineers, who are lovely, but understandably, it’s difficult when they don’t know one’s music, and the music is a bit unconventional, to have it certainly sound the way I want it to. I bring as much of my own equipment as I can to make that possible, but it’s difficult traveling and touring with a lot of equipment, when I’m flying and taking trains etc, so I don’t get to bring as much of my own stuff as I’d like to. So it’s more of a compromise which I’m still trying to smooth out.  If I didn’t have to worry about the technicalities, it would be heaven.",
			question8:
				"QCR: The words ‘Cooper Cult’ are often seen near your name when diving into Discogs. What can you tell us about the cult?",
			answer8:
				"AM: Cooper Cult was really fun while it lasted. It was a superb little side project which I started with my then husband. We wanted to help artists out who wanted to release their music, and because we love(d) their music. Underground and on a small scale suited us perfectly. It broke up when we did, but we do sometimes talk about starting it up again, which would be really wonderful.",
			question9:
				"QCR: What title would you point people towards to get a good sense of the aesthetic of Cooper Cult?",
			answer9:
				"AM: I always thought the releases worked so cohesively together so I’d find it difficult to choose one... so I’d say that any you hear would be a good example! :)",
			question10:
				"QCR: One of my all-time favorite pieces of music is ‘Calbombe Camoufle Fretin’ by the Dale Cooper Quartet & the Dictaphones. Can you tell us how your relationship with the French Darkjazz Meistro’s formed and what it is like working with them?",
			answer10:
				"AM: I love their music so much. I don’t remember who suggested it, but I’m pretty sure it was actually how we first got in touch.. that is, we decided to try a collaboration, which I was delighted to partake in, and it worked out really well. They are honestly positively lovely, and it was altogether a really pleasant and heart-warming experience.",
			question11:
				"QCR: Can we expect any more collaborations by the two of you in the future?",
			answer11:
				"AM: I do hope so. I haven’t done any collaborations with anyone for a while, though there are a couple I’m working on at the moment.",
			question12:
				"QCR: My favorite piece from your early work is called ‘Bullrush in the Sun’, a rather deep cut from a 12’ you released with I’ve Lost on Heat Death//Already Dead//Cooper Cult back in 2012. How did that release come about and how do you feel looking back on it seven years on from its release.  ",
			answer12:
				"AM: Bobby Jones and I were in touch back and forth and we had the idea to collaborate. He sent me a track and I worked on it and that is the track ‘I Was All You Are’. It’s a beautiful track and I still love it. I have fond memories of working with Bobby. Bullrush in the sun is an homage to growing up in New Zealand  (the happy parts, though tinged with the ominousness of life). I wrote it at a time when I was pining for the past. To me, I Was All You Are is related in its content and meaning.",
			question13:
				"QCR: You were featured in Indie Rock Mags overwhelming salute to the way Twin Peaks has influenced music. Its influence is quite clear in your aesthetic. What can you tell us about your relationship to the world of Twin Peaks and why do you think it has had such a profound effect on music/musicians. (To give some context to the reader in 2018 Indie Rock Mag released 16 compilations featuring almost 200 musicians and bands from 35 countries in the fields of experimental / ambient music, electronica / IDM, noise, post - rock, indie pop / folk.Each track a salute to the show and it’s world.)",
			answer13:
				"AM: I think it is just so full of beauty and intrigue. Beauty and also the sadness and darkness of life. And it always has such depth. Its mystery and atmosphere is what draws me in most. It evokes such emotion and also oozes ‘cool’. It’s hard to describe it in words, but it must profoundly speak to every artist in some way, to every person who has questions about life and existence.",
			question14:
				"QCR: Thanks again Alicia for answering some long-held questions and for providing such a fantastic mix. One final question; Aside from the artists, you featured in the mix, what other musicians are you listening to a lot these days, any recommendations?",
			answer14:
				"AM: I mostly listen to classical music at the moment, and dark jazz like Bohren and der Club of Gore. And I especially like to listen to people who are making music for the sake of it and not just to get the biggest following they can etc.. I’m always looking out for new sounds to listen to, so send me your recommendations anyone!:) Thank you so much Rob..my pleasure to answer your questions and provide a mix. ",
		},
		{
			img: QC003,
			id: 3,
			trackId: 775142623,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Christoph Berg",
			question1:
				"QCR: Hey Christoph, Thanks so much for taking the time to answer a few questions. You have also provided us with a fantastic mix. Please take us through it - where was it recorded and what would you like people to know about it.",
			answer1:
				"CB: Hey Rob, thank you for inviting me to do this one for your Quiet Cast series. The selection of pieces is actually what I would consider to be at least some sort of an intersection between my personal record collection and the musical focus of Quiet Calm Records. That said, I couldn’t resist pushing the latter a bit here or there.",
			question2:
				"QCR: You masterfully combine acoustic & electronics in a way that is uniquely your own. Take us on a tour of your studio. How has it changed when comparing the tools used to create albums like Paraphrases, Conversations and Acoustic Tales against your latest epic; Tape Anthology Vol 1?",
			answer2:
				"CB: Getting rid of the computer for a significant portion of the production is most likely the main change of tools that I applied over the past years. It still is an integral part of the final mixing work though. But I guess that the most recognizable change compared to Paraphrases, Conversations and Acoustic Tales might be the fact that the violin is no longer taking the lead in instrumentation on Tape Anthology. Right now, the core pieces of my studio setup are a good bunch of old tape machines, a few cassette tape players and an extensive amount of second- hand reels of tape that I now use to collect my own instrumental and field recordings — some of these tapes I am certainly going to destroy during the creation of the next record * laughs *.",
			question3:
				"QCR: Tape Anthology Vol 1 is not only your darkest offering to date but quite possibly one of the darkest albums in our store right now. A very exciting twist in the road on this musical journey you have taken us on all these years. Can you introduce the album to us? Give us some information on the process of composing it and what caveat’s you would give to a fan expecting a release similar to your last solo LP Conversations? ",
			answer3:
				"CB: I’m not sure if I would consider Tape Anthology Vol. 1 to be my darkest album to date, but it is really interesting to get this sort of feedback, especially when it is not in line with my personal impression. I agree though that the album certainly differs from the music I have written before — it even may appear quite academic at times, not only because the notation for musique concrète is remarkably different compared to writing a score of an instrumental composition. Working with a tape archive of my own instrumental and field recordings initially involved a lot of time and effort to review and sort the existing material, prospecting certain sounds and timbres to work with.Then I started to cut, rearrange, destroy and reassemble these selected recordings, recorded the result on other tapes and started this process over and over again using several tape machines.I also let the tape machines record each other during their recording processes.Long story short: It’s been a mixture of well- planned recording setups and completely improvised approaches.",
			question4:
				"QCR: The words ‘tape manipulation’ are seen more and more these days, for the unenlightened, what is tape manipulation?",
			answer4:
				"CB: Tape manipulation has become almost obsolete since the standard recording process does not involve tape machines anymore. All of this can nowadays be done digitally “in the box”. I will try to use a very simple picture here: just take the splicing — today you simply record a sound file into your Ableton Live set, cut it into pieces, rearrange them, delete some fragments here and there, reverse one or two snippets and then merge them again. Ready. Also changing the pitch and speed is easily done digitally with a button and a slider. Doing all that with a tape means actually manipulating a physical recording. Now I’m taking it from there in non-technical terms: You have a palpable surface. A mechanical record head of your tape machine will be using that dedicated surface to fix a recording on it. A mechanical playback head will read that surface and translate it into sound. This means that you can physically manipulate tapes (and tape machines) by interfering in any single part of the processing of the tape by the tape machine pretty much any way you want. But when doing so, always keep in mind that there is no ‘command Z’ on tape machines.",
			question5:
				"QCR: Our favorite piece off your latest album is ‘Happy, in human terms’. Could you flesh this track out a little and tell us what was involved in the creation of it.",
			answer5:
				"CB: Glad you like it. “Happy, in human terms” is basically a sound collage I built around a tape experiment with spoken word. As you might have seen in the credits, Midori Hirano was kind enough to let me experiment with recordings of her voice, basically some outtakes from a recording session for a radio project where she volunteered helping out with moderation of a programme in Japanese. For me, listening to languages that I do not understand is like listening to music. So I decided to heavily manipulate the vocal recordings to make sure that nobody will have the chance to understand a single word. It is a fantasy language after all. My hope was to direct the focus on the melodic side of spoken word eventually.",
			question6:
				"QCR: Despite it not making an appearance in your own compositions (unless there is a secret alias we are not aware of) you are a passionate devotee of Free Jazz. As possibly one of the least accessible genres out there how would you direct an interested person wanting to dip their toe into that world?",
			answer6:
				"CB: Free jazz or improvised music in general probably demands some more attention than some other genres do but apart from that I would not necessarily agree that it would be less accessible by default — at least when our reference is an interested person. The main requirement to really immerse yourself in yet unknown forms of music is openness and appreciation for the craft.",
			question7:
				"QCR: You have been organizing events in Berlin called ‘Pattern Dissection’ (great name) with the most recent featuring Farida Amadou, Liz Kosack, and Dag Magnus. What can you tell us about the idea behind these events?",
			answer7:
				"CB: Pattern Dissection is a project I’ve set up with a friend of mine, Stefan Lingg. He actually came up with the name (credit where credit is due). It started as a radio show with a focus on free jazz and improvised music at the Berlin-based community radio station Cashmere Radio and we slowly took it from there. Now we are also curating events where we bring together Berlin-based and international musicians that ideally have never performed together before. Basically, we are doing our best to provide a platform to celebrate and support the art of improvisation.",
			question8:
				"QCR: Aside from the titles featured in your mix - what artists/releases are you enjoying at the moment. ",
			answer8:
				"CB: That’s always a tough one since I am a heavy collector of music and name-dropping simply isn’t my thing and I tend to stick to this principle even today, I am afraid. Hope that’s okay.",
		},
		{
			img: QC004,
			id: 4,
			trackId: 812356096,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Jan Kleefstra",
			question1:
				"QCR: Hey Jan, thanks so much for answering some questions for us. We are huge fans so it is a real honor to host you. You are incredibly prolific with an immense amount of projects attached to your name, could you just give us a quick run-through of your current and past projects for those who may be unfamiliar.",
			answer1:
				"JK: I will try to make it short. For me, it all began when I asked Rutger ‘Machinefabriek’ Zuydervelt by email if I was allowed to use some of his music for my poetry performances. He answered ‘why not make something new together’. So I set off one afternoon with my brother to Amsterdam where Rutger invited Mariska Baars also. We never met before, but spend one and a half-hour in a studio and the first Piiptsjilling was born. From that moment on I invited people I met or with whom I would like to make music to my home, organized a small tour and went in the studio in an old farmhouse nearby our home village. And almost 13 years later I find myself on a lot of releases with incredible musicians, like Greg Haines, Olga Wojcieckowska, Rutger Zuydervelt, Peter Broderick, Danny Saul, Gareth Davis, a.o., and above all my brother Romke. I also organized(together with a local organization, called Popfabriek) and participated in a few projects to work a.o.with Icelandic, Japanese, Norwegian and Belgian musicians and filmmakers. All these things brought me with my Frisian poetry on stages in Tokyo, Prague, Budapest, Krakow, London, Manchester, and other great places.We also played all the great festivals here in the Netherlands.And it still amazes me that my brother and I lived through this all.That our work is released and broadcasted all over the world and reviewed so well.It wonders me every time I watch the pile of releases in my room, but it also makes me grateful and proud.",
			question2:
				"QCR: Generally, I find it harder to listen to music with words. Since my first encounter with your records however, I have been drawn in by the mysteriousness of the language you speak. I find myself listening to it as another instrument & often hesitate to read the English translation for fear it will break the spell. How do you feel about this form of engagement with your poetry?",
			answer2:
				"JK: I feel fine with that engagement of my poetry. For me the poetry stands not on its own, it is part of the whole and for me it should always be ancillary to the music or maybe at some moments at a same level. For me it is hard to listen to myself as you experience it, because I understand every word I say. So for me the experience of our own work can never be the same as people experience it while not understanding my language. But I know what you mean. I am for instance a great fan of the first few works of Es from Finland. He uses voice also and uses the Finnish language. I experience that also as part of the music as an instrument, because I don’t know what the voice is telling me. So I am fine with every experience. Of course in the end I would like people to read my poetry also.That is why I put translations along.I am convinced I have a message to tell, especially in these days of climate change, loss of biodiversity, the harming of the earth and the unrest we create for the elements.That is what my poetry is about.",
			question3:
				"QCR: Tell us a little bit about the language you use when reciting your beautiful poetry on a release.",
			answer3:
				"JK: I write in two languages, Dutch and Frisian. Frisian is a small minority language in the northern part of the Netherlands. It is a very old language and still spoken by a few hundred thousand of people. I grew up with that language. We used it at home and amongst friends. Therefore this language comes very close to me and comes closest to my soul and being and is for me also connected to the ground I was born on. So that language is my nature tongue, is very rich of sound and touches my emotions more than any other language. For me it is a natural thing to use that language in comparison with the music, because it has a good sound and sometimes it allows me to almost sing. Also the combination of my poetry with music lifts my poetry to an emotional level that cannot been reached without the music. For me the music represents the elements, that are the main subjects in my poetry. Dutch is a language I learned.It allows me to write in a more abstract way, because it doesn’t come so close to the sentiment and my emotions.It is not a very soundful language, so I don’t use it on music.In Dutch I release more traditional collections of poems in books.",
			question4:
				"QCR: As mentioned earlier you (and your brother) are immensely prolific artists, I can count at least 25 titles spread across multiple decades that feature you. What are some of your favorite/most memorable pieces that you have worked on?",
			answer4:
				"JK: That is a tricky question. I don’t have specific memorable pieces. In fact they all are. They all have their own stories. But there are two collaborations that I like the most. When I am part of that collaborations I feel I am in a sort of safe space in which I can come very close to my words and the senses of my words. There is all the confidence and safety to let go of my words. Though they are totally different. The first one is Piiptsjilling. That is mostly because of the ease to work with Rutger and the certainty that all we do will always be good and sincere. It always has a high quality and a sort of naturality, and that feels safe. And we always have a lot of fun, so never any arguing or things like that. The second is the Alvaret Ensemble.That is because we work with such great gifted musicians, that every time for me that feels like an honor to be part of.And the performances are always of immense intensity, very fragile and very beautiful.It is not the easiest collaboration, but surely I wish we could be there forever.",
			question5:
				"QCR: The Alvaret Ensemble could easily be considered a supergroup with such luminaries as Greg Haines, Olga Wojciechowska (Strie), Peter Broderick, Martyn Heyne & Hillary Jeffery (TKDE & TMFDJC) and mastering by Nils Frahm & Taylor Deupree. How did the ensemble form & is it true that everything is improvised? ",
			answer5:
				"JK: We had a few small tours in England, Japan and the Netherlands with Greg Haines and Danny Saul as Liondialer. And we came together in the project Seeljocht with also Nils Frahm and Peter and Heather Broderick. There also Sytze Pruiksma joined and from that we came with the idea to make something with Greg and Sytze. I knew Greg his first solowork in which Olga also appeared, and for me that was almost the most beautiful music I ever heard. It was a strong wish for me to make something with them, because I am so impressed by his work. Because I thought that music was from another level, I first didn’t dare to ask him, but suddenly all was arranged. Greg was living in Berlin and he organized the Grünewald kirche and all the musicians that came along and the recording by Nils. It were amazing three days of recording. Olga also joined there. I am still very proud of that first album, because it brought me what I was hoping for. After that we went to Iceland, with the four of us, to work with for Icelandic musicians and three videoguys and played for 8 days on a big festival with the Icelandic people in the Netherlands.From that we made the album Skeylja. And now there is the third album, called ‘Ea’. All the music is improvised.It always is, in every project we do.We arrange a place and someone to record and then create the right atmosphere to make music.The only thing we talk about is the mood or the note that the musicians are going to use.And most of the time nothing is said and the music arises by itself.I use poems, but I never know which one.I try to find the right words for the music they are playing.My poetry is not improvised but connects to the melody and mood of the music.",
			question6:
				"QCR: I saw a rare yet incredible performance from you guys back in 2013 at the Denovali Swingfest in Essen. At the tail end of the performance, Nils Frahm came out and started bashing the ivories next to Greg - it was truly a moment I will never forget. Afterward, you mentioned to me that Nil’s was present at Grunewald when you recorded the sessions but the group decided to leave his parts out of the final album. As an insane Frahm fan, I have to ask - will those sessions ever see the light of day?",
			answer6:
				"JK: I am glad you enjoyed Nils on stage. I will say no more about that. No, those sessions will never see the light of day.When you are in church for three long evenings and nights to record, the concentration and focus cannot be 100% all the time.You need moments to relax and play a bit.That is when Nils joined to have some fun or to have a break.It was no seriously being part of the recordings, but since he was there and there was a magnificent grand piano, he could not leave that untouched.",
			question7:
				"QCR: One curiosity about your first LP is the very interesting track titles - each consisting of three letters. What can you tell us about the idea behind naming the pieces in such a way. ",
			answer7:
				"JK: Well, it is always a question how to name improvised pieces. We almost all agree that pieces should not have a name at all, because that suggests some kind of idea, or atmosphere, or meaning, or whatsoever. There is only the music and the poetry and there should not be any distraction in listening by thoughts about a title. I never use titles for my poems, because I know people will read the poems mainly to find a connection between the poem and its title. But for the mastering and for connecting people to your release, it is good to have some sort of name.Therefor we came up with the idea to make abstract titles with no meaning at all.I just found a few letters from my poems and combined them in no existing words or figures.I liked the abstract idea behind it.It starts people wondering.And that is what art should do.Start wondering.That is also what our music should do.But is also confuses.So for ‘Ea’ we decided to find words in the poems and connect the titles to the poems used in the pieces.",
			question8:
				"QCR: Six years on from the last Alvaret release we now have the amazing ‘EA’ to dive into. Tell us a little bit about the process of putting this together.",
			answer8:
				"JK: I mostly listen to quiet, intense, sincere and minimal music. Therefor I still be able to listen to the first Alvaret release. I had this wish that we would once try and make an album that would be even more intense and quiet than the first album. That was my challenge to take off. And I just wanted to make a new Alvaret just to be together and because I like this collective so much. I got to know Joana Guerra through another project and I really would like her to join, so we could have violin and cello joining our sound. But then came the challenge how to pay it all.The costs of recording, traveling, staying, and more.I got some support of the Popfabriek and I arranged a few performances the days before where we could gain a bit of money also.These performances lead us to the recording.We never played in this combination before, so we could try some things and we could get to know each other musically(and otherwise) during these performances.With that we went into the recordings. I hired a church in Leeuwarden where it was allowed to record and then we were there for two days and a last day with a closing performance.All these hours of recordings went to Greg.He made a first choice and then everyone listened to it and took out there most favorite parts.Greg went on with the  parts with the most likes and made a record out of it, that finally lead to ‘Ea’.",
			question9:
				"QCR: When I listen to the music put out by you and your brother I am always amazed at how perfectly your poetry wraps around the instrumentation. Do you have a particular method for pulling this off? Does the poetry come first and Romke experiments around it or is it the other way around?",
			answer9:
				"JK: I have no idea how that works. Romke and me started to go to mostly open poetry stages, where we were the only ones to use music during the reciting. I think I learned a lot from these challenges and the way my poetry could connect to the sound of Romke. There is the poetry. I take a lot of poems to the recordings. The musicians just start making music and I try to connect with a poem that suits the melody and /or the atmosphere. Then I decide myself when to recite. I think it all depends on good listening and concentration and a connection with the music. Nothing is agreed upon. For me there are a few things important. One is that I am in the same room with the musicians during the recording. I can see everybody and see what they are doing. So the voice and the music are recorded at the same time and not spoken when the music is already there. It all has to be one performance, one organic whole. Second is that my voice is not above the music. I mean no louder than the music or so. My voice has to be part of the music as an instrument. It has to take part in the music and not stand on its own. During life performances it allows me to improvise with that even more. Because then I can speak softer or louder whenever it feels like it. ",
			question10:
				"QCR: What is next for the Ensemble? Any tours on the horizon?",
			answer10:
				"JK: I don’t know. Of course, we would like to play music live and be together again, but the thing is we have no promotor and we are hardly ever invited to come and play somewhere. So if we want to play, we have to arrange that ourselves. And I don’t know if anyone feels like it, to put a lot of energy in that. I did that for a long time, but I won’t anymore. So if nothing happens, than nothing happens. The performances so far though were always amazing experiences.And sometimes people forget that they experience something unique.No performance will ever be the same.And for us that is the big challenge to always make new, beautiful music together and be part of something special. The Alvaret Ensemble now consist out of Greg, Olga, Joana, Romke and me.So we have not much gear to carry with us.Travelling should be quite easy.But we are living far apart, so it takes some effort to get us together.Still I hope we can get together somewhere and play live again, because that is the most rewarding thing to do with people you like and admire for their skills. And I hope sincerely that this wasn’t the last Alvaret album.But that is not sure either.We haven’t talked about that, simply because we haven’t seen each other for a couple of years now.It takes money to make it all happen.There might arise an opportunity next year to get ourselves together, but it is too soon to talk about it.",
			question11:
				"QCR: Thank you so much for answering our questions and for giving us some of the finest albums in our collection. One final question, who are you listening to these days? Any recommendations?",
			answer11:
				"JK: Thank you for your interest and this opportunity. And your very nice words about our works. I made a list of twelve pieces.Of course, a list is always just the feelings at this very moment, but for these pieces counts that I can listen to them every moment of the day and a few of them changed my way of listening and understanding music.So these are not all new music from these days, but I hope it gives a bit of an idea what music I like the most.",
		},
		{
			img: QC005,
			id: 5,
			trackId: 711778090,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Bersarin Quartett",
			question1:
				"QCR: Hello Thomas, thanks very much for providing such a superb mix and agreeing to answer a few questions for us. For those unlucky people who are unfamiliar with your work please give us a short history of your journey through music and how you would describe what it is you create. ",
			answer1:
				"BQ: Thanks a lot for your kind words. I´m very happy you like the mix and my music. I created the 'Bersarin Quartett' -project around 10 years ago to have a personal playground for my idea to make „fictional film scores for imaginary movies“. I really love to combine electronic music with authentic orchestral elements.You can create a massive emotional impact with all these natural strings and analog instruments — so I sampled and archived lots of single chords and cut notes from classical recordings, manipulated and combined them in order to hopefully create something new and interesting for a vague but emotional nearly perfect plot in your head.Besides, I´m really into designing sounds and shaping acoustic environments in general.So everything taking its course ...time goes by ...and now we have 4 albums. ;)",
			question2:
				"QCR: You have given us a truly fantastic mix - where did you record it and what would you like people to know about it. ",
			answer2:
				"BQ: I recorded this mix in my studio. I collected lots of tracks of artists I really like at the moment and sorted them by keys. I have always had in mind that these are all tracks I really want to play and introduce them to some friends. I haven't had any clue what the genre of this mix will be about ... At the end I noticed that this mix includes lots of beatless ambient- and soundscape-tracks. So here we are: Still in love for what we call ambient music! For example Hildur Guðnadóttir – she does an amazing job for the 'Chernobyl'-Soundtrack. (Definitely my tip of this year: the HBO mini-series itself and the stunning soundscapes on top.) Besides that I noticed a real treasure in Ryuichi Sakamoto’s 'Warp'-mix, its called 'And Still They Move' by Colin Stetson and Sarah Neufeld. At the moment I´m playing the computer game 'Fallout 4' intensively for the second time – so a sound snippet of this atmospheric open-world game shall not be missing. Of course, I really love to present to you some new 'Bersarin Quartett'-tracks from the forthcoming new album as well. So I put three new tracks into this mix – hopefully, you will enjoy them ...",
			question3:
				"QCR: Take us on a tour of your studio - what are your go-to bits of hard/software. ",
			answer3:
				"BQ: I´m making music with software everybody uses. Usual suspects like the VST-Synths of Native Instruments (Battery, Kontakt, Reaktor, Absynth), Arturia, Steinberg (Cubase/Wavelab), Ableton, Reason, Bitwig ... and so on. If you are really into intense nerdy tech talk I really want to recommend to you a 'Headphone Commute'-interview called 'In The Studio With ... ' I did some months ago ... (Thanks a lot Mike, it was a pleasure!) https://headphonecommute.com/2019/04/01/in-the-studio-with-bersarin-quartett/",
			question4:
				"QCR: Visiting your website recently I was gripped by dread as nightmarishly dark, grainy footage of cityscapes was soundtracked by minimal soundscapes.  Needless to say, we are all very excited about your fourth album out this month on the always amazing Denovali - what can we expect from it?",
			answer4:
				"BQ: Great to hear that there is a joyful anticipation – this is really motivating, thanks a lot for this! Yes, the new album will not be called '4' or 'IV' because I really want to underline some sort of evolution and progression of my project. If the first three albums have some sort of 'film - noir'-nostalgia-melancholy in it, the perspective of the fourth album should be more towards the future — but not without its melancholy elements of course. There are more experimental electronic elements in it, I guess — beside the analog sound aesthetics you can expect. ",
			question5:
				"QCR: Your self-titled debut came out in 2008, I can actually remember the day I first heard it. A friend gave it to me with two other albums; Genus by Talbot & Deru and Night Falls by Hecq. Those two lp’s, along with your debut had more of a formative effect on my musical journey than any other albums I can think of. What was the scene like back then & how do you view this album when you listen back to it over a decade on from its creation?",
			answer5:
				"BQ: Great, I was in really good company in your record collection. :) I really like the artists you mentioned above as well. A Long time ago I met Marsen Jules (Martin Juhls) before I made my first album. He inspired me a lot to start my Bersarin Quartett-project in 2007. It was a time where the combination of classical music with electronic loop-based elements was still fresh and new. At the time I bought lots of records, listened to specific radio-shows and went to my favorite record shops ... times changed: Over a decade later we have mainly playlists, streams, clicks and likes ... If there was a 'Golden Age' of special genres like neo-classical (you mentioned this as 'a scene in 2008') or Trip Hop, Drum'n'Bass or IDM (in the mid 90ies), there is a 'Platin Age Of Anything Goes' today with all these endless possibilities. It's very interesting that genres are more fluid these days in my opinion. The enormous quantity of releases produces some sort of over-complexity, this makes it difficult to build a long-term awareness and a passionate solid scene like in the past, I guess. But at the same time it's good to have this kind of digital revolution of course: there are no boundaries in tastes or styles anymore ... everything is available and the possibilities seem to be endless – in order to look at a wider picture: the music itself. When I´m listening back to the first album, I´m very glad I have done it like it is – but today I'm more into further experiments in order to explore new sounds, structures and environments.",
			question6:
				"QCR: I read somewhere that the amazing artwork that emblazons the cover of your debut LP is purposefully uncredited as the nature of the work forced the artist to remain nameless for fear of retribution - is this true or just an urban legend?",
			answer6:
				"BQ: The original artwork was from a Russian propaganda poster. I really tried hard to find out the copyright holder of this image – but it was impossible to find some further detailed information. So I asked a very talented Illustrator and friend of mine to redraw and copy this motive. He didn't want to take credits for his work, because as a pretty successful concept artist he normally prefers to draw his own unique creations and character designs. But feel free to take a look at his stunning portfolio. http://www.dahlslett.com/",
			question7:
				"QCR: I listed my favorite track from each of your three albums. I would love it if you could tell us a little bit about each track. S/ t - St Petersburg, II - Rot und Schwarz, III - Ist es das, was du willst",
			answer7:
				"BQ: 'St.Petersburg' and 'Oktober' were the very first two tracks I've done under the name of the 'Bersarin Quartett'-project. It was the first idea to use classical loops and play around with some electronic elements to keep it interesting. I can't really tell you where all the main original samples came from and how I processed them afterwards — there are too many different sample snippets in my mess of an audio-pool. I really still like the polyrhythmic minimal structures faded in — that's a bit surprising in this context, I guess. 'Rot und Schwarz' und 'Ist es das, was du willst' — great to see, that your favorite tracks are not the typical ones. 'Rot und Schwarz' is like a radio play(or a story via an audio book) with some twists and changes in its plot – unusual but I like these kind of surprises(in stories and art in general). 'Ist es das, was du willst' — I don´t know anybody who likes this track most from 'III' --congratulations! :) This track is a typically example how reduced and minimal I normally started a track(acoustic drums with some gaps of silence and some kind of awareness for all its elements) – after some time more and more elements come to it ...and it evolves to a giant wall of sound and somehow I am losing control of everything for a short time. (And I love it as well.)",
			question8:
				"QCR: Your first album might be called I, your second & third are titled - II & III. Do you see them as a triptych or trilogy?",
			answer8:
				"BQ: Not really content wise. But I think the first three albums have had the same approach for making this kind of music. After every album there was some progression though.I think I wanted to underline this progression with a completely new name for the fourth album.",
			question9:
				"QCR: Your fourth LP deviates from this numerical titling, it is called Methoden und Machinen. What does this title allude to and does this LP differ a lot from the previous three albums?",
			answer9:
				"BQ: 'Methoden und Maschinen' is for me the best expression for 'The Future'. This title contains so much questions, answers and challenges regarding all aspects of our social system we are all living in.",
			question10:
				"QCR: Bersarin Quartett isn’t the first moniker you have released under. Tell us a little bit about the music you make under other names.",
			answer10:
				"BQ: Yes you will find many names if you look on Discogs for example. It's a bit confusing because these platforms have their own dynamics. 'EINS_A' is my small graphic and audio design office. 'esmogplayground' is my studio and my platform for all my experiments (events, projects, mixes) — All the other names you will find on Discogs are very old projects — and I really don't want to reopen these old chapters. It was a fun time ... let's move forward ... ;)",
			question11:
				"QCR: Has your Bersarin Quartett outlet become your main project or are other projects more active?",
			answer11:
				"BQ: Yes, the 'Bersarin Quartett' is my main artistic project. (but never say never if there will be new ideas or other concepts coming up in future.)",
			question12:
				"QCR: Tell us a little bit about the very exciting sounding (and looking) surround sound shows you have been playing in cinemas lately.",
			answer12:
				"BQ: Since 2017 I'm very interested in 7.1 surround sound recordings. So I rearranged and remixed a new Bersarin Quartett-surround-setup in order to perform listening concerts in complete darkness with an 8 channel sound system. During this set there was enough space for some live-performances for a guitarist and me on keys. It was really fun to do these kinds of concerts.We have had the chance to present this concept already in Moscow, Dresden, Berlin, Bielefeld, Landau, Wroclaw and Tolmin — and maybe more shows will follow.",
			question13:
				"QCR: Where do you see the future of sound systems and performances heading?  What, in your opinion, is the ideal way to listen to your music?",
			answer13:
				"BQ: It´s a bit strange that stereo systems in 2019 are still common sense in most concert- and club-venues – especially in electronic music where you usually want to create artificial soundscapes. The best environment for listening-only concerts - especially for electronic music - could be actually the modern big movie theatres. They have already a great multichannel soundsystem (like Dolby atmos with up to 64 speaker channels) with a huge dynamic powerful sound range. The room acoustics in a movie theatre are extremely dry – perfect for listening to all the details from all directions ... and the seats are comfortable. Perfect! Unfortunately big movie theatres are mostly interested in showing blockbuster movies. We noticed that it's pretty hard to convince cinema promoters that listening concerts (without any movie action) are a very good idea ... but we will still stick to it!",
			question14:
				"QCR: I was lucky enough to see a rare performance of yours back in 2012 at the (now legendary) Denovali Swingfest held in Essen. You performed with a live drummer, what can people expect from your upcoming performance at the Funkhaus in Berlin. Will it feature this same surround sound?",
			answer14:
				"BQ: After the surround sound excursions I have found three lovely mates in Münster to realize a new live-concept: to rearrange my computer-made music for bass, guitar, drums and keys only. No prepared surround sound backing tracks. Finally, there will be a stage with 4 human beings without any complex computer recordings or sequencers. (This is a bit crazy if you remember this all starts as a computer music project.) I really love this idea to present the music of the Bersarin Quartett stripped down this time in a most authentic, transparent, 'honest' and 'vulnerable' way as possible. Let’s find out if this will work out on the 23rd of November at Funkhaus Berlin.",
			question15:
				"QCR: How do you feel about Saal 1 (the room where you will perform as part of the Denovali Label Night in Berlin Nov 23rd)?",
			answer15:
				"BQ: In January this year I was there the first time. I visited the concert of 'Bohren & Der Club of Gore' and it was amazing indeed – the venue, the room, the sound and the music. I guess it will be an intense experience especially with our new 'pure - analog - live - set'. I would love that we would play in the middle of the room surrounded by the audience. (But I don't know if this will be possible ... we will see.) We are really looking forward to it.",
			question16:
				"QCR: What is on the horizon for you. - more shows? Another album? I would love to see more remixes from you - one of my all-time favorite pieces of music is your rework of Bitcrush’s ‘Posts’.",
			answer16:
				"BQ: Yes, I guess there will be more shows in 2020. Unfortunately, we all aren't fulltime-musicians, so we have to see what’s possible for us. In January we are playing in London at the Jazz Café and in February in Germany at the 'Pianeo Festival' in Schöppingen. We are looking forward to what comes next ...Thanks a lot for your great feedback regarding the bitcrush remix.Over the last years I really wanted to focus on my new album, the surround sound concept and at the moment the 'unplugged' live - set.But you are totally right ...remixes are always a good idea. (ok not always, but very often ... !) ;)",
			question17:
				"QCR: Your mix will, I am sure, lead listeners down many rabbit holes. Aside from the artists, you featured, what other musicians are you listening to a lot these days, any recommendations?",
			answer17:
				"BQ: I just saw 'The Joker' at the movies (did I already mentioned that I really love Hildur Guðnadóttirs work? – The sound, the atmosphere, the depth in this movie ,,, so intense!). As I mentioned before my mix turned out quite beatless and ambient-ish. Beside that I really like beats (mostly broken) and rhythmical structures (mostly challenging) as well — check out the music of 'Ghost Warrior', 'Grischa Lichtenberger' (new album coming soon!), 'Emptyset', 'Demdike Stare', 'Skee Mask', 'Akkord', 'Chevel', 'Mad Zach', 'Hapa', 'CharlesTheFirst' ... for me this is all interesting sound design stuff and a huge inspiration (even if you can't hear it in my music.) ;)",
		},
		{
			img: QC006,
			id: 6,
			trackId: 709463461,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Dictaphone",
			question1:
				"QCR: Hey Guys, thanks so much for answering some questions for us and for contributing a mix. We are huge fans so it is a real honor to host you. Dictaphone has had several members over the years who all have several side projects so perhaps you guys could introduce yourselves.",
			answer1:
				"OD: Dictaphone was formed in 1999 in Berlin by Brussels born multiinstrumentalist Oliver Doerell. In 2000 Roger Döring (clarinet/saxophone) joined the project. We had guest appearances by Stephan Wöhrmann ( SWOD), Malka Spigel ( Minimal Compact), Alex Stolze ( Bodi Bill ) and others over the years. We released 4 albums until now. The first 2 releases were released on City Centre Offices, then the third album on Sonic Pieces and now we signed to Denovali Records. The band played more than 200 shows worldwide, including appearances at Mutek /Montreal, Unsound / Krakow, and Transmediale /Berlin.",
			question2:
				"QCR: I know we are incredibly lucky to secure a mix from you guys - I don’t think I have ever seen a mix from you before. Tell us how you approached it, did one person mix it all or did you guys take turns selecting pieces for the journey? ",
			answer2:
				"OD: I mixed it (Oliver Doerell), the mix is mainly based on music from Brussels from the 80ties, which had a big influence on our work. It´s mainly worn out vinyl. The ' old ' sound is a basic element of the Dictaphone sound.",
			question3:
				"QCR: You guys create immensely interesting electro-acoustic soundscapes in a way that is really unmatched. Take us on a tour of your studio, what instruments do you use & what are your go-to bits of hardware/software for both pre & post-composition?",
			answer3:
				"OD: I guess the main point for me is to work at home. I have a small studio in my apartment. In this Studio you can find all sorts of instruments, classic instruments, electronic instruments, and self-built ones. I have a ' morbid instrument ' concept, the rule is that old instruments are not being repaired I don´t replace the strings of the guitar, I adapt my way to play the instruments.",
			question4:
				"QCR: It’s interesting to compare APR70 with M.=Addiction. They were created 15 years apart yet sound like contemporaries. As electronics feature heavily in your compositions, how have you seen technology change and what changes has this evolution made to the composition of songs over time? ",
			answer4:
				"OD: It didn´t affect too much our music, because we didn´t change so much the production process. the computer stays a recording tool, all sounds are created out of the box.",
			question5:
				"QCR: Your back catalog was recently re-issued by our favorite label (Denovali) in one of the most beautiful box sets we have ever seen. Tell us a little bit about the photographs that accompany the release and how did your relationship with Denovali come about. ",
			answer5:
				"OD: Yes, we are very happy about this release! The cover artwork is based on travel photographs by my father from the 70ties. My mother was his favorite model.",
			question6:
				"QCR: Originally Dictaphone found a home on the influential label City Center Offices. How did that relationship form and what was it that led to Nacht being released back in 2004?",
			answer6:
				"OD: In 2001 we were introduced to Thaddeus Herrmann ( label boss of City _centre_offices ) at our first show, he decided to sign us. The label was very important for us to start the journey. Thaddeus is still a good friend.",
			question7:
				"QCR: APR 70 (your latest album) was in my top 3 albums of 2017 (alongside Terminus Drift by Joshua Sabin & Everything by Ben Lukas Boysen & Sebastian Plano). It came five years after Poems from a Rooftop. Was this LP written over that whole period or was there a sudden burst of creativity?",
			answer7:
				"OD: Yes, we have the tendency to work over long periods, meeting and recording new material. Just when we decide to have a new album released we start to choose and finalize the tracks and find out in what direction the album should go. An endless process, sometimes very old tracks can be part of a new album, like the track ' lofi opium ' on the last album is more than 10 years old, it just needed the right moment to be released.",
			question8:
				"QCR: APR 70 has quite a darker feel to it than your other albums, was this intentional or did these environments emerge by accident?",
			answer8:
				"OD: I don´t know, I don´t compare so much our albums, I don´t even listen to them again after the release. I think the Dictaphone sound is getting more precise & deeper.",
			question9:
				"QCR: One question I always swore I would ask if I had the chance was to shed some light on the amazing titles you give your albums. ‘Poems from a rooftop’ is explained on the Sonic Pieces page as such ‘The title ‘Poems from a rooftop’ comes from Iran’s ‘green revolution’, where people were so afraid to go out on the street that they emerged on their own rooftops to protest the stifling regime.’  What is the story behind ‘M.=Addiction’ and ‘APR70’",
			answer9:
				"OD: Honestly, I don´t remember, what M. = addiction was meaning at that time for me. I guess it´s up to the listener to find some sense in the abstract titles. For the title APR70 I still know the motivation, but I won´t tell you.",
			question10:
				"QCR: Recently pictures surfaced online of you guys back in the studio - can we expect a follow up to APR 70 soon?",
			answer10:
				"OD: As I said before we are always in the process, so expect a new album in the next 4 years! We don´t work with deadlines and our label leaves us all the freedom we need to work as long as it is needed.",
			question11:
				"QCR: One of our favorite musicians, Nil’s Frahm, counts himself alongside your many fans - even citing your music as a powerful force that made him move to Berlin. Whom would you cite in this same way? Which artists have has a profound effect on your musical journeys?",
			answer11:
				"OD: For us, it´s mainly the Brussels art & music postpunk scene from the 80ties. It was a very vivid and creative period in Brussels with great international artists and labels (Tuxedomoon, Minimal Compact, Benjamin Lew to name a few and the fantastic Crammed Discs label of Marc Hollander ). Then I was lucky to live in Berlin in the 90ties, which also had a big influence of course.",
			question12:
				"QCR: Tell us a little bit about your other current projects - we are huge fans of Swod, recently rediscovered ‘Z’ and have been spinning ‘Mankind Animal’ for several years now. What other musical avenues do you guys walk down?",
			answer12:
				"OD: My other main project is Cummi Flu, which I share with Helga Raimondi. A more psychedelic, dada post-punk approach and I regularly compose for modern dance, theatre and film. My first solo release, based on music for theatre will be out on the new Oxmose label in November. ( Oliver Doerell / my live with M. ( Oxmose 2019 ). Swod is sleeping at the moment but will be back around 2023.",
			question13:
				"QCR: Whenever I discover new music in this style it never comes as a surprise to learn that the musician resides in Berlin. Why do you guys think Berlin is the world capital for the music of this nature? ",
			answer13:
				"OD: Is it? I think it is more connected to the ' artist paradise ' Berlin, that until now life was in comparison cheap here and you could develop music, with less commercial pressure . All this is now over, Berlin is becoming as shitty as other big cities, with the same problems than other big cities. Nowadays I wouldn´t move here anymore.",
		},
		{
			img: QC007,
			id: 7,
			trackId: 706169188,
			url: "https://soundcloud.com/quietcast/quiet-cast-007-christoph-berg",
			display: true,
			bodyDisplay: false,
			title: "Saffronkeira",
			question1: "BODY1",
			answer1: "BODY2",
			question2: "BODY3",
			answer2: "BODY4",
			question3: "BODY5",
			answer3: "BODY6",
			question4: "BODY7",
			answer4: "BODY8",
			question5: "BODY9",
			answer5: "BODY0",
			question6: "BODY1",
			answer6: "BODY2",
			question7: "BODY3",
			answer7: "BODY4",
			question8: "BODY5",
			answer8: "BODY6",
			question9: "BODY7",
			answer9: "BODY8",
			question10: "BODY9",
			answer10: "BODY0",
			question11: "BODY9",
			answer11: "BODY0",
			question12: "BODY1",
			answer12: "BODY2",
			question13: "BODY3",
			answer13: "BODY4",
			question14: "BODY5",
			answer14: "BODY6",
			question15: "BODY7",
			answer15: "BODY8",
			question16: "BODY9",
			answer16: "BODY0",
		},
		{
			img: QC008,
			id: 8,
			trackId: 690610894,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Franz Kirmann",
			question1:
				"QCR: Thanks very much for contributing a mix to our new Quiet Cast series it is a true honor and a pleasure to host you. Where is the mix recorded and what would you like people to know about the mix?",
			answer1:
				"Franz Kirmann: Hi! Thanks for having me! I recorded the mix in my studio in Battersea, South London. I tried to make something coherent that reflects what I’m into at the moment. The majority of the tracks are from your store, it gave a nice frame for the selection.",
			question2:
				"QCR: October 5th sees the release of your new album ‘Madrapour’ via Ransom note’s cassette label Bytes. You mention that this album ‘is a return to your analog hardware roots’. Take us on a tour of your studio. What are your go-to bits of hardware/software?",
			answer2:
				"Franz Kirmann: Elysian Park was mostly made in the computer. It was a conceptual record based on the re-purposing of sounds. So I didn’t play anything myself on that record, it was generative Midi, samples from Youtube or old records processed to death… a collage of sounds from various sources. Madrapour is a return to hardware, to playing instruments, in this case, synthesizers. I used a Make Noise eurorack modular system and a Sequential Circuits Prophet 6. Everything was recorded in Ableton Live via a Thermionic Culture Rooster 2. We then did the final mix on Pro Tools. James Turner at Sanctuary did the mix, he records and mixes a lot of blues, rock, pop and world music and I wanted that experience, a completely fresh ear not necessarily used to the music I make. I then got it mastered by Sam Berdah, my partner at Days Of Being Wild, who comes from dance music. I thought it would be a good thing to have the two sound worlds colliding onto basically what is a slow electronic instrumental album! ",
			question3:
				"QCR: What can people expect from ‘Madrapour’? The first two singles are heavy with deep bass and darkened edges. Will there be moments of euphoria and dance-orientated pieces? Or does it have the hard edges of ‘Elysian Park’?",
			answer3:
				"Franz Kirmann: Madrapour is a quieter record than Elysian, I think it’s much more accessible, less harsh and alienating.  It’s more introspective also. It’s also warmer as it is all done on analog machines, all my previous albums were very much software-centric. ",
			question4:
				"QCR: In 2010 you started the label Days of Being Wild with Jérome Bazzanella. What influenced the formation of this imprint and is it still active today?",
			answer4:
				"Franz Kirmann: Yes it still active although Jérôme is not involved anymore. I run it with Sam. When we started Days Of Being Wild, we wanted to create an imprint for our own club orientated music.It quickly gained popularity and we started receiving demos and releasing other artists' music.",
			question5:
				"QCR: With almost fifty releases to its name, what title would you point people towards in order to introduce them to the labels sound & aesthetic?",
			answer5:
				"Franz Kirmann: The ethos behind the label has always been DIY and punk. We are on the slow side of club music, quite melodic and influenced by the post-punk and new wave scene of the late 70’s / early 80’s. Parisian radio Nova once described us as “Salacious Disco Noir” - you can make what you want from that! A good starting point would be to check the Days Of Being Wild playlist on Spotify and listen to the last 20 entries.I think they reflect the most what we are doing now.If you don’t have Spotify, our band camp page has all our releases.https://daysofbeingwildcorp.bandcamp.com/",
			question6:
				"QCR: Your first LP ‘Random Access Memories’ was self-released. How do you view this LP almost a decade on from its release? Any plans in the works to re-issue this gem on a physical format?",
			answer6:
				"Franz Kirmann: I actually did some CDs for that album so there was a super limited physical edition. I don’t look back on what I have done usually, but if like - minded people were keen to re- issue it or do a vinyl etc.I don’t see why not! I haven’t listened to it for a long time.There are a few tracks I’m really fond of on that album, especially Liza and Lexi.But there is also L’ennui that I think we never nailed! The demo was much better but with too many samples from other records so we had to remake the song which is never a good thing. Every album is a snapshot of who you are at a certain time.RAM is a kind of “best of” of my compositions from 2001 to 2008 but also it reflects that time in my life, learning software, moving to London, and all the great people I met then.I think it was also made in a more naive way, not expecting much, it was way easier to make than anything that came after!",
			question7:
				"QCR: How much did Daft Punk pay you to use the title of your debut for their worldwide smash hit 2013 LP?",
			answer7:
				"Franz Kirmann: Ha... a lot of money you can imagine! ;-) Well… great minds alike as we say. To be honest, my friends were more excited and surprised or willing to have a discussion and joke about it than I was.I honestly didn’t care much.There was a huge billboard on the Old Street roundabout in London with their robot faces and the title Random Access Memories...which was quite funny the first time I saw it.It just highlighted the difference between the economy surrounding my music and theirs! We basically had the same idea for a title and that’s all there is to it really!",
			question8:
				"QCR: I often hear Meridians compared to Kraftwerk in places (especially the track ‘Glider’). I know they must have had quite a formative influence on you (as noted in your excellent rework of Fogh Depot’s ‘Alice Bob & Cypher’ which you titled ‘A Kraftwerk kiss remix’). Can you tell us a little bit about their influence on you and what other musicians have had a strong impact on your musical journey?",
			answer8:
				"Franz Kirmann: Actually I wouldn’t say that Kraftwerk has or had a direct influence on me. I mean they have influenced everybody so you are indirectly influenced by them at some stage, but I never willingly did something inspired by Kraftwerk and I don’t listen to them that much (but it’s one of the best gigs I have ever seen though!) The Fogh Depot remix is not about Kraftwerk the band… it refers to an anecdote that was relevant when I did that remix.  In terms of my influences, I think there are two periods. There is first the music I listened to while growing up. Bands/artists that were important to me then were mainly new wave bands in the 80’s like Depeche Mode, The Cure, New Order etc. And then later on the shoegaze/noise/ ambient stuff especially My Bloody Valentine and Sonic Youth. I think the essence of those artists is somewhere in everything I do. Then the second period is when I started making electronic music myself and artists were directly informing the music I was making, so there is Fennesz for example on Touch who was a revelation to me. Then Pan American on Kranky (I also loved his previous band Labradford) And then Autechre and Boards of Canada on Warp. And Morr Music with Isan and Lali Puna, and Sabres Of Paradise, and Mogwai… how long have you got?",
			question9:
				"QCR: Your third album ‘Elysian Park’ is an incredible work of distorted freneticism, elongated ambiance, and digital alienation. To this day it needs to be recommended with the caveat ‘it’s very different to Meridians’. Upon release, Denovali wrote: ‘The tracks bear no traditional structures, seem to lead nowhere and have no obvious melodies, riffs or beats to hang on to.’ Was there any apprehension that it would alienate fans who knew you only through ‘Meridians’ or Piano interrupted?",
			answer9:
				"Franz Kirmann: With Denovali we were fortunate that they gave us total freedom. I think they probably were surprised by it.I don’t know to be honest.I think it was the same creative impulse for me as the one we had when we did “Landscapes Of The Unfinished” with Piano Interrupted.Wanting to change.To do something different.And I have to confess I didn’t think about how people would react to it.A lot of artists I listen to change quite drastically from album to album. It’s only when I played it live at the Rotter Salon in Berlin that I realized for the first time, with the audience in the room that perhaps it was quite demanding! But I was dealing with difficult things then and the music reflects that I think. It’s about being alienated and sedated.I was listening to a lot of Autechre and Oneohtrixpoint never or Actress then as well as reading Houellebecq and Ballard so all that came into the music. And Madrapour is somehow a reaction to that.When it started to take shape I realized I was making a peaceful album, which is the opposite of Elysian.",
			question10:
				"QCR: We wrote recently in our ‘Introduction to Denovali’ that ‘2x4’, your amazing debut LP as Piano Interrupted ‘change(d) the landscape of the Neo-Classical world... Prior to 2x4 there really was no crystallized example of the genre distilled down to its basic form.’ When it was first released in 2012 it showed the potential of the genre. Do you look back on this release with the same starry eyes that fans of it have?",
			answer10:
				"Franz Kirmann: Well thanks for your kind words! The music on that album is a snapshot of Tom and I first 3 years of making music together and the term post-classical or neo-classical didn’t even exist then! Actually Tom and I never considered ourselves as post- classical, we were too schizophrenic in our music for that! But I suppose you’re right, we came up with it at a certain time and it has the “mastered by Nils Frahm” stamp, so all that put that record firmly into that realm. Two By Four is Tom and I finding a common language to make music together coming from such opposite musical worlds.As I said earlier, I don’t really look back at past work, but considering that it blends jazz, minimalism, post- classical, glitch, ambient and techno, I’m pretty proud it’s not a total mess! ",
			question11:
				"QCR: You & Tom worked with Nils Frahm on 2x4 in his now - defunct Durton Studio at his home in Berlin.What was it like working with him ?",
			answer11:
				"Franz Kirmann: We spent a day in his flat, the studio was in his bedroom with his bed above our heads! he was very chilled and focused on the job, we only had one day to do it. We didn’t talk much when I think about it! And I also remember Tom finding us a flat to crash for the night, and when we arrived quite late we realized it was right in the middle of the red district! ",
			question12:
				"QCR: ‘Landscape of the Unfinished’ is the third album you released with Tom Hodge under the Piano Interrupted moniker. It was the result of a trip to your home country of birth; Senegal. What were some of the challenges you faced in this epic undertaking? How do you view that trip and the album five years on?",
			answer12:
				"Franz Kirmann: I’m very fond of that album, I think we managed to do something very unique with it. During the two years prior we’d re-released Two By Four on vinyl, played it live quite a lot, then wrote and recorded The Unified Field and played that quite a lot too so we wanted to change everything! We were sick of Piano Interrupted! I always thought of going back to Senegal to work with musicians there and Tom suggested that it could be our next adventure.A way to shake us up.We did it in two parts, like a film would be first shot and then edited.And the editor wouldn’t have any emotional involvement. So we went and we recorded lots of musicians and instruments in Dakar.And we did a lot of sound processing too that we would playback to the musicians to improvise on. I think Tom was trying very hard to keep me away from going down memory lane.He didn’t want something nostalgic.And we actually recorded and lived in the neighborhood I grew up in! But it had changed a lot and was very built up.It reminded me of Antonioni’s film La Notte where Jeanne Moreau walks in a construction site.I felt like her! Then we came back and didn’t listen to any of the material for a couple of months.We wanted to have an emotional detachment from it. Then I started processing the audio and working on it like I was making a solo record.That was in Battersea which was(and still is now) a construction site too, and the weather was grey, so everything got blurry and texturized. And meanwhile, Tom started writing piano and come up with musical ideas from the Dakar recordings. We then recorded piano and double bass together in a couple of sessions at Air Edel in London. That’s how it got put together.In terms of the piano and bass, we used long takes and it is more live than Unified Field, which was more cut- ups, and little melodic cells we would loop and process.",
			question13:
				"QCR: The trip was documented by Cath Elliott in her film which can be viewed HERE. Tom at one point, while talking about the initial stages of creating a track said; ‘Franz would create this huge long texture and I would try to interrogate the tempo from it’. This is a great description of a common thread in your music. Your sonic palette is very glitch orientated but it is also immensely textural. Would you consider texture your starting point for composition? If not, at what point does it come into play. ",
			answer13:
				"Franz Kirmann: Yes Piano Interrupted functions a lot like that, Tom would unveil a time signature and a groove from processed textures. But in my case I rarely remember how something comes about, it’s a very subconscious process. And it’s a beautiful thing because you surprise yourself. It usually starts with some kind of experiment, either processing audio or playing on a synth, or doodling on the modular system.I usually record all that.And then I forget it until I find it again and because time has passed I have more objectivity.After that, it becomes a dialogue with the piece.And what you are going through in your life, your preoccupations, experiences etc add to the musical direction.So you start shaping the meaning of what you’re doing and then that informs further decisions.And then you suddenly realize you have a collection of music that can form an album.Voilà.",
			question14:
				"QCR: It’s been a while since your released on Denovali. Will we see more from you or Piano Interrupted on that label in the future?",
			answer14:
				"Franz Kirmann: If and when we re-activate Piano Interrupted they will most probably be our first point of contact.",
			question15:
				"QCR: Thanks again for taking part in our Quiet Cast series. One final question; What musicians are you listening to a lot these days, any recommendations?",
			answer15:
				"Franz Kirmann: Thank you! I’m listening to a lot of different things these days, Nina Simone, Paul Simon, Bill Evans, HTRK, Robert Aiki Aubrey Lowe, Claire M Singer, Grouper… I’m looking forward to the new Pan American record in November as well. There is so much music! ",
		},
		{
			img: QC009,
			id: 9,
			trackId: 673054268,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Subheim",
			question1:
				"QCR: Thanks for the mix - We are super proud to have you launch our new series. You have given us a fantastic journey through deep dark soundscapes harsh bass-driven electronica and transcendent neo-classical, I am on my 6th listen and still can’t get enough. Where was the mix recorded and what would you like listeners to know about it?",
			answer1:
				"Subheim: Thanks for inviting me, this was fun! I recorded the mix in my home studio in Berlin. Initially, I was worried it would be a slow process since I haven’t done anything similar in ages but once I got in the flow, it came out very naturally. I find restrictions very helpful when it comes to any sort of creative output, and so being 'limited' to pick titles mostly from the QuietCalm store was a good thing. There’s also all this new material of mine, I was thinking of ways to share some of it publicly before I have a new release out  - the mix was a perfect opportunity to do that.",
			question2: "QCR: Give us some info on the tracks you chose.",
			answer2:
				"Subheim: My first thought was to make a purely ambient mix, then figured that'd be boring. I wanted it to be a little collection of music I love, tunes that are somewhat representative of the flavor and mood I'm usually drawn to as a listener. Also, I found that some of the calmer Subheim stuff I’ve been working on fit perfectly so I added those too. Eventually, the outcome is a collage of different genres, from synth-heavy stuff to neoclassical... there's even some 90s Greek electronica in there. But there's a certain vibe throughout the mix that glues it all together I think. Something about city life, where everything is fast-paced and inevitably evokes a need to escape, to be somewhere else... someone else.",
			question3:
				"QCR: You have released three full-lengths and two Ep’s in the last eleven years all of which are still being discovered by new fans today (your titles are always hard to keep in stock). How do you feel when you look back on your work over the last decade. ",
			answer3:
				"Subheim: Hmmm, not an easy question :) Eleven years is a long time, and a lot has changed since the first record. I’d say the circumstances surrounding each release were very different, I was 23 when ‘Approach’ came out, I didn’t have a job...most of my free time I’d spend trying to put a few songs together… I didn’t really know what I was doing, some of the tunes on that record were attempts to sound like bands I was listening to at the time. I didn’t know much about music production or how to replicate sounds I heard elsewhere, I guess that was beneficial because the end result may have many flaws but also its own character. A few years later, I found myself getting perhaps a little too much into movie soundtracks which led to the second record being a weird combination of cheese and ambient. I still have mixed feelings about that album, there are tunes on it that I’m really proud of and others where I ask myself 'what were you thinking?!' I’m much happier with everything past that point, the third record ‘Foray’ as well as the two EPs. I felt that with those I managed to develop a more cohesive sound and identity in the last 5-6 years. There’s always going to be something to look back at and think “I could have done this differently” but I’ve learned to come to terms with these thoughts and simply use them as a way to learn so I can do better next time. I find that pondering on past mistakes can quickly get counterproductive, I try to avoid that as much as I can.",
			question4:
				"QCR: Digging deep into your past you started and co-ran Spectraliquid? A label responsible for releasing one of my all-time favorite LP’s - Blackfilms self-titled debut.  How do you view the label today and do you think you will ever start your own label again?",
			answer4:
				"Subheim: I’m so glad we got to release that Blackfilm album, it’s such a beautiful record. That was an interesting time... I loved running a label but if I had a time machine, I would go back to 2007 and change its name to something less psy trance. I didn’t have a day job at the time so I was able to focus my efforts on the label 100%, I think it was a way for us to tell the world that we are here and we have something to say. It also felt like the right time, there was definitely a gap for this kind of sound in Athens’ music scene, I think the only other crew that was promoting similar events was Creative Space. I look back at that era with a mix of nostalgia and pride, but I don’t think it’s something I would want to do right now. So much is different now and I feel I’ve been out of the loop for too long to even know where to begin. I’m still very close with some of the people whose music we released back then, I’m happy about that.",
			question5:
				"QCR: You now find your home on the fantastic Denovali Records - how did this partnership come about?",
			answer5:
				"Subheim: I first started working with them on a Business to Business basis, back when the label was active. We’d stock their titles and they’d stock ours. So they knew a little bit about me and my music. The first time we actually got to work together was when they expressed interest in repressing ‘Approach’ on vinyl, that was around 2011 I think. Several years later, a friend was over at my place browsing my record collection when he stumbled upon that vinyl and asked me “maaaan you are on Denovali!! That’s one of my favorite labels”. It was funny cause he’s a proper hardcore/punk fan, I was surprised he actually knew the label but it goes to say how broad a palette of genres these guys are offering. That night I wrote Thomas an e-mail, a few months later I joined their roster. They take care of licensing, releases and booking for me, which is great as I wouldn’t be able to do so myself due to lack of time. It’s been a permanent home since 2015 and it’s likely to remain this way, all the new stuff I’m working on is intended to be on a Denovali release.",
			question6:
				"QCR: I have been lucky enough to see you live twice - Once at Machinenfest (right after ‘No land called home’ came out) and again a couple of years later in the hold of a boat moored on the Seine in Paris. Both shows were quite different from each other. I remember your performance at Machinenfest involved you striking a full-size oil drum on stage. What can people expect from your live shows these days?",
			answer6:
				"Subheim: Haha I don’t do the oil drumming anymore, that’s for sure. I guess over time the core focus of my gigs has shifted, it’s less about the man on stage and more about the overall atmosphere. I’ve been going back to making my own visuals for my sets, so that the audience has something interesting to look at while listening to the music. There’s usually loads of fog...I come from goth rock and metal, I guess some things don’t change. In terms of what to expect musically, I’d say it’s a combination of released material both older and newer as well as work in progress or finished tunes that haven’t yet seen the light of day. I try to blend everything together in a way that feels like a narrative from start to end rather than just a sequence of songs. I cheat a lot though, for instance, if I can’t figure out a smooth transition I’ll just introduce a ton of crackle, noise and reverb between parts. These days I like to use a guitar on stage, I think playing an instrument live makes things more interesting than just being a guy with a laptop. I have a show coming up in Berlin on September 3rd, really looking forward to that.",
			question7:
				"QCR: Tell us about your work at Ableton and where you see the future of electronic music going.",
			answer7:
				"Subheim: I work in the Sound Team mainly, that’s the people that make, improve and expand the devices, sound features and content that comes with Ableton Live. I like being surrounded by creative folk who are very invested in what we’re trying to achieve collectively, I don’t think you find that in many companies. It’s a lot of hard work, often comes with conflicts and disagreements but there’s a sense of unity as well. I sometimes complain it doesn’t leave me with enough brainspace to produce music but I’m working on that, I think it’s more a mindset thing and about becoming more selective with how I choose to spend my time outside of work. It’s hard to tell where electronic music is going these days. There’s so much good stuff out there and also the distribution model has changed significantly. It’s interesting to see many electronic music artists moving away from releasing on labels. Instead they choose to do it on their own or start a label that focuses primarily on releasing their own material. I admire that.",
			question8:
				"QCR: One thing I have always noticed about your music is how popular it is on youtube. It’s not hard to find people waxing lyrical about its transcendent power in the comments section under videos or to find it scoring video from the beautiful to the absurd (your music features heavily in this amazingly ridiculous documentary about how the Illuminati control the music industry). How do you feel when you see how your work is received and used once it leaves your hands? ",
			answer8:
				"Subheim: I’m fairly relaxed about how my tunes are used unless it’s for something I fundamentally disagree with (e.g. racist propaganda). That Illuminati video cracks me up...there’s something genuinely funny about conspiracy theories. Over the years, people have used my music in all kinds of ways, sometimes it’s really cool projects like projection mappings and dance performances... other times it’s badly shot short films with terrible actors or tasteless low budget showreels. I’m cool with all of this really as long as it’s harmless and a bit silly... I mean if you believe in UFOs who am I to stop you from using my music in your videos. I think what matters to me the most is knowing that there are listeners out there who connect with what I do on a deeper level. I’ve received messages from people saying my tunes have helped them get through difficult situations...illness, family problems, drug issues, alcoholism. That’s the kind of feedback that makes it all worth the effort, it gives it some purpose.",
			question9:
				"QCR: What do you have on the horizon - can you give us any information about the new album and any other releases you might be working on.",
			answer9:
				"I’m working on the fourth LP, I made promises I’d have it out in 2019 but that’s not very likely to happen. I am hopeful it’ll be ready next year, it’s already been four years since ‘Foray’ came out, I feel it’s time for something new. I'm not working on anything else at the moment, I need to focus to try to translate a ton of emotions, events, lows, highs and experiences of the recent past into a handful of songs",
			question10:
				"QCR: Finally, what pieces of music would you recommend to people right now? What is exciting your ears and what have you had on constant rotation?",
			answer10:
				"Subheim: I love the new Lorn stuff...well, pretty much everything he’s done. Other artists on constant rotation: Stereo Nova, John Maus, Chelsea Wolfe, Banks, Deru, Alessandro Cortini, Low, Ioanna Gika.",
		},
	],
	dark: true,
};

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case ISOLATE_FEATURE:
			return {
				...state,
				currentItem: action.payload.id,
				interviewInfo: state.interviewInfo
					.filter((image) => {
						return image === action.payload;
					})
					.map((img) => ({ ...img, bodyDisplay: true })),
			};

		case RETURN_HOME:
			return { ...state, interviewInfo: initialState.interviewInfo };

		case DARKMODE:
			if (state.dark === true) {
				return { ...state, dark: false };
			} else {
				return { ...state, dark: true };
			}
		case ASSIGN_MODAL:
			return {
				...state,
			};

		default:
			return state; // do nothing, just return previous state unchanged
	}
};
