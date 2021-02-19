// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_API_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMEN_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// Initial Entries in Database
function writeData() {
    var thesis = db.collection("thesis");

    thesis.doc("1").set({
        title: "Klima",
        thesis: "Frankfurt soll bis 2035 klimaneutral werden. Dazu sollen schon bis 2030 der öffentliche Nahverkehr, die städtischen Gebäude und die Stadtverwaltung komplett auf erneuerbare Energien umgestellt werden.",
    });
    thesis.doc("2").set({
        title: "Klima",
        thesis: "Um die Folgen des Klimawandels im städtischen Raum zu lindern, soll in Frankfurt die Entsiegelung von städtischen Plätzen, Schulhöfen und anderen öffentlichen Räumen vorangetrieben werden. Durch das Pflanzen von großkronigen Bäumen im Straßenraum und andere Maßnahmen soll die Klimawandelanpassung zusätzlich unterstützt werden.",
    });
    thesis.doc("3").set({
        title: "Klima",
        thesis: "Frankfurt soll in Parks und Grünanlagen, aber auch in Einkaufsstraßen und an Knotenpunkten des öffentlichen Nahverkehrs, Trinkbrunnen aufstellen, damit sich Bürger*innen in den immer heißer werdenden Sommern kostenlos mit Trinkwasser versorgen können.",
    });
    thesis.doc("4").set({
        title: "Verkehr",
        thesis: "Frankfurt soll bei der Verkehrsplanung konsequent den ÖPNV, den Rad- und Fußverkehr ins Zentrum rücken. Fuß- und Radverkehr sollen künftig mehr, der ruhende Verkehr durch geparkte Fahrzeuge deutlich weniger Platz beanspruchen. Damit soll das Ziel einer klimaneutralen Stadt erreicht und gleichzeitig die Lebensqualität in der Stadt deutlich erhöht werden.",
    });
    thesis.doc("5").set({
        title: "Verkehr",
        thesis: "Senior*innen über 75 Jahren, Frankfurt-Pass-Inhaber*innen und alle Schüler*innen sollen den ÖPNV in Frankfurt kostenlos nutzen können.",
    });
    thesis.doc("6").set({
        title: "Verkehr",
        thesis: "Der Mainkai soll wieder autofrei sein. Er soll Grünräume, Spielflächen, Platz für Kunst und Kultur, sowie Raum für Begegnungen erhalten.",
    });
    thesis.doc("7").set({
        title: "Bildung",
        thesis: "Neben der baulichen Sanierung der Schulen soll Frankfurt auch in die Digitalisierung der Schulen investieren - nicht nur in Infrastruktur und Geräte sondern in Koordinierung mit den zuständigen Stellen auf Landesebene auch in Fachkräfte und pädagogische Angebote zur Medienbildung. Die Corona-Pandemie hat deutlich gemacht, wie groß hier der Nachholbedarf ist.",
    });
    thesis.doc("8").set({
        title: "Frauen",
        thesis: "In Frankfurter Unternehmen soll Transparenz darüber herrschen, wie die Führungspositionen zwischen Männern und Frauen verteilt sind. Über eine Frauenquote soll wirkliche Gleichberechtigung durchgesetzt werden.",
    });
    thesis.doc("9").set({
        title: "Kultur",
        thesis: "Alle Menschen sollen Zugang zu Kunst und Kultur haben. Um dieses Ziel zu erreichen, sollen Kinder sehr früh an Kultur beteiligt werden. Dafür soll die Zusammenarbeit zwischen Kulturschaffenden einerseits und Kinderbetreuungseinrichtungen und Schulen andererseits gezielt gefördert werden.",
    });
    thesis.doc("10").set({
        title: "Stadtplanung und Wohnen",
        thesis: "In Frankfurt sollen öffentliche und private Träger von Wohnungsbau bei jedem Bauvorhaben 60% sozialen bzw. preisgebundenen Wohnungsbau (in Form von Sozialwohnungen und Wohnungen für das sog. Frankfurter Mittelstandsprogramm) und 20% gemeinschaftliche und genossenschaftliche Wohnprojekte realisieren. ",
    });
    thesis.doc("11").set({
        title: "Vielfältigkeit",
        thesis: "Frankfurt soll sich dafür einsetzen, die Themen Rassismus und Diskriminierung in der Polizeiausbildung zu stärken, entsprechende Schulungen für alle Polizist*innen verpflichtend zu machen und den Anteil der Menschen mit sogenanntem Migrationshintergrund bei der Polizei zu erhöhen.",
    });
    thesis.doc("12").set({
        title: "Flucht und Integration",
        thesis: "Die Stadt Frankfurt soll sich ohne Einschränkungen zum sicheren Hafen für Geflüchtete erklären. Kommunen sollen selbst entscheiden können, ob sie mehr Geflüchtete aufnehmen wollen, als die verpflichtende Anzahl aus dem bundesweit gültigen Königsteiner Schlüssel.",
    });
    thesis.doc("13").set({
        title: "Soziales",
        thesis: "Die Stadt Frankfurt und ihre Behörden sollen sich aktiv engagieren, um bürokratische Hürden abzubauen, die häufig der Unterstützung von sozial benachteiligten Familien im Weg stehen. So sollen die Bürger*innen, die auf Unterstützung angewiesen sind, alle verfügbaren Mittel bekommen können.",
    });
    thesis.doc("14").set({
        title: "Gesundheit",
        thesis: "Der öffentliche Gesundheitsdienst soll unter Berücksichtigung der Erfahrungen aus der Pandemie personell und finanziell gestärkt werden. Dazu sollen insbesondere auch die Chancen der Digitalisierung genutzt werden.",
    });
    thesis.doc("15").set({
        title: "Gesundheit",
        thesis: "In der Drogenpolitik soll der Frankfurter Weg konsequent weiter entwickelt werden, um auf die aktuelle Situation der suchtkranken Menschen einzugehen. Niedrigschwellige Substitutionsangebote sollen genauso weiterentwickelt werden wie besondere Angebote für Crack-Konsument*innen, die häufig von den bestehenden Einrichtungen nicht angesprochen werden.",
    });

}
// Uncomment writeData() and run once, to upload initial Thesis to Firebase - DONT FORGET TO COMMENT OUT AFTER FIRST USE:
//writeData();