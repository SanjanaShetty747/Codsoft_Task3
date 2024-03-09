var tb=document.getElementById("text");
var btn=document.getElementById("btn");
var op1;
var op2;
var opr;
var op="";
var ans=false;
function display(val){
   if((val=="+"||val=="/"||val=="*")&& op!=""){
    calculate();
    op1=tb.value;
    opr=val;
    tb.value="";
    op="";
    return;
   }
    if((val=="+"||val=="/"||val=="*")&&tb.value!=""){
    op1=tb.value;
    op=tb.value;
    opr=val;
    tb.value="";
    return;
    }
     if((val==="+"||val==="/"||val==="*")&&tb.value===""){
        return;
    }

    if(val==="-"&&tb.value===""){
        tb.value+=val;
        return;
    }
    else if(val=="-" && op!=""){
        calculate();
        op1=tb.value;
        opr=val;
        tb.value="";
        return;
    }
    else if(val==="-"&&tb.value!=""){
        op1=tb.value;
        opr=val;
        op=tb.value;
        tb.value="";
        return;
    }


    tb.value+=val;
}
function disdot(val){
    if(!tb.value.includes("."))
    tb.value+=val;
}
function calculate(){
    op2=tb.value;
    var ex;
    if(opr==="-"&&op2.includes("-"))
    ex=op1.concat(opr,"(",op2,")");
    else
    ex=op1.concat(opr,op2);
 if(op2==="0"&&opr==="/")
 tb.value="Division by zero";
else{
    var q=eval(ex);
    tb.value=q;
}
}
function clearscreen(){
    tb.value="";
    op1="";
    opr="";
}
    

