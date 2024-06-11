export function Modal({ children }) {
  return (
    <div className=" absolute z-20 flex h-2/3 w-4/5 flex-col items-center justify-center gap-8 bg-black bg-opacity-30 text-white">
      {children}
    </div>
  );
}
