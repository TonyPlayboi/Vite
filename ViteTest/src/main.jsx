import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <>
  <Canvas>
  <mesh position={3}>
        <boxGeometry  attach="geometry" />
        <meshBasicMaterial attach="material" color="red" />
    </mesh>
  
  </Canvas>
  
  </>
)
