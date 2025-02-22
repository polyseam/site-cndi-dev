type ThreePointsProps = {
  statements: [string, string, string];
};

export default function ThreePoints(props: ThreePointsProps) {
  return (
    <section class="section_3points_airflow">
      <div class="w-layout-blockcontainer container_3points mx-auto max-w-screen-lg">
        <div class="_3point_wrapper">
          {props.statements.map((statement, index) => (
            <div class="div-block-83" key={"threeStatementsI" + index}>
              <img
                src="/images/system/checkmark_circle.png"
                loading="lazy"
                width="33"
                alt=""
              />
              <h1 class="heading-76">{statement}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
