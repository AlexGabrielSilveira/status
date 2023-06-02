import Link from "next/link";

export default function Infos({ stocks, type }) {
    return (
        <>
            {stocks.map((stock) => (
                <button>
                    <Link href={`/${type}/${stock}`}>
                    {stock}
                    </Link>
                </button>
            ))}
        </>
    )
}