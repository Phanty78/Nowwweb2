import Image from 'next/image';
import Link from 'next/link';
import { capitalyzeString } from '@/utils/capitalyse';

export default function NavCard({
  title,
  icon,
  href,
  textColor,
  bgColor,
  specialClassName = '',
}: {
  title: string;
  icon: string;
  href: string;
  textColor: string;
  bgColor: string;
  specialClassName?: string;
}) {
  return (
    <Link
      href={href}
      className={`${bgColor} ${textColor} ${specialClassName} text-center gap-2 font-bold rounded-sm font-montserrat text-sm flex flex-col items-center justify-center w-full h-full lg:in-w-[198px] lg:min-h-[95px] p-4 md:p-6 lg:p-8`}
    >
      <Image
        src={icon}
        alt={`icone de ${title}`}
        width={50}
        height={50}
        loading="lazy"
      />
      <span>{capitalyzeString(title)}</span>
    </Link>
  );
}
