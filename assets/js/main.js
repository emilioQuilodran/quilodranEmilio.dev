'strict'
// window.addEventListener('scroll', function(){
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// });
var urlUdemyProfile = "https://www.udemy.com/user/emilio-quilodran/";
var urlCourses = "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@EmilioQ";
var div_courses = document.querySelector("#courses");
getCourses()
.then(data => data.json())
.then(courses => {
    coursesList(courses.userData.courses);
}).catch(error => {
    console.log(error);
})

function getCourses(){
    return fetch(urlCourses);
}
function coursesList(courses){
    courses.map((course, i) =>{
        let title = document.createElement("h3");
        let avatar = document.createElement("img");
        let career = document.createElement("p")
        title.innerHTML = ++i + ". " + course.title;
        avatar.src = course.badge;
        avatar.width = "65";
        career.innerHTML = course.career;
        div_courses.appendChild(avatar);
        div_courses.appendChild(title);
        div_courses.appendChild(career);
        document.querySelector("#spinner").style.display = "none";
    });
}
