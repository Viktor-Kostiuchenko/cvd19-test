import FavoriteIcon from '@mui/icons-material/Favorite';
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={s.footer}>
      <p className={s.footerText}>Designed by Viktor Kost for Boosters with</p>
      <FavoriteIcon />
    </div>
  );
}
