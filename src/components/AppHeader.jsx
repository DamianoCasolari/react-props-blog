import style from "../css/modules/AppHeader.module.css";

export function AppHeader() {
  return (
    <header
      className={
        style.header + " text-[40px] font-bold shadow-slate-700 shadow-xl"
      }
    >
      Il mio Blog
    </header>
  );
}
