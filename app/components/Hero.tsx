// app/components/Hero.tsx
import Link from 'next/link';

const Hero = () => (
  <section data-bs-version="5.1" className="header01 scalem5 mbr-parallax-background" id="hero-1">
    <div className="mbr-overlay" style={{ opacity: 0.7, backgroundColor: 'rgb(255, 131, 112)' }}></div>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-6">
          <div className="content-wrapper">
            <h2 className="mbr-section-title mbr-fonts-style display-1">Join the Kiboko Revolution</h2>
            <p className="mbr-text mbr-fonts-style display-7">
              KibokoDAO is a decentralized autonomous organization aimed at empowering Africa’s blockchain community...
            </p>
            <div className="mbr-section-btn">
              <Link href="#join" className="btn btn-secondary display-4">Join Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
