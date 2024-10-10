type Props = {
  topText: string;
};

export default function HRule(props: Props) {
  const { topText } = props;

  return (
    <>
      <div class="div-block-80">
        <div class="text-block-66">{topText}</div>
        <div class="div-block-81"></div>
      </div>
    </>
  );
}
