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
import type { Challenge } from '@/payload-types';

export function ChallengeCard({
  title,
  description,
  tags,
  url,
  image,
  slug,
}: Challenge) {
  const validImage = image && typeof image === 'object' ? image : null;

  return (
    <Card className="overflow-hidden duration-300 ease-in-out pt-0 shadow-md hover:shadow-lg transition bg-white dark:bg-[#0e0e0e] border border-gray-200/50 dark:border-none h-full flex flex-col">
      <CardHeader className="p-0 relative">
        {validImage && validImage.url && validImage.url && (
          <>
            <div className="h-48 md:h-56 relative overflow-hidden w-full">
              <Image
                src={validImage.url}
                alt={validImage.alt || title}
                fill
                className="transition-transform object-cover duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {tags && tags.length > 0 && (
              <div className="absolute top-2 left-2 flex gap-2">
                {tags.map((t) => {
                  return (
                    <Badge
                      key={t.id}
                      className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 text-gray-800 text-xs uppercase font-bold border border-gray-500/50"
                    >
                      {t.tag}
                    </Badge>
                  );
                })}
              </div>
            )}
          </>
        )}
      </CardHeader>
      <CardContent className="space-y-2 flex-grow">
        <CardTitle className="font-bold font-heading text-xl min-h-[2rem] capitalize dark:text-[#fefefe] text-gray-700">
          {title}
        </CardTitle>
        <p className="text-md leading-relaxed font-sans line-clamp-2 min-h-[3rem] dark:text-[#fefefe] text-gray-600">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="bg-amber-400 w-full font-sans capitalize hover:text-lg hover:scale-105 hover:bg-amber-500 text-[#111827] transition-transform ease-in-out duration-300 hover:cursor-pointer hover:font-semibold font-bold"
        >
          <Link href={url || `challenges/${slug}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
