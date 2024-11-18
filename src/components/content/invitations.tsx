import { I2024Vertical, IGGMap, IInvitationTitle } from '@/constants/icons'
import { IPositionShort } from '@/constants/icons/text'
import { useData } from '@/provider/data.provider'
import { resetLocalStorage } from '@/utils/local-storage'
import { createPortal } from 'react-dom'

const Invitations = () => {
  const { isPhoto, name } = useData()
  const owner = window.location.pathname.split('/')[1]

  return createPortal(
    <div className=" background-glass absolute left-1/2 top-1/2 flex h-full max-h-full w-full max-w-[calc(475px-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl">
      <div className="relative flex w-full flex-1 flex-col gap-4 overflow-auto p-4">
        <div className="background-glass w-full rounded-xl p-2 px-4">
          <IInvitationTitle />
        </div>

        <div className="flex w-full items-stretch gap-4">
          <div className="flex flex-1 items-center gap-4">
            <div className="background-glass h-full flex-1 rounded-xl p-2">
              <div className="relative size-full overflow-hidden rounded-[0.5rem]">
                <img src={'/huy.jpg'} className="absolute inset-0 size-full object-cover" alt="" />
              </div>
            </div>
          </div>
          <div className="background-glass invitation-text w-fit max-w-[40%] rounded-xl p-2.5 max-sm:max-w-[50%] ">
            Thời gian thắm thoát thoi đưa qua đưa lại! Ai rồi cũng phải tốt nghiệp. Em {owner} thân quý mời anh/chị{' '}
            <span className=" relative inline text-primary underline">
              <span className="absolute inset-0  rounded-full bg-white blur-md"></span>
              <span className="relative">{name}</span>
            </span>{' '}
            đến chung vui, chụp hình trong buổi lễ tốt nghiệp. Sự có mặt của anh/chị là niềm vinh hạnh của em.
          </div>
        </div>

        <div className="flex w-full items-stretch gap-4">
          <div className="background-glass h-full min-w-[42px] rounded-xl p-2.5 ">
            <I2024Vertical />
          </div>
          <div className="background-glass aspect-square h-full rounded-2xl p-2">
            <div className="relative size-full overflow-hidden rounded-[0.5rem]">
              <img src={isPhoto} className="absolute inset-0 size-full object-cover" alt="" />
            </div>
          </div>
          <div className="background-glass flex-1 rounded-xl p-2.5 ">
            <div className="flex h-full w-full max-w-full flex-col items-center justify-center font-abril-fatface">
              <p>At</p>
              <p>16:30</p>
              <p>Thurs</p>
              <p>28/11</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-1 items-stretch gap-4 ">
          <div className="flex h-full flex-col gap-4">
            <div className="background-glass relative rounded-2xl p-4 ">
              <div className="absolute inset-0 bg-white blur-xl"></div>
              <div className="relative flex h-full flex-col items-start justify-center">
                <IPositionShort />
              </div>
            </div>

            <a
              href="tel:0343214971"
              className="background-glass flex w-full flex-1 items-center justify-center rounded-2xl px-4 !text-inherit "
            >
              <span className="scale-90">
                Ét ô ét: <span className="ml-1 underline">034 321 4971</span>
              </span>
            </a>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div
              className="background-glass w-full rounded-2xl p-4"
              onClick={() => {
                const a = document.createElement('a')
                a.href = 'https://maps.app.goo.gl/1HNG17HcejveizAn9'
                a.target = '_blank'
                a.click()
              }}
            >
              <IGGMap />
            </div>
            <div
              className="background-glass flex w-full flex-1 items-center justify-center rounded-2xl p-4"
              onClick={() => {
                resetLocalStorage()
                window.location.reload()
              }}
            >
              huy
            </div>
          </div>
        </div>
      </div>
    </div>,
    (document.getElementById('layout') as HTMLElement) ?? document.body
  )
}

export default Invitations
