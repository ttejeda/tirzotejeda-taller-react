import {useState, useEffect} from 'react'
import Card from './card'

const CharacterGrid = () => {
    const [chars, setChars] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            setChars(data.results)
        })
    }, [])
    
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8">
                {chars.map(char => (
                    <Card key={char.id} char={char}/>
                ))}
            </div>
        </div>
    )
}

export default CharacterGrid