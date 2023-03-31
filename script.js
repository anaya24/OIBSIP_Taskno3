const addFun = function(e)
{
    let Text = document.createElement('div');
    let value = document.querySelector('.input-box').value;
    let Btn = document.createElement('div');
    let checkBox = document.createElement('input');
    let box = document.createElement('div');


    Text.innerText = value;
    Btn.innerHTML = ` <i class=" fa fa-trash fa-2x"></i>`;
    checkBox.setAttribute("type","checkbox");
    document.querySelector('div').append(Text,Btn,checkBox);
    document.querySelector('.container').insertAdjacentElement('beforeend',Text);
    document.querySelector('.container').insertAdjacentElement('beforeend',Btn);
    document.querySelector('.container').insertAdjacentElement('beforeend',checkBox);
    
    Text.classList.add('newTextClass');
    Btn.classList.add('newDeleteButton');
    checkBox.classList.add('newCheckBox');

    checkBox.addEventListener('click', function()
    {
        Text.classList.toggle('tickMark');
        
    })

    var Datetime = new Date();
    box.innerText = `  ${Datetime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
    Text.insertAdjacentElement("afterend",box);
    box.classList.add('DateTime');
    Btn.addEventListener('click', function()
    {
        Btn.remove();
        Text.remove();
        checkBox.remove();
        box.remove();
        alert(`Deleting "${Text.innerText}" at${box.innerText}!`)
    })
    document.querySelector('.input-box').value = ` `;
}


document.querySelector('.input-box').addEventListener('keypress', function(e)
{
    if(e.key === 'Enter')
    {
    e.preventDefault(); 
    addFun();
    }
})



