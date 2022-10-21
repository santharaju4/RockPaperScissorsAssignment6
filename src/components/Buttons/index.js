import {ButtonLiContainer, ButtonImage, ImageItem} from './styledComponent'

const Buttons = props => {
  const {buttonDetails, onGetId} = props
  const {id, imageUrl} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, imageUrl)
  }

  return (
    <ButtonLiContainer>
      <ButtonImage
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImage>
    </ButtonLiContainer>
  )
}

export default Buttons
