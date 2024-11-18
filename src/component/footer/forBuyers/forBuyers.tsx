import style from './forBuyers.module.scss'
import { useTranslations } from "next-intl";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function ForBuyers() {
    const t = useTranslations();

    const path = usePathname()
    const lang = path.slice(1, 3);

    const forBuyersList = [
        {
            text: t.raw("footer.forBuyers.forBuyersList")[0],
            path: ('/term-of-use')
        },
        {
            text: t.raw("footer.forBuyers.forBuyersList")[1],
            path: ('/privacy-policy')
        }
    ]

    return <div className={style.list}>
        <span>
            {" "}
            <p>{t("footer.forBuyers.title")}</p>
            <ul>
                {forBuyersList.map((item: any, index: number) => (
                    <li key={index}>
                        <Link href={`/${lang}/${item.path}`}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </span>
    </div>
}