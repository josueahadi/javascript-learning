// let menu  = document.querySelector('#menu');
// menu.addEventListener('click', function(event) {
//     let target = event.target;
//     event.preventDefault();

//     switch(target.id) {
//         case 'home':
//             alert('Home menu item was clicked');
//             break;
//         case 'dashboard':
//             alert('Dashboard menu item was clicked');
//             break;
//         case 'report':
//             alert('Report menu item was clicked!');
//             break;
//     }
// });

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
    console.log(document.activeElement);
    // Perform actions depending on the active element, e.g., form submission
    }
});