import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // TODO: Add Zod validation (Section 4 Lesson 1)
  // biome-ignore lint/correctness/noUnusedVariables: intentional - learners add validation in Section 4
  const data = await request.json();

  // Mock transaction processing
  return NextResponse.json({
    success: true,
    transactionId: crypto.randomUUID(),
    timestamp: Date.now(),
  });
}

export function GET() {
  // Mock transaction list
  return NextResponse.json({
    transactions: [
      { id: "1", amount: 100, status: "completed" },
      { id: "2", amount: 250, status: "pending" },
    ],
  });
}
