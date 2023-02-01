const lis = document.querySelectorAll('li')

lis.forEach((node) => {
    node.addEventListener('mousedown', function(event){
        // event.preventDefault()
        const value = node.innerText.trim()
        const result = document.querySelector('.result')
        const resultText = result.innerText.trim()

        if(resultText === '0'){
            result.innerHTML = ''
        }

        if(value === '='){
            let solution = eval(resultText)
            result.innerText = solution
            return
        }

        if(value === 'AC'){
            result.innerText = '0'
            return
        }
        result.append(value)
    })
})
