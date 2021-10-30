var boxContainer = document.getElementsByClassName("boxContainer");
var boxArrays = [];

for(var i = 0; i < boxContainer.length; i++)
{
    boxArrays[i] = boxContainer[i].getElementsByClassName("box");

    for(var x = 0; x < boxArrays[i].length; x++)
    {
        boxArrays[i][x].onclick = function()
        {
            klick(this);
        };
    }
}

function klick(element)
{
    for(var i = 0; i < boxArrays[aktuell].length; i++)
    {
        boxArrays[aktuell][i].classList.remove("aktiv");
    }

    element.classList.add("aktiv");
}