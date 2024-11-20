import wood from "../assets/wood2.png";
export function WoodBar() {
  const myStyle = {
    backgroundImage: `url(${wood})`,
    backgroundPosition: "bottom",
    height: "50px",
    width: "100vw",
  };
  return <div style={myStyle}></div>;
}
