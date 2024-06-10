import { useState } from 'react'
import Search from './search';
import Container from './container';
function App() {
  const [data, setdata] = useState([]);
   const getdata=(inp)=>{
    setdata(inp);
   }
  return (
    <div className='w-[100vw] min-h-[100vh] bg-[#312b2b] '>
     <Search getdata={getdata}></Search>
      <Container data={data}></Container>
     </div>
  )
}

export default App
