const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    const namesInput = document.getElementById('names').value;
    const emailInput = document.getElementById('email').value;
 
    const div = document.querySelector('div');
    const names = document.createElement('p');
    names.textContent = namesInput;
    div.appendChild(names);
    
    const email = document.createElement('p');
    email.textContent = emailInput;
    div.appendChild(email);

    const buttonDelete = document.createElement('button');
    const paragraphs = document.querySelectorAll('p');
    for (const p of paragraphs){
        p.appendChild(buttonDelete);
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', function(){
            p.remove();
        });
    }


    // const buttonEdit = document.createElement('button');
    // buttonEdit.textContent = 'Edit';
    // p.appendChild(buttonEdit);
    // buttonEdit.addEventListener('click', function(){
    //     const input = document.createElement('input');
    //     input.value = p.textContent;
    //     p.appendChild(input);
    //     p.textContent = '';
    //     input.focus();
    //     input.addEventListener('blur', function(){
    //         p.textContent = input.value;
    //         input.remove();
    //     });
    // });
    
});