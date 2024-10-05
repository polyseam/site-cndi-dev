import { data } from "template-details";
import SingleTemplateCard from "../../components/templates/SingleTemplateCard.tsx";

export default function Templates() {
  return (
    <>
      <div>
        <section class="section-29">
          <div class="w-layout-blockcontainer container-14691 w-container">
            <div
              id="w-node-_17bc0eca-4dea-51d8-5c0e-0950303fe0dc-a5d56d94"
              class="w-layout-layout wf-layout-layout"
            >
              <div
                id="w-node-_17bc0eca-4dea-51d8-5c0e-0950303fe0dd-a5d56d94"
                class="w-layout-cell cell-20"
              >
                <h1 class="heading-59">
                  CNDI Deployment
                  <br />
                  Templates
                </h1>
                <div class="text-block-56">
                  Deploy infrastructure and data applications to the <br />
                  cloud by filling out one easy template.
                </div>
              </div>
              <div
                id="w-node-_17bc0eca-4dea-51d8-5c0e-0950303fe0de-a5d56d94"
                class="w-layout-cell cell-21"
              >
                <div class="cli_gif_templates">
                  <div class="div-block-101">
                    <div class="div-block-100"></div>
                    <div class="div-block-100-copy"></div>
                    <div class="x"></div>
                  </div>
                  <img
                    src="/images/cndi_templates.gif"
                    loading="lazy"
                    width="727"
                    alt="CNDI Templates Gif"
                    class="image-49"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-28">
          <div class="w-layout-blockcontainer container-1458 w-container">
            <h1 class="heading-60">What are CNDI Deployment Templates?</h1>
            <div class="text-block-57">
              CNDI Templates are fill-in-the-blanks style blueprints that define
              an entire stack for a cloud-native application or service. These
              templates serve as a starting point for deploying components
              consistently, reliably, and efficiently. CNDI Templates combine
              GitOps application and cluster configuration with Infrastructure
              as Code. You select a Template for your new service and CNDI will
              provide the cluster and the repo to manage it from. You can even
              create your own Templates to accelerate your team!
            </div>
            <img
              src="/images/Templates_img_2.png"
              loading="lazy"
              width="741"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 688px, 741px"
              alt=""
              srcset="/images/Templates_img_2-p-500.png 500w, images/Templates_img_2-p-800.png 800w, images/Templates_img_2-p-1080.png 1080w, images/Templates_img_2.png 1480w"
              class="image-48"
            />
          </div>
        </section>
        <section id="section_templates_cards" class="section_template_cards">
          <div
            id="cndi-templates"
            class="w-layout-blockcontainer container-1472 w-container"
          >
            <div class="div-block-86">
              <h1 class="heading-61">CNDI Templates</h1>
              <div class="text-block-62">
                Make a request for new template{" "}
                <a
                  href="https://cndi.run/ghi?utm_content=templates_new_request&amp;utm_campaign=cndi_dev&amp;utm_source=https://www.cndi.dev/&amp;utm_medium=website&amp;utm_id=8009"
                  target="_blank"
                  class="link-6"
                >
                  here
                </a>
                <span class="text-span-8"></span>
              </div>
            </div>
            <div class="div-block-81"></div>
            <div
              id="w-node-b0548776-59a8-aa1e-3e62-14c7df73e228-a5d56d94"
              class="w-layout-layout quick-stack-11 wf-layout-layout"
            >
              {data.map(({ name, title, type }, idx) => (
                <SingleTemplateCard
                  name={name}
                  title={title}
                  type={type}
                  key={`${name}-${idx}`}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="cndi_templates" class="section-27">
          <div class="w-layout-blockcontainer container-1457 w-container">
            <div
              id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e586-a5d56d94"
              class="w-layout-layout quick-stack-4 wf-layout-layout"
            >
              <div
                id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e587-a5d56d94"
                class="w-layout-cell template-card"
              >
                <div class="div-block-75">
                  <div class="div-block-74">
                    <img
                      src="https://uploads-ssl.webflow.com/629f814360d09d97d1a27ef5/636c0420e5015000e89f01cb_pin_large.png"
                      loading="lazy"
                      width="50"
                      alt=""
                    />
                  </div>
                  <h1 class="heading-58">Apache Airflow</h1>
                  <div class="text-block-54">
                    Choose your deployment target:
                  </div>
                  <div
                    id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e58f-a5d56d94"
                    class="w-layout-layout template_deploy_targets wf-layout-layout"
                  >
                    <div
                      id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e590-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="templates/airflow/aws.html"
                        class="link_target w-inline-block"
                      >
                        <img
                          src="/images/800px-Amazon_Web_Services_Logo.svg.png"
                          loading="lazy"
                          width="33"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt=""
                          srcset="/images/800px-Amazon_Web_Services_Logo.svg-p-500.png 500w, images/800px-Amazon_Web_Services_Logo.svg.png 800w"
                          class="image-45"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e593-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="templates/airflow/gcp.html"
                        class="link_target w-inline-block"
                      >
                        <img
                          src="/images/gcp-logo-cloud.webp"
                          loading="lazy"
                          width="30"
                          alt="GCP Logo"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e596-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="templates/airflow/azure.html"
                        class="link_target w-inline-block"
                      >
                        <img
                          src="/images/Microsoft_Azure.svg.png"
                          loading="lazy"
                          width="28"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt="Microsoft Azure Logo"
                          srcset="/images/Microsoft_Azure.svg-p-500.png 500w, images/Microsoft_Azure.svg-p-800.png 800w, images/Microsoft_Azure.svg-p-1080.png 1080w, images/Microsoft_Azure.svg.png 1200w"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e599-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="templates/airflow/dev.html"
                        class="link_target w-inline-block"
                      >
                        <div class="text-block-53">+</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e59d-a5d56d94"
                class="w-layout-cell template-card"
              >
                <div class="div-block-75">
                  <div class="div-block-74">
                    <img
                      src="/images/Postgresql_elephant.svg.png"
                      loading="lazy"
                      width="48"
                      sizes="(max-width: 479px) 0px, 100vw"
                      alt=""
                      srcset="/images/Postgresql_elephant.svg-p-500.png 500w, images/Postgresql_elephant.svg-p-800.png 800w, images/Postgresql_elephant.svg-p-1080.png 1080w, images/Postgresql_elephant.svg.png 1200w"
                    />
                  </div>
                  <h1 class="heading-58">Postgres</h1>
                  <div class="text-block-55">
                    Choose your deployment target:
                  </div>
                  <div
                    id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5a5-a5d56d94"
                    class="w-layout-layout template_deploy_targets wf-layout-layout"
                  >
                    <div
                      id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5a6-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="templates/postgres/aws.html"
                        class="link_target w-inline-block"
                      >
                        <img
                          src="/images/800px-Amazon_Web_Services_Logo.svg.png"
                          loading="lazy"
                          width="32"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt=""
                          srcset="/images/800px-Amazon_Web_Services_Logo.svg-p-500.png 500w, images/800px-Amazon_Web_Services_Logo.svg.png 800w"
                          class="image-45"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5a9-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="templates/postgres/gcp.html"
                        class="link_target w-inline-block"
                      >
                        <img
                          src="/images/gcp-logo-cloud.webp"
                          loading="lazy"
                          width="32"
                          alt="GCP Logo"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5ac-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="templates/postgres/azure.html"
                        class="link_target w-inline-block"
                      >
                        <img
                          src="/images/Microsoft_Azure.svg.png"
                          loading="lazy"
                          width="29"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt="Microsoft Azure Logo"
                          srcset="/images/Microsoft_Azure.svg-p-500.png 500w, images/Microsoft_Azure.svg-p-800.png 800w, images/Microsoft_Azure.svg-p-1080.png 1080w, images/Microsoft_Azure.svg.png 1200w"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5af-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <div class="text-block-53">+</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5b3-a5d56d94"
                class="w-layout-cell template-card"
              >
                <div class="div-block-77">
                  <div class="div-block-78">
                    <img
                      src="/images/image_processing20210621-11273-1wtv8f0.png"
                      loading="lazy"
                      width="109"
                      alt=""
                    />
                  </div>
                  <h1 class="heading-58">Kafka</h1>
                  <div class="text-block-59">
                    Choose your deployment target:
                  </div>
                  <div
                    id="w-node-_9f97570c-9ac6-351d-b5d7-46be5ea0de4c-a5d56d94"
                    class="w-layout-layout template_deploy_targets wf-layout-layout"
                  >
                    <div
                      id="w-node-_9f97570c-9ac6-351d-b5d7-46be5ea0de4d-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="kafka-on-gcp.html"
                        class="link_target w-inline-block"
                      >
                        <img
                          src="/images/800px-Amazon_Web_Services_Logo.svg.png"
                          loading="lazy"
                          width="32"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt=""
                          srcset="/images/800px-Amazon_Web_Services_Logo.svg-p-500.png 500w, images/800px-Amazon_Web_Services_Logo.svg.png 800w"
                          class="image-46"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_9f97570c-9ac6-351d-b5d7-46be5ea0de50-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="kafka-on-gcp.html"
                        class="link_target w-inline-block"
                      >
                        <img
                          src="/images/gcp-logo-cloud.webp"
                          loading="lazy"
                          width="32"
                          alt="GCP Logo"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_9f97570c-9ac6-351d-b5d7-46be5ea0de53-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a
                        href="kafka-on-azure.html"
                        class="link_target w-inline-block"
                      >
                        <img
                          src="/images/Microsoft_Azure.svg.png"
                          loading="lazy"
                          width="29"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt="Microsoft Azure Logo"
                          srcset="/images/Microsoft_Azure.svg-p-500.png 500w, images/Microsoft_Azure.svg-p-800.png 800w, images/Microsoft_Azure.svg-p-1080.png 1080w, images/Microsoft_Azure.svg.png 1200w"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_9f97570c-9ac6-351d-b5d7-46be5ea0de56-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <div class="text-block-58">+</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5c9-a5d56d94"
                class="w-layout-cell template-card"
              >
                <div class="div-block-77">
                  <div class="div-block-78">
                    <img
                      src="/images/MongoDB_Logo.svg.png"
                      loading="lazy"
                      width="184"
                      sizes="(max-width: 479px) 0px, 100vw"
                      alt=""
                      srcset="/images/MongoDB_Logo.svg-p-500.png 500w, images/MongoDB_Logo.svg-p-800.png 800w, images/MongoDB_Logo.svg-p-1080.png 1080w, images/MongoDB_Logo.svg-p-1600.png 1600w, images/MongoDB_Logo.svg-p-2000.png 2000w, images/MongoDB_Logo.svg.png 2560w"
                    />
                  </div>
                  <h1 class="heading-58">mongoDB</h1>
                  <div class="text-block-59">
                    Choose your deployment target:
                  </div>
                  <div
                    id="w-node-_3726b47b-6df5-54a7-956b-1baa05c64f63-a5d56d94"
                    class="w-layout-layout template_deploy_targets wf-layout-layout"
                  >
                    <div
                      id="w-node-_3726b47b-6df5-54a7-956b-1baa05c64f64-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/800px-Amazon_Web_Services_Logo.svg.png"
                          loading="lazy"
                          width="32"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt=""
                          srcset="/images/800px-Amazon_Web_Services_Logo.svg-p-500.png 500w, images/800px-Amazon_Web_Services_Logo.svg.png 800w"
                          class="image-46"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_3726b47b-6df5-54a7-956b-1baa05c64f67-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/gcp-logo-cloud.webp"
                          loading="lazy"
                          width="32"
                          alt="GCP Logo"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_3726b47b-6df5-54a7-956b-1baa05c64f6a-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/Microsoft_Azure.svg.png"
                          loading="lazy"
                          width="29"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt="Microsoft Azure Logo"
                          srcset="/images/Microsoft_Azure.svg-p-500.png 500w, images/Microsoft_Azure.svg-p-800.png 800w, images/Microsoft_Azure.svg-p-1080.png 1080w, images/Microsoft_Azure.svg.png 1200w"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_3726b47b-6df5-54a7-956b-1baa05c64f6d-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <div class="text-block-58">+</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5ca-a5d56d94"
                class="w-layout-cell template-card"
              >
                <div class="div-block-77">
                  <div class="div-block-78">
                    <img
                      src="/images/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"
                      loading="lazy"
                      width="95"
                      sizes="(max-width: 479px) 0px, 100vw"
                      alt=""
                      srcset="/images/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571-p-500.png 500w, images/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571-p-800.png 800w, images/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png 1024w"
                    />
                  </div>
                  <h1 class="heading-58">MySQL</h1>
                  <div class="text-block-59">
                    Choose your deployment target:
                  </div>
                  <div
                    id="w-node-dfa35d1b-111c-3b71-b742-bcd52919370c-a5d56d94"
                    class="w-layout-layout template_deploy_targets wf-layout-layout"
                  >
                    <div
                      id="w-node-dfa35d1b-111c-3b71-b742-bcd52919370d-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/800px-Amazon_Web_Services_Logo.svg.png"
                          loading="lazy"
                          width="32"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt=""
                          srcset="/images/800px-Amazon_Web_Services_Logo.svg-p-500.png 500w, images/800px-Amazon_Web_Services_Logo.svg.png 800w"
                          class="image-46"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-dfa35d1b-111c-3b71-b742-bcd529193710-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/gcp-logo-cloud.webp"
                          loading="lazy"
                          width="32"
                          alt="GCP Logo"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-dfa35d1b-111c-3b71-b742-bcd529193713-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/Microsoft_Azure.svg.png"
                          loading="lazy"
                          width="29"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt="Microsoft Azure Logo"
                          srcset="/images/Microsoft_Azure.svg-p-500.png 500w, images/Microsoft_Azure.svg-p-800.png 800w, images/Microsoft_Azure.svg-p-1080.png 1080w, images/Microsoft_Azure.svg.png 1200w"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-dfa35d1b-111c-3b71-b742-bcd529193716-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <div class="text-block-58">+</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5cb-a5d56d94"
                class="w-layout-cell template-card"
              >
                <div class="div-block-75">
                  <div class="div-block-74">
                    <img
                      src="/images/Neo4j-logo_color.png"
                      loading="lazy"
                      width="132"
                      sizes="(max-width: 479px) 0px, 100vw"
                      alt=""
                      srcset="/images/Neo4j-logo_color-p-500.png 500w, images/Neo4j-logo_color.png 834w"
                    />
                  </div>
                  <h1 class="heading-58">neo4j</h1>
                  <div class="text-block-55">
                    Choose your deployment target:
                  </div>
                  <div
                    id="w-node-_3a3ed4a9-35d4-82c2-4592-ff38852cf6f1-a5d56d94"
                    class="w-layout-layout template_deploy_targets wf-layout-layout"
                  >
                    <div
                      id="w-node-_3a3ed4a9-35d4-82c2-4592-ff38852cf6f2-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/800px-Amazon_Web_Services_Logo.svg.png"
                          loading="lazy"
                          width="32"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt=""
                          srcset="/images/800px-Amazon_Web_Services_Logo.svg-p-500.png 500w, images/800px-Amazon_Web_Services_Logo.svg.png 800w"
                          class="image-45"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_3a3ed4a9-35d4-82c2-4592-ff38852cf6f5-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/gcp-logo-cloud.webp"
                          loading="lazy"
                          width="32"
                          alt="GCP Logo"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_3a3ed4a9-35d4-82c2-4592-ff38852cf6f8-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/Microsoft_Azure.svg.png"
                          loading="lazy"
                          width="29"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt="Microsoft Azure Logo"
                          srcset="/images/Microsoft_Azure.svg-p-500.png 500w, images/Microsoft_Azure.svg-p-800.png 800w, images/Microsoft_Azure.svg-p-1080.png 1080w, images/Microsoft_Azure.svg.png 1200w"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_3a3ed4a9-35d4-82c2-4592-ff38852cf6fb-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <div class="text-block-53">+</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5cc-a5d56d94"
                class="w-layout-cell template-card"
              >
                <div class="div-block-75">
                  <div class="div-block-74">
                    <img
                      src="/images/hop-logo.svg"
                      loading="lazy"
                      width="43"
                      alt=""
                    />
                  </div>
                  <h1 class="heading-58">HOP</h1>
                  <div class="text-block-55">
                    Choose your deployment target:
                  </div>
                  <div
                    id="w-node-_18649419-419c-af1b-f4c8-762f90c5c890-a5d56d94"
                    class="w-layout-layout template_deploy_targets wf-layout-layout"
                  >
                    <div
                      id="w-node-_18649419-419c-af1b-f4c8-762f90c5c891-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/800px-Amazon_Web_Services_Logo.svg.png"
                          loading="lazy"
                          width="32"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt=""
                          srcset="/images/800px-Amazon_Web_Services_Logo.svg-p-500.png 500w, images/800px-Amazon_Web_Services_Logo.svg.png 800w"
                          class="image-45"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_18649419-419c-af1b-f4c8-762f90c5c894-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/gcp-logo-cloud.webp"
                          loading="lazy"
                          width="32"
                          alt="GCP Logo"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_18649419-419c-af1b-f4c8-762f90c5c897-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <img
                          src="/images/Microsoft_Azure.svg.png"
                          loading="lazy"
                          width="29"
                          sizes="(max-width: 479px) 0px, 100vw"
                          alt="Microsoft Azure Logo"
                          srcset="/images/Microsoft_Azure.svg-p-500.png 500w, images/Microsoft_Azure.svg-p-800.png 800w, images/Microsoft_Azure.svg-p-1080.png 1080w, images/Microsoft_Azure.svg.png 1200w"
                        />
                      </a>
                    </div>
                    <div
                      id="w-node-_18649419-419c-af1b-f4c8-762f90c5c89a-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block">
                        <div class="text-block-53">+</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5cd-a5d56d94"
                class="w-layout-cell template-card"
              >
                <div class="div-block-75">
                  <div class="div-block-74">
                    <img
                      src="/images/1_-VEGyAgcIBD62XtZWavy8w.png"
                      loading="lazy"
                      width="50"
                      sizes="(max-width: 479px) 0px, 100vw"
                      alt=""
                      srcset="/images/1_-VEGyAgcIBD62XtZWavy8w-p-500.png 500w, images/1_-VEGyAgcIBD62XtZWavy8w-p-800.png 800w, images/1_-VEGyAgcIBD62XtZWavy8w-p-1080.png 1080w, images/1_-VEGyAgcIBD62XtZWavy8w-p-1600.png 1600w, images/1_-VEGyAgcIBD62XtZWavy8w.png 2000w"
                    />
                  </div>
                  <h1 class="heading-58">Milvus</h1>
                  <div class="text-block-55">Coming soon</div>
                  <div
                    id="w-node-_3a83bf05-94fe-4bcc-ca49-8af85ae4bb7c-a5d56d94"
                    class="w-layout-layout template_deploy_targets wf-layout-layout"
                  >
                    <div
                      id="w-node-_3a83bf05-94fe-4bcc-ca49-8af85ae4bb7d-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block"></a>
                    </div>
                    <div
                      id="w-node-_3a83bf05-94fe-4bcc-ca49-8af85ae4bb80-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block"></a>
                    </div>
                    <div
                      id="w-node-_3a83bf05-94fe-4bcc-ca49-8af85ae4bb83-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block"></a>
                    </div>
                    <div
                      id="w-node-_3a83bf05-94fe-4bcc-ca49-8af85ae4bb86-a5d56d94"
                      class="w-layout-cell cell_target"
                    >
                      <a href="#" class="link_target w-inline-block"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-c73a3763-49fb-e5df-11d5-953eb5f4e5ce-a5d56d94"
                class="w-layout-cell"
              >
              </div>
            </div>
          </div>
        </section>
        <section id="supported-deployments" class="supported-deployments">
          <div class="w-layout-blockcontainer container-14698 w-container">
            <h1 class="heading-101">Supported Deployment Targets</h1>
            <p class="paragraph-43">
              CNDI supports cloud deployments to all three major vendors - AWS,
              Azure, and Google Cloud. You can also make deployments with CNDI
              to your local dev environment to test workflows before production.
              With CNDI<a href="#cndi-templates">templates</a>{" "}
              deploying your applications to these cloud environments is
              streamlined and efficient, ensuring compatibility and reliability
              across platforms.
            </p>
            <div
              id="w-node-a4f6043d-ad6c-ceea-17c2-afca7ae0d445-a5d56d94"
              class="w-layout-layout quick-stack-18 wf-layout-layout"
            >
              <div
                id="w-node-a4f6043d-ad6c-ceea-17c2-afca7ae0d446-a5d56d94"
                class="w-layout-cell cell-36"
              >
                <img
                  src="/images/AWS-2.png"
                  loading="lazy"
                  width="75"
                  sizes="75px"
                  alt="Amazon Web Services Logo"
                  srcset="/images/AWS-2-p-500.png 500w, images/AWS-2.png 782w"
                />
              </div>
              <div
                id="w-node-a4f6043d-ad6c-ceea-17c2-afca7ae0d447-a5d56d94"
                class="w-layout-cell cell-35"
              >
                <div class="div-block-104"></div>
              </div>
              <div
                id="w-node-_5148367d-70d4-4857-3696-788abd2ee4a2-a5d56d94"
                class="w-layout-cell cell-37"
              >
                <img
                  src="/images/gcp-logo-cloud.webp"
                  loading="lazy"
                  width="75"
                  alt="GCP Logo"
                />
              </div>
              <div
                id="w-node-_43b19b2c-b658-382a-437d-1eab77f93ac3-a5d56d94"
                class="w-layout-cell cell-35"
              >
                <div class="div-block-104"></div>
              </div>
              <div
                id="w-node-d4a437b5-1f25-2513-2d78-62d1f3ea7136-a5d56d94"
                class="w-layout-cell cell-38"
              >
                <img
                  src="/images/Microsoft_Azure.svg.png"
                  loading="lazy"
                  width="75"
                  sizes="75px"
                  alt="Microsoft Azure Logo"
                  srcset="/images/Microsoft_Azure.svg-p-500.png 500w, images/Microsoft_Azure.svg-p-800.png 800w, images/Microsoft_Azure.svg-p-1080.png 1080w, images/Microsoft_Azure.svg.png 1200w"
                />
              </div>
              <div
                id="w-node-e40b6f01-39e7-2733-45df-9e36d0b94b3f-a5d56d94"
                class="w-layout-cell cell-39"
              >
                <div class="div-block-104"></div>
              </div>
              <div
                id="w-node-_60ee67e0-6689-2177-34a7-820bcc3eff8b-a5d56d94"
                class="w-layout-cell cell-40"
              >
                <img
                  src="/images/local_dev_icon.png"
                  loading="lazy"
                  width="75"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
