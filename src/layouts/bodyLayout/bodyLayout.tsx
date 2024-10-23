import style from "./bodyLayout.module.scss";

export default function BodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.body_parent}>
      <div className={style.body}>
        <div className={style.body_center}>{children}</div>
      </div>
    </div>
  );
}
