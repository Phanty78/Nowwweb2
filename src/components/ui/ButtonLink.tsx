import Link from "next/link"

export default function ButtonLink({ title, href }: { title: string, href: string }) {
    return (
        <Link href={href} className="bg-bright-blue hover:bg-bright-blue/80 text-white px-6 py-3 font-bold rounded-sm font-montserrat  text-sm mt-2">{title}</Link>
    )
}
