//Operador And &&

/*function maroyYMenor(num)
{
    if(num > 5 && num < 10 && num%2 === 0)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}

maroyYMenor(2);
maroyYMenor(7);
maroyYMenor(8);*/

function condicionCompleja(num)
{
    if(num > 9 && num % 2 === 0 || num === 3)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5); 