import LogoTicker from "../../islands/LogoTicker.tsx";

type LogoTickerLogo = {
  href: string;
  imgSrc: string;
  imgAlt: string;
};

const logos: LogoTickerLogo[] = [
  {
    href: "/templates#supported-deployments",
    imgSrc: "/images/ticker-icons/azure.svg",
    imgAlt: "Azure Logo",
  },
  {
    href: "/templates#supported-deployments",
    imgSrc: "/images/ticker-icons/google-cloud.svg",
    imgAlt: "Google Cloud Logo",
  },
  {
    href: "/templates#supported-deployments",
    imgSrc: "/images/ticker-icons/aws.svg",
    imgAlt: "AWS Logo",
  },
  {
    href: "/templates/airflow",
    imgSrc: "/images/ticker-icons/airflow.png",
    imgAlt: "Apache Airflow Logo",
  },
  {
    href: "/templates/hop",
    imgSrc: "/images/ticker-icons/hop.svg",
    imgAlt: "Apache Hop Logo",
  },
  {
    href: "/templates/postgres",
    imgSrc: "/images/ticker-icons/postgres.png",
    imgAlt: "PostgreSQL Logo",
  },
  {
    href: "/templates/neo4j",
    imgSrc: "/images/ticker-icons/neo4j.svg",
    imgAlt: "Neo4j Logo",
  },
  {
    href: "/templates/mssqlserver",
    imgSrc: "/images/ticker-icons/mssqlserver.png",
    imgAlt: "Microsoft SQL Server Logo",
  },
  {
    href: "/templates/mysql",
    imgSrc: "/images/ticker-icons/mysql.png",
    imgAlt: "MySQL Logo",
  },
];

export default function LogoTickerSection() {
  return (
    <section>
      <LogoTicker>
        {logos.map((logo) => (
          <a href={logo.href} className="object-contain w-auto h-12 p-32">
            <img
              height="50"
              style={{ "maxHeight": "50px" }}
              class="logo-img"
              src={`${logo.imgSrc}?height=50&width=100`}
              alt={logo.imgAlt}
            />
          </a>
        ))}
      </LogoTicker>
    </section>
  );
}
