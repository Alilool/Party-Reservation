const checkbox = document.getElementById("special");
const special = document.getElementById("special-re")

checkbox.addEventListener('change', function () {
    if (this.checked) {
        special.style.display = "inline-block"
    } else {
        special.style.display = "none"
    }
});