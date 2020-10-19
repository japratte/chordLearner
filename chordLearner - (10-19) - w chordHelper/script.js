const keyList = ['A', 'Ab', 'B', 'Bb', 'C', 'D', 'Db', 'E', 'Eb', 'F', 'G', 'Gb'];

const majorChordList = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const key = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

var rcg;
var ogColor;

var C = document.getElementById("C");
var Db = document.getElementById("Db");
var D = document.getElementById("D");
var Eb = document.getElementById("Eb");
var E = document.getElementById("E");
var F = document.getElementById("F");
var Gb = document.getElementById("Gb");
var G = document.getElementById("G");
var Ab = document.getElementById("Ab");
var A = document.getElementById("A");
var Bb = document.getElementById("Bb");
var B = document.getElementById("B");


key.forEach(key => {
    key.addEventListener('click', () => changeState(key))
})
 
function ranChordGen(majorChordList) {
    var ranChord = majorChordList[Math.floor(Math.random() * majorChordList.length)];
    return ranChord;
}
 
function showQuestion() {
    rcg = ranChordGen(majorChordList);
    
    document.getElementById("question1").innerHTML = "Please select the " + rcg + " major chord ...."
}

function changeState(key) {
    
    var ogColor = "";
    
    if (key.innerHTML === "C" || key.innerHTML === "D" || key.innerHTML === "E" || key.innerHTML === "F" || key.innerHTML === "G" || key.innerHTML === "A" ||  key.innerHTML === "B") {
        
        ogColor = "white";
        
    }
    
    if (key.innerHTML === "Db" || key.innerHTML === "Eb" || key.innerHTML === "Gb" || key.innerHTML === "Ab" || key.innerHTML === "Bb") {
        
        ogColor = "black";
    }
    
    
    if (key.style.backgroundColor != "green" ) {
    
        key.style.backgroundColor = "green";
    }
    
    else {
        
        key.style.backgroundColor = ogColor;
        
    }
    
    checkChord();
}

function checkChord() {
    
    var chord = "";
    
    if (rcg === "C") {
        
        if (C.style.backgroundColor === "green" && E.style.backgroundColor === "green" && G.style.backgroundColor === "green") {
            
            showCorrectAnswer();
            showQuestion();
            
            C.style.backgroundColor = "white";
            E.style.backgroundColor = "white";
            G.style.backgroundColor = "white";
        }
        
    }
    
    if (rcg === "Db") {
        
        if (Db.style.backgroundColor === "green" && F.style.backgroundColor === "green" && Ab.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            Db.style.backgroundColor = "black";
            F.style.backgroundColor = "white";
            Ab.style.backgroundColor = "black";
        
        }
        
    }
    
    if (rcg === "D") {
        
        if (D.style.backgroundColor === "green" && Gb.style.backgroundColor === "green" && A.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
        
            D.style.backgroundColor = "white";
            Gb.style.backgroundColor = "black";
            A.style.backgroundColor = "white";
            
        }
        
    }
    
    
    if (rcg === "Eb") {
        
        if (Eb.style.backgroundColor === "green" && G.style.backgroundColor === "green" && Bb.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            Eb.style.backgroundColor = "black";
            G.style.backgroundColor = "white";
            Bb.style.backgroundColor = "black";
        
        }
        
    }
    
    if (rcg === "E") {
        
        if (E.style.backgroundColor === "green" && Ab.style.backgroundColor === "green" && B.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            E.style.backgroundColor = "white";
            Ab.style.backgroundColor = "black";
            B.style.backgroundColor = "white";
        
        }
        
    }
    
    if (rcg === "F") {
        
        if (F.style.backgroundColor === "green" && A.style.backgroundColor === "green" && C2.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            F.style.backgroundColor = "white";
            A.style.backgroundColor = "white";
            C2.style.backgroundColor = "white";
        
        }
        
    }
    
    if (rcg === "Gb") {
        
        if (Gb.style.backgroundColor === "green" && Bb.style.backgroundColor === "green" && Db2.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            Gb.style.backgroundColor = "black";
            Bb.style.backgroundColor = "black";
            Db2.style.backgroundColor = "black";
        
        }
        
    }
    
    if (rcg === "G") {
        
        if (G.style.backgroundColor === "green" && B.style.backgroundColor === "green" && D2.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            G.style.backgroundColor = "white";
            B.style.backgroundColor = "white";
            D2.style.backgroundColor = "white";
        
        }
        
    }
    
    if (rcg === "Ab") {
        
        if (Ab.style.backgroundColor === "green" && C2.style.backgroundColor === "green" && Eb2.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            Ab.style.backgroundColor = "black";
            C2.style.backgroundColor = "white";
            Eb2.style.backgroundColor = "black";
        
        }
        
    }
    
    if (rcg === "A") {
        
        if (A.style.backgroundColor === "green" && Db2.style.backgroundColor === "green" && E2.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            A.style.backgroundColor = "white";
            Db2.style.backgroundColor = "black";
            E2.style.backgroundColor = "white";
        
        }
        
    }
    
    if (rcg === "Bb") {
        
        if (Bb.style.backgroundColor === "green" && D2.style.backgroundColor === "green" && F2.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            Bb.style.backgroundColor = "black";
            D2.style.backgroundColor = "white";
            F2.style.backgroundColor = "white";
        
        }
        
    }
    
    if (rcg === "B") {
        
        if (B.style.backgroundColor === "green" && Eb2.style.backgroundColor === "green" && Gb2.style.backgroundColor === "green") {
        
            showCorrectAnswer();
            showQuestion();
            
            B.style.backgroundColor = "white";
            Eb2.style.backgroundColor = "black";
            Gb2.style.backgroundColor = "black";
        
        }
        
    }
    
}

