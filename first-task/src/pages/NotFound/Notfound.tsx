import styles from './Notfound.module.css';
export const Notfound = () => {
  return (
    <div>
      <h1 className={styles.main}>This page not found</h1>
      <img
        className={styles.img}
        src="https://www.templedesign.com.au/wp-content/uploads/2013/02/Error_404.jpg"
        alt="not found"
      />
    </div>
  );
};
