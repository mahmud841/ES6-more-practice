// JS a akta object theke r akata object a j property gula share hosse segula akta chain akare kaj kore ata ke prototopical inheritance bole. r jodi class dorkar hoi tahole nicher moto kore declare korte hobe . class er khettre function word use kora jabe na but function er moto kaj koranor jonne onno word us ekora jabe .same kaj korbe like as functon. just function word  likha jabe an 

class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const aamir = new Support('Aamir Khan', 'BD', 11);
const salman = new Support('Solaiman Khan', 'Dubai', 4);
const sharuk = new Support('SRK Khan', 'Dubai', 9);
const akshay = new Support('Akshay Kumar', 'Dubai', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');
ash.releaseApp('1.4.5');
console.log(ash.name);