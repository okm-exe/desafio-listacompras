function subLi() {
    var inputText = document.getElementById('adicione').value;
    var list = document.getElementById('list');
    if (inputText == "") {
        return
    }
    list.insertAdjacentHTML('beforeend', 
        `
        <div class="item">
            <input type="checkbox" id="checkbox"><span id="itemName">${inputText}</span><img src="assets/Frame.svg" id="remove" onclick="remove()">
        </div>
        `);
}
function remove() {
    event.target.parentElement.remove()     
    
    var rmv = document.getElementById('rmv')
    rmv.classList.remove("hidden")
    
    setTimeout(function(){
        rmv.classList.add("hidden")
       }, 1200);
}