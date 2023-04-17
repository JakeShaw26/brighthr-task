import File from "../../components/File/File";
import Folder from "../../components/Folder/Folder";

const Home = ({ dataSource }) => {
    return (
        <div className="text-center w-3/12 m-auto shadow-2xl mt-10 border-2 border-slate-200 p-8">
            <h1 className="text-xl font-bold pb-10 underline">BrightHR Task</h1>
            <div className="divide-y-4">
                {dataSource.map((item, index) => {
                    return (item.type === 'folder' ? <Folder index={index} item={item} /> : <File index={index} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home;