import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <h1 className="loader-logo">
          OM<span className="gradient-text">PARKASH</span>
        </h1>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
