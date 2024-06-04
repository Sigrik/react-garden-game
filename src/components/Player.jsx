export function Player(props) {
  return (
    <div
      className="absolute left-7 top-6 z-10 h-12 w-10 bg-player-model bg-contain bg-center bg-no-repeat transition-all duration-500"
      style={props.style}
    ></div>
  );
}
