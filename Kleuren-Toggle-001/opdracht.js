//**Requirements:**
//
//- Als gebruiker wil ik op een menu kunnen klikken dat uitklapt als ik er op klik.
//    - Gebruik een `ul` en `li` voor het menu.
//    - Je hoeft de styling niet precies na te doen, focus je vooral op de JavaScript
//    - De (CSS) animatie hoef je niet te doen
//    - Het volgende icoon ga je nodig hebben voor je menu:
//
//
//
//- Als gebruiker wil ik in het uitgeklapte menu een keuze hebben aan kleuren (uitgeschreven in tekst). Elk item in het menu is één kleur.
//    - Dit is anders dan in de tutorial.
//- Als gebruiker wil ik op één van de kleuren kunnen klikken.
//- Als gebruiker: wanneer ik op de kleur in het menu heb geklikt verandert de achtergrondkleur van de gehele pagina in de aangeklikte kleur.
//- Als gebruiker: wanneer ik op de kleur in het menu klik klapt het menu weer terug in.
//
//
//eventOpdracht

//1 eerst lijst met 1 kleur waarbij achtergrond kleur veranderd, daarna verder
//2 knop klik + achtergrond kleur veranderen
//3 bewegen van het menu als laatste
//
// 1 = eventlistener aan HTML element
// 2 = funtie aanroepen op moment dat gebruiker klikt
// 3 = functie schrijven die je aanroept wanneer gebruiker klikt (onclick)
// 4 = in deze functie varander je de class van het html element [body]
//     -change background-color
//
// class in css heet red, alleen deze wodrt nog niet toegepast

//html pagina met Ul en menu-plaatje            is gemaakt
//knop rood met id rood                         is gemaakt.

//nu moet ik eerst in de DOM de id rood pakken
//dus
//document.getElementById("rood");              checken
//als we het later nog willen gebruiken dan kunnen we het ook in een variabele stoppen
//dat moet zo
//var rood = document.getElementById("rood");    is vb gaan we nog niet doen
//
//
//We willlen dat wanneer we op knop rood drukken de achtergrond veranderd
//dus gaan we een eventlistener aan knop rood hangen met de functie backgroundcolor-change of zo iets
//
//hoe dan?
//eerst eventlistener hangen aan het element rood
//
//dan een call back functie...nl wat er moet gebeuren wanneer er op geklikt wordt en dat is
//verander de achtergrond
//
//
//                rood.addEventListener('click' , function(veranderAchterGrond)) {
//
//                                      console.log(veranderAchterGrond.target);                //wat is de target van het event
//                                      console.log(veranderAchterGrond);                       //checken of klopt
//                       })
//
//dus wanneer ik nu op kop rood klik, komt er een melding in de console
//jaaaaaaaaaaaa so far so good!!!!
//
//volgende, nu wil ik wanneer ik op knop rood klik dat de achtergrond veranderd
//dus zal er ergens (css iets moeten staan met backgroundcolor = rood)  of zo iets
//daarna zal in de functie van hierboven verwerkt moeten worden dat wanneer er op de knop wordt
//geklikt de achtergrond dus ook veranderd
//
//hoe dan?
//eerst prutsen in css zodat de achtergrond veranderd.
//oke, dat ging snel, achtergrond is nu standaard blauw
//nu willen we dit veranderen, dus als op de knop rood wordt geklikt veranderd de achtergrond van blauw naar rood.
//er moet iets gebeuren in de functie en deze moet naar iets verwijzen, de body
//dit had ik dus gedaan onderstaande in de functie gezet
//body.style.backgroundColor = "red";
//maar kreeg fout melding: body verwijst nergens naar, hmmm
//na wat zoeken onderstaande gedaan
//const body = document.querySelector("body");      een variabele body aangemaakt,
//                                                  waarin met de querySelector de "body" uit de DOM
//                                                  document wordt gehaald
//oke, en om nu dus te wisselen tussen de kleuren kunnen we copy paste doen
//wel nieuwe kleuren aan maken inc id en deze uit de DOM halen en hier een eventlistener aan koppelen
//
//nu dit eerst met groen, dan even n hapje doen en blokje om
//hahahaa kluns, groen kent ie natuurlijk niet......GREEN
//T WERKT!!!!!

//nu menu inklappen en uitklappen
//
//
