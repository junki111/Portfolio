import { HashRouter as Router } from 'react-router-dom'

import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    StarsCanvas,
    Works,
    Tech,
} from './components'

const App = () => {
    return (
        <Router>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <div className='relative z-0'>
                    <Contact />
                </div>
                <StarsCanvas />
            </div>
        </Router>
    )
}

export default App
