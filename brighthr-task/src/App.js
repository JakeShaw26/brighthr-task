import Home from './pages/Home/Home';
import { fileData } from './data.js';

function App() {
  const data = fileData;
  console.log(data);
  return (
    <>
      <Home dataSource={data} />
    </>
  );
}

export default App;
