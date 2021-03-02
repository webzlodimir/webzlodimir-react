import {
    NavLink
} from "react-router-dom";

import s from "./styles.module.css"


const AppLogo = () => {
    function src(ext) {
        if (ext === 'single') {
            return '/img/avatar.jpg'
        } else {
            return `/img/avatar.${ext} 1x,/img/avatar@2x.${ext} 2x`
        }
    }

    return <NavLink className={s.logo} to="/">
        <picture>
            <source
                type="image/avif"
                srcSet={src('avif')}/>
            <source
                type="image/webp"
                srcSet={src('webp')}/>
            <img
                src={src('single')}
                srcSet={src('jpg')}
                alt=""
                className={s.logo__img}
            /></picture>
    </NavLink>;
}

export default AppLogo;
