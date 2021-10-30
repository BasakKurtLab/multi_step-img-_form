var aktuell = 0;
var container = document.getElementById("container");
var forms = container.getElementsByClassName("form");
var alleInputs = container.getElementsByTagName("input");
var progress = document.getElementById("progress");
var schritte = document.getElementById("schritte");

var kreise = schritte.getElementsByTagName("div");

for(var i = 0; i < forms.length; i++)
{
    var k = document.createElement("div");
    schritte.appendChild(k);
}
kreise[0].style.backgroundColor = "darkorange";


function nav(n)
{
    var letzter = aktuell;

    if(schrittCheck(n))
        return;

    forms[aktuell].style.display = "none";
    aktuell += n;
    forms[aktuell].style.display = "flex";
    
    buttonUpdate();
    progressUpdate();
    kreiseUpdate(letzter);
}


function schrittCheck(x)
{
    if(aktuell == forms.length-1 && x == 1) // WENN LETZTER SCHRITT und WENN WEITER GEHEN WILL
    {
        senden();
        return true;
    }
    if(aktuell == 0 && x == -1) // WENN ERSTER SCHRITT und WENN ZURÜCK GEHEN WILL
    {
        return true;
    }

    return false; // alles OKAY

}

function buttonUpdate()
{
    if(aktuell == 0) // WENN WIR IN ERSTEM SCHRITT SIND
    {
        document.getElementById("zurueck").style.opacity = "0";
    }
    else
    {
        document.getElementById("zurueck").style.opacity = "1";
    }

    if(aktuell == forms.length-1) // WENN WIR IN LETZTEM SCHRITT SIND
    {
        document.getElementById("weiter").innerHTML = "Senden";
    }
    else
    {
        document.getElementById("weiter").innerHTML = "Weiter";
    }
}

function senden()
{
    // TO-DO: kontrollieren, ob alle Inputs ausgefüllt sind
    for(var i = 0; i < alleInputs.length; i++)
    {
        if(alleInputs[i].value == "")
        {
            alert("Bitte alle Felder ausfüllen!");
            return;
        }
    }

    forms[aktuell].style.display = "none";
    document.getElementById("zurueck").style.display = "none";
    document.getElementById("weiter").style.display = "none";

    document.getElementById("gesendet").style.display = "block";

    progress.style.width = "100%";
}

function progressUpdate()
{
    var prozent = (1 / forms.length) * 100;

    prozent *= aktuell;

    progress.style.width = prozent + "%";
}

function kreiseUpdate(vorher)
{
    kreise[vorher].style.backgroundColor = "#ffead1";

    kreise[aktuell].style.backgroundColor = "darkorange";
}


