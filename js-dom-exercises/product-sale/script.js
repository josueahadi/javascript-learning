function attachBuyEvents() {
    const buttons = document.querySelectorAll('#products button');
    const table = document.querySelector('#cart table');
    const tbody = document.createElement('tbody');
    table.insertBefore(tbody, table.querySelector('tfoot'));

    for (let button of buttons) {
        button.addEventListener('click', function(event){
            this.parentElement.classList.toggle('sale')
            
            const selectTableBody = document.querySelector('#cart tbody');

            const newRow = document.createElement('tr');

            const productIdCell = document.createElement('td');
            const productCell = document.createElement('td');
            const quantityCell = document.createElement('td');
            const priceCell = document.createElement('td');
            const totalCell = document.createElement('td');

            productIdCell.textContent = this.parentElement.getAttribute("data-id");
            
            newRow.appendChild(productIdCell);
            newRow.appendChild(productCell);
            newRow.appendChild(quantityCell);
            newRow.appendChild(priceCell);
            newRow.appendChild(totalCell);

            tbody.appendChild(newRow);
       
        });
        
    }
}

attachBuyEvents();