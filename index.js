let myTabs = []
const textEl = document.getElementById("text-el")
const saveInputBtn = document.getElementById("save-input-btn")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

saveInputBtn.addEventListener("click", function(){
    myTabs.push(textEl.value)
    textEl.value = ""
    render(myTabs)
})

saveBtn.addEventListener("click", function(){
    console.log("save tab")
})

deleteBtn.addEventListener("click", function(){
    myTabs = []
    render(myTabs)
})

function render(tabs) {
    let listTabs = ""
    for(i = 0; i < tabs.length; i++){
        listTabs += `
            <li>
                <a target='_blank' href='${tabs[i]}''>
                    ${tabs[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listTabs
}