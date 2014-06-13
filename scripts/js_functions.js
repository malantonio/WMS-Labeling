/**
 * Created by bacchus on 6/11/14.
 */
function addBarcodeInput() {

    /*
     <tr>
        <td>
            <input type="text" value="TEST1">
        </td>
        <td>
            <input type="checkbox" value="0">
        </td>
     </tr>
     */

    var barcodes_tbl = document.getElementById('barcodes_table');

    var new_table_row = document.createElement('tr');

    var new_table_textbox_cell = document.createElement('td');
    var new_table_textbox_cell_input = document.createElement('input');

    var new_table_checkbox_cell = document.createElement('td');
    var new_table_checkbox_cell_checkbox = document.createElement('input');

    /* This hidden input value is neccesary to carry the value of an unchecked checkbox upon submission */
    var new_table_hidden_cb_value_input = document.createElement('input');

    new_table_textbox_cell_input.type = "text";
    new_table_textbox_cell_input.value = "";
    new_table_textbox_cell_input.name = "barcodes[]";

    new_table_checkbox_cell_checkbox.type = "checkbox";
    new_table_checkbox_cell_checkbox.name = "print_pocket_label_cb";
    new_table_checkbox_cell_checkbox.value = "no";
    new_table_checkbox_cell_checkbox.onclick = setCheckboxValue;

    new_table_hidden_cb_value_input.type = "hidden";
    new_table_hidden_cb_value_input.value = "no";
    new_table_hidden_cb_value_input.name = "print_pocket_label[]";

    new_table_textbox_cell.appendChild(new_table_textbox_cell_input);
    new_table_checkbox_cell.appendChild(new_table_checkbox_cell_checkbox);
    new_table_checkbox_cell.appendChild(new_table_hidden_cb_value_input);

    new_table_row.appendChild(new_table_textbox_cell);
    new_table_row.appendChild(new_table_checkbox_cell);

    barcodes_tbl.appendChild(new_table_row);

    altRows('barcodes_table');

}

function setCheckboxValue() {

    hidden_sibling = this.nextSibling;

    if (hidden_sibling.value == "no" || hidden_sibling.value == "") {
        this.value = "yes";
        hidden_sibling.value = "yes";
    }
    else {
        this.value = "no";
        hidden_sibling.value = "no";
    }
}


function altRows(id){
    if(document.getElementsByTagName){

        var table = document.getElementById(id);
        var rows = table.getElementsByTagName("tr");

        for(i = 0; i < rows.length; i++){
            if(i % 2 == 0){
                rows[i].className = "evenrowcolor";
            }else{
                rows[i].className = "oddrowcolor";
            }
        }
    }
}