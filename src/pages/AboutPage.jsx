
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <p>
        Hello there! Welcome to my About page. I am excited to share my work with you! 
        I am a full-stack web developer with a passion for creating functional web applications.
        I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. 
        I am always looking to learn new things and improve my skills. 
        I am looking forward to working more and creating interesting apps with people!
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Example 1</h3>
                <p className="lead mb-0">
                  wooooo!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Example 2</h3>
                <p className="lead mb-0">
                  more to come!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Example 3</h3>
                <p className="lead mb-0">
                  Creating things
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        This is a simple example of an About page. 
      </p>
    </div>
  );
}
