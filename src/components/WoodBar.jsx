import wood from "../assets/wood2.png";
export function WoodBar() {
  const myStyle = {
    backgroundImage: `url(${wood})`,
    backgroundPosition: "bottom",
    width: "100%",
    height: "50px",
  };
  return <div style={myStyle}></div>;
}
