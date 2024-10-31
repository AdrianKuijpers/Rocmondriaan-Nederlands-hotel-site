function change()
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="Translate English") { elem.value = "Translate Nederlands";
    document.querySelector(".change1").innerHTML = "<h2 class=title title_color Change1>Relax at Westinhotel!</h2>";
    document.querySelector(".change2").innerHTML = "We are Westinhotel, the place where you can book the best holidays for the lowest prices. Our experienced organization has been around for years and has multiple hotels in the Netherlands and abroad.";
    document.querySelector(".change3").innerHTML = "Discover new exotic places and experience new adventures abroad. Also within the Netherlands you can enjoy relaxation or exertion in our luxurious hotels in beautiful locations.";
    document.querySelector(".change4").innerHTML = "With us, the costs to book are cheap so that you will have enough left to fully enjoy the surroundings. Do you want to save extra? Then scroll down for a temporary offer. You too can sit warm this winter.";
    document.querySelector(".change5").innerHTML = "Temporary Deal";
    document.querySelector(".change6").innerHTML =  "Are you starting to feel the cold and are you longing for more pleasant temperatures? Then book one of our hotels around the Mediterranean. On a stay in the room of your choice, you will receive a 25% discount until 1 January 2025!";
    document.querySelector(".change7").innerHTML =  "The price of the cheapest room is then not 120 but 90 euros and the price of the most expensive room is not 160 but 120 euros per night.";
    document.querySelector(".change8").innerHTML =  "Check out our hotels, there are still rooms available. Be quick and book an unforgettable and heartwarming holiday!";
    } else { elem.value = "Translate English";
    document.querySelector(".change1").innerHTML = "<h2 class=title title_color Change1>Relax bij Westinhotel!</h2>";
    document.querySelector(".change2").innerHTML = "Wij zijn Westinhotel, de plek waar je de beste vakanties kan boeken voor de laagste prijzen. Onze ervaren organisatie bestaat al jaren en beschikt over meerdere hotels in Nederland en daar buiten.";
    document.querySelector(".change3").innerHTML = "Ontdek nieuwe exotische plaatsen en beleef nieuwe avonturen in het buitenland. Ook binnen Nederland kunt u in onze luxueuze hotels op prachtige locaties genieten van ontspanning of inspanning.";
    document.querySelector(".change4").innerHTML = "Bij ons zijn de kosten om te boeken goedkoop zodat u genoeg over zal houden om volop te genieten van de omgeving. Wilt u extra besparen? Scrol dan naar beneden voor een tijdelijke aanbieding. Ook u kunt er deze winter even warmpjes bij zitten.";
    document.querySelector(".change5").innerHTML = "<h2>Tijdelijke Deal</h2>";
    document.querySelector(".change6").innerHTML =  "Vindt u het al kouder worden en verlangt u naar aangenamere temperaturen? Boek dan een van onze hotels rond de Middellandse Zee. Op een verblijf in de kamer van uw keuze krijgt u tot 1 januari 2025 een korting van 25%!";
    document.querySelector(".change7").innerHTML =  "De prijs van goedkoopste kamer is dan geen 120 maar 90 euro en die van de duurste geen 160 maar 120 euro per nacht.";
    document.querySelector(".change8").innerHTML =  "Bekijk onze hotels, er zijn nog kamers beschikbaar. Wees er snel bij en boek een onvergetelijke en hartverwarmende vakantie!";
  }
}



