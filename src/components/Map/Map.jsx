import "./Map.scss"

export function Map() {
  return <>
    <div id="map">
      <h1>Mappa</h1>
      <img src="./img/WorldMap.jpg" />
      <div className="continenti">
        <div className="europa"><a href=""></a>europa</div>
        <div className="asia"><a href=""></a>asia</div>
        <div className="africa"><a href=""></a>africa</div>
        <div className="oceania"><a href=""></a>oceania</div>
        <div className="america-nord"><a href=""></a>america del nord</div>
        <div className="america-sud"><a href=""></a>america del sud</div>
      </div>
    </div>

  </>;
}
