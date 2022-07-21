import React from 'react';
import PropTypes from 'prop-types';
//styles
import {Wrapper, Content} from './MovieInfoBar.styles';


const calcTime = time => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  };


const MovieInfoBar = ( {time}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p> DURACION: {calcTime(time)}</p>
            </div>
        </Content>
    </Wrapper>

)
MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar