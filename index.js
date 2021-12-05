let myTabs = []
const textEl = document.getElementById("text-el")
const saveInputBtn = document.getElementById("save-input-btn")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

saveInputBtn.addEventListener("click", function(){
    myTabs.push(textEl.value)
    console.log(myTabs)
})

saveBtn.addEventListener("click", function(){
    console.log("save tab")
})

deleteBtn.addEventListener("click", function(){
    console.log("delete all")
})