
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './pages/Feed'
import Header from './components/Header'
import Detail from './pages/Detail/index'
import { VideoProvider } from './context/videoContext'


const App = () => {
  return (

   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<VideoProvider>
      <Feed />
      </VideoProvider>}></Route>
    <Route path='/watch' element={<Detail />}></Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App
