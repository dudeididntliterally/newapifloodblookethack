alert("completely fixed by FromTheDarkness#6257")
var pin = prompt("Pin: "),
    name = prompt("name: "),
    amount = prompt("bot amount: ");
for (var i = 0; i < amount; i++) {
  fetch('https://fb.blooket.com/c/firebase/join', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            id: pin,
            name: `${name}-${i}`,
        })
    });
}
