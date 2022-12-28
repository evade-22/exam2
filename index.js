fetch("https://api.spacexdata.com/v5/launches/latest").then((data)=>{
    // console.log(data); json format
    return data.json(); //converted to object
}).then((objectData)=>{
    console.log(objectData.links);
    let tableData = "";
    objectData.map((values)=>{
        tableData+=`
            <tr>
                <td>${values.links.small}</td>
                <td>${values.reddit.launch}</td>
            </tr>
        `;
    });
    document.getElementById("table_body").innerHTML=tableData;
})