import { useData } from '@/provider/data.provider'
import { wait } from '@/utils/common'
import { useEffect } from 'react'

const games = ['/1-haimuoihai', '/2-phaohoa', '/3-digiuatroirucro', '/4-nhungayhomqua', '/5-lightup'].map(
  (item) => `/music${item}.mp3`
)

const Music = () => {
  const { step, gameStep } = useData()
  useEffect(() => {
    if (step !== 2 || gameStep == 0) return
    ChangeMusic(gameStep)
  }, [step, gameStep])
  return (
    <>
      <audio id="background-sound" src={'/music/22.mp3'} loop />
      <audio id="game-sound" src={games[0]} loop />
      <audio id="click-sound" src={'/music/click.mp3'} />
      <audio id="wrong-sound" src={'/music/wrong.mp3'} />
      <audio id="correct-sound" src={'/music/yay.mp3'} />
      <audio id="cheering-clapping" src={'/music/cheering-clapping.mp3'} />
    </>
  )
}

export default Music

export async function ChangeMusic(gameStep?: number) {
  const gameSound = document.getElementById('game-sound') as HTMLAudioElement
  const bgSound = document.getElementById('background-sound') as HTMLAudioElement
  if (gameStep != undefined && gameStep < games.length) {
    bgSound.pause()
    gameSound.src = games[gameStep]
    await wait(2000)
    gameSound.play()
  } else {
    gameSound.pause()
    if (gameStep && gameStep >= games.length) {
      const cheeringClapping = document.getElementById('cheering-clapping') as HTMLAudioElement
      cheeringClapping.play()
      await wait(8000)
    }
    await wait(2000)
    bgSound.play()
  }
}
export function ClickSound() {
  const clickSound = document.getElementById('click-sound') as HTMLAudioElement
  clickSound.play()
}

export function ResultSound(result: boolean) {
  const correctSound = document.getElementById('correct-sound') as HTMLAudioElement
  const wrongSound = document.getElementById('wrong-sound') as HTMLAudioElement
  if (!result) {
    wrongSound.play()
  } else {
    correctSound.play()
  }
}
