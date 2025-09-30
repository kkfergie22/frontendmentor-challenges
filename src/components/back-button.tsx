'use client';
import { ArrowBarLeft } from 'react-bootstrap-icons';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface BackButtonProps {
  className?: string;
  fallback?: string;
}

export default function BackButton({
  className,
  fallback = '/',
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={cn('flex items-center justify-center', className)}
    >
      <ArrowBarLeft />
      <span className="capitalize ml-2">Back</span>
    </Button>
  );
}
