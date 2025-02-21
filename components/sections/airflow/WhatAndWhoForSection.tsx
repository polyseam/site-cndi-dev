import InfoCard from "components/InfoCard.tsx";

export default function AirflowWhoAndWhatForSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg p-16">
        <div
          class="grid grid-rows-[auto] grid-cols-[1fr_1fr] gap-5"
        >
          <InfoCard
            heading={`What is Airflow`}
            cta={{
              text: "View Project",
              link: "https://airflow.apache.org",
            }}
          >
            Apache Airflow is an open-source workflow orchestration platform
            originally developed by Airbnb. It enables users to author,
            schedule, and monitor complex data engineering pipelines through a
            user-friendly interface. With a "configuration as code" approach
            using Python scripts, Airflow allows developers to easily create
            workflows by importing libraries and classes. It utilizes directed
            acyclic graphs (DAGs) to handle task dependencies and scheduling,
            offering a streamlined alternative to legacy schedulers that relied
            on disjointed configurations.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            Apache Airflow is designed for Data Engineers, Data Scientists, and
            organizations seeking a robust workflow orchestration and scheduling
            platform. It is suitable for those working on data pipelines, ETL
            (Extract, Transform, Load) processes, and complex data workflows.
            With its focus on programmable task dependencies, flexible
            scheduling, and extensive plugin ecosystem, Apache Airflow enables
            users to create, monitor, and manage complex workflows with ease.
            Whether you are working with big data, machine learning, or
            analytics pipelines, Apache Airflow provides the tools to
            efficiently orchestrate and automate your data workflows.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
