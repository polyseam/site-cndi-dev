import LogoTicker from "../../islands/LogoTicker.tsx";
import { FullWidthSection } from "components/Section.tsx";

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
    href: "/templates/kafka",
    imgSrc: "/images/ticker-icons/kafka.png",
    imgAlt: "Apache Kafka Logo",
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
    href: "/templates/mongodb",
    imgSrc: "/images/ticker-icons/mongodb.svg",
    imgAlt: "MongoDB Logo",
  },
  {
    href: "/templates/hop",
    imgSrc: "/images/ticker-icons/hop.svg",
    imgAlt: "Apache Hop Logo",
  },
  {
    href: "/templates/mysql",
    imgSrc: "/images/ticker-icons/mysql.png",
    imgAlt: "MySQL Logo",
  },
  {
    href: "/templates/mssqlserver",
    imgSrc: "/images/ticker-icons/mssqlserver.png",
    imgAlt: "Microsoft SQL Server Logo",
  },
];

export default function LogoTickerSection() {
  return (
    <FullWidthSection>
      <LogoTicker>
        {logos.map((logo) => (
          <a
            href={logo.href}
            className="object-contain w-auto h-[50px] px-[100px]"
          >
            <img
              height="50"
              style={{ maxHeight: "50px" }}
              class="max-w-none transition-opacity[.3s] hover:opacity-50 h-[40px]"
              src={`${logo.imgSrc}?height=50&width=100`}
              alt={logo.imgAlt}
            />
          </a>
        ))}
      </LogoTicker>
    </FullWidthSection>
  );
}
