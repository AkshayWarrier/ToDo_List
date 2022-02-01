var addList = document.querySelector('.add-list')
var addItem = document.querySelectorAll('.add-item .fa')

colors_val = ["#da001d","#da5700","#dad600","#3eda00","#0095da","#1600da","#8a00da"]
color_point = 3

function create_list(x){
    var no_lists = document.querySelectorAll('.list-content').length
    no_lists += 1

    var list = document.createElement('li')
    list.className =   'l' + no_lists

    const list_container = document.createElement('div')
    list_container.className = 'list-container c'+no_lists
    if(color_point >= 7){
        color_point = 0
    }
    list_container.style.border = "3px solid " + colors_val[color_point]
    
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
    item.style.backgroundColor = colors_val[color_point] + "94"
    color_point += 1
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
    path = x.path
    path[2].insertBefore(item,path[1])
}
addList.addEventListener("click",create_list)
addItem.forEach(element => {
    element.addEventListener("click",add_item)
});


