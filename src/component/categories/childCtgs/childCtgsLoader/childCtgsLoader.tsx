import style from "./childCtgsLoader.module.scss";

export default function ChildCtgsLoader() {
  const shimmerArray = Array.from({ length: 5 });
  const shimmerChildArray = Array.from({ length: 4 });

  return (
    <div className={style.child_ctgs_container}>
      {shimmerArray.map((_, index) => (
        <div key={index} className={style.child}>
          <p></p>
          <div className={style.subsection_children}>
            {shimmerChildArray.map((_, index) => (
              <span key={index}></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
