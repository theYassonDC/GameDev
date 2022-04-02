// Defalut controls 
const controls = {
    speed: 1,
    speedN: -1,
    jump: -147,
}
// Custom set controls
class custom_hub{
    constructor(speed, speedN, jump){
        this.speed = speed,
        this.speedN = speedN,
        this.jump = jump
    }
}
export { controls, custom_hub }