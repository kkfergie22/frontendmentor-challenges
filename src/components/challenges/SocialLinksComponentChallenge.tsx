import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
});

const data = [
  { name: 'GitHub', href: '#' },
  { name: 'Frontend Mentor', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
];

function SocialLinksComponentChallenge() {
  return (
    <div
      className={`${inter.className} h-screen w-full flex items-center justify-center bg-[hsl(0,0%,8%)] text-sm`}
    >
      <div className="p-4 bg-[hsl(0,0%,12%)] rounded-lg max-w-[320px]">
        <div className="flex items-center flex-col space-y-4">
          <Image
            src="/assets/avatar-jessica.jpeg"
            alt="picture of the jane doe"
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
          <h1 className="text-[hsl(0,0%,100%)] font-[700]">Jessica Randall</h1>
          <p className="text-[hsl(75,94%,57%)] text-sm font-[600]">
            London,United Kingdom
          </p>
        </div>
        <div className="flexflex-col space-y-8">
          <p className="text-sm font-[400] text-[hsl(0,0%,100%)]">
            &quot;Frontend-end developer and avid reader&quot;
          </p>
          <ul className="flex flex-col space-y-2">
            {data.map((s, i) => {
              return (
                <li key={i}>
                  <Link
                    href={s.href}
                    className="block bg-[hsl(0,0%,20%)] hover:bg-[hsl(75,94%,57%)]
                  hover:cursor-pointer w-full p-2 text-center font-semibold text-white rounded-md hover:text-[hsl(0,0%,12%)]"
                  >
                    {s.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SocialLinksComponentChallenge;
