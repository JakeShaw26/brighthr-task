import File from "../../components/File/File";
import Folder from "../../components/Folder/Folder";

const Home = ({ dataSource }) => {
    return (
        <>
            <h1>BrightHR Task</h1>
            <div>
                {dataSource.map((item, index) => {
                    return (item.type === 'folder' ? <Folder index={index} item={item} /> : <File index={index} item={item} />
                    )
                })}
            </div>
        </>
    )
}

export default Home;