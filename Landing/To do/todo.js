submitBtn.addEventListener('click',(e)=>{
    let topicCon = topic.value;
    let arrTop = []
    arrTop.push(topic.value)
    for (items in arrTop){
        content.innerHTML += `
        <ul>
        <li>
        <h2> ${arrTop[items]} </h2>
        </li>
        </ul>`
    }
    e.preventDefault()
    // console.log(topicCon , descCon)
    localStorage.setItem('key' ,topicCon)
    topic.value = ""
})
deleteBtn.addEventListener('click',(e)=>{
    let topicCon = "";
    let arrTop = []
    arrTop.push(topic.value)
    for (items in arrTop){
        content.innerHTML = `
`
    }
    e.preventDefault()
    localStorage.removeItem('key')
})