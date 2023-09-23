import Bottom from './Bottom';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';


function Pages() {

    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Bottom />
      </div>
    )
  }


export default Pages
