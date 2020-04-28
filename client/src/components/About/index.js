import React from 'react';
import { Container } from 'reactstrap';

const About = (props) => {
    return(
        <div className="purple spacer pt-5">
        <Container className=' text-center mx-auto py-2 border rounded shadow'>
            <h1>About GameNation</h1>
            <Container className='text-light'>
                <p>GameNation was created in 2020 as a network to help gamers with similar tastes and styles find each other.
                    It's the best place to make gaming connections!
                </p>
                <p class="text-light tinywords">-->Icon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
</p>
            </Container>
        </Container>
        </div>
    )
}

export default About