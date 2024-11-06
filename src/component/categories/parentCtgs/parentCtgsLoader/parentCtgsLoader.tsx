import style from "./parentCtgsLoader.module.scss";

export default function ParentCtgsLoader() {
  const shimmerArray = Array.from({ length: 16 });
  return (
    <div className={style.parent_ctgs_loader_container}>
      {shimmerArray.map((_, index) => {
        return <p key={index}></p>;
      })}
    </div>
  );
}
