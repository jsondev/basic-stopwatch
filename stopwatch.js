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
        throw new Error ('Stopwatch is currently stopped.')
        
    }
    else{
        running = false;
        endTime = new Date();
    }
    // calculate seconds
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
}
}