export default function GASnippet({
  gaMeasurementId,
}: {
  gaMeasurementId: string;
}) {
  if (!gaMeasurementId) {
    console.error("No GA_MEASUREMENT_ID provided");
    return null;
  }
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      >
      </script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${gaMeasurementId}');
        `}
      </script>
    </>
  );
}
