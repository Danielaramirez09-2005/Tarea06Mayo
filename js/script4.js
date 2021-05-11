for (let i = 2; i <= 20; i++, i++) {
  let table_c = 
      `<tr>
      <th scope="row"> ${i}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>`;
  
  document.getElementById("cuerpo_tabla").innerHTML += table_c;
  
  }