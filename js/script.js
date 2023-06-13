let left_arrow = document.querySelector('.left-arrow');
let right_arrow = document.querySelector('.right-arrow');
left_arrow.addEventListener('mouseover', function () {
    right_arrow.style.backgroundColor = "#1f3e50";
    left_arrow.style.backgroundColor = "#4bcaff";
});
left_arrow.addEventListener('mouseout', function () {
    right_arrow.style.backgroundColor = "#4bcaff";
    left_arrow.style.backgroundColor = "#1f3e50";
});

right_arrow.addEventListener('mouseover', function (event){
    right_arrow.style.backgroundColor = "#1f3e50";
});
right_arrow.addEventListener('mouseout', function (event){
    right_arrow.style.backgroundColor = "#4bcaff";
});
