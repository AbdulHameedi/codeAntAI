import { SignInBottom, SignInImg } from '../../../exports'

const Intro = () => {
  return (
    <div className='hidden bg-white md:flex justify-center items-center relative w-[50%]'>
      <img src={SignInImg} alt="SignInImg" />
      <img src={SignInBottom} alt="SignInBottom" className='bottom-0 left-0 absolute'/>
    </div>
  )
}

export default Intro
