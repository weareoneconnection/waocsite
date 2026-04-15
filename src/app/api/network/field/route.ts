import { NextResponse } from "next/server";

export async function GET() {
  try {
    const base = process.env.ONEFIELD_BASE_URL;
    if (!base) {
      return NextResponse.json(
        { ok: false, error: "Missing ONEFIELD_BASE_URL" },
        { status: 500 }
      );
    }

    const res = await fetch(`${base}/api/network-preview`, {
      cache: "no-store",
    });

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