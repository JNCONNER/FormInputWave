/*when we wrap the span around each letter were gonna add a transition delay to each letter so that it increses the size of each letter ex. e would go up then it would be delayed then the m would go up and then it would be delayed then the a would go up etc and so forth*/

const labels = document.querySelectorAll('.form-control label')
// wraps each label with a span.
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 155}ms">${letter}</span>`)
    .join('') /*inline style  added to each span. and take the index=idx and multiply it by 50 1st one will be 0 second one 50 third one 150 then 200 then 250etc*/
    
})