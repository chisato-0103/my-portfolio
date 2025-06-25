export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            新しいプロジェクトや協業の機会についてお話ししましょう。
          </p>
          <div className="contact-links">
            <a
              href="https://github.com/chisato-0103"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">📧</span>
              GitHub
            </a>
            <a href="mailto:x24014xx@aitech.ac.jp" className="contact-link">
              <span className="contact-icon">💼</span>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
