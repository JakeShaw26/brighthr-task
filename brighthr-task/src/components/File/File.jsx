const File = ({ index, item }) => {
    return (
        <div key={index} role='document' className="py-6">
            <h2 className="text-lg pb-4">{item.name}</h2>
            <p><strong>Date Added:</strong> {item.added}</p>
            <p><strong>File Type:</strong> {item.type}</p>
        </div>
    )
}

export default File;