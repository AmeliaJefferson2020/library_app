import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>America's Most Awarded Online Library Platform</h1>
                        <h2>Find Your Dream Book With <span className="purple">Library</span></h2>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing