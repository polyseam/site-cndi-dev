type TemplateData = Array<{
  name: string;
  title?: string;
  type: string;
  // whatIsIt: string;
  // whoIsItFor: string;
  // linkToProject: string;
  // linkToOfficialReference?: string;
  // threePoints: [string, string, string];
  // providerInfo: {
  //   aws: {
  //     global: string;
  //   };
  //   azure: {
  //     global: string;
  //   };
  //   gcp: {
  //     global: string;
  //   };
  //   dev:{
  //     global: string;
  //   }
  // };
  // templateId: string; // 000, 001, 002, etc.
}>;

export const data: TemplateData = [
  // {name: 'basic', templateId: 001},
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
    threePoints: [
      "Automatically Synchronize your DAGs from Git",
      "Manage your Kubernetes cluster with GitOps",
      "Scale your workloads with the Kubernetes Executor",
    ],
    providerInfo: {
      aws: {
        global:
          `Running a production Airflow cluster doesn’t need to be expensive. CNDI provides the simplest and most affordable alternative to MWAA and Astronomer. Running your own cluster is a breeze. CNDI Clusters are managed from Git, all you need to do is initialize a new cluster repo and push it up to trigger your automation!`,
      },
      gcp: {
        global:
          `Running a production Airflow cluster doesn’t need to be expensive. CNDI provides the simplest and most affordable alternative to Cloud Composer and Astronomer. Running your own cluster is a breeze. CNDI Clusters are managed from Git, all you need to do is initialize a new cluster repo and push it up to trigger your automation!`,
      },
      azure: {
        global:
          `Running a production Airflow cluster doesn’t need to be expensive. CNDI provides the simplest and most affordable alternative to ADF and Astronomer. Running your own cluster is a breeze. CNDI Clusters are managed from Git, all you need to do is initialize a new cluster repo and push it up to trigger your automation!`,
      },
      dev: {
        global:
          `Deploying Airflow on your local development environment offers a convenient and efficient way to experiment with this powerful workflow automation platform. Whether you're a data engineer, data scientist, or developer, running Airflow locally allows you to test and iterate on DAGs (Directed Acyclic Graphs) before deploying them to production. It also helps you develop and debug workflows with ease, ensuring everything works flawlessly. Gain a deeper understanding of Airflow's functionalities in a controlled environment, while minimizing risks associated with deploying untested workflows to production.`,
      },
    },
    templateId: "002",
  },
  {
    name: "postgres",
    type: "Database",
    whatIsIt:
      "PostgreSQL, or Postgres, is an open-source relational database management system renowned for its power, scalability, and reliability. It efficiently stores and manages large volumes of structured and unstructured data, offering extensive features like advanced data types, complex queries, transactions, and concurrency control. With a strong focus on standards compliance, Postgres provides a flexible foundation for developers and organizations to build applications and manage databases.",
    whoIsItFor:
      "PostgreSQL, or Postgres, is a versatile and open-source relational database management system designed for a wide range of users. It caters to developers, data engineers, and organizations seeking a powerful and reliable database solution. Whether you are a small startup, a medium-sized business, or a large enterprise, PostgreSQL offers a robust foundation to handle your data storage and management needs efficiently and securely.",
    linkToProject: "https://cloudnative-pg.io",
    templateId: "003",
    threePoints: [
      "Reliable and fault tolerant",
      "Easily maintained",
      "Flexible to your needs",
    ],
    providerInfo: {
      aws: {
        global:
          `CNDI provides the simplest and most affordable alternative to PostgreSQL on RDS. Running your own database cluster couldn’t be easier. CNDI Clusters are managed from Git, all you need to do is initialize a new cluster repo and push it up to trigger your automation!`,
      },
      gcp: {
        global:
          `CNDI provides the simplest and most affordable alternative to PostgreSQL on CloudSQL. Running your own database cluster couldn’t be easier. CNDI Clusters are managed from Git, all you need to do is initialize a new cluster repo and push it up to trigger your automation!`,
      },
      azure: {
        global:
          `CNDI provides the simplest and most affordable alternative to Azure Database for PostgreSQL. Running your own database cluster couldn’t be easier. CNDI Clusters are managed from Git, all you need to do is initialize a new cluster repo and push it up to trigger your automation!`,
      },
    },
  },
  {
    name: "hop",
    type: "Data Integration",
    whatIsIt:
      "The Hop Orchestration Platform, also known as Apache Hop, is a comprehensive open-source data integration platform that aims to streamline and simplify the process of data and metadata orchestration. With a focus on usability, speed, and flexibility, Hop offers a visual development environment that empowers developers to enhance productivity beyond traditional coding approaches. Its innovative design allows for workflows and pipelines to be created once and run across various execution engines, including the native Hop engine, Spark, Flink, Google Dataflow, and AWS EMR through Beam.",
    whoIsItFor:
      "The Hop Orchestration Platform, or Apache Hop, caters to data integration developers, data engineers, and administrators who require a comprehensive and flexible platform for data and metadata orchestration. Whether you are a seasoned developer or new to data integration, Hop's visual development environment simplifies the process and boosts productivity.",
    linkToProject: "https://hop.apache.org",
    providerInfo: {
      aws: { global: `` },
      azure: { global: `` },
      gcp: { global: `` },
      dev: { global: `` },
    },
    templateId: "004",
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
    templateId: "005",
  },
  {
    name: "neo4j",
    type: "Database",

    whatIsIt:
      "Neo4j is a highly scalable and graph database management system designed to store, retrieve, and analyze connected data. It offers a native graph storage and processing engine, allowing organizations to model and traverse complex relationships between data points efficiently. Neo4j's graph database approach enables powerful querying, pattern matching, and graph algorithms, making it an ideal choice for applications that heavily rely on relationships and networks.",
    whoIsItFor:
      "Neo4j is tailored for developers, data scientists, and organizations working with connected data and complex relationships. It is ideal for domains such as social networks, recommendation engines, knowledge graphs, and network analysis. Whether you need to model intricate relationships, perform graph-based analysis, or build intelligent systems, Neo4j empowers you to unlock valuable insights from your connected data and create innovative solutions in the graph database domain.",
    linkToProject: "https://neo4j.com",
    templateId: "006",
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
    templateId: "007",
  },
  {
    name: "kafka",
    type: "Messaging",
    whatIsIt: "",
    whoIsItFor: "",
    linkToProject: "",
    templateId: "008",
  },
  {
    name: "mongodb",
    type: "Database",
    title: "MongoDB",
    whatIsIt: "",
    whoIsItFor: "",
    linkToProject: "",
    templateId: "008",
  },
  {
    name: "redis",
    type: "Cache",
    whatIsIt: "",
    whoIsItFor: "",
    linkToProject: "",
    templateId: "009",
  },
  {
    name: "gpu-operator",
    type: "Hardware Acceleration",
    title: "GPU Operator",
    whatIsIt: "",
    whoIsItFor: "",
    linkToProject: "",
    templateId: "010",
  },
];
