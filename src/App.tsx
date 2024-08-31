import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumsProvider from './context/AlbumsProvider.tsx'

import { Layout } from './components/Layout'
import { Home } from './Home.tsx'
import { About } from './About.tsx'
import { Albums } from './Albums.tsx'
import { NotFound } from './NotFound.tsx'
import { SinglePage } from './SinglePage.tsx'

function App() {
  return (
    <>
      <AlbumsProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/albums" element={<Albums />} />
                  <Route path="/albums/:id" element={<SinglePage />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
          </BrowserRouter>
      </AlbumsProvider>
    </>
  )
}

export default App
