export function ServerEnvDisplay() {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">Server Component Env Access</h3>
      <p>Public: {process.env.NEXT_PUBLIC_APP_NAME}</p>
      <p>Server-only: {process.env.INTERNAL_CONFIG}</p>
    </div>
  );
}
