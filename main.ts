enum RadioMessage {
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.message1, function () {
    radio.setGroup(1)
    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
})
radio.setFrequencyBand(2.4)
radio.sendMessage(RadioMessage.message1)
basic.forever(function () {
	
})
