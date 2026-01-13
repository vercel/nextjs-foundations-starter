import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const event = await request.json();

  // TODO: Add validation and proper logging (Section 4)
  // biome-ignore lint/suspicious/noConsole: intentional for lesson
  console.log("Analytics event:", event);

  return NextResponse.json({ received: true });
}
