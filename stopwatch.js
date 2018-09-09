function stopwatch(){
let startTime, endTime, running, duration = 0;

this.startTime = function (){
    if(running){
        throw new Error ('Stopwatch is current running.')
    }
    else{
        running = true;
        startTime = new Date();
    }
};

this.stop = function(){
    if(!running){
        running = false;
        stopTime = new Date();
    }
    else{
        throw new Error ('Stopwatch is currently stopped.')
    }
}
}