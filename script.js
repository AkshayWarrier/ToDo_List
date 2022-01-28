var lists = document.querySelectorAll('.lists li')
var no_lists = lists.length
var addItem = document.querySelectorAll('.fa.fa-plus')

function create_list(lists){
    no_lists += 1
    const item = document.createElement('li')
    item.className =   'l' + no_lists
    item.appendChild('div')
    item.firstChild.className = 'list-container'
}
function add_item(x){
    const item = document.createElement('li')
    item.className = 'item'
    item.contentEditable = 'true'
    item.innerText = 'New Item'
    path = x.path
    path[2].insertBefore(item,path[1])
    // const list = document.querySelectorAll

}

addItem.forEach(element => {
    element.addEventListener("click",add_item)
});