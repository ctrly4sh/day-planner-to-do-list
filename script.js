
const input = document.getElementById("input-box");
const list = document.getElementById("list-cinatiner");

function add(){
    if(input.value === ''){
        alert("add some task before submitting");
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    input.value = "";
    save();
}

list.addEventListener("click" , function(e){
    if(e.target.tagName  === 'LI'){
        e.target.classList.toggle('checked');
        save();
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save();
    }
},
false);

function save(){
    localStorage.setItem("data" , list.innerHTML);
}

function displayData() {
    list.innerHTML = localStorage.getItem("data");
}

displayData();

