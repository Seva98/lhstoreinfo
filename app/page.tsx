import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 w-screen h-fit sm:h-screen p-6">
      <div className="flex-1 pointer relative h-screen">
        <div className="h-full flex items-center justify-center p-4 transition-transform hover:scale-105 hover:cursor-pointer">
          <Image
            height={600}
            width={484}
            src="/logo-krmelin.png"
            alt="Krmelin"
            className="border bg-white border-zinc-100 shadow-lg rounded-xl overflow-hidden object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image src="/al_smes.png" alt="Krmelin" className="object-cover blur-sm" placeholder="blur" blurDataURL="/al_smes-blur.png" fill />
        </div>
      </div>
      <div className="flex-1 pointer relative h-screen sm:h-full">
        <div className="h-full flex items-center justify-center p-4 transition-transform hover:scale-105 hover:cursor-pointer">
          <Image
            height={600}
            width={484}
            src="/logo-havirov.svg"
            alt="Havirov"
            className="border bg-white border-zinc-100 shadow-lg rounded-xl overflow-hidden object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image src="/nerez.png" alt="Krmelin" className="object-cover blur-sm" placeholder="blur" blurDataURL="/nerez-blur.png" fill />
        </div>
      </div>
      <div className="flex-1 pointer relative h-screen sm:h-full">
        <div className="h-full flex items-center justify-center p-4 transition-transform">
          <div className="bg-white w-full rounded-xl shadow-lg text-center p-4">
            <Image
              height={128}
              width={128}
              src="/hrebo.jpeg"
              alt="Hrebo"
              className="border mx-auto border-zinc-100 shadow-lg rounded-full overflow-hidden object-cover"
            />
            <div>
              <b>Ing. Lukáš Hrebík</b>
            </div>
            <div>LH Store s.r.o.</div>
            <div>Staroveská 567</div>
            <div>739 24 Krmelín</div>
            <div>IČ 278 01 586</div>
            <div>DIČ CZ278 01 586</div>
            <div>Datová schránka: xqeyije</div>
            <div>E-mail: info@sbernakrmelin.cz</div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image src="/olovo.png" alt="Krmelin" className="object-cover blur-sm" placeholder="blur" blurDataURL="/olovo-blur.png" fill />
        </div>
      </div>
    </div>
  );
}
