// Joey Musser

console.clear();

var synth = new Tone.Synth().toMaster();
var osc = new Tone.Oscillator(440, "sine").toMaster()

function SynthAttackRelease(){
    synth.triggerAttackRelease('C4', '8n');
    console.log("SynthAttackRelease was pressed.");
}

function OscillatorTest(){
    osc.start();
    sleep(100).then(()=>{
        osc.stop(); 
    })
}