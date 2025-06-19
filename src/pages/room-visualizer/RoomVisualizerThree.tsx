// RoomVisualizer.tsx
import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html, Select } from '@react-three/drei'
import * as THREE from 'three'

type MaterialType = 'Silk' | 'Cotton' | 'Linen' | 'Sheer' | 'Blackout' | 'Polyester' | 'Metal' | 'Fabric'
type TreatmentType = 'Blinds' | 'Shade' | 'Curtains'
type TerrainType = 'Modern' | 'Classic' | 'Minimal' | 'Boho'
type AccessoryType = 'None' | 'Vase' | 'Lamp' | 'Plant'

export default function RoomVisualizer() {
  const [material, setMaterial] = useState<MaterialType>('Silk')
  const [treatment, setTreatment] = useState<TreatmentType>('Curtains')
  const [terrain, setTerrain] = useState<TerrainType>('Modern')
  const [accessory, setAccessory] = useState<AccessoryType>('None')

  return (
    <div style={{ width: '100%', height: '100vh', background: '#f7f4f1' }}>
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1, background: 'rgba(255,255,255,0.9)', padding: 16, borderRadius: 8 }}>
        <div>
          <label>Material: </label>
          <select value={material} onChange={e => setMaterial(e.target.value as MaterialType)}>
            {['Silk','Cotton','Linen','Sheer','Blackout','Polyester','Metal','Fabric'].map(m => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label>Treatment: </label>
          <select value={treatment} onChange={e => setTreatment(e.target.value as TreatmentType)}>
            {['Blinds','Shade','Curtains'].map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label>Terrain: </label>
          <select value={terrain} onChange={e => setTerrain(e.target.value as TerrainType)}>
            {['Modern','Classic','Minimal','Boho'].map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label>Accessory: </label>
          <select value={accessory} onChange={e => setAccessory(e.target.value as AccessoryType)}>
            {['None','Vase','Lamp','Plant'].map(a => <option key={a}>{a}</option>)}
          </select>
        </div>
      </div>

      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={0.8} />
        <OrbitControls />

        <Suspense fallback={<Html>Loading 3D scene...</Html>}>
          <TerrainScene terrain={terrain} materialType={material} treatmentType={treatment} accessoryType={accessory} />
        </Suspense>
      </Canvas>
    </div>
  )
}

function TerrainScene({ terrain, materialType, treatmentType, accessoryType }:
  { terrain: TerrainType, materialType: MaterialType, treatmentType: TreatmentType, accessoryType: AccessoryType }) {

  const { scene, materials } = useGLTF('/models/room.glb') as any

  // assign dynamic materials
  const mat = new THREE.MeshPhysicalMaterial({
    color: materialColor(materialType),
    metalness: materialType === 'Metal' ? 1 : 0,
    roughness: materialType === 'Silk' ? 0.2 : 0.8,
    transparent: materialType === 'Sheer',
    opacity: materialType === 'Sheer' ? 0.5 : 1
  })

  // assign materials to window treatment mesh
  const treatMat = mat.clone()

  // per-vertex terrain adjustments
  const terrainColor = terrainPalette(terrain)

  return (
    <group>
      {/* Floor + walls */}
      <mesh receiveShadow>
        <boxBufferGeometry args={[10, 5, 10]} />
        <meshStandardMaterial color={terrainColor} />
      </mesh>

      {/* Room model */}
      <primitive object={scene.clone()} />

      {/* Apply material to curtains/blinds subtree */}
      <group>
        <mesh name="WindowTreatment" material={treatMat} />
      </group>

      {/* Accessories */}
      {accessoryType !== 'None' && <Accessory type={accessoryType} />}
    </group>
  )
}

function Accessory({ type }: { type: AccessoryType }) {
  const { scene } = useGLTF(`/models/${type.toLowerCase()}.glb`) as any
  return <primitive object={scene.clone()} position={[1,0,1]} />
}

function materialColor(m: MaterialType): string {
  switch (m) {
    case 'Silk': return '#f2e9e4'
    case 'Cotton': return '#ffffff'
    case 'Linen': return '#f5f1e8'
    case 'Sheer': return '#ffffff'
    case 'Blackout': return '#2b2b2b'
    case 'Polyester': return '#d3d3d3'
    case 'Metal': return '#aaaaaa'
    case 'Fabric': return '#c8b8a9'
  }
}

function terrainPalette(t: TerrainType): string {
  switch (t) {
    case 'Modern': return '#e5e5e5'
    case 'Classic': return '#f0e0d5'
    case 'Minimal': return '#fafafa'
    case 'Boho': return '#ece4d1'
  }
}

useGLTF.preload('/models/room.glb')
['vase','lamp','plant'].forEach(a => useGLTF.preload(`/models/${a}.glb`))
