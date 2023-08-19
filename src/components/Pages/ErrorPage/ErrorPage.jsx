

const ErrorPage = () => {
    return (
        <div className="error-container">
    <h1 className="error-code">404</h1> <br />
    <p className="error-message">Oops! The page you're looking for doesn't exist.</p> <br />
    <p className="error-message">Go back to <a className="back-link" href="/">home</a>.</p>
  </div>
    );
};

export default ErrorPage;