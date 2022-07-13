import React, { useState } from 'react'
import { Wrapper, Content } from './Billboard.styles.js'


const Billboard = ({ header, children }) => (

    < Wrapper >
        <h1>
            {header}
        </h1>
        <Content> {children} </Content>
    </Wrapper >
    
)


export default Billboard;