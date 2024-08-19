document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 1024) {
        document.querySelector("meta[name=viewport]").setAttribute("content", "width=1024");
    }
});