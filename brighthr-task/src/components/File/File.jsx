const File = ({ index, item }) => {
    return (
        <div key={index} role='document'>
            <h2>{item.name}</h2>
            <p>{item.added}</p>
            <p>{item.type}</p>
        </div>
    )
}

export default File;