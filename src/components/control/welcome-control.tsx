import { ILogin, IVinylRecord } from '@/constants/icons'
import { useData } from '@/provider/data.provider'
import { wait } from '@/utils/common'
import Button from '../button/button'

const WelcomeControl = () => {
  const { handleStepChange, setName } = useData()

  function validate() {
    const inputEl = document.getElementById('name') as HTMLInputElement
    if (!inputEl) return false
    const name = inputEl.value
    if (!name) return false
    return true
  }
  return (
    <Button
      id="come-in"
      onClick={async (e) => {
        e.currentTarget.dataset.load = e.currentTarget.dataset.load === 'true' ? 'false' : 'true'
        if (validate()) {
          setName((document.getElementById('name') as HTMLInputElement)?.value)
          await wait(700)
          handleStepChange(true)
        } else {
          alert('Điền tên giúp dùm cái đi!')
        }
        setTimeout(() => {
          document.getElementById('come-in')?.setAttribute('data-load', 'false')
        }, 700)
      }}
    >
      <span className="scale-100 overflow-hidden px-1 transition-all duration-300 group-data-[load=true]:scale-0 ">
        <ILogin />
      </span>
      <span
        id="spinner"
        className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-200 group-data-[load=true]:scale-125 group-data-[load=true]:delay-300"
      >
        <span className="block group-data-[load=true]:animate-spin">
          <IVinylRecord />
        </span>
      </span>
      <span className="max-w-[120px] overflow-hidden whitespace-nowrap text-nowrap tracking-[-0.03em] transition-all duration-300 group-data-[load=true]:max-w-0">
        Đi thoai!
      </span>
    </Button>
  )
}

export default WelcomeControl
