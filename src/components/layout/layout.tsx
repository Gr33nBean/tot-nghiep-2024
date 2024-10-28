const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className="relative size-full overflow-y-auto overflow-x-hidden rounded-2xl bg-primary p-4"
        style={{
          background: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        {children}
      </div>
    </>
  )
}

export default Layout
