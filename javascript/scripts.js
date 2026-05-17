// JavaScript source code
// Tab Switching Controller Logic (Para magpalit-palit ng activity view)
function openActivity(evt, activityId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(activityId).style.display = "block";
    evt.currentTarget.className += " active";
}

// Act 1 Requirement
console.log("Hello World");

// Pagpapatakbo ng mga script kapag nag-load na ang HTML page
document.addEventListener("DOMContentLoaded", function() {
    
    // Act 2: document.getElementById() Manipulation
    if(document.getElementById("text")) {
        document.getElementById("text").innerHTML = "Hello World";
    }

    // Act 4: Var Hoisting Example
    x = 5;
    var elem = document.getElementById("demo-hoist");
    if(elem) { elem.innerHTML = x; }
    var x;

    // Act 5: Let Hoisting Error Catch Simulation
    try {
        y = 10;
        let y; // Ito ay magti-trigger ng error dahil sa let constraints
    } catch(err) {
        var errZone = document.getElementById("error-zone");
        if(errZone) { 
            errZone.innerHTML = "Uncaught ReferenceError: Cannot access 'y' before initialization"; 
        }
    }
});

// Act 3: External Script Function
function externalAlert() {
    alert("Hello World of Javascript");
}

// Act 6: Window Alert Function
function triggerAlert() {
    window.alert('Hello World');
}

// Act 7: Safe document.write simulation (hindi buburahin ang buong website)
function executeWrite() {
    var writeArea = document.getElementById("write-area");
    if(writeArea) {
        var result = 5 + 6;
        writeArea.innerHTML += "<p style='background: yellow; padding: 5px; display: inline-block;'>Evaluation Output Value: <strong>" + result + "</strong></p>";
    }
}

// Act 8: Modifying HTML in 3 Ways property triggers
function getInnerText() {
    alert(document.getElementById("example").innerText);
}

function getInnerHTML() {
    alert(document.getElementById("example").innerHTML);
}

// Act 8 Part 2: Console.log and textContent comparison
function getTextContent() {
    console.log("Hello World"); // Para sa log requirement ng Act 8
    alert(document.getElementById("example").textContent);
}
