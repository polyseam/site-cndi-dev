import { FullWidthSection } from "components/Section.tsx";

type Props = {
  title: string;
  videoId: string;
};
export default function YoutubeVideoDemoEmbedSection(props: Props) {
  return (
    <FullWidthSection>
      <div class="block max-w-screen-lg mx-auto">
        <div class="pt-[56.25%] bg-[url('/images/system/youtube_placeholder.svg')] bg-center bg-cover w-full pb-0 pl-0 pr-0 relative empty:min-h-[75px] empty:pb-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${props.videoId}?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0`}
            frameborder="0"
            style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={props.title}
          >
          </iframe>
        </div>
      </div>
    </FullWidthSection>
  );
}
