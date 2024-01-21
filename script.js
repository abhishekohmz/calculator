
// display  in text box

function Click(num){
    inp.value+=num
}


// clear text box

function Clear(){
    inp.value=""
}

// evaluate expressions

function Evaluate(){
    expression=inp.value
    output=eval(expression)
    inp.value=output

    //method 2
    // inp.value=eval(inp.value)
}

// remove last item

function Remove(){

    inp.value=inp.value.slice(0,-1)
}