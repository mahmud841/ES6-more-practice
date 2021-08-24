class Support {
    name;
    designation = 'Support Web Development';
    address ='china';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support season');
    }
}
const aamir = new Support('Aamir Khan','BD');
const salman = new Support('Salman Khan', 'China');
const shahruk = new Support('SRK Khan', 'China');
const aksay = new Support('Aksay  Kumar', 'China');
aamir.startSession();
salman.startSession();
console.log(aamir,salman,shahruk,aksay);

//class er khettre kono property ke access korte gele this.var name diye korte hobe 