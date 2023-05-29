import css from './FriendListItem.module.css';
import clsx from 'clsx';
export const FriendListItem=({avatar, name,isOnline}) => (
    <>
    <li className={css.item} >
          <span className={clsx(css.status, isOnline ? css.green : css.red)}></span>
          <img
            className={css.avatar}
            src={avatar}
            alt={name}
            width="48"
          />
          <p className={css.name}>{name}</p>
    </li>
    </>);
