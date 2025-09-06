import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    // agrupei diferentes luzes e formadores de luz. Posso usar o grupo para organizar luzes, câmeras, malhas e outros objetos na cena.
    <group name="lights">
      {/**
       * @description O ambiente é usado para criar um ambiente de fundo para a cena
       * https://github.com/pmndrs/drei?tab=readme-ov-file#environment
       */}
      <Environment resolution={256}>
        <group>
          {/**
           * @description O Lightformer é usado para criar luzes personalizadas com vários formatos e propriedades em uma cena 3D.
           * https://github.com/pmndrs/drei?tab=readme-ov-file#lightformer
           */}
          <Lightformer
            form="rect"
            intensity={10}
            position={[-1, 0, -10]}
            scale={10}
            color={"#495057"}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      {/**
       * @description spotLight é usado para criar uma fonte de luz posicionada em um ponto específico
       * na cena que emite luz em uma direção específica.
       * https://threejs.org/docs/#api/en/lights/SpotLight
       */}
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1} // penumbra é a borda suave de uma sombra projetada por um ponto de luz
        decay={0} // a quantidade em que a luz diminui à medida que se afasta da fonte
        intensity={Math.PI * 0.2} // intensidade da luz
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 3}
      />
    </group>
  );
};

export default Lights;
