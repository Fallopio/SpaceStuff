import React from 'react'
import './sun.css'

function Sun() {
    return (
        <div className='solar'>
            <article className='solarArticle'>
                <h3>
                    Learn about Solar system
                </h3>
                <hr/>
                <div>
                    The Solar System is made up of all the planets that orbit our Sun.
                    In addition to planets, the Solar System also consists of moons, comets, asteroids, minor planets, dust and gas.
                    The inner solar system contains the Sun, Mercury, Venus, Earth and Mars.
                    The main asteroid belt lies between the orbits of Mars and Jupiter.
                    The planets of the outer solar system are Jupiter, Saturn, Uranus and Neptune (Pluto is now classified as a dwarf planet).
                </div>
                <hr/>
                <div>
                    This website was created to showcase some cool photos, maps and facts about Solar system.
                    You can click icons on the sidebar to view various photos and maps of planets and moons found in Solar system.
                    And remember Pluto isn't a planet anymore :(
                    For more detailed info you can visit <a href="https://en.wikipedia.org/wiki/Solar_System">Wikipedia</a>
                </div>
            </article>

        </div>
    )
}

export default Sun