import styled from 'styled-components'

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 10px 15px;
  background: ${props => props.theme.colors.bone};
  cursor: pointer;
  color: ${props => props.theme.colors.dark};
  &:hover {
    background: ${props => props.theme.colors.pb};
  }
  font-size: ${props => props.theme.fontSize.normal};
  font-weight: bold;
  text-transform: uppercase;
`

export default Button
