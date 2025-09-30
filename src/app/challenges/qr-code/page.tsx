import React from 'react';

function QRCodeComponent() {
  return (
    <>
      <div className="max-w-[320px] max-h-[499px] bg-[hsl(0,0%,100%)] flex flex-col gap-6 px-4 pb-10 pt-4 rounded-[10px]">
        <img
          src="/assets/image-qr-code.png"
          alt="qr-code"
          className="rounded-[10px] w-[288px] h-[288px]"
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
    </>
  );
}

export default QRCodeComponent;
