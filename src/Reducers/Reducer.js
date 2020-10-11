import {
	ISOLATE_FEATURE,
	RETURN_HOME,
	DARKMODE,
	// SHOW_FEATURE,
	// DELETE_COMPLETED,
} from "../Actions/Actions";

import QC009 from "../img/QC001.png";
import QC008 from "../img/QC002.png";
import QC007 from "../img/QC003.png";
import QC006 from "../img/QC004.png";
import QC005 from "../img/QC005.png";
import QC004 from "../img/QC006.png";
import QC003 from "../img/QC007.png";
import QC002 from "../img/QC008.png";
import QC001 from "../img/QC009.png";

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
				"Hey Drastic Steps - thank you so much for creating such an overwhelmingly amazing mix - it truly is one of the best mixes we have ever heard. People who follow Quiet Calm Records will probably be familiar with you and your mixes but for those new to your sound could you introduce yourself and give a little information on your musical journey.",
			body2:
				"Hey Rob, thanks for having my work as a part of the highly enjoyable and innovative Quiet Cast series. I have been listening to these mixes and reading the interviews and having a wonderful time wading through the work of all these amazing artists. Thanks for your kind words. It has been a pleasure mixing with vinyls you referred me to, and this mix, I hope, pays proper tribute to that collaborative musical journey.",
			body3:
				"One of my earliest memories of music is that of my parents and their friends gathering around Hindustani classical and jazz vinyls. Outside, the Darjeeling sunset quietly painted the rolling tea gardens with colors borrowed from mysterious orchids.",
			body4:
				"Soon my parents will move to Calcutta: the dusty 'city of love' that is obsessed with cinema, tea, endless chats, music, literature, cricket, football, and food. For the next two decades, besides school and college, I will try to learn how to play Hindustani Classical on a violin. I was fascinated by the works of Ali Akbar Khan, Nikhil Bannerjee, and Parween Sultana. Along with classical music I also listened to a lot for jazz, blues, and rock.",
			body5:
				"In the US, between finishing my doctoral degree and teaching, I found like minded musical souls and played violin in a funk-jazz band. It was refreshing to play differently- away from the rigors of classical music. It is during this time, as I was being introduced to a wide range of music by my fellow musicians and colleagues, that I got interested in digging for records. Soon I got a cheap mixer and another turntable. The ability to change speeds and pitch created endless musical possibilities.  It will be disingenuous if I don’t mention the amazing artists and visionaries like Jazzy Jeff, Cool Herc, Q-Bert, DJ Shadow, whose work I listen and watch with wonder. I still play the legendary Boiler Room Set of DJ Shadow several times a year.",
			body6:
				"To me the art of soundscaping is playing a fragmented story by juxtaposing and layering pre-recorded sounds such that the composite transcends and transforms the constituents into an altered totality of musical experience. To me it is also a way to listen creatively and actively while paying homage to the artists and their work that I rely on.",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
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
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC004,
			id: 4,
			trackId: 812356096,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Jan Kleefstra",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC005,
			id: 5,
			trackId: 711778090,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Bersarin Quartett",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC006,
			id: 6,
			trackId: 709463461,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Dictaphone",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC007,
			id: 7,
			trackId: 706169188,
			url: "https://soundcloud.com/quietcast/quiet-cast-007-christoph-berg",
			display: true,
			bodyDisplay: false,
			title: "Saffronkeira",
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
			img: QC008,
			id: 8,
			trackId: 690610894,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Franz Kirmann",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC009,
			id: 9,
			trackId: 673054268,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "Subheim",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
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

		default:
			return state; // do nothing, just return previous state unchanged
	}
};
