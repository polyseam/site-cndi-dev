import { StandardSection } from "components/Section.tsx";
type ThreePointsProps = {
  statements: [string, string, string];
};

export default function ThreePoints(props: ThreePointsProps) {
  return (
    <StandardSection>
      <div class="flex flex-col items-center justify-center">
        <div>
          {props.statements.map((statement, index) => (
            <div
              class="flex justify-start items-center my-5"
              key={"3p" + index}
            >
              <img
                src="/images/system/checkmark_circle.png"
                loading="lazy"
                width="33"
                alt="affirmative checkmark"
              />
              <h1 class="ml-5 text-3xl">{statement}</h1>
            </div>
          ))}
        </div>
      </div>
    </StandardSection>
  );
}
