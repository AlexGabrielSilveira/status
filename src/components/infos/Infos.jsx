import Link from "next/link";

export default function Infos({ stocks, type }) {
    return (
        <>
            {stocks.map((stock) => (
                <span>
                    <Link href={`/${type}/${stock}`}>
                    {stock}
                    </Link>
                </span>
            ))}
        </>
    )
}