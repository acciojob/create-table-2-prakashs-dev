function createTable() {
    //Write your code here
	const table = document.getElementById("myTable");
	const tbody = document.createElement("tbody");

	const rn = Number(prompt("Input number of rows"));
    const cn = Number(prompt("Input number of columns"));

	for (let i = 0; i < rn; i++) {
          // creat table row
          const row = document.createElement("tr");
          for (let j = 0; j < cn; j++) {
            // create table cell
            const cell = document.createElement("td");
            const celltxt = document.createTextNode(`Row-${i} Column-${j}`);
            cell.appendChild(celltxt);
            row.appendChild(cell);
          }
          tbody.appendChild(row);
        }
  table.appendChild(tbody);
}
