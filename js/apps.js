/**Box Game
 * 
 * goals: count the number of clicks and match the colors 
 */

const colors = ['red','blue','green','yellow','purple','orange','brown','black','pink',]

const boxes = [
    {
        id: 1,
        color: 'red'
    },
    {
        id: 2,
        color: 'blue'
    },
    {
        id: 3,
        color: 'green'
    },
    {
        id: 4,
        color: 'yellow'
    },
    {
        id: 5,
        color: 'purple'
    },
    {
        id: 6,
        color: 'orange'
    },
    {
        id: 7,
        color: 'brown'
    },
    {
        id: 8,
        color: 'black'
    },
    {
        id: 9,
        color: 'pink'
    },
]


let count = 0

const counter =()=>{
    count++
    document.getElementById('countDisplay').innerText = count
}





boxes.forEach(item => {
        const box = document.createElement('div')
        box.classList.add('box')
        box.setAttribute('id', `box-${item.id}`)
        box.style.backgroundColor = item.color 
        box.style.width = '200px'
        box.style.height = '200px'
        document.getElementById('gameBoard').appendChild(box)
    
    
        box.addEventListener('click', ()=> {
            const idx = Math.floor(Math.random() *  colors.length)
            const randomColor = colors[idx]
        
            box.style.backgroundColor = randomColor
    
            counter()
        })
})





