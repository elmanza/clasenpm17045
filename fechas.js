let moment = require("moment");

class Fechas{
    constructor(cumple){
        this.cumple = cumple;
        this.today = moment();
    }
    getToday(){
        return this.today.format("L");
    }
    getMyBirth(){
        return this.cumple;
    }
    diffYears(){
        return this.today.diff(this.cumple, 'years', true);
    }
    diffDays(){
        return this.today.diff(this.cumple, 'days', true);
    }
    getDifference(time){
        return this.today.diff(this.cumple, time, true);
    }
}

module.exports = Fechas;