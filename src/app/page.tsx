import { Pattern } from "./_components/patterns";
import { Plates } from "./_components/patterns/plates";
import { prisma } from "./_services/client/prismaClient";

export default async function Home() {

  const items = await prisma.plate.findMany()

  return (
    <Pattern.wrapper>
      {items.map(item => {
        return(
          <Plates.montage
          key={item.id}
          amp={item.amp}
          capacitor={item.capacitor}
          description={item.description}
          hp={item.hp}
          model={item.model}
          rpm={item.rpm}
          wWork={item.wireWork}
          wStart={item.wireStart}
          sWork={item.sequenceWork}
          sStart={item.sequenceStart}
          />
        )
      })}
    </Pattern.wrapper>
  );
}