type TemplateData = Array<{
  name: string;
  title?: string;
  type: string;
  whatIsIt: string;
  whoIsItFor: string;
  linkToProject: string;
  linkToOfficialReference?: string;
}>;

export const data: TemplateData = [
  {
    name: "airflow",
    type: "Orchestration",
    whatIsIt:
      'Apache Airflow is an open-source workflow orchestration platform originally developed by Airbnb. It enables users to author, schedule, and monitor complex data engineering pipelines through a user-friendly interface. With a "configuration as code" approach using Python scripts, Airflow allows developers to easily create workflows by importing libraries and classes. It utilizes directed acyclic graphs (DAGs) to handle task dependencies and scheduling, offering a streamlined alternative to legacy schedulers that relied on disjointed configurations.',
    whoIsItFor:
      "Apache Airflow is designed for Data Engineers, Data Scientists, and organizations seeking a robust workflow orchestration and scheduling platform. It is suitable for those working on data pipelines, ETL (Extract, Transform, Load) processes, and complex data workflows. With its focus on programmable task dependencies, flexible scheduling, and extensive plugin ecosystem, Apache Airflow enables users to create, monitor, and manage complex workflows with ease. Whether you are working with big data, machine learning, or analytics pipelines, Apache Airflow provides the tools to efficiently orchestrate and automate your data workflows.",
    linkToProject: "https://airflow.apache.org",
    linkToOfficialReference:
      "https://airflow.apache.org/ecosystem/#other-deployments-methods",
  },
  {
    name: "postgres",
    type: "Database",
    whatIsIt:
      "PostgreSQL, or Postgres, is an open-source relational database management system renowned for its power, scalability, and reliability. It efficiently stores and manages large volumes of structured and unstructured data, offering extensive features like advanced data types, complex queries, transactions, and concurrency control. With a strong focus on standards compliance, Postgres provides a flexible foundation for developers and organizations to build applications and manage databases.",
    whoIsItFor:
      "PostgreSQL, or Postgres, is a versatile and open-source relational database management system designed for a wide range of users. It caters to developers, data engineers, and organizations seeking a powerful and reliable database solution. Whether you are a small startup, a medium-sized business, or a large enterprise, PostgreSQL offers a robust foundation to handle your data storage and management needs efficiently and securely.",
    linkToProject: "https://cloudnative-pg.io",
  },
  {
    name: "hop",
    type: "Data Integration",
    whatIsIt:
      "The Hop Orchestration Platform, also known as Apache Hop, is a comprehensive open-source data integration platform that aims to streamline and simplify the process of data and metadata orchestration. With a focus on usability, speed, and flexibility, Hop offers a visual development environment that empowers developers to enhance productivity beyond traditional coding approaches. Its innovative design allows for workflows and pipelines to be created once and run across various execution engines, including the native Hop engine, Spark, Flink, Google Dataflow, and AWS EMR through Beam.",
    whoIsItFor:
      "The Hop Orchestration Platform, or Apache Hop, caters to data integration developers, data engineers, and administrators who require a comprehensive and flexible platform for data and metadata orchestration. Whether you are a seasoned developer or new to data integration, Hop's visual development environment simplifies the process and boosts productivity.",
    linkToProject: "https://hop.apache.org",
  },
  {
    type: "Database",
    name: "mysql",
    title: "My SQL",
    whatIsIt:
      "MySQL is a widely used open-source relational database management system known for its speed, reliability, and ease of use. It provides a robust and scalable solution for efficiently storing, organizing, and retrieving structured data. With its powerful SQL querying capabilities, MySQL enables developers to build secure and high-performance applications for a variety of use cases, ranging from small-scale websites to large enterprise systems. With a rich set of features, strong community support, and compatibility with various operating systems and programming languages, MySQL remains a popular choice for businesses seeking a stable and feature-rich database solution.",
    whoIsItFor:
      "MySQL is a widely used open-source relational database management system suitable for developers, data engineers, and businesses of all sizes. It caters to those who require a reliable, scalable, and easy-to-use database solution for storing, organizing, and retrieving structured data. Whether you are building a small-scale website, developing enterprise-level applications, or managing complex data systems, MySQL's powerful SQL querying capabilities and compatibility with various programming languages make it an ideal choice for a broad range of projects.",
    linkToProject: "https://www.mysql.com",
  },
  {
    name: "neo4j",
    type: "Database",

    whatIsIt:
      "Neo4j is a highly scalable and graph database management system designed to store, retrieve, and analyze connected data. It offers a native graph storage and processing engine, allowing organizations to model and traverse complex relationships between data points efficiently. Neo4j's graph database approach enables powerful querying, pattern matching, and graph algorithms, making it an ideal choice for applications that heavily rely on relationships and networks.",
    whoIsItFor:
      "Neo4j is tailored for developers, data scientists, and organizations working with connected data and complex relationships. It is ideal for domains such as social networks, recommendation engines, knowledge graphs, and network analysis. Whether you need to model intricate relationships, perform graph-based analysis, or build intelligent systems, Neo4j empowers you to unlock valuable insights from your connected data and create innovative solutions in the graph database domain.",
    linkToProject: "https://neo4j.com",
  },
  {
    name: "mssqlserver",
    type: "Database",
    title: "MS SQL Server",

    whatIsIt:
      "Microsoft SQL Server, commonly referred to as MS SQL Server, is a powerful relational database management system developed by Microsoft. MS SQL Server is the database of choice for many companies, it is reliable, performant, and Microsoft has been maintaining it for decades. The consistency delivered from Microsoft, coupled with all of its integrations and tooling put SQL Server in a league of its own for companies in the Microsoft ecosystem.",
    whoIsItFor:
      "MS SQL Server is tailored to a broad spectrum of users, ranging from small businesses to large enterprises with complex data requirements. Database administrators, software developers, and data analysts can benefit from the flexibility and comprehensive functionality offered by MS SQL Server. Small to medium-sized businesses seeking an efficient and scalable database solution for their applications will find MS SQL Server user-friendly and easy to integrate. At the same time, large enterprises with complex data ecosystems can leverage its advanced features to ensure performance, scalability, security, and traceability.",
    linkToProject: "https://www.microsoft.com/sql-server",
  },
  {
    name: "kafka",
    type: "Messaging",
    whatIsIt: "",
    whoIsItFor: "",
    linkToProject: "",
  },
  {
    name: "mongodb",
    type: "Database",
    title: "MongoDB",
    whatIsIt: "",
    whoIsItFor: "",
    linkToProject: "",
  },
  {
    name: "redis",
    type: "Cache",
    whatIsIt: "",
    whoIsItFor: "",
    linkToProject: "",
  },
  {
    name: "gpu-operator",
    type: "Hardware Acceleration",
    title: "GPU Operator",
    whatIsIt: "",
    whoIsItFor: "",
    linkToProject: "",
  },
];
