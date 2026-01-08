//! this loading file will work in serverComp only of dataFetch
export default function Loading() {
  return (
    <div className="loading-section">
      <div className="hourglassBackground">
        <div className="hourglassContainer">
          <div className="hourglassCurves"></div>
          <div className="hourglassCapTop"></div>
          <div className="hourglassGlassTop"></div>
          <div className="hourglassSand"></div>
          <div className="hourglassSandStream"></div>
          <div className="hourglassCapBottom"></div>
          <div className="hourglassGlass"></div>
        </div>
      </div>
      {/* <h1>Loading....</h1> */}
    </div>
  );
}
