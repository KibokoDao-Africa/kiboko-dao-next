    // app/components/CoreValues.tsx
const CoreValues = () => (
    <section className="core-values-section" id="core-values">
      <div className="overlay" style={{ opacity: 0.8, backgroundColor: 'rgb(255, 131, 112)' }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="display-5">Core Values Unleashed</h2>
          </div>
          <div className="col-lg-6 text-end">
            <a href="#discover-more" className="btn btn-primary">Discover More</a>
          </div>
        </div>
        <p className="lead text-center">Our foundation is built on trust.</p>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <h4 className="card-title">Trust</h4>
              <p className="card-text">We believe in transparency and integrity...</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <h4 className="card-title">KibokoDAO Hub</h4>
              <p className="card-text">KibokoDAO empowers members through transparent governance...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default CoreValues;
      