export const PrimaryButton = ({ children }: { children: string }) => (
  <button
    type="button"
    class="bg-lightpurp inline-block py-3 px-6 rounded-md text-white no-underline filter hover:brightness-75"
  >
    {children}
  </button>
);
