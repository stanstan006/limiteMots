const textareaEl = document. getElementById('textarea');
const totalCounterEl = document.getElementById('totalCounter');

const remaining = document.getElementById('remainingCounter');

textareaEl.addEventListener("keyup", () => {
updatecounter()
})

function updatecounter() {
    totalCounterEl.innerText = textareaEl.value.length

    remaining.innerText = textareaEl.getAttribute("maxLength")- textareaEl.value.length
}