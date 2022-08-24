document.getElementById("change-theme").addEventListener("click", changeTheme);

function changeTheme() {
    if(document.getElementById('body-header').className == "dark") {

        document.getElementById('body-header').className = "light";
        document.getElementById('body-main').className = "light";
        document.getElementById('body-footer').className = "light";

    } else {

        document.getElementById('body-header').className = "dark";
        document.getElementById('body-main').className = "dark";
        document.getElementById('body-footer').className = "dark";

    }
}