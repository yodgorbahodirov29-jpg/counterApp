 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")

 console.log(countEl)

let count = 0

function increment(){
     count += 1
     console.log(count)
     countEl.innerText = count
 }

 function save() {
     let number = " " + count + " -"
     saveEl.textContent+=number
     countEl.innerText = 0
     count = 0
 }

