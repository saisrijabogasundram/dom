
const container = document.getElementById("table-container");


const table = document.createElement("table");


for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
        const td = document.createElement("td");

       
        const img = document.createElement("img");
        img.src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        img.alt = "sample";


        td.appendChild(img);
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

container.appendChild(table);
