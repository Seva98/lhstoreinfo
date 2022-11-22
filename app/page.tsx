import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 w-screen h-fit sm:h-screen p-6">
      <div className="flex items-center justify-center flex-1 pointer relative h-screen sm:h-full min-h-7/10 sm:min-h-fit">
        <div className="h-full flex items-center justify-center p-4 transition-transform hover:scale-105 hover:cursor-pointer">
          <a href="https://sbernakrmelin.cz">
            <Image
              height={600}
              width={484}
              src="/logo-krmelin.png"
              alt="Krmelin"
              className="border bg-white border-zinc-100 shadow-lg rounded-xl overflow-hidden object-cover"
            />
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image src="/al_smes.png" alt="Krmelin" className="object-cover blur-sm" placeholder="blur" blurDataURL="/al_smes-blur.png" fill />
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 pointer relative h-full min-h-7/10 sm:min-h-fit">
        <div className="h-full flex items-center justify-center p-4 transition-transform hover:scale-105 hover:cursor-pointer">
          <a href="https://sbernahavirov.cz">
            <Image
              height={600}
              width={484}
              src="/logo-havirov.svg"
              alt="Havirov"
              className="border bg-white border-zinc-100 shadow-lg rounded-xl overflow-hidden object-cover"
            />
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image src="/nerez.png" alt="Krmelin" className="object-cover blur-sm" placeholder="blur" blurDataURL="/nerez-blur.png" fill />
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 pointer relative h-full min-h-7/10 sm:min-h-fit">
        <div className="h-full flex items-center justify-center p-4 transition-transform">
          <div className="bg-white w-full rounded-xl shadow-lg text-center p-4">
            <Image
              height={128}
              width={128}
              src="/hrebo.jpeg"
              alt="Hrebo"
              className="border mx-auto border-zinc-100 shadow-lg rounded-full overflow-hidden object-cover"
            />
            <div className="mb-2">
              <b>Ing. Lukáš Hrebík</b>
            </div>
            <div>LH Store s.r.o.</div>
            <div>Staroveská 567</div>
            <div>739 24 Krmelín</div>
            <div>IČ 278 01 586</div>
            <div>DIČ CZ278 01 586</div>
            <div className="mb-2">Datová schránka: xqeyije</div>
            <div className="font-bold">
              <a href="mailto:hrebik@lhstore.cz">hrebik@lhstore.cz</a>
            </div>
            <div className="font-bold">
              <a href="tel:+420736642927">+420 736 642 927</a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image src="/olovo.png" alt="Krmelin" className="object-cover blur-sm" placeholder="blur" blurDataURL="/olovo-blur.png" fill />
        </div>
      </div>
    </div>
  );
}
