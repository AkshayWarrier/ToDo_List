var addList = document.querySelector('.add-list')
console.log(addList)
var addItem = document.querySelectorAll('.add-item .fa')

function create_list(x){
    var no_lists = document.querySelectorAll('.list-content').length
    console.log(no_lists)
    const list = document.createElement('li')
    no_lists += 1
    list.className =   'l' + no_lists
    list.appendChild('div')
    list.children[0].className = 'list-container c'+no_lists
    list.children[1].appendChild('p')
    list.children[2].className = 'list-title' 
    list.children[2].contentEditable = 'true'
    list.children[2].innerText = 'New List'
    list.children[2].appendChild('ul')
    list.children[3].className = 'list-content'
    list.children[3].appendChild('li')

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


