function add(){
    let a=Number(document.getElementById('number').value);
    let b=Number(document.getElementById('Number').value);
    let c=a+b;
    let d=document.getElementById('res');
    d.value=c;
}

function sub(){
    let a=Number(document.getElementById('number').value);
    let b=Number(document.getElementById('Number').value);
    let c=a-b;
    let d=document.getElementById('res');
    d.value=c;
}

function mul(){
    let a=Number(document.getElementById('number').value);
    let b=Number(document.getElementById('Number').value);
    let c=a*b;
    let d=document.getElementById('res');
    d.value=c;
}

function div(){
    let a=Number(document.getElementById('number').value);
    let b=Number(document.getElementById('Number').value);
    let c=a/b;
    let d=document.getElementById('res');
    d.value=c;
}