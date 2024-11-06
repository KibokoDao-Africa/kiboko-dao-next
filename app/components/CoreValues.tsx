// app/components/CoreValues.tsx
const CoreValues = () => (
  <section data-bs-version="5.1" className="features12 scalem5 mbr-parallax-background" id="features-9">
    <div className="mbr-overlay" style={{ opacity: 0.8, backgroundColor: 'rgb(255, 131, 112)' }}></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="title-wrapper">
            <h2 className="mbr-section-title mbr-fonts-style display-5">Core Values Unleashed</h2>
          </div>
        </div>
        <div className="col-lg-6 text-end">
          <a href="#discover-more" className="btn btn-primary display-4">Discover More</a>
        </div>
      </div>
      <p className="mbr-desc mbr-fonts-style display-4 text-center">Our foundation is built on trust.</p>
      <div className="row items-wrapper">
        <div className="col-lg-4 item">
          <div className="item-wrapper">
            <div className="card-box">
              <div className="tag-wrapper">
                <p className="card-tag mbr-fonts-style display-4">Trust</p>
              </div>
              <h4 className="card-title mbr-fonts-style display-5">Trust</h4>
              <p className="card-text mbr-fonts-style display-7">We believe in transparency and integrity...</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 item">
          <div className="item-wrapper">
            <div className="card-box">
              <div className="tag-wrapper">
                <p className="card-tag mbr-fonts-style display-4">KibokoDAO</p>
              </div>
              <h4 className="card-title mbr-fonts-style display-5">KibokoDAO Hub</h4>
              <p className="card-text mbr-fonts-style display-7">KibokoDAO empowers members through transparent governance...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CoreValues;
