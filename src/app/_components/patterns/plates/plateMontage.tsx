import { Plates } from ".";

interface PlateMontageProps {
  description: string
  rpm: string
  hp: string
  amp: number
  model: string
  capacitor: number
  wWork: number
  wStart: number
  sWork: string
  sStart: string
}

export default function PlateMontage(props: PlateMontageProps) {
  return (
    <Plates.root>

        <h2
        className="flex justify-center items-start font-semibold text-sm max-h-10 h-10 overflow-clip"
        >{props.description}</h2>

        <Plates.branch>
          <Plates.box label={props.rpm} title="RPM"/>
        </Plates.branch>

        <Plates.branch>
          <Plates.box label={props.hp} title="Potência"/>
          <Plates.box label={props.amp.toString()} title="amperes"/>
        </Plates.branch>

        <Plates.branch>
          <Plates.box label={props.model.toUpperCase()} title="Modelo"/>
          <Plates.box label={props.capacitor.toString()} title="capacitor"/>
        </Plates.branch>

      </Plates.root>
  );
}