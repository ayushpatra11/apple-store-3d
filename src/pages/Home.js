import React from 'react';
import styled from 'styled-components';
import Product from '../components/Product';


function Home() {
    return (
        <div>
            <Product productName="iPhone 13 Pro" productGltf="iPhone13Pro" pos="150" cameraz="600" cameray="0" lightbg="true" />
            
            <Product productName="iPhone 12 Pro" productGltf="iPhone11Pro" pos="200" cameraz="0" cameray="300" rotatex="true"  />
            <Product productName="iPhone 11 Pro" productGltf="iPhone12Pro" pos="200" cameraz="500" cameray="0" lightbg="true" />
            <Product productName="iPad Pro" productGltf="iPadPro" pos="70" cameraz="100" cameray="0" />
        </div>
    )
}

export default Home
