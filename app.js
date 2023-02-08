const NoteStudent1 = document.querySelector ("#Note1");
const NoteStudent2 = document.querySelector ("#Note2");
const NoteStudent3 = document.querySelector ("#Note3");

const finalNote = document.getElementById ("finalNote");
const toRecoverNote = document.getElementById ("toRecoverNote");
const toWinNote = document.getElementById ("toWinNote");
const toWinHonorsNote = document.getElementById ("toWinHonorsNote");

const result = document.getElementById ("result");

const btnCalculate = document.querySelector (".btnCalculate");

btnCalculate.addEventListener ('click', notes)

let note1;
let note2;
let note3;

function notes (){
    note1 = NoteStudent1.value * 0.3;
    note2 = NoteStudent2.value * 0.3;
    note3 = NoteStudent3.value * 0.4;
    
    let sum = (note1+note2);

    if (note1 >= 0 && note1 <=5 || note2 >= 0 && note2 <=5 || note3 >= 0 && note3 <=5 ){

        toRecoverNote.textContent = toRecover(sum);
        toWinNote.textContent = toWin(sum);
        toWinHonorsNote.textContent = toWinHonors(sum);
    
        let noteFinal = ((note1 )+(note2 )+(note3 )).toFixed(1);
    
        finalNote.textContent = noteFinal;
    
        if (noteFinal > 0 && noteFinal <= 2){
            result.textContent = "Perdio la materia."
        }else if (noteFinal >= 2.1 && noteFinal <= 3.4){
            result.textContent = "Perdio la materia pero puede recuperar."
        }else if (noteFinal >= 3.5 && noteFinal <= 4.5){
            result.textContent = "Aprobo la materia satisfactoriamente."
        }else if (noteFinal >= 4.6 && noteFinal <= 5){
            result.textContent = "Aprobo la materia y será reconocido por la plataforma como un aprendiz exelente o con  honores."
        }else {
            result.textContent = "Notas no balidas"
        }
    }else result.textContent = "Nota no valida"
}

let answer;

function toRecover (sum){
    answer = ((2.1 - sum)/0.4).toFixed(1)
    if (answer >= 0 && answer <= 5) {
        return "Si desea recuperar debe sacar: "+answer
    }else return "Si desea recuperar debe sacar: No aplica"
}

function toWin (sum) {
    answer = ((3.5 - sum)/0.4).toFixed(1)
    if (answer >= 0 && answer <= 5) {
        return "Si desea aprobar la materia debe sacar: "+answer
    }else return "Si desea aprobar la materia debe sacar: No aplica"
}

function toWinHonors(sum) {
    answer = ((4.6 - sum)/0.4).toFixed(1)
    if(answer >= 0 && answer <= 5){
        return "Si desea aprobar con honores debe sacar: "+answer
    }else return "Si desea aprobar con honores debe sacar: No aplica"
}
    
    


