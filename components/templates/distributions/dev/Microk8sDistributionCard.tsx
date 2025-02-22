import { ComponentChildren } from "preact";
export default function Microk8sDistributionCard(
  props: { children: ComponentChildren },
) {
  return (
    <div
      id="w-node-aaae3e92-3ac1-84e3-2758-1184f2a6e37d-7050ee97"
      class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center p-5 quick-stack-15 wf-layout-layout"
    >
      <div
        id="w-node-aaae3e92-3ac1-84e3-2758-1184f2a6e37f-7050ee97"
        class="flex-col justify-start items-start flex cell-17"
      >
        <div class="div-block-97">
          <h1 class="heading-90">Dev</h1>
          <img
            src="../../images/apple-mac-logo-FB34556F8D-seeklogo.com.png"
            loading="lazy"
            width="21"
            alt=""
            class="image-55"
          />
          <img
            src="../../images/Unofficial_Windows_logo_variant_-_2002–2012_Multicolored.svg.png"
            loading="lazy"
            width="26"
            sizes="(max-width: 767px) 26px, (max-width: 991px) 3vw, (max-width: 1919px) 26px, 1vw"
            alt=""
            srcset="
                  ../../images/Unofficial_Windows_logo_variant_-_2002–2012_Multicolored.svg-p-500.png   500w,
                  ../../images/Unofficial_Windows_logo_variant_-_2002–2012_Multicolored.svg-p-800.png   800w,
                  ../../images/Unofficial_Windows_logo_variant_-_2002–2012_Multicolored.svg-p-1080.png 1080w,
                  ../../images/Unofficial_Windows_logo_variant_-_2002–2012_Multicolored.svg-p-1600.png 1600w,
                  ../../images/Unofficial_Windows_logo_variant_-_2002–2012_Multicolored.svg-p-2000.png 2000w,
                  ../../images/Unofficial_Windows_logo_variant_-_2002–2012_Multicolored.svg.png        2321w
                "
            class="image-56"
          />
          <img
            src="../../images/linux_local_dev.png"
            loading="lazy"
            width="27"
            sizes="(max-width: 1919px) 27px, 1vw"
            alt=""
            srcset="
                  ../../images/linux_local_dev-p-500.png 500w,
                  ../../images/linux_local_dev.png       597w
                "
          />
        </div>
        <p class="paragraph-39">
          {props.children}
        </p>
      </div>
    </div>
  );
}
