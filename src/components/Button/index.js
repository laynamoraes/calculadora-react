import { ButtonContainer } from './styles'

const Button = ({label, variant="primary", onClick, sizeZero, sizeAc, styleEqual}) => {
    return (
      <ButtonContainer variant={variant} onClick={onClick} sizeZero={sizeZero} sizeAc={sizeAc} styleEqual={styleEqual}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;