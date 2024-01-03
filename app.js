const notesBoxDiv=document.querySelector(".notes-box");
const createNoteBtn=document.querySelector(".createBtn");

let pInputBox=document.querySelectorAll(".pinput-box");

createNoteBtn.addEventListener("click", ()=>{
    let newPInputBox=document.createElement("p");
    let newImgTag=document.createElement("img");
    // newPInputBox.classList.add("pinput-box");
    newPInputBox.className="pinput-box";
    newPInputBox.setAttribute("contenteditable","true");
    newImgTag.src="images//delete.png";
    notesBoxDiv.appendChild(newPInputBox).appendChild(newImgTag);
})

notesBoxDiv.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        storeInBrowser();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".pinput-box");
        notes.forEach(note => {
            note.onkeyup= function(){
                storeInBrowser();
            }
        });
    }
})

function storeInBrowser(){
    localStorage.setItem("notes",notesBoxDiv.innerHTML);
}

function showNotes(){
    notesBoxDiv.innerHTML=localStorage.getItem("notes");
}
showNotes();

document.addEventListener("keydown", event =>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})