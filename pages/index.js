import Head from "next/head";
import Pads from "../components/Pads.js";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
	const drumPads = [
		{
			keyId: 81,
			keyName: "Q",
			id: "Clap",
			url: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]707-clap.wav.mp3",
		},
		{
			keyId: 87,
			keyName: "W",
			id: "Cymbals",
			url: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/461[kb]backhit-crash-glissdown.wav.mp3",
		},
		{
			keyId: 69,
			keyName: "E",
			id: "eHit",
			url: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/64[kb]akaizap.wav.mp3",
		},
		{
			keyId: 65,
			keyName: "A",
			id: "Snare",
			url: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/33[kb]909sd.wav.mp3",
		},
		{
			keyId: 83,
			keyName: "S",
			id: "Timbal",
			url: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Timbales/17[kb]TIMB2HIGH.WAV.mp3",
		},
		{
			keyId: 68,
			keyName: "D",
			id: "Disco",
			url: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/26[kb]73.wav.mp3",
		},
		{
			keyId: 90,
			keyName: "Z",
			id: "Crash",
			url: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/96[kb]909-bright-crash.wav.mp3",
		},
		{
			keyId: 88,
			keyName: "X",
			id: "Kick",
			url: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/45[kb]iELECTRIBE-kick-1.wav.mp3",
		},
		{
			keyId: 67,
			keyName: "C",
			id: "Toms",
			url: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/264[kb]ambient_tom_1.wav.mp3",
		},
	];

	const displayed = (e, id, url) => {
		// console.log(url);
		setKeyPress(id);
		const audio = new Audio(url);
		audio.play();
	};

	const handleKeyPress = (e) => {
		// console.log(e.key);
		drumPads.map(({ keyName, id, url }) => {
			if (e.key == keyName.toLowerCase()) {
				const audio = new Audio(url);
				audio.play();
				setKeyPress(id);
			}
		});
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyPress);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, []);

	const [keyPress, setKeyPress] = useState("");

	return (
		<body
			id='drum-machine'
			className='flex content-center justify-center h-screen flex-grow'
		>
			<Head>
				<title>Drum Machine</title>
			</Head>

			<main className='flex'>
				<div className='flex items-center justify-between w-full m-auto h-1/2 p-2 border space-x-24 bg-black rounded-xl'>
					<Pads drumPads={drumPads} displayed={displayed} />

					<div
						className='text-center flex-1 bg-white text-purple-500 p-2 rounded-md w-44 h-10 m-auto font-bold'
						id='display'
					>
						{keyPress}
					</div>
				</div>
			</main>
		</body>
	);
}
