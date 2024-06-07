export function Player(props) {
  return (
    <div
      className="absolute -top-8 left-2 z-10 h-24 w-20 bg-player-model bg-contain bg-center bg-no-repeat transition-all duration-500"
      style={props.style}
    ></div>
  );
}
