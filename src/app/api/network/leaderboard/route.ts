import { NextResponse } from "next/server";

export async function GET() {
  try {
    const base = process.env.ONE_MISSION_BASE_URL;
    if (!base) {
      return NextResponse.json(
        { ok: false, error: "Missing ONE_MISSION_BASE_URL" },
        { status: 500 }
      );
    }

    const res = await fetch(
      `${base}/api/leaderboard?sort=points&order=desc&period=all&limit=5`,
      { cache: "no-store" }
    );

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}