import {
  ShowResultContainer,
  ResultImagesContainer,
  ResultTextImgContainer,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponent'

const GameResultView = props => {
  const {myChoice, apponentChoice, resultMessage, playAgain} = props
  console.log(myChoice)
  const {id, imageUrl} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultImagesContainer>
        <ResultTextImgContainer>
          <ResultText>YOU</ResultText>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultTextImgContainer>
        <ResultTextImgContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImageItem src={imageUrl} alt="opponent choice" key={id} />
        </ResultTextImgContainer>
      </ResultImagesContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView
