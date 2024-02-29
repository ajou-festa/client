import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (!tag) {
    return console.error("No tag provided");
  }

  try {
    await revalidateTag(tag);
  } catch (e) {
    return console.error(e);
  }

  return Response.json({ revalidated: true, now: Date.now(), tag: tag });
}
