import { cn } from "@/lib/utils";
import Image from "next/image";
import { bebas_neue } from "../fonts";
import BlurFade from "@/components/ui/blur-fade";
import Transition from "@/components/motion/transition";
import Munsoc from "../assets/MunsocMain.png"
import Bg from "../assets/nitamunbg.jpg"
import Unstop from "../assets/Unstop-Logo-White-Medium.png"

export default function Hero() {
  return (
    <section className="h-svh overflow-x-clip">
      <Image priority src={Bg} width={1920} height={1080} alt="bg" className="z-0 absolute h-svh object-cover object-left" />
      <div className="h-full pt-14 flex flex-col justify-between items-center pb-6 backdrop-grayscale bg-background/65 bg-center">
        <div>
          <Transition>
            <Image src={Munsoc} height={720} width={720} alt="MUNSOC Logo" className="size-36 scale-105 mx-auto lg:mb-10" />
          </Transition>
          <div className={cn(bebas_neue.className, "flex gap-x-14 max-sm:flex-col justify-center items-center -gap-y-2 max-sm:pt-3 lg:-mt-8")}>
            <BlurFade inView>
              <h1 className="text-8xl sm:text-[18rem] text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600">NITAMUN</h1>
            </BlurFade>
            <BlurFade delay={0.12} inView>
              <h1 className="text-8xl sm:text-[18rem] bg-clip-text bg-gradient-to-b from-white via-grey-200 to-gray-500 text-transparent">2.0</h1>
            </BlurFade>
          </div>
          <div className="text-center lg:text-right px-6 -translate-y-3 sm:-translate-y-11 text-sm flex justify-center lg:justify-end">
            <BlurFade delay={0.2}>
              <div className="flex items-center gap-3">
                Powered by <Image src={Unstop} alt="unstop" width={96} height={34} className="h-7 w-auto" />
              </div>
            </BlurFade>
          </div>
          <div className="uppercase text-center px-6 sm:-translate-y-16 lg:text-xl">
            <BlurFade delay={0.2}>
              India&apos;s largest online MUN conference
            </BlurFade>
          </div>
        </div>
        <BlurFade delay={0.24}>
          <form target="_blank" action="https://unstop.com/conferences/nitamun-20-national-institute-of-technology-agartala-1171293?lb=elVMMz5n" className="max-lg:px-6 sm:grid grid-cols-2 max-w-[1320px] w-full">
            <div className="self-center">
              <p className="max-lg:hidden text-2xl sm:text-6xl tracking-tighter text-nowrap max-sm:text-center">Join the best of diplomatic minds.</p>
              <p className="text-xl sm:text-xl uppercase text-nowrap max-sm:text-center">January 4th - 5th @ Online</p>
            </div>
            <button type="submit" className="bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-black w-fit max-sm:w-full max-sm:mt-3 max-sm:text-center px-3 py-2 sm:py-[30px] sm:px-12 max-sm:mx-auto uppercase text-xl justify-self-end rounded-2xl font-semibold backdrop-blur-xl hover:shadow-lg hover:shadow-stone-900 transition ease-in-out hover:scale-105 border-8 border-black/70">
              Register Now on Unstop
            </button>
          </form>
        </BlurFade>
      </div>
    </section>
  )
}
