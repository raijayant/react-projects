import styled from 'styled-components'
import defaultImg from '../images/room-1.jpeg'

// another method of defining variables
// const orange = '#f15025'

 // background: green;
    // color: ${orange};

const SimpleHero = styled.header`
   
    min-height: 60vh;
    background: url(${props => props.img}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

`

export default SimpleHero
