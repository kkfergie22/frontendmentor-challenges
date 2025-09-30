import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export interface Challenge {
  title: string;
  desc: string;
  tags?: string[];
  link: string;
  imgPath: string;
}

export default function ChallengeCard({
  title,
  desc,
  tags,
  link,
  imgPath,
}: Challenge) {
  console.log(`tags in the challenge card component ${tags}`);
  return (
    <Card className="shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300 ease-in-out pt-0">
      <CardHeader className="p-0 relative">
        <div className="h-48 md:h-56 relative overflow-hidden w-full">
          <Image
            src={imgPath}
            alt={title}
            fill
            className="transition-transform object-cover duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {tags && tags.length > 0 && (
          <div className="absolute top-2 left-2 flex gap-2">
            {tags.map((t) => {
              return (
                <Badge
                  key={t}
                  className="bg-black/60 text-white text-xs uppercase font-bold"
                >
                  {t}
                </Badge>
              );
            })}
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle className="font-bold font-heading text-2xl capitalize">
          {title}
        </CardTitle>
        <p className="text-md leading-relaxed font-sans line-clamp-2">{desc}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="bg-amber-300 w-full font-sans capitalize hover:text-lg hover:scale-105 hover:bg-amber-400 transition-transform ease-in-out duration-300 hover:cursor-pointer hover:font-semibold"
        >
          <Link href={link}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
