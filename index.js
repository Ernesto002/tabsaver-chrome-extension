let myTabs = []
const textEl = document.getElementById("text-el")
const saveInputBtn = document.getElementById("save-input-btn")
const saveTabBtn = document.getElementById("save-tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabsFromLocalStorage = JSON.parse( localStorage.getItem("myTabs") )

if (tabsFromLocalStorage){
    myTabs = tabsFromLocalStorage
    render(myTabs)
}

saveInputBtn.addEventListener("click", function(){
    myTabs.push(textEl.value)
    textEl.value = ""
    localStorage.setItem("myTabs", JSON.stringify(myTabs))
    render(myTabs)
})

saveTabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myTabs", JSON.stringify(myTabs) )
        render(myTabs)
    })
})

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myTabs = []
    render(myTabs)
})

function render(tabs){
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