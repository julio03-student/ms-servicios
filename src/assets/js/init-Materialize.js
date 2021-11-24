document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelectorAll('.sidenav');
    var instancesNavbar = M.Sidenav.init(navbar, {});
    var dropDown1 = document.querySelectorAll('.dropdown-trigger1');
    var instancesdD1 = M.Dropdown.init(dropDown1, {});
    var dropDown2 = document.querySelectorAll('.dropdown-trigger2');
    var instancesdD2 = M.Dropdown.init(dropDown2, {});
    var dropDown3 = document.querySelectorAll('.dropdown-trigger3');
    var instancesdD3 = M.Dropdown.init(dropDown3, {});
  });