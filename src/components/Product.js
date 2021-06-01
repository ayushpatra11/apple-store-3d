import React, {Suspense, useEffect, useRef} from 'react'
import styled from 'styled-components';
import {Canvas, useFrame} from '@react-three/fiber';
import {useGLTF} from '@react-three/drei';


const Section = styled.div`
    border-radius: 18px;
    margin-top: 40px;
    margin-bottom: 40px;
    background: ${props => props.lightbg? "white": "black"};
    position: relative;
    padding: 40px;
`;



const Container = styled.div`
    width: 100%;
    justify-content: center;
    height: 80vh;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    h1{
        ${'' /* font-family: 'Ubuntu', sans-serif; */}
        font-family: 'Roboto', sans-serif;
        font-size: 3rem;
        text-align: center;
        color: ${props => props.lightbg? "grey": "white"};
    }

    @media screen and (max-width: 968px){
        h1{
            font-size: 1.8rem;
        }
    }
`;

const Model = ({productname})=>{
    const gltf = useGLTF(`/${productname}.gltf`, true);
    return <primitive object={gltf.scene} dispose = {null} />

}

const Lights = ()=>{
    return (
    <>
         <ambientLight intensity={0.9} />
        <directionalLight position={[0, 100, 70]} intensity={1} />
        <directionalLight position={[-100, 0, 90]} intensity={1} />
        <spotLight intensity={2} position={[0, 300, 0]} />
    </>
    )
}

const Content = ({product, position, rotatex})=>{
    const mesh = useRef()
    useFrame(()=> {
       rotatex?  mesh.current.rotation.z += 0.01:  mesh.current.rotation.y += 0.01; 
    } );

    return(
        <group position={[0,-100,0]}>
        <mesh ref={mesh} position={[0, position, 0]}>
        
            <Model productname = {product} />
        </mesh>
    </group>
    )
}

function Product({productName, productGltf, pos, cameraz, cameray, rotatex, lightbg}){

    

    
    return (
        <div>
            <Section lightbg={lightbg}>
                
                    <Container lightbg={lightbg}>
                    <h1><i class="fab fa-apple"></i> {productName} </h1>
                    
                    <Suspense fallback={null}>
                        <Canvas
                        camera={{position: [0, cameray, cameraz], fov: 80}}> 
                        <Lights />   
                         <Content product={productGltf} position={pos} rotatex={rotatex} />   
                        </Canvas>
                        
                    </Suspense>
                    
                    </Container>
                
            </Section>
        </div>
    )
}

export default Product
