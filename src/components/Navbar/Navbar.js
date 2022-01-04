import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_logo}>Z</div>
      <ul className={styles.nav_links}>
        <li>
          <button>
            <i class="bi bi-basket"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="bi bi-search"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="bi bi-pin-map"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="bi bi-person-circle"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}
