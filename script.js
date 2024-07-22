
var itemCount = 0;

var addItemButton = document.getElementById("addButton");
var list = document.getElementById("list");

addItemButton.addEventListener('click', function() {
    itemCount +=  1;

    var newItem = document.createElement('div');
    newItem.className = 'listItem';
    newItem.id = 'item' + itemCount;

    var newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.name = 'item' + itemCount + 'Box';
    newCheckbox.style = 'margin: 0px 12px 0px 6px';

    var newLabel = document.createElement('p');
    newLabel.contentEditable = 'true';
    newLabel.style = 'width: 89%;';
    newLabel.textContent = ' ';

    var newEx = document.createElement('button');
    newEx.type = 'button';
    newEx.style = 'width: 30px;height: 30px;margin-right: 6px;';
    newEx.onclick = function() {
        var listItem = this.parentNode;
        listItem.remove();
        itemCount -= 1;
    };
    newEx.id = 'item' + itemCount + 'Close';

    var newImg = document.createElement('img');
    newImg.src = 'close.png';
    newImg.className = 'exImg';

    newEx.appendChild(newImg);

    newItem.appendChild(newCheckbox);
    newItem.appendChild(newLabel);
    newItem.appendChild(newEx);

    list.appendChild(newItem);
});