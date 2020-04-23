import styled from 'styled-components'

// const orange = '#f15025'
// we can also pass the props with styled components
// syntax to access props


import defaultImg from '../images/room-1.jpeg'

// const SimpleButton = styled.button`
//   color: ${orange};
//   font-size: 3rem;
// `
const StyledHero = styled.header`
    min-height: calc(60vh - 66px);
    background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default StyledHero
