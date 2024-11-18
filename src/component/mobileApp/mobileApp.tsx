import { useTranslations } from "next-intl";
import style from "./mobileApp.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function MobileApp() {
  const t = useTranslations()
  return (
    <div className={style.mobile_app_container}>
      <Image
        src="https://greenline.yerevan-city.am/static/media/collectionImg.724622b9.png"
        alt="phones"
        width={500}
        height={600}
      />
      <div>
        <Image
          src="	https://greenline.yerevan-city.am/static/media/logo.bc40eaf6.svg"
          alt="Green Line"
          width={200}
          height={100}
        />
        <span>
          <p>{t('mobileApp.title')}</p>
          <span>{t('mobileApp.download')}</span>
        </span>

        <div>
          <a href='https://apps.apple.com/am/app/yerevan-city/id1550107704' target="_blank">
            <Image
              src="https://greenline.yerevan-city.am/static/media/ios.860223a0.svg"
              alt=""
              width={150}
              height={80}
            /></a>
          <a href="https://play.google.com/store/apps/details?id=am.yerevancity&hl=en&gl=US" target="_blank">
            <Image
              src="https://greenline.yerevan-city.am/static/media/android.33c3ccf2.svg"
              alt=""
              width={150}
              height={80}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
