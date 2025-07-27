enum RadioMessage {
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.message1, function () {
    music.play(music.stringPlayable("B B B - B - B B ", 360), music.PlaybackMode.UntilDone)
})
radio.setFrequencyBand(2.4)
basic.forever(function () {
	
})
