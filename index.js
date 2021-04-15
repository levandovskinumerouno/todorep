function initTodo(init = []) {
    let items = [...init];
    const btnAdd = document.querySelector('.add-new-todo'); 
    btnAdd.addEventListener('click', () => {
        const textMessage = prompt('Введите название для нового пункта:', '');
        if(textMessage === null) {
            return;
        };
        if(textMessage.length !== 0) {
            addNewItem(textMessage);
            renderTodoList();
        }
    });
    const btnRmv = document.querySelector('.remove-todo');
    btnRmv.addEventListener('click', () => {
        const indexRmv = prompt('Введите номер пункта для удаления:', '');
        if(indexRmv === null) {
            return;
        };
        if(indexRmv.length !== 0) {
            index = indexRmv - 1;
            removeItem(index);
            renderTodoList();
        };
    })
    const btnRmvAll = document.querySelector('.remove-all');
    btnRmvAll.addEventListener('click', () => {
        const rmvAll = confirm('Вы действительно хотите все удалить?');
        if(rmvAll === true) {
            removeAll();
            renderTodoList();
        };
    })

    renderTodoList();

    function addNewItem(value) {
            const newItem = {
                text: value,
                done: false
            };
            items.push(newItem);
    };

    function removeItem(index) {
        if(items.length === 0 || index >= items.length) {
            alert('Такого пункта не существует');
            return;
        };
        if(index < 0) {
            alert('Такого пункта не существует');
            return;
        }
        items.splice(index, 1);
    };

    function removeAll() {
        items = [];
    };

    function toggleItemDone(index) {
        items[index].done = !items[index].done;
    };

    function renderTodoList() {
        const divRoot = document.querySelector('.root');
        divRoot.innerHTML = '';
        items.forEach(item => {
            const newDomElement = document.createElement('p');
            const numberOfElement = items.indexOf(item) + 1
            newDomElement.innerText = numberOfElement + ') ' + item.text;
            divRoot.append(newDomElement);
        });
    };
}

initTodo()