const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div id="layout" className="relative flex size-full flex-col">
        {children}
      </div>
      <div id="landscape-warning" className=" hidden size-full items-center justify-center">
        <div className="background-glass rounded-3xl p-4 text-[2rem]">Dạ xoay cái điện thoại đứng lên dùm cái đi!</div>
      </div>
    </>
  )
}

export default Layout
