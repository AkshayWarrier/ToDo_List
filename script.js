var addList = document.querySelector('.add-list')
var addItem = document.querySelectorAll('.add-item .fa')
var removeItem = document.querySelectorAll('.remove-item')
var removeList = document.querySelectorAll('.remove-list')

for(var i = 0; i < removeList.length; i++){
    removeList[i].addEventListener('click', element => {
        x = element.path[2].children
        x[x.length-3].remove()
    })
}

for(var i = 0; i < removeItem.length; i++){
    removeItem[i].addEventListener('click',element => {
        x = element.path[2].children
        console.log(x[x.length - 3])
        x[x.length-3].remove()
    }
    )
}


function create_list(x){
    var no_lists = document.querySelectorAll('.list-content').length
    no_lists += 1

    var list = document.createElement('li')
    list.className =   'l'

    const list_container = document.createElement('div')
    list_container.className = 'list-container c'+no_lists  
    list.appendChild(list_container)
    
    const list_title = document.createElement('p')
    list_title.className = 'list-title'
    list_title.contentEditable = 'true'
    list_title.innerText = 'New List'

    const list_content = document.createElement('ul')
    list_content.className = 'list-content'
    
    const item = document.createElement('li')
    item.className = 'item'
    item.innerText = "New Item"
    list_content.appendChild(item)

    const add_item_btn = document.createElement('li')
    add_item_btn.className = 'add_item'
    const plus = document.createElement('i')
    plus.className = 'fa fa-plus'
    plus.addEventListener("click",add_item)
    add_item_btn.appendChild(plus)

    list_content.appendChild(add_item_btn)

    
    list_container.appendChild(list_title)
    list_container.appendChild(list_content)

    list.appendChild(list_container)

    const lists = document.getElementsByClassName('lists')[0]
    const add_list = document.querySelector('.add-list')
    lists.insertBefore(list,add_list)

}
function add_item(x){
    const item = document.createElement('li')
    item.className = 'item'
    item.contentEditable = 'true'
    item.innerText = 'New Item'
    var path = x.path
    path[2].insertBefore(item,path[1])
}
addList.addEventListener("click",create_list)
addItem.forEach(element => {
    element.addEventListener("click",add_item)
});
