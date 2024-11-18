import style from './forBuyers.module.scss'
import { useTranslations } from "next-intl";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function ForBuyers() {
    const t = useTranslations();

    const path = usePathname()
    const lang = path.slice(1, 3);

    const aboutCompanyList = [
        {
            text: t.raw("footer.aboutCompany.aboutCompanyList")[0],
            path: ('/')
        },
        {
            text: t.raw("footer.aboutCompany.aboutCompanyList")[1],
            path: ('/')
        },
        {
            text: t.raw("footer.aboutCompany.aboutCompanyList")[2],
            path: ('/')
        },
        {
            text: t.raw("footer.aboutCompany.aboutCompanyList")[3],
            path: ('/')
        }
    ]

    return <div className={style.list}>
        <span>
            {" "}
            <p>{t("footer.forBuyers.title")}</p>
            <ul>
                {aboutCompanyList.map((item: any, index: number) => (
                    <li key={index}>
                        <Link href={`/${lang}/${item.path}`}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </span>
    </div>
}