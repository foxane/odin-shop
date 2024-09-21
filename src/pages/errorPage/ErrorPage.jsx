import styles from './ErrorPage.module.css';
import errorIcon from '/error.svg';

const ErrorPage = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={errorIcon} alt="error icon" width={150} />
        <div>
          <h1>Page not found</h1>
          <p>The page you are requesting cannot be found</p>
        </div>
        <div>
          <p>
            Is this a mistake?{' '}
            <a
              href="https://github.com/foxane/odin-shop/issues/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create issue at github
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
