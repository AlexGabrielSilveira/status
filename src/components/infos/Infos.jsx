import Link from "next/link";

export default function Infos({ stocks, type, key }) {
    return (
        <>
            {stocks.map((stock) => (
                <button key={key}>
                    <Link href={`/${type}/${stock}`}>
                    {stock}
                    </Link>
                </button>
            ))}
        </>
    )
}