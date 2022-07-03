const Card = (props) => {
    const {
        image, 
        name, 
        species, 
        status
    } = props.char

    return (
        <div className="max-w-lg w-full">
            <img
                className="rounded-lg hover:brightness-110"
                src={image} alt={name}
            />
            <p className="font-bold text-xl text-center pb-2 py-4">
                {name}
            </p>
            <span className="bg-stone-100 px-4 py-2 rounded-lg mx-4">
                {species}
            </span>
            <span className="bg-stone-100 px-4 py-2 rounded-lg mx-4">
                {status}
            </span>
        </div>
    )
}

export default Card