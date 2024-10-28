import Baloon from './baloon'

const Baloons = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <Baloon
        className="left-0 w-[min(18dvw,_18dvh)] -translate-x-[30%]"
        src="../src/assets/images/b1.png"
        duration={18}
      />
      <Baloon className="right-[20%] w-[min(15dvw,_15dvh)]" src="../src/assets/images/b1.png" duration={12} />
      <Baloon className="left-[30%] w-[min(14dvw,_14dvh)]" src="../src/assets/images/b2.png" duration={16} />
      <Baloon
        className="right-0 w-[min(20dvw,_20dvh)] translate-x-[30%]"
        src="../src/assets/images/b2.png"
        duration={14}
      />
    </div>
  )
}

export default Baloons
