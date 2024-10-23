import style from "./headFootLayout.module.scss";

export default function HeadeFootLayout({
  children,
  additionalComponent,
  additionalClass,
}: {
  children: React.ReactNode;
  additionalComponent?: React.ReactNode;
  additionalClass?: any;
}) {
  return (
    <div className={`${style.header_footer_container} ${additionalClass}`}>
      {additionalComponent}
      <div className={style.header_footer_parent}>
        <div className={style.header_footer}>
          <div className={style.header_footer_center}>{children}</div>
        </div>
      </div>
    </div>
  );
}
