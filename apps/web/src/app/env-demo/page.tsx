import { ServerEnvDisplay } from "@/components/server-env-display";
import { ClientEnvDisplay } from "@/components/client-env-display";

export default function EnvDemoPage() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Environment Variable Demo</h1>
      <ServerEnvDisplay />
      <ClientEnvDisplay />
    </main>
  );
}
