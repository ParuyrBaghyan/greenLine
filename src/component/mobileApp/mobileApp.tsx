import { useTranslations } from "next-intl";
import style from "./mobileApp.module.scss";
import Image from "next/image";

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
          <Image
            src="https://greenline.yerevan-city.am/static/media/ios.860223a0.svg"
            alt=""
            width={150}
            height={80}
          />
          <Image
            src="https://greenline.yerevan-city.am/static/media/android.33c3ccf2.svg"
            alt=""
            width={150}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
