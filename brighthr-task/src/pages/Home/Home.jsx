
const Home = ({ dataSource }) => {
    return (
        <>
            <h1>BrightHR Task</h1>
            <div>
                {dataSource?.map((item, index) => (
                    <div key={index}>
                        <h2 data-testid={'data-obj'}>{item.name}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;