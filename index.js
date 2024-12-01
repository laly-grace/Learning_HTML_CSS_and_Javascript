

var dataFieldEl = document.querySelectorAll(".dataField");
var grdEl = document.querySelectorAll(".gradeDiplayEl");

for(var i = 0;i<dataFieldEl.length;i++){
    dataFieldEl[i].addEventListener("blur",function(){displayGrade();});

}

function displayGrade(){
    var theEl = event.target;
    var value = Number(theEl.value);
    var index = Array.prototype.indexOf.call(dataFieldEl,theEl);
    var grdEl = document.querySelectorAll(".gradeDiplayEl");

    if(value>=90){
        grdEl[index].innerHTML = "<b>A<sup>+</sup></b>";
    }
    else if(value>=85){
        grdEl[index].innerHTML = "<b>A</b>";
    }
    else if(value>=80){
        grdEl[index].innerHTML = "<b>A<sup>-</sup></b>";
    }
    else if(value>=75){
        grdEl[index].innerHTML = "<b>B<sup>+</sup></b>";
    }
    else if(value>=70){
        grdEl[index].innerHTML = "<b>B</b>";
    }
    else if(value>=65){
        grdEl[index].innerHTML = "<b>B<sup>-</sup></b>";
    }
    else if(value>=60){
        grdEl[index].innerHTML = "<b>C<sup>+</sup></b>";
    }
    else if(value>=55){
        grdEl[index].innerHTML = "<b>C</b>";
    }
    else if(value>=50){
        grdEl[index].innerHTML = "<b>C<sup>-</sup></b>";
    }
    else if(value>=40){
        grdEl[index].innerHTML = "<b>D</b>";
    }
    else if(value<=40){
        grdEl[index].innerHTML = "<b>F</b>";
    }
}

var calBtnEl = document.getElementById("calBtn");

function calculateGPA(){
    var gpaEl = document.getElementById("gpa");
    var cgpaEl = document.getElementById("cgpa");
    var comntEl = document.getElementById("comnt");
    var totalGrade = 0;
    for(var i = 0;i<dataFieldEl.length;i++){

        var getMark = dataFieldEl[i].value;
        if(getMark>=90){
            var grade = 4.00;
            totalGrade = totalGrade + grade;
        }
        else if(getMark>=85){
            var grade = 4.0;
            totalGrade = totalGrade + grade;
        }
        else if(getMark>=80){
            var grade = 3.75;
            totalGrade = totalGrade + grade;
        }
        else if(getMark>=75){
            var grade = 3.5;
            totalGrade = totalGrade + grade;
        }
        else if(getMark>=70){
            var grade = 3.0;
            totalGrade = totalGrade + grade;
        }
        else if(getMark>=65){
            var grade = 2.75;
            totalGrade = totalGrade + grade;
        }
        else if(getMark>=60){
            var grade = 2.5;
            totalGrade = totalGrade + grade;
        }
        else if(getMark>=55){
            var grade = 2.0;
            totalGrade = totalGrade + grade;
        }
        else if(getMark>=50){
            var grade = 1.75;
            totalGrade = totalGrade + grade;
        }
        else if(getMark>=40){
            var grade = 1.00;
            totalGrade = totalGrade + grade;
        }
        else if(getMark<=40){
            var grade = 0.00;
            totalGrade = totalGrade + grade;
        }
    
    }
    
    var gpa = totalGrade/6;
    gpaEl.textContent = gpa;
    cgpaEl.textContent = gpa;

    if(gpa>=3.75){
        comntEl.textContent = "Excellent";
    }
    else if(gpa>=3.5){
        comntEl.textContent = "Very Good";
    }
    else if(gpa>=3.00){
        comntEl.textContent = "Good";
    }
    else if(gpa>=2.75){
        comntEl.textContent = "Warning!";
    }
    else if(gpa<2.75){
        comntEl.textContent = "Failed";
    }
}

calBtnEl.addEventListener("click",function(){calculateGPA();},false);




// function displayGrade(){

//     var value = Number(crs1El.value);
//     if(value>=90){
        

//     }
//     grdEl1.textContent = value;
// }

// crs1El.addEventListener("blur",function(){displayGrade();});



// for(var i = 0;i<=grdEl.length;i++){}



