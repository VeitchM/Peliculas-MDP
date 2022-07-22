import React, { useState } from 'react'
import { Wrapper, Content } from './Billboard.styles.js'


const Billboard = ({ children }) => (

    < Wrapper >
        <Content> {children} </Content>
    </Wrapper >
    
)


export default Billboard;