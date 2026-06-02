type GradientBlurProps = {
  className: string
}

const GradientBlur = ({ className }: GradientBlurProps) => {
  return <span className={`absolute rounded-full size-170 opacity-25 blur-[100px] ${className}`} />
}

export const GradientBlursBg = () => {
  return (
    <div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
      <GradientBlur className='left-8 top-0 -translate-y-1/3 bg-purple-500' />
      <GradientBlur className='right-8 bottom-0 translate-y-1/3 bg-pink-400' />
    </div>
  )
}
