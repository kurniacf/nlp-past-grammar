document.querySelector("[name='sentence']").addEventListener("keyup", event => {
    if(!(event.which === 13)) 
    {
        return;
    }
});