var expression = "";
var bracket_flag = true;

function add_to_string(val)
{    
    if(val == "C")
    {
        expression= expression.substring(0,expression.length-1);
    }

    else if(val == "AC")
    {
        expression = "";
    }

    else if(val == "=")
    {
        expression = eval(expression);
    }

    else if(val == "Pi")
    {
        expression +="3.14";
    }

    else if( val == "( )")
    {
        if(bracket_flag == true)
        {
            expression += "(";
            bracket_flag = false;
        }
        else if(bracket_flag == false)
        {
            expression += ")";
            bracket_flag = true;
        }
    }

    else 
    {
        expression += val;
    }

    display.textContent = expression;
}

var display = document.getElementById("display");
var buttons = document.getElementsByTagName("button");

Array.from(buttons).forEach(button=>{
    button.addEventListener("click",e=>{
        try{
            add_to_string(e.target.textContent);
        }
        catch{
            display.textContent = "Invalid Expression"
        }
    
    });
});