//Start the main Audio Engine
// document.getElementById('simpleSound')?.addEventListener('click', async () => {
// 	await Tone.start()
// 	console.log('audio is ready')
// })


// Play button selection
document.getElementById('play')?.addEventListener('click', async () => {
	console.log("Just played original sound without any filter applied")
	
	// Calling the original loop.
	const player1 = new Tone.Player({
		url: "https://tonejs.github.io/audio/drum-samples/breakbeat.mp3",
		autostart: true,
	}).toDestination();
	player1.loop = true;

	// Stopping the original loop
	document.getElementById('stop')?.addEventListener('click', async () => {
		console.log("Sound Stopped")
		player1.stop();
	})

})

// Lowpass button selection
document.getElementById('lowpass')?.addEventListener('click', async () => {
	console.log("I am through Lowpass Filter now !!")

	// Apply lowpass filter to loop.
	const player2 = new Tone.Player({
		url: "https://tonejs.github.io/audio/drum-samples/breakbeat.mp3",
		autostart: true,
	})
	player2.loop = true;

	// Creation of the lowpass filter
	const filter = new Tone.Filter(800, 'lowpass').toDestination();

	// Connect the player2 to the lowpass filter
	player2.connect(filter);

    // Stopping the lowpass loop
	document.getElementById('stop')?.addEventListener('click', async () => {
		player2.stop();
	})

})


// Highpass button selection
document.getElementById('highpass')?.addEventListener('click', async () => {
	console.log("I am through Highpass Filter now !!")
	
	// Apply highpass filter to loop.
	const player2 = new Tone.Player({
		url: "https://tonejs.github.io/audio/drum-samples/breakbeat.mp3",
		autostart: true,
	})
	player2.loop = true;

	// Creation of the lowpass filter
	const filter = new Tone.Filter(800, 'highpass').toDestination();

	// Connect the player to the  highpass filter.
	player2.connect(filter);

	// Stopping the highpass loop
	document.getElementById('stop')?.addEventListener('click', async () => {
		player2.stop();
	})

})


  















