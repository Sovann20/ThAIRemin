console.clear()

// Create Instruments
const synth = new Tone.Synth().toMaster();
const osc = new Tone.Oscillator().toMaster();

// Oscillator 
var oscFreq = 440;
var oscType = "sin";

function SynthAttackRelease(){
    synth.triggerAttackRelease('C4', '8n');
    console.log("SynthAttackRelease was pressed.");
}

function ChangeOscFreq(freq){

}

function ChaneOscType(type){

}

function StartOscillator(){
    osc.start();
    console.log("StartOscillator was pressed.");
}

function StopOscillator(){
    osc.stop();
    console.log("StopOscillator was pressed.");
}
// synth.triggerAttackRelease('C4', '8n');


// var osc = new Tone.Oscillator({
//     "frequency" : 440,
//     "volume" : -10
// }).toMaster();