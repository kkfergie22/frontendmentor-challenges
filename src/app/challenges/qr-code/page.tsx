import Image from 'next/image';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

function QRCodeComponent() {
  return (
    <div
      className={`${outfit.className} h-screen w-full flex flex-col items-center justify-center bg-[hsl(212,45%,89%)]`}
    >
      <div className="max-w-[320px] max-h-[499px] bg-[hsl(0,0%,100%)] flex flex-col gap-6 px-4 pb-10 pt-4 rounded-[10px]">
        <Image
          src="/assets/image-qr-code.png"
          alt="qr-code"
          width={288}
          height={288}
          className="rounded-[10px]"
        />

        <div className="px-4 flex flex-col gap-4 text-center">
          <h1 className="font-bold text-[22px] text-[#1F314F]">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[15px] text-[#68778D]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default QRCodeComponent;
