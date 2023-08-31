
function login(username) {
    const username = document.getElementsByClassName("username").value;

    if (!username) {
        return  "Isi nama anda terlebih dahulu"
    } else {
        return "Berhasil masuk!"
    }
}
console.log(login("Jeremia")); // "Berhasil masuk!"
console.log(login()); // "Isi nama anda terlebih dahulu"
