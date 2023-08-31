
function login(username) {
    const username = document.getElementsByClassName("username").value;

    if (!username) {
        return  "Isi Nama loh dulu brooo..."
    } else {
        return "Berhasil masuk!"
    }
}
console.log(login("Jeremia")); // "Berhasil masuk!"
console.log(login()); // "Isi Nama loh dulu brooo..."
