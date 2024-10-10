type TemplateData = Array<{
  name: string;
  title?: string; // eg. MS SQL Server
  type: string;
}>;

export const data: TemplateData = [
  {
    name: "airflow",
    type: "Orchestration",
  },
  {
    name: "postgres",
    type: "Database",
  },
  {
    name: "hop",
    type: "Data Integration",
  },
  {
    type: "Database",
    name: "mysql",
    title: "My SQL",
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
    name: "kafka",
    type: "Messaging",
  },
  {
    name: "mongodb",
    type: "Database",
  },
  {
    name: "redis",
    type: "Cache",
  },
  {
    name: "gpu-operator",
    type: "Hardware Acceleration",
  },
];
