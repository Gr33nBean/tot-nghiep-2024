import Lottie from 'lottie-react'
import { useEffect, useRef, useState } from 'react'

import confetti from '../../../public/confetti.json'
import { useData } from '@/provider/data.provider'
import { wait } from '@/utils/common'
import { ChangeMusic, ResultSound } from '../layout/music'

const data = ['hai muoi hai', 'phao hoa', 'di giua troi ruc ro', 'nhu ngay hom qua', 'light up']

const Game = () => {
  const { gameStep, setGameStep, handleStepChange } = useData()
  const [state, setState] = useState(0)

  const [answer, setAnswer] = useState<(number | string | undefined)[]>([])
  const [letters, setLetters] = useState<string[]>([])

  const handleChangeAnswer = async (newAnswer: (number | string | undefined)[]) => {
    setAnswer(newAnswer)
    await Check(newAnswer)
  }

  useEffect(() => {
    if (gameStep < 0 || gameStep >= data.length) {
      setTimeout(() => {
        handleStepChange(true)
      }, 1000)
      return
    }
    const text = data[gameStep]
    handleChangeAnswer(text.split('').map((item) => (item == ' ' ? '-' : undefined)))

    let res = text
      .split('')
      .map((item) => (item == ' ' ? undefined : item))
      .filter((item) => item != undefined) as string[]

    res = res.reverse().sort(() => Math.random() - 0.5)

    setLetters(res)

    const letterEls = document.querySelectorAll('[data-letter]')
    for (let i = 0; i < letterEls.length; i++) {
      ;(letterEls[i] as HTMLDivElement).dataset.active = 'true'
    }
  }, [gameStep, data])

  async function Check(newAnswer: (number | string | undefined)[]) {
    if (newAnswer.some((item) => item == undefined)) {
      setState(0)
    } else {
      const ans = newAnswer
        .map((item) => (typeof item == 'number' ? letters[item] : item))
        .join('')
        .replaceAll('-', ' ')
      const result = ans == data[gameStep]
      ResultSound(result)
      if (result) {
        setState(2)
        await wait(1000)
        setGameStep(gameStep + 1)
      } else {
        setState(1)
      }
    }
  }

  return (
    <div className="relative flex size-full flex-col items-center  overflow-y-auto py-10">
      <p className="mb-10 w-full bg-gradient-to-r from-white/0 via-white/100  to-white/0  py-4 text-center text-2xl font-medium text-text">
        Ai là Vua Tiếng Việt?
      </p>
      <div
        data-state={state}
        className="group flex w-[80%] flex-1 flex-wrap items-center justify-center gap-2 data-[state=1]:animate-shake max-sm:w-[90%]"
      >
        {answer.map((item, index) => {
          const children = typeof item == 'number' ? letters[item] : item
          return (
            <Item
              key={index}
              className="group-data-[state=1]:border-error-base group-data-[state=2]:border-success-base group-data-[state=1]:bg-error-base/20 group-data-[state=2]:bg-success-base/30"
              onClick={(_) => {
                if (typeof item == 'number') {
                  const letter = document.querySelector(`[data-letter="${item}"]`) as HTMLDivElement
                  if (letter) {
                    letter.dataset.active = 'true'
                  }
                }
                handleChangeAnswer([...answer.slice(0, index), undefined, ...answer.slice(index + 1)])
              }}
            >
              {children}
            </Item>
          )
        })}
        {state == 2 && <Lottie className="absolute inset-0" animationData={confetti} loop={true} />}
      </div>

      <div className="my-10 min-h-[1px] w-full rounded-full bg-white "></div>

      <div className="flex w-[80%] flex-1 flex-wrap items-center justify-center gap-2 max-sm:w-[90%]">
        {letters.map((item, index) => {
          return (
            <Item
              key={index}
              letter={index}
              onClick={async (e) => {
                e.currentTarget.dataset.active = 'false'
                let cursor: number = -1
                for (let i = 0; i < answer.length; i++) {
                  if (answer[i] == undefined) {
                    cursor = i
                    break
                  }
                }
                if (cursor == -1) {
                  return
                } else {
                  let newAnswer: (number | string | undefined)[] = [
                    ...answer.slice(0, cursor),
                    index,
                    ...answer.slice(cursor + 1),
                  ]
                  handleChangeAnswer(newAnswer)
                }
              }}
            >
              {item}
            </Item>
          )
        })}
      </div>

      <Guide />
    </div>
  )
}

export default Game

function Item({
  id,
  children,
  onClick,
  className,
  letter,
}: {
  id?: string
  children?: React.ReactNode | string
  onClick?: (e: any) => void
  className?: string
  letter?: number
}) {
  return (
    <div
      id={id}
      data-letter={letter}
      data-space={children == '-'}
      data-empty={children == undefined}
      data-active={true}
      className={`flex aspect-square w-[10%] min-w-[42px] cursor-pointer items-center justify-center rounded-lg border-2 border-text bg-white font-chonburi data-[active=false]:pointer-events-none data-[active=false]:cursor-default data-[space=true]:border-none data-[empty=true]:bg-transparent data-[space=true]:!bg-transparent data-[active=false]:opacity-30 ${className}`}
      onClick={onClick}
    >
      <span className="block text-[150%] leading-[0px] max-sm:text-[130%]">{children}</span>
    </div>
  )
}

function Guide() {
  const ref = useRef<HTMLDivElement>(null)
  const hanleClick = () => {
    if (ref.current) {
      ChangeMusic(0)
      ref.current.remove()
    }
  }
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center bg-black/20 p-4 text-text backdrop-blur-xl"
    >
      <div className="rounded-2xl bg-white p-4 text-lg font-medium">
        <p className="w-full text-center font-chonburi text-xl tracking-tight">Trò chơi Vua Tiếng Việt</p>
        <p>
          😎 Thách thức bạn vượt qua <span className="font-semibold underline">5 câu hỏi</span> khó nhằn từ ban tổ chức
          để giành lấy chiếc thiệp mời danh giá.
        </p>
        <p>
          🎵 Mỗi câu hỏi sẽ được phát <span className="font-semibold underline">một đoạn nhạc</span> gợi ý. Hãy lắng
          nghe thật kĩ gợi ý từ chương trình bạn nhé.
        </p>
        <p>⭐ Chúc bạn may mắn. Bắt đầu ngay!</p>
        <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 font-chonburi text-sm">
          <button onClick={hanleClick} className="flex-1 rounded-xl border border-text px-3 py-1 text-text">
            Chơi
          </button>
          <button onClick={hanleClick} className="flex-1 rounded-xl bg-secondary px-3 py-1 text-white">
            Dô
          </button>
        </div>
      </div>
    </div>
  )
}
