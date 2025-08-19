import { Html, useProgress } from '@react-three/drei'
import Styled from 'styled-components'

const Container = Styled.div`
    progress {
      margin-right: 10px;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 20px;
    }

    progress[value] {
      width: ${(props) => props.width};
      -webkit-appearance: none;
      appearance: none;
    }

    progress[value]::-webkit-progress-bar {
      height: 20px;
      border-radius: 20px;
      background-color: #ffffff;
    }

    progress[value]::-webkit-progress-value {
      height: 20px;
      border-radius: 20px;
      background-color: #915eff;
    }
`

const Loader = () => {
    const { progress } = useProgress()
    console.log(progress.toFixed(2))
    return (
        <Html>
            <span className='canvas-load'></span>
            <Container color='white' width='200px'>
                <progress
                    max={100}
                    value={progress.toFixed(2)}
                    style={{
                        fontSize: 14,
                        color: 'lightBlue',
                        backgroundColor: '#ffffff',
                        fontWeight: 800,
                        marginTop: 40,
                        width: '200px',
                        height: '20px',
                    }}
                />
            </Container>
        </Html>
    )
}

export default Loader
