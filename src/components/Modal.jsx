export function Modal({ zValue, children }) {
  return (
    <div
      className={`absolute left-0 right-0 h-[384px] animate-popUp z-${zValue} ml-auto mr-auto flex w-4/5 flex-col items-center justify-center gap-8 rounded-md border-4 border-slate-200 bg-slate-400 text-white`}
    >
      {children}
    </div>
  );
}
