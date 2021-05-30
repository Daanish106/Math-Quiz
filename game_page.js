    player1_name = localStorage.getItem("player1_name");
    player1_score = 0;
    num_1 =  Math.floor(Math.random() * 20);
    num_2 =  Math.floor(Math.random() * 20);
    Gans = 0;
    
    


document.getElementById("player1_name").innerHTML = player1_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;

document.getElementById("Q1").innerHTML = num_1 ;
document.getElementById("O").innerHTML = "+";
document.getElementById("Q2").innerHTML = num_2;
function send()
{
  Gans = document.getElementById("word").value;
}



function check()
{
Ans = num_1 + num_2; 

if(Gans == Ans)
		{
			document.getElementById("CW").innerHTML = "CORRECT";

		}
		else 
		{
		    document.getElementById("CW").innerHTML = "WRONG";	
		}	
}

