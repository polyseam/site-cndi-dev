type TemplateData = Array<{
  name: string;
  title?: string; // eg. MS SQL Server
  type: string;
  directory_name?: string; // eg. cnpg
}>;

export const data: TemplateData = [
  {
    name: "airflow",
    type: "Orchestration",
  },
  {
    name: "postgres", // name as presented to user
    directory_name: "cnpg", // cnpg is where to find the template in the cndi repo
    type: "Database",
  },
  {
    name: "kafka",
    type: "Messaging",
  },
  {
    name: "gpu-operator",
    title: "GPU Operator",
    type: "Hardware Acceleration",
  },
  {
    name: "fns",
    title: "Functions",
    type: "Serverless",
  },
  {
    name: "redis",
    type: "Cache",
  },
  {
    name: "wordpress",
    type: "CMS",
  },
  {
    name: "hop",
    type: "Data Integration",
  },
  {
    type: "Database",
    name: "mysql",
    title: "MySQL",
  },
  {
    name: "neo4j",
    type: "Database",
  },
  {
    name: "mssqlserver",
    type: "Database",
    title: "MS SQL Server",
  },
  {
    name: "mongodb",
    title: "MongoDB",
    type: "Database",
  },
];
