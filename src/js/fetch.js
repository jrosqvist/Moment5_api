"use strict";
// Lägger webbtjänst-adressen i en variabel
const URL = "http://studenter.miun.se/~joro1803/dt173g/moment5_rest/courselist.php/courses/";
// Hämtar kurserna när sidan laddas in
window.onload = getCourses;
// Funktion som lägger till en bil från formuläret
function addCourse() {
    // Hämtar datat från fälten och lägger i variabler
    let code = document.getElementById("coursecode").value;
    let name = document.getElementById("coursename").value;
    let progression = document.getElementById("courseprogression").value;
    let syllabus = document.getElementById("coursesyllabus").value;

    // Skapar ett JSON-objekt av inmatat data
    let courseJson = JSON.stringify({
        "code": code,
        "name": name,
        "progression": progression,
        "syllabus": syllabus
    });

    // Skickar JSON-datat till URL:en
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: courseJson
    })
        // Konverterar returnerad respons till JSON
        .then((res) => res.json())
        // Hämtar kurserna
        .then((data) => getCourses())
        // Plockar upp felmeddelanden
        .catch((err) => console.log(err))
}


// Funktion som hämtar bilarna från webbtjänsten
function getCourses() {
    // Håmtar kurser från URL:en
    fetch(URL)
        // Konverterar till JSON
        .then((res) => res.json())
        .then((data) => {
            let output = "<h3>Lästa kurser</h3>";
            // Loopar igenom datat och skriver ut alla kurser
            data.forEach(function (post) {
                output += "<div class = 'courseBox'><p>" + post.Code + "</p>"
                    + "<p>" + post.Name + "</p>"
                    + "<p>" + post.Progression + "</p>"
                    + "<p>" + post.Syllabus + "</p>"
                    // Lägger till en radera-knapp som får ID:t från kurs-ID:t
                    + "<button onclick ='deleteCourse(this.id)' id =" + post.ID + ">Radera</button></div>";
            })
            // Lägger in all text i diven output
            document.getElementById("output").innerHTML = output;
        })
        // Plockar upp felmeddelanden
        .catch((err) => console.log(err))
}

// Funktion som tar bort en kurs med ID:t som skickas från radera-knappen
function deleteCourse(id) {
    // Använder URL:en och lägger till id:t som ska raderas
    fetch(URL + "/" + id, {
        method: "DELETE"
    })
        // Uppdaterar kurslistan
        .then((data) => getCourses())
        // Visar felmeddelanden
        .catch((err) => console.log(err))
}