import style from './style.module.scss'

const Header: React.FC = (): React.ReactElement => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src="/logo.png" alt="logo" />
            </div>
            <nav className={style.navbar}>PTIO</nav>
        </header>
    )
}

export default Header