function hideKeyNames(className) {
    
    var e = document.getElementsByClassName(className)
    
    for (var i=0; i<e.length; i++) {
        
        if (e[i].style.display === 'none') {
            
                e[i].style.display = 'block';
        }
        
        else {
            e[i].style.display = 'none';
        }
        
    }
    
}

function showCorrectAnswer() {
    document.getElementById("answer1").innerHTML = "Correct !"
}

function changeBtnColor(btn) {
    
    var cBt = btn;
    
    if (cBt.style.backgroundColor != "yellow" ) {
    
        cBt.style.backgroundColor = "yellow";
    } else {
        cBt.style.backgroundColor = "white";
    }
    
}

function showCMajor() {
    
    if (C.style.backgroundColor != "green" ) {
    
        C.style.backgroundColor = "green";
    } else {
        C.style.backgroundColor = "white";
    }
    
    if (E.style.backgroundColor != "green" ) {
    
        E.style.backgroundColor = "green";
    } else {
        E.style.backgroundColor = "white";
    }
    
    if (G.style.backgroundColor != "green" ) {
    
        G.style.backgroundColor = "green";
    } else {
        G.style.backgroundColor = "white";
    }   
    
}

function showDbMajor() {
    
    if (Db.style.backgroundColor != "green" ) {
    
        Db.style.backgroundColor = "green";
    } else {
        Db.style.backgroundColor = "black";
    }
    
    if (F.style.backgroundColor != "green" ) {
    
        F.style.backgroundColor = "green";
    } else {
        F.style.backgroundColor = "white";
    }
    
    if (Ab.style.backgroundColor != "green" ) {
    
        Ab.style.backgroundColor = "green";
    } else {
        Ab.style.backgroundColor = "black";
    }
    
}

function showDMajor() {
    
    if (D.style.backgroundColor != "green" ) {
    
        D.style.backgroundColor = "green";
    } else {
        D.style.backgroundColor = "white";
    }
    
    if (Gb.style.backgroundColor != "green" ) {
    
        Gb.style.backgroundColor = "green";
    } else {
        Gb.style.backgroundColor = "black";
    }
    
    if (A.style.backgroundColor != "green" ) {
    
        A.style.backgroundColor = "green";
    } else {
        A.style.backgroundColor = "white";
    }
    
}

function showEbMajor() {
    
    if (Eb.style.backgroundColor != "green" ) {
    
        Eb.style.backgroundColor = "green";
    } else {
        Eb.style.backgroundColor = "black";
    }
    
    if (G.style.backgroundColor != "green" ) {
    
        G.style.backgroundColor = "green";
    } else {
        G.style.backgroundColor = "white";
    }
    
    if (Bb.style.backgroundColor != "green" ) {
    
        Bb.style.backgroundColor = "green";
    } else {
        Bb.style.backgroundColor = "black";
    }
    
}

