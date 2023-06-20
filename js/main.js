// Table item
var order = document.querySelectorAll('.order tbody tr')
var orderTable = document.querySelectorAll('.order')
var modal = document.querySelector('#modal')

order.forEach(item => {
    item.addEventListener('click', (e) => {
        modal.classList.add('show')
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            order.forEach(elem => {
                elem.classList.remove('active')
            })
            item.classList.add('active')
        }
    })
})

// Modal tabs

var tabs = document.querySelectorAll('.modal_body_tab')
var modalStages = document.querySelector('.modal_stages')
var modalTable = document.querySelector('.modal_table')

if (tabs) {
    tabs.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            tabs.forEach(elem => {
                elem.classList.remove('active')
            })
            item.classList.add('active')
            if (index === 0) {
                modalTable.classList.add('show')
                modalStages.classList.remove('show')
            } else {
                modalStages.classList.add('show')
                modalTable.classList.remove('show')
            }
        })
    })
}


var modalContent = document.querySelector('.modal_content')

// Outside click
if (modal) {
    document.addEventListener("click", (evt) => {
        let targetEl = evt.target;
        do {
            if(targetEl == modalContent || (targetEl.tagName == 'TD' && targetEl.closest('.order'))) {
                modal.classList.add('show')
                // This is a click inside, does nothing, just return.
                return;
            }
            targetEl = targetEl.parentNode;
        } while (targetEl);
            // This is a click outside. 
            modal.classList.remove('show')
      });
}