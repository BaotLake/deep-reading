import { Skeleton } from '@mui/material';
import style from './skeletonItem.module.scss'

export default function SkeletonItem() {
    return (
        <div className={style['wrapper']}>
            <div className={style['image']}>
                <Skeleton variant="circular" width={48} height={48}/>
            </div>
            <div className={style['text']}>
                <Skeleton variant={"text"} height={20} />
                <Skeleton height={40}/>
            </div>
        </div>
    );
}