function showEMajor() {
    
    if (E.style.backgroundColor != "green" ) {
    
        E.style.backgroundColor = "green";
    } else {
        E.style.backgroundColor = "white";
    }
    
    if (Ab.style.backgroundColor != "green" ) {
    
        Ab.style.backgroundColor = "green";
    } else {
        Ab.style.backgroundColor = "black";
    }
    
    if (B.style.backgroundColor != "green" ) {
    
        B.style.backgroundColor = "green";
    } else {
        B.style.backgroundColor = "white";
    }
    
}

function showFMajor() {
    
    if (F.style.backgroundColor != "green" ) {
    
        F.style.backgroundColor = "green";
    } else {
        F.style.backgroundColor = "white";
    }
    
    if (A.style.backgroundColor != "green" ) {
    
        A.style.backgroundColor = "green";
    } else {
        A.style.backgroundColor = "white";
    }
    
    if (C2.style.backgroundColor != "green" ) {
    
        C2.style.backgroundColor = "green";
    } else {
        C2.style.backgroundColor = "white";
    }
    
}

function showGbMajor() {
    
    if (Gb.style.backgroundColor != "green" ) {
    
        Gb.style.backgroundColor = "green";
    } else {
        Gb.style.backgroundColor = "black";
    }
    
    if (Bb.style.backgroundColor != "green" ) {
    
        Bb.style.backgroundColor = "green";
    } else {
        Bb.style.backgroundColor = "black";
    }
    
    if (Db2.style.backgroundColor != "green" ) {
    
        Db2.style.backgroundColor = "green";
    } else {
        Db2.style.backgroundColor = "black";
    }
    
}

function showGMajor() {
    
    if (G.style.backgroundColor != "green" ) {
    
        G.style.backgroundColor = "green";
    } else {
        G.style.backgroundColor = "white";
    }
    
    if (B.style.backgroundColor != "green" ) {
    
        B.style.backgroundColor = "green";
    } else {
        B.style.backgroundColor = "white";
    }
    
    if (D2.style.backgroundColor != "green" ) {
    
        D2.style.backgroundColor = "green";
    } else {
        D2.style.backgroundColor = "white";
    }
    
}

function showAbMajor() {
    
    if (Ab.style.backgroundColor != "green" ) {
    
        Ab.style.backgroundColor = "green";
    } else {
        Ab.style.backgroundColor = "black";
    }
    
    if (C2.style.backgroundColor != "green" ) {
    
        C2.style.backgroundColor = "green";
    } else {
        C2.style.backgroundColor = "white";
    }
    
    if (Eb2.style.backgroundColor != "green" ) {
    
        Eb2.style.backgroundColor = "green";
    } else {
        Eb2.style.backgroundColor = "black";
    }
    
}

function showAMajor() {
    
    if (A.style.backgroundColor != "green" ) {
    
        A.style.backgroundColor = "green";
    } else {
        A.style.backgroundColor = "white";
    }
    
    if (Db2.style.backgroundColor != "green" ) {
    
        Db2.style.backgroundColor = "green";
    } else {
        Db2.style.backgroundColor = "black";
    }
    
    if (E2.style.backgroundColor != "green" ) {
    
        E2.style.backgroundColor = "green";
    } else {
        E2.style.backgroundColor = "white";
    }
    
}

function showBbMajor() {
    
    if (Bb.style.backgroundColor != "green" ) {
    
        Bb.style.backgroundColor = "green";
    } else {
        Bb.style.backgroundColor = "black";
    }
    
    if (D2.style.backgroundColor != "green" ) {
    
        D2.style.backgroundColor = "green";
    } else {
        D2.style.backgroundColor = "white";
    }
    
    if (F2.style.backgroundColor != "green" ) {
    
        F2.style.backgroundColor = "green";
    } else {
        F2.style.backgroundColor = "white";
    }
    
}

function showBMajor() {
    
    if (B.style.backgroundColor != "green" ) {
    
        B.style.backgroundColor = "green";
    } else {
        B.style.backgroundColor = "white";
    }
    
    if (Eb2.style.backgroundColor != "green" ) {
    
        Eb2.style.backgroundColor = "green";
    } else {
        Eb2.style.backgroundColor = "black";
    }
    
    if (Gb2.style.backgroundColor != "green" ) {
    
        Gb2.style.backgroundColor = "green";
    } else {
        Gb2.style.backgroundColor = "black";
    }
    
}

showQuestion();
