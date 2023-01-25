function update() {
    titl = document.getElementById("title").value;
    Desc = document.getElementById("Description").value;

    if (localStorage.getItem('added') == null) {
        addarr = [];
        addarr.push([titl, Desc]);
        localStorage.setItem('added', JSON.stringify(addarr))
    }
    else {
        addarrm = localStorage.getItem('added')
        addarr = JSON.parse(addarrm)
        addarr.push([titl, Desc])
        localStorage.setItem('added', JSON.stringify(addarr))

    }
    tablebody = document.getElementById("tableBody")
    str = ""
    addarr.forEach((element, index) => {
        str += `
        <tr>
                                <th>${index + 1}</th>
                                <td>${element[0]}</td>
                                <td>${element[1]}</td>
                                <td><button id="Delete" type="button" onclick="deleted(${index})">Delete</button></td>
                            </tr>
        `;

    });
    tablebody.innerHTML = str;
}
function updated() {
    titl = document.getElementById("title").value;
    Desc = document.getElementById("Description").value;

    if (localStorage.getItem('added') == null) {
        addarr = [];
        //addarr.push([titl, Desc]);
        localStorage.setItem('added', JSON.stringify(addarr))

    }
    else {
        addarrm = localStorage.getItem('added')
        addarr = JSON.parse(addarrm)
        //addarr.push([titl, Desc])
        localStorage.setItem('added', JSON.stringify(addarr))

    }
    tablebody = document.getElementById("tableBody")
    str = ""
    addarr.forEach((element, index) => {
        str += `
        <tr>
                                <th>${index + 1}</th>
                                <td>${element[0]}</td>
                                <td>${element[1]}</td>
                                <td><button id="Delete" type="button" onclick="deleted(${index})">Delete</button></td>
                            </tr>
        `;

    });
    tablebody.innerHTML = str;
}
function upp() {
    if (localStorage.getItem('added') == null) {
        addarr = [];
        addarr.push([titl, Desc]);
        localStorage.setItem('added', JSON.stringify(addarr))
    }

    tablebody = document.getElementById("tableBody")
    str = ""
    addarr.forEach((element, index) => {
        str += `
        <tr>
                                <th>${index + 1}</th>
                                <td>${element[0]}</td>
                                <td>${element[1]}</td>
                                <td><button id="Delete" type="button" onclick="deleted(${index})">Delete</button></td>
                            </tr>
        `;

    });
    tablebody.innerHTML = str;
}

function deleted(itemIndex) {
    console.log("hsh", itemIndex)
    addarrm = localStorage.getItem('added')
    addarr = JSON.parse(addarrm)
    a = addarr.splice(itemIndex, 1)
    localStorage.setItem('added', JSON.stringify(a))
    upp();
}
function cleared() {
    localStorage.clear()
    updated()
}

updated()
a = document.getElementById("addlist");
a.addEventListener("click", update);
