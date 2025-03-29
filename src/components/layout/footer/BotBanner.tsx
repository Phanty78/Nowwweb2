import Image from "next/image";

export default function BotBanner() {
  return (
    <div className="bg-dark-blue flex items-center justify-center relative py-[87px] px-[29px]">
      <div className="absolute top-0 left-0 w-full md:w-1/2 md:right-1/2 h-full">
        <Image 
          src="/images/motif2.svg" 
          alt="Bot Banner" 
          fill 
          className="object-cover"
          loading="lazy" 
        />
      </div>
      <Image 
        src="/images/footer1.svg" 
        alt="Tencacule de pieuvre droite" 
        className="absolute top-[50%] left-[-50px] transform -translate-y-1/2 hidden lg:block" 
        width={317} 
        height={200} 
        loading="lazy"
      />
      <Image 
        src="/images/footer2.svg" 
        alt="Tencacule de pieuvre gauche" 
        className="absolute top-[50%] right-[-50px] transform -translate-y-1/2 hidden lg:block" 
        width={317} 
        height={200} 
        loading="lazy"
      />
      <div className="flex flex-col gap-4 justify-center items-center z-10">
        <h3 className="text-turquoise font-montserrat font-extrabold text-3xl text-center">UN PROJET ? UNE QUESTION ?</h3>
        <h4 className="text-white font-pt-serif italic text-xl text-center">Plus rapide qu&apos;une bouteille à la mer</h4>
        <a href="mailto:contact@nwb.fr" className="text-turquoise px-[29px] py-[14px] rounded-sm bg-dark-navy font-montserrat font-bold text-sm">CONTACTEZ-NOUS</a>
      </div>
    </div>
  )
}
