import "./Map.scss"

export function Map() {
  return <>
    <div id="map">
      <h1>Mappa</h1>
      <img src="./img/WorldMap.jpg" />
      <div className="continenti">
        <div className="europa"><a href=""></a></div>
        <div className="asia"><a href=""></a></div>
        <div className="africa"><a href=""></a></div>
        <div className="oceania"><a href=""></a></div>
        <div className="america-nord"><a href=""></a></div>
        <div className="america-sud"><a href=""></a></div>
      </div>
    </div>

  </>;
}
