    // app/components/Hero.tsx
import Link from 'next/link';

const Hero = () => (
  <section className="hero-section" id="hero">
    <div className="overlay" style={{ opacity: 0.7, backgroundColor: 'rgb(255, 131, 112)' }}></div>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-6">
          <div className="content-wrapper">
            <h2 className="display-1">Join the Kiboko Revolution</h2>
            <p className="lead">
              KibokoDAO is a decentralized autonomous organization aimed at empowering Africa’s blockchain community...
            </p>
          
            <Link href="#join" className="btn btn-secondary">Join Now</Link>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
